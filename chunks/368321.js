var i = r(442837),
    a = r(570140),
    o = r(710845),
    s = r(70956),
    l = r(287328);
function u(e, n, r) {
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
let c = new o.Z('FileSystemStore'),
    d = 1048576,
    f = 10 * s.Z.Millis.MINUTE;
class p extends i.ZP.Store {
    handlePostConnectionOpen() {
        return this.refresh(), !1;
    }
    handleAppStateUpdate(e) {
        return 'active' !== e.state && this.refresh(), !1;
    }
    async refresh() {
        var e, n;
        let r = await (null === (n = l.Z.database()) || void 0 === n ? void 0 : null === (e = n.fsInfo()) || void 0 === e ? void 0 : e.catch((e) => c.warn("couldn't get fs info", e)));
        if (null != r) {
            let e = r.fs.available < 256 * d || r.fs.available < 3 * r.database.used || r.fs.available < 2 * r.database.total,
                n = r.fs.available > 768 * d && r.fs.available > 4 * r.database.used && r.fs.available > 4 * r.database.total,
                i = !!e || (!n && null);
            null != i && this.isLowDisk !== i && ((this.isLowDisk = i), this.emitChange());
        }
    }
    constructor() {
        super(a.Z, {
            APP_STATE_UPDATE: (e) => this.handleAppStateUpdate(e),
            POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
        }),
            u(this, 'isLowDisk', !1),
            this.refresh(),
            this.waitFor(l.Z),
            setInterval(() => this.refresh(), f);
    }
}
n.Z = new p();
