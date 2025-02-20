n.d(t, { Z: () => _ }), n(47120);
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
class p extends o.Z {
    constructor(...e) {
        super(...e),
            d(this, 'actions', { POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e) }),
            d(this, 'handleConnectionOpen', async (e) => {
                let t = await i.Z.fetchChangelogConfig(),
                    n = t.body,
                    o = f(n, (0, c.b)());
                if (
                    (r.Z.dispatch({
                        type: 'CHANGE_LOG_SET_CONFIG',
                        config: t.body,
                        latestChangelogId: o
                    }),
                    null == o || !0 !== n[o].show_on_startup)
                )
                    return;
                let d = l.Z.lastSeenChangelogId(),
                    p = l.Z.lastSeenChangelogDate();
                if (null != d && 0 >= s.default.compare(o, d)) return;
                let _ = await i.Z.fetchChangelog(o, a.default.locale);
                if (null != _) {
                    if (null == p || null == l.Z.lastSeenChangelogDate()) {
                        i.Z.markChangelogAsSeen(o, _.date);
                        return;
                    }
                    !l.Z.isLocked() && new Date(_.date) > new Date(p) && (0, u.Z)();
                }
            });
    }
}
let _ = new p();
