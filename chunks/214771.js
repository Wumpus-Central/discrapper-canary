n.d(t, { A: () => p }), n(446912);
var r = n(735438),
    i = n.n(r),
    a = n(937724),
    s = n(626584),
    o = n(967198),
    l = n(927813),
    c = n(723176);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = new s.A("NonGuildVersions");
class f {
    async getCommittedVersions() {
        try {
            let e = c.A.nonGuildVersions();
            if (null == e) return {};
            let t = (await e.getMany()).map((e) => [e.id, "version" in e ? e.version : e.versionString]);
            return Object.fromEntries(null != t ? t : []);
        } catch (e) {
            return d.warn("couldn't load guild versions", e), {};
        }
    }
    handleConnectionOpen(e, t) {
        null != e.apiCodeVersion &&
            c.A.nonGuildVersionsTransaction(t).put({
                id: "api_code_version",
                version: e.apiCodeVersion,
            });
    }
    resetInMemoryState() {}
    constructor() {
        if (
            (u(this, "actions", {
                CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                BACKGROUND_SYNC: (e, t) => this.handleConnectionOpen(e, t),
            }),
            !(0, a.O)())
        )
            return;
        o.A.addChangeListener(
            i().throttle(() => {
                var e;
                null == (e = c.A.database()) ||
                    e.transaction((e) => {
                        let t = o.A.getGuildId();
                        null == t || isNaN(Number(t))
                            ? c.A.nonGuildVersionsTransaction(e).delete("initial_guild_id")
                            : c.A.nonGuildVersionsTransaction(e).put({
                                  id: "initial_guild_id",
                                  versionString: t,
                              });
                    });
            }, 10 * l.A.Millis.SECOND),
        );
    }
}
let p = new f();
