n.d(t, { Z: () => _ });
var r = n(442837),
    i = n(570140),
    o = n(710845),
    a = n(70956),
    s = n(287328);
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
let c = new o.Z('FileSystemStore'),
    u = 1048576,
    d = 10 * a.Z.Millis.MINUTE;
class f extends r.ZP.Store {
    handlePostConnectionOpen() {
        return this.refresh(), !1;
    }
    handleAppStateUpdate(e) {
        return 'active' !== e.state && this.refresh(), !1;
    }
    async refresh() {
        var e, t;
        let n = await (null == (t = s.Z.database()) || null == (e = t.fsInfo()) ? void 0 : e.catch((e) => c.warn("couldn't get fs info", e)));
        if (null != n) {
            let e = n.fs.available < 256 * u || n.fs.available < 3 * n.database.used || n.fs.available < 2 * n.database.total,
                t = n.fs.available > 768 * u && n.fs.available > 4 * n.database.used && n.fs.available > 4 * n.database.total,
                r = !!e || (!t && null);
            null != r && this.isLowDisk !== r && ((this.isLowDisk = r), this.emitChange());
        }
    }
    constructor() {
        super(i.Z, {
            APP_STATE_UPDATE: (e) => this.handleAppStateUpdate(e),
            POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
        }),
            l(this, 'isLowDisk', !1),
            this.refresh(),
            this.waitFor(s.Z),
            setInterval(() => this.refresh(), d);
    }
}
let _ = new f();
