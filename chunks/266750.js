var i = r(392711),
    a = r.n(i),
    o = r(250407),
    s = r(710845),
    l = r(914010),
    u = r(70956),
    c = r(287328);
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
let f = new s.Z('NonGuildVersions');
class p {
    async getCommittedVersions() {
        try {
            let e = c.Z.nonGuildVersions();
            if (null == e) return {};
            let n = (await e.getMany()).map((e) => [e.id, 'version' in e ? e.version : e.versionString]);
            return Object.fromEntries(null != n ? n : []);
        } catch (e) {
            return f.warn("couldn't load guild versions", e), {};
        }
    }
    handleConnectionOpen(e, n) {
        null != e.apiCodeVersion &&
            c.Z.nonGuildVersionsTransaction(n).put({
                id: 'api_code_version',
                version: e.apiCodeVersion
            });
    }
    resetInMemoryState() {}
    constructor() {
        if (
            (d(this, 'actions', {
                CONNECTION_OPEN: (e, n) => this.handleConnectionOpen(e, n),
                BACKGROUND_SYNC: (e, n) => this.handleConnectionOpen(e, n)
            }),
            !(0, o.O)())
        )
            return;
        l.Z.addChangeListener(
            a().throttle(() => {
                var e;
                null === (e = c.Z.database()) ||
                    void 0 === e ||
                    e.transaction((e) => {
                        let n = l.Z.getGuildId();
                        null == n || isNaN(Number(n))
                            ? c.Z.nonGuildVersionsTransaction(e).delete('initial_guild_id')
                            : c.Z.nonGuildVersionsTransaction(e).put({
                                  id: 'initial_guild_id',
                                  versionString: n
                              });
                    });
            }, 10 * u.Z.Millis.SECOND)
        );
    }
}
n.Z = new p();
