"use strict";
n.d(t, { A: () => f });
var r = n(73153),
    i = n(256311),
    a = n(439372),
    s = n(773669),
    o = n(661191),
    l = n(883600),
    u = n(446023),
    c = n(212031);
function d(e, t) {
    let n = 0,
        r = null;
    for (var [i, { min_version: a }] of Object.entries(e)) a <= t && a > n && ((n = a), (r = i));
    return r;
}
class _ extends a.A {
    actions = { POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e) };
    handleConnectionOpen = async (e) => {
        try {
            let e = await i.A.fetchChangelogConfig(),
                t = e.body,
                n = (0, u.$)(),
                a = d(t, n);
            if (
                (r.h.dispatch({ type: "CHANGE_LOG_SET_CONFIG", config: e.body, latestChangelogId: a }),
                null == a || !0 !== t[a].show_on_startup)
            )
                return;
            let _ = l.A.lastSeenChangelogId(),
                f = l.A.lastSeenChangelogDate();
            if (null != _ && 0 >= o.default.compare(a, _)) return;
            let p = await i.A.fetchChangelog(a, s.default.locale);
            if (null == p) return;
            if (null == f || null == l.A.lastSeenChangelogDate()) return void i.A.markChangelogAsSeen(a, p.date);
            if (l.A.isLocked()) return;
            new Date(p.date) > new Date(f) && (0, c.j)();
        } finally {
            r.h.dispatch({ type: "CHANGE_LOG_RESOLVED" });
        }
    };
}
let f = new _();
