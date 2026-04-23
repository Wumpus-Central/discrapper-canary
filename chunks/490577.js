"use strict";
n.d(t, { W: () => o }), n(321073);
var r = n(61090),
    i = n(887018),
    s = n(129966),
    a = n(860407);
class o {
    name;
    handle;
    raw;
    lastState;
    databaseStateCallback;
    static async open(e, t) {
        return new o(await i.x.open(e, t));
    }
    static openSyncUnsafe(e, t) {
        return new o(i.x.openSyncUnsafe(e, t));
    }
    static delete(e) {
        return i.x.delete(e);
    }
    constructor(e) {
        (this.raw = e),
            (this.name = e.name),
            (this.lastState = a.z9.Open),
            (this.handle = e.handle),
            (this.databaseStateCallback = s.v.addDatabaseStateCallback((e, t) => {
                this.handle === e && (this.lastState = t);
            }));
    }
    close() {
        (this.lastState = a.z9.Closed),
            this.raw?.close(),
            (this.raw = null),
            s.v.removeCompletionCallback(this.databaseStateCallback);
    }
    disable(e) {
        return null == this.raw
            ? Promise.resolve()
            : ((this.lastState = a.z9.Disabled), this.execute({ type: "db.disable", handle: 0, reason: e }));
    }
    execute(e, t) {
        if (null == this.raw) throw Error(`database is no longer open (database: ${this}`);
        let n = "key" in e ? e.key[0] : e.table,
            i = () =>
                s.v.executeAsync(t ?? e.type, (t) => {
                    this.raw.execute(t, { ...e, handle: 0 });
                });
        return null === t ? i() : r.A.timeAsync("\uD83D\uDCBE", `${t ?? e.type} ${n ?? ""}`, i);
    }
    executeSync(e) {
        if (null == this.raw) throw Error(`database is no longer open (database: ${this}`);
        let t = "key" in e ? e.key[0] : e.table;
        return r.A.time("\uD83D\uDCBE", `SYNC: ${e.type} ${t ?? ""}`, () =>
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
        return null == this.raw ? a.z9.Closed : (this.lastState = this.executeSync({ type: "db.state" }));
    }
    async instantaneousStateAsync() {
        return null == this.raw ? a.z9.Closed : (this.lastState = await this.execute({ type: "db.state" }));
    }
    state() {
        return this.lastState;
    }
    transaction(e, t) {
        let n = new l(this);
        return Promise.resolve(e(n)).then(() =>
            n.operations.length > 0
                ? this.execute({ type: "db.transaction", operations: n.complete() }, t)
                : Promise.resolve(),
        );
    }
}
class l {
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
