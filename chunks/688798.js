n.d(t, { Z: () => p }), n(47120);
var r = n(570140),
    i = n(661111),
    o = n(147913),
    a = n(706454),
    s = n(709054),
    l = n(802098),
    c = n(128014),
    u = n(163379);
function d(e, t, n) {
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
function f(e, t) {
    let n = 0,
        r = null;
    for (var [i, { min_version: o }] of Object.entries(e)) o <= t && o > n && ((n = o), (r = i));
    return r;
}
class _ extends o.Z {
    constructor(...e) {
        super(...e),
            d(this, 'actions', { POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e) }),
            d(this, 'handleConnectionOpen', async (e) => {
                try {
                    let e = await i.Z.fetchChangelogConfig(),
                        t = e.body,
                        n = (0, c.b)(),
                        o = f(t, n);
                    if (
                        (r.Z.dispatch({
                            type: 'CHANGE_LOG_SET_CONFIG',
                            config: e.body,
                            latestChangelogId: o
                        }),
                        null == o || !0 !== t[o].show_on_startup)
                    )
                        return;
                    let d = l.Z.lastSeenChangelogId(),
                        _ = l.Z.lastSeenChangelogDate();
                    if (null != d && 0 >= s.default.compare(o, d)) return;
                    let p = await i.Z.fetchChangelog(o, a.default.locale);
                    if (null == p) return;
                    if (null == _ || null == l.Z.lastSeenChangelogDate()) return void i.Z.markChangelogAsSeen(o, p.date);
                    if (l.Z.isLocked()) return;
                    new Date(p.date) > new Date(_) && (0, u.Z)();
                } finally {
                    r.Z.dispatch({ type: 'CHANGE_LOG_RESOLVED' });
                }
            });
    }
}
let p = new _();
