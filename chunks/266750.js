n.d(t, { Z: () => _ }), n(977457);
var r = n(392711),
    i = n.n(r),
    o = n(250407),
    a = n(710845),
    s = n(914010),
    l = n(70956),
    c = n(287328);
function u(e, t, n) {
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
let d = new a.Z('NonGuildVersions');
class f {
    async getCommittedVersions() {
        try {
            let e = c.Z.nonGuildVersions();
            if (null == e) return {};
            let t = (await e.getMany()).map((e) => [e.id, 'version' in e ? e.version : e.versionString]);
            return Object.fromEntries(null != t ? t : []);
        } catch (e) {
            return d.warn("couldn't load guild versions", e), {};
        }
    }
    handleConnectionOpen(e, t) {
        null != e.apiCodeVersion &&
            c.Z.nonGuildVersionsTransaction(t).put({
                id: 'api_code_version',
                version: e.apiCodeVersion
            });
    }
    resetInMemoryState() {}
    constructor() {
        if (
            (u(this, 'actions', {
                CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                BACKGROUND_SYNC: (e, t) => this.handleConnectionOpen(e, t)
            }),
            !(0, o.O)())
        )
            return;
        s.Z.addChangeListener(
            i().throttle(() => {
                var e;
                null == (e = c.Z.database()) ||
                    e.transaction((e) => {
                        let t = s.Z.getGuildId();
                        null == t || isNaN(Number(t))
                            ? c.Z.nonGuildVersionsTransaction(e).delete('initial_guild_id')
                            : c.Z.nonGuildVersionsTransaction(e).put({
                                  id: 'initial_guild_id',
                                  versionString: t
                              });
                    });
            }, 10 * l.Z.Millis.SECOND)
        );
    }
}
let _ = new f();
