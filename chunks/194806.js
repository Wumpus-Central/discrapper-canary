n.d(t, { v: () => d }), n(411104), n(653041), n(47120);
var r = n(956067),
    i = n(930145),
    o = n(350167),
    a = n(503461);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class d {
    static async open(e, t) {
        return new d(await i.A.open(e, t));
    }
    static openSyncUnsafe(e, t) {
        return new d(i.A.openSyncUnsafe(e, t));
    }
    static delete(e) {
        return i.A.delete(e);
    }
    close() {
        var e;
        (this.lastState = a.hi.Closed), null == (e = this.raw) || e.close(), (this.raw = null), o.r.removeCompletionCallback(this.databaseStateCallback);
    }
    disable(e) {
        return null == this.raw
            ? Promise.resolve()
            : ((this.lastState = a.hi.Disabled),
              this.execute({
                  type: 'db.disable',
                  handle: 0,
                  reason: e
              }));
    }
    execute(e, t) {
        if (null == this.raw) throw Error('database is no longer open (database: '.concat(this));
        let n = 'key' in e ? e.key[0] : e.table,
            i = () =>
                o.r.executeAsync(null != t ? t : e.type, (t) => {
                    this.raw.execute(t, u(l({}, e), { handle: 0 }));
                });
        return null === t ? i() : r.Z.timeAsync('\uD83D\uDCBE', ''.concat(null != t ? t : e.type, ' ').concat(null != n ? n : ''), i);
    }
    executeSync(e) {
        if (null == this.raw) throw Error('database is no longer open (database: '.concat(this));
        let t = 'key' in e ? e.key[0] : e.table;
        return r.Z.time('\uD83D\uDCBE', 'SYNC: '.concat(e.type, ' ').concat(null != t ? t : ''), () => this.raw.execute(null, u(l({}, e), { handle: 0 }), { synchronous: !0 }));
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
        return null == this.raw ? a.hi.Closed : (this.lastState = this.executeSync({ type: 'db.state' }));
    }
    async instantaneousStateAsync() {
        return null == this.raw ? a.hi.Closed : (this.lastState = await this.execute({ type: 'db.state' }));
    }
    state() {
        return this.lastState;
    }
    transaction(e, t) {
        let n = new f(this);
        return Promise.resolve(e(n)).then(() =>
            n.operations.length > 0
                ? this.execute(
                      {
                          type: 'db.transaction',
                          operations: n.complete()
                      },
                      t
                  )
                : Promise.resolve()
        );
    }
    constructor(e) {
        s(this, 'name', void 0),
            s(this, 'handle', void 0),
            s(this, 'raw', void 0),
            s(this, 'lastState', void 0),
            s(this, 'databaseStateCallback', void 0),
            (this.raw = e),
            (this.name = e.name),
            (this.lastState = a.hi.Open),
            (this.handle = e.handle),
            (this.databaseStateCallback = o.r.addDatabaseStateCallback((e, t) => {
                this.handle === e && (this.lastState = t);
            }));
    }
}
class f {
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
        s(this, 'database', void 0), s(this, 'operations', void 0), (this.database = e), (this.operations = []);
    }
}
