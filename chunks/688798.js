var i = r(47120);
var a = r(570140),
    o = r(661111),
    s = r(147913),
    l = r(706454),
    u = r(709054),
    c = r(802098),
    d = r(128014),
    f = r(163379);
function p(e, n, r) {
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
function h(e, n) {
    let r = 0,
        i = null;
    for (var [a, { min_version: o }] of Object.entries(e)) o <= n && o > r && ((r = o), (i = a));
    return i;
}
class _ extends s.Z {
    constructor(...e) {
        super(...e),
            p(this, 'actions', { POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e) }),
            p(this, 'handleConnectionOpen', async (e) => {
                let n = await o.Z.fetchChangelogConfig(),
                    r = n.body,
                    i = h(r, (0, d.b)());
                if (
                    (a.Z.dispatch({
                        type: 'CHANGE_LOG_SET_CONFIG',
                        config: n.body,
                        latestChangelogId: i
                    }),
                    null == i || !0 !== r[i].show_on_startup)
                )
                    return;
                let s = c.Z.lastSeenChangelogId(),
                    p = c.Z.lastSeenChangelogDate();
                if (null != s && 0 >= u.default.compare(i, s)) return;
                let _ = await o.Z.fetchChangelog(i, l.default.locale);
                if (null != _) {
                    if (null == p || null == c.Z.lastSeenChangelogDate()) {
                        o.Z.markChangelogAsSeen(i, _.date);
                        return;
                    }
                    !c.Z.isLocked() && new Date(_.date) > new Date(p) && (0, f.Z)();
                }
            });
    }
}
n.Z = new _();
