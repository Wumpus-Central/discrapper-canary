n.d(t, { Z: () => p }), n(388685);
var r = n(570140),
    i = n(661111),
    a = n(147913),
    o = n(706454),
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
    for (var [i, { min_version: a }] of Object.entries(e)) a <= t && a > n && ((n = a), (r = i));
    return r;
}
class _ extends a.Z {
    constructor(...e) {
        super(...e),
            d(this, 'actions', { POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e) }),
            d(this, 'handleConnectionOpen', async (e) => {
                try {
                    let e = await i.Z.fetchChangelogConfig(),
                        t = e.body,
                        n = (0, c.b)(),
                        a = f(t, n);
                    if (
                        (r.Z.dispatch({
                            type: 'CHANGE_LOG_SET_CONFIG',
                            config: e.body,
                            latestChangelogId: a
                        }),
                        null == a || !0 !== t[a].show_on_startup)
                    )
                        return;
                    let d = l.Z.lastSeenChangelogId(),
                        _ = l.Z.lastSeenChangelogDate();
                    if (null != d && 0 >= s.default.compare(a, d)) return;
                    let p = await i.Z.fetchChangelog(a, o.default.locale);
                    if (null == p) return;
                    if (null == _ || null == l.Z.lastSeenChangelogDate()) return void i.Z.markChangelogAsSeen(a, p.date);
                    if (l.Z.isLocked()) return;
                    new Date(p.date) > new Date(_) && (0, u.Z)();
                } finally {
                    r.Z.dispatch({ type: 'CHANGE_LOG_RESOLVED' });
                }
            });
    }
}
let p = new _();
