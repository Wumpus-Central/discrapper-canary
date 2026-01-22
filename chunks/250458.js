n.d(t, { A: () => _ }), n(896048);
var r = n(73153),
    i = n(256311),
    a = n(439372),
    s = n(773669),
    o = n(661191),
    l = n(883600),
    c = n(446023),
    u = n(212031);
function d(e, t, n) {
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
function f(e, t) {
    let n = 0,
        r = null;
    for (var [i, { min_version: a }] of Object.entries(e)) a <= t && a > n && ((n = a), (r = i));
    return r;
}
class p extends a.A {
    constructor(...e) {
        super(...e),
            d(this, "actions", { POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e) }),
            d(this, "handleConnectionOpen", async (e) => {
                try {
                    let e = await i.A.fetchChangelogConfig(),
                        t = e.body,
                        n = (0, c.$)(),
                        a = f(t, n);
                    if (
                        (r.h.dispatch({
                            type: "CHANGE_LOG_SET_CONFIG",
                            config: e.body,
                            latestChangelogId: a,
                        }),
                        null == a || !0 !== t[a].show_on_startup)
                    )
                        return;
                    let d = l.A.lastSeenChangelogId(),
                        p = l.A.lastSeenChangelogDate();
                    if (null != d && 0 >= o.default.compare(a, d)) return;
                    let _ = await i.A.fetchChangelog(a, s.default.locale);
                    if (null == _) return;
                    if (null == p || null == l.A.lastSeenChangelogDate())
                        return void i.A.markChangelogAsSeen(a, _.date);
                    if (l.A.isLocked()) return;
                    new Date(_.date) > new Date(p) && (0, u.j)();
                } finally {
                    r.h.dispatch({ type: "CHANGE_LOG_RESOLVED" });
                }
            });
    }
}
let _ = new p();
