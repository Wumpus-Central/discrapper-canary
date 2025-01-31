n.d(t, { Z: () => _ });
var i = n(442837),
    r = n(570140),
    a = n(710845),
    s = n(70956),
    o = n(287328);
function l(e, t, n) {
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
let u = new a.Z('FileSystemStore'),
    c = 1048576,
    d = 10 * s.Z.Millis.MINUTE;
class f extends i.ZP.Store {
    handlePostConnectionOpen() {
        return this.refresh(), !1;
    }
    handleAppStateUpdate(e) {
        return 'active' !== e.state && this.refresh(), !1;
    }
    async refresh() {
        var e, t;
        let n = await (null === (t = o.Z.database()) || void 0 === t ? void 0 : null === (e = t.fsInfo()) || void 0 === e ? void 0 : e.catch((e) => u.warn("couldn't get fs info", e)));
        if (null != n) {
            let e = n.fs.available < 256 * c || n.fs.available < 3 * n.database.used || n.fs.available < 2 * n.database.total,
                t = n.fs.available > 768 * c && n.fs.available > 4 * n.database.used && n.fs.available > 4 * n.database.total,
                i = !!e || (!t && null);
            null != i && this.isLowDisk !== i && ((this.isLowDisk = i), this.emitChange());
        }
    }
    constructor() {
        super(r.Z, {
            APP_STATE_UPDATE: (e) => this.handleAppStateUpdate(e),
            POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
        }),
            l(this, 'isLowDisk', !1),
            this.refresh(),
            this.waitFor(o.Z),
            setInterval(() => this.refresh(), d);
    }
}
let _ = new f();
