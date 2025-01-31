n.d(t, { Z: () => _ });
var i = n(392711),
    r = n.n(i),
    a = n(250407),
    s = n(710845),
    o = n(914010),
    l = n(70956),
    u = n(287328);
function c(e, t, n) {
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
let d = new s.Z('NonGuildVersions');
class f {
    async getCommittedVersions() {
        try {
            let e = u.Z.nonGuildVersions();
            if (null == e) return {};
            let t = (await e.getMany()).map((e) => [e.id, 'version' in e ? e.version : e.versionString]);
            return Object.fromEntries(null != t ? t : []);
        } catch (e) {
            return d.warn("couldn't load guild versions", e), {};
        }
    }
    handleConnectionOpen(e, t) {
        null != e.apiCodeVersion &&
            u.Z.nonGuildVersionsTransaction(t).put({
                id: 'api_code_version',
                version: e.apiCodeVersion
            });
    }
    resetInMemoryState() {}
    constructor() {
        if (
            (c(this, 'actions', {
                CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                BACKGROUND_SYNC: (e, t) => this.handleConnectionOpen(e, t)
            }),
            !(0, a.O)())
        )
            return;
        o.Z.addChangeListener(
            r().throttle(() => {
                var e;
                null === (e = u.Z.database()) ||
                    void 0 === e ||
                    e.transaction((e) => {
                        let t = o.Z.getGuildId();
                        null == t || isNaN(Number(t))
                            ? u.Z.nonGuildVersionsTransaction(e).delete('initial_guild_id')
                            : u.Z.nonGuildVersionsTransaction(e).put({
                                  id: 'initial_guild_id',
                                  versionString: t
                              });
                    });
            }, 10 * l.Z.Millis.SECOND)
        );
    }
}
let _ = new f();
