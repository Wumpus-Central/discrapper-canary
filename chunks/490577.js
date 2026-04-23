n.d(t, { W: () => s }), n(321073);
var i = n(61090),
    r = n(887018),
    a = n(129966),
    l = n(860407);
class s {
    name;
    handle;
    raw;
    lastState;
    databaseStateCallback;
    static async open(e, t) {
        return new s(await r.x.open(e, t));
    }
    static openSyncUnsafe(e, t) {
        return new s(r.x.openSyncUnsafe(e, t));
    }
    static delete(e) {
        return r.x.delete(e);
    }
    constructor(e) {
        (this.raw = e),
            (this.name = e.name),
            (this.lastState = l.z9.Open),
            (this.handle = e.handle),
            (this.databaseStateCallback = a.v.addDatabaseStateCallback((e, t) => {
                this.handle === e && (this.lastState = t);
            }));
    }
    close() {
        (this.lastState = l.z9.Closed),
            this.raw?.close(),
            (this.raw = null),
            a.v.removeCompletionCallback(this.databaseStateCallback);
    }
    disable(e) {
        return null == this.raw
            ? Promise.resolve()
            : ((this.lastState = l.z9.Disabled), this.execute({ type: "db.disable", handle: 0, reason: e }));
    }
    execute(e, t) {
        if (null == this.raw) throw Error(`database is no longer open (database: ${this}`);
        let n = "key" in e ? e.key[0] : e.table,
            r = () =>
                a.v.executeAsync(t ?? e.type, (t) => {
                    this.raw.execute(t, { ...e, handle: 0 });
                });
        return null === t ? r() : i.A.timeAsync("\uD83D\uDCBE", `${t ?? e.type} ${n ?? ""}`, r);
    }
    executeSync(e) {
        if (null == this.raw) throw Error(`database is no longer open (database: ${this}`);
        let t = "key" in e ? e.key[0] : e.table;
        return i.A.time("\uD83D\uDCBE", `SYNC: ${e.type} ${t ?? ""}`, () =>
            this.raw.execute(null, { ...e, handle: 0 }, { synchronous: !0 }),
        );
    }
    fullVacuum() {
        return this.execute({ type: "db.vacuum", handle: 0, complete: !0 });
    }
    fsInfo() {
        return this.execute({ type: "db.fs_info", handle: 0 });
    }
    incrementalVacuum() {
        return this.execute({ type: "db.vacuum", handle: 0, complete: !1 });
    }
    instantaneousState() {
        return null == this.raw ? l.z9.Closed : (this.lastState = this.executeSync({ type: "db.state" }));
    }
    async instantaneousStateAsync() {
        return null == this.raw ? l.z9.Closed : (this.lastState = await this.execute({ type: "db.state" }));
    }
    state() {
        return this.lastState;
    }
    transaction(e, t) {
        let n = new o(this);
        return Promise.resolve(e(n)).then(() =>
            n.operations.length > 0
                ? this.execute({ type: "db.transaction", operations: n.complete() }, t)
                : Promise.resolve(),
        );
    }
}
class o {
    database;
    operations;
    constructor(e) {
        (this.database = e), (this.operations = []);
    }
    add(e) {
        this.operations.push(e);
    }
    complete() {
        for (let e of this.operations) e.handle = 0;
        return this.operations;
    }
    toString() {
        return `[DatabaseTransaction ${this.database.handle}: ${this.operations.length} ops]`;
    }
}
