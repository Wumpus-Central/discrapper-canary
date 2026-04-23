"use strict";
n.d(t, { A: () => _ });
var r = n(73153),
    i = n(256311),
    s = n(439372),
    a = n(773669),
    o = n(661191),
    l = n(883600),
    u = n(446023),
    c = n(212031);
class d extends s.A {
    actions = { POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e) };
    handleConnectionOpen = async (e) => {
        try {
            let e = await i.A.fetchChangelogConfig(),
                t = e.body,
                n = (0, u.$)(),
                s = (function (e, t) {
                    let n = 0,
                        r = null;
                    for (var [i, { min_version: s }] of Object.entries(e)) s <= t && s > n && ((n = s), (r = i));
                    return r;
                })(t, n);
            if (
                (r.h.dispatch({ type: "CHANGE_LOG_SET_CONFIG", config: e.body, latestChangelogId: s }),
                null == s || !0 !== t[s].show_on_startup)
            )
                return;
            let d = l.A.lastSeenChangelogId(),
                _ = l.A.lastSeenChangelogDate();
            if (null != d && 0 >= o.default.compare(s, d)) return;
            let f = await i.A.fetchChangelog(s, a.default.locale);
            if (null == f) return;
            if (null == _ || null == l.A.lastSeenChangelogDate()) return void i.A.markChangelogAsSeen(s, f.date);
            if (l.A.isLocked()) return;
            new Date(f.date) > new Date(_) && (0, c.j)();
        } finally {
            r.h.dispatch({ type: "CHANGE_LOG_RESOLVED" });
        }
    };
}
let _ = new d();
