n.d(t, { Z: () => p }), n(47120);
var i = n(570140),
    r = n(661111),
    a = n(147913),
    s = n(706454),
    o = n(709054),
    l = n(802098),
    u = n(128014),
    c = n(163379);
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
        i = null;
    for (var [r, { min_version: a }] of Object.entries(e)) a <= t && a > n && ((n = a), (i = r));
    return i;
}
class _ extends a.Z {
    constructor(...e) {
        super(...e),
            d(this, 'actions', { POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e) }),
            d(this, 'handleConnectionOpen', async (e) => {
                let t = await r.Z.fetchChangelogConfig(),
                    n = t.body,
                    a = f(n, (0, u.b)());
                if (
                    (i.Z.dispatch({
                        type: 'CHANGE_LOG_SET_CONFIG',
                        config: t.body,
                        latestChangelogId: a
                    }),
                    null == a || !0 !== n[a].show_on_startup)
                )
                    return;
                let d = l.Z.lastSeenChangelogId(),
                    _ = l.Z.lastSeenChangelogDate();
                if (null != d && 0 >= o.default.compare(a, d)) return;
                let p = await r.Z.fetchChangelog(a, s.default.locale);
                if (null != p) {
                    if (null == _ || null == l.Z.lastSeenChangelogDate()) {
                        r.Z.markChangelogAsSeen(a, p.date);
                        return;
                    }
                    !l.Z.isLocked() && new Date(p.date) > new Date(_) && (0, c.Z)();
                }
            });
    }
}
let p = new _();
