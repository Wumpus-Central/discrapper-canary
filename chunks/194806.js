r.d(n, {
    v: function () {
        return f;
    }
});
var i = r(411104);
var a = r(653041);
var o = r(47120);
var s = r(956067),
    l = r(930145),
    u = r(350167),
    c = r(503461);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class f {
    static async open(e, n) {
        return new f(await l.A.open(e, n));
    }
    static openSyncUnsafe(e, n) {
        return new f(l.A.openSyncUnsafe(e, n));
    }
    static delete(e) {
        return l.A.delete(e);
    }
    close() {
        var e;
        (this.lastState = c.hi.Closed), null === (e = this.raw) || void 0 === e || e.close(), (this.raw = null), u.r.removeCompletionCallback(this.databaseStateCallback);
    }
    disable(e) {
        return null == this.raw
            ? Promise.resolve()
            : ((this.lastState = c.hi.Disabled),
              this.execute({
                  type: 'db.disable',
                  handle: 0,
                  reason: e
              }));
    }
    execute(e, n) {
        if (null == this.raw) throw Error('database is no longer open (database: '.concat(this));
        let r = 'key' in e ? e.key[0] : e.table,
            i = () =>
                u.r.executeAsync(null != n ? n : e.type, (n) => {
                    this.raw.execute(n, {
                        ...e,
                        handle: 0
                    });
                });
        return null === n ? i() : s.Z.timeAsync('\uD83D\uDCBE', ''.concat(null != n ? n : e.type, ' ').concat(null != r ? r : ''), i);
    }
    executeSync(e) {
        if (null == this.raw) throw Error('database is no longer open (database: '.concat(this));
        let n = 'key' in e ? e.key[0] : e.table;
        return s.Z.time('\uD83D\uDCBE', 'SYNC: '.concat(e.type, ' ').concat(null != n ? n : ''), () =>
            this.raw.execute(
                null,
                {
                    ...e,
                    handle: 0
                },
                { synchronous: !0 }
            )
        );
    }
    fullVacuum() {
        return this.execute({
            type: 'db.vacuum',
            handle: 0,
            complete: !0
        });
    }
    fsInfo() {
        return this.execute({
            type: 'db.fs_info',
            handle: 0
        });
    }
    incrementalVacuum() {
        return this.execute({
            type: 'db.vacuum',
            handle: 0,
            complete: !1
        });
    }
    instantaneousState() {
        return null == this.raw ? c.hi.Closed : (this.lastState = this.executeSync({ type: 'db.state' }));
    }
    async instantaneousStateAsync() {
        return null == this.raw ? c.hi.Closed : (this.lastState = await this.execute({ type: 'db.state' }));
    }
    state() {
        return this.lastState;
    }
    transaction(e, n) {
        let r = new p(this);
        return Promise.resolve(e(r)).then(() =>
            r.operations.length > 0
                ? this.execute(
                      {
                          type: 'db.transaction',
                          operations: r.complete()
                      },
                      n
                  )
                : Promise.resolve()
        );
    }
    constructor(e) {
        d(this, 'name', void 0),
            d(this, 'handle', void 0),
            d(this, 'raw', void 0),
            d(this, 'lastState', void 0),
            d(this, 'databaseStateCallback', void 0),
            (this.raw = e),
            (this.name = e.name),
            (this.lastState = c.hi.Open),
            (this.handle = e.handle),
            (this.databaseStateCallback = u.r.addDatabaseStateCallback((e, n) => {
                this.handle === e && (this.lastState = n);
            }));
    }
}
class p {
    add(e) {
        this.operations.push(e);
    }
    complete() {
        for (let e of this.operations) e.handle = 0;
        return this.operations;
    }
    toString() {
        return '[DatabaseTransaction '.concat(this.database.handle, ': ').concat(this.operations.length, ' ops]');
    }
    constructor(e) {
        d(this, 'database', void 0), d(this, 'operations', void 0), (this.database = e), (this.operations = []);
    }
}
