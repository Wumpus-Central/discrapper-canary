n.d(t, { A: () => E });
var i = n(73153),
    r = n(256311),
    a = n(439372),
    s = n(773669),
    l = n(403362),
    o = n(661191),
    d = n(883600),
    c = n(856383),
    u = n(212031);
class _ extends a.A {
    actions = { POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e) };
    handleConnectionOpen = async (e) => {
        try {
            let e;
            if ((0, l.iT)()) return;
            let t = await r.A.fetchChangelogConfig(),
                n = t.body,
                a =
                    ((e = parseInt("681780")),
                    Number.isNaN(e) &&
                        (c.A.captureMessage("Trying to open a changelog for an invalid build number 681780"), (e = 0)),
                    e),
                _ = (function (e, t) {
                    let n = 0,
                        i = null;
                    for (var [r, { min_version: a }] of Object.entries(e)) a <= t && a > n && ((n = a), (i = r));
                    return i;
                })(n, a);
            if (
                (i.h.dispatch({ type: "CHANGE_LOG_SET_CONFIG", config: t.body, latestChangelogId: _ }),
                null == _ || !0 !== n[_].show_on_startup)
            )
                return;
            let E = d.A.lastSeenChangelogId(),
                A = d.A.lastSeenChangelogDate();
            if (null != E && 0 >= o.default.compare(_, E)) return;
            let f = await r.A.fetchChangelog(_, s.default.locale);
            if (null == f) return;
            if (null == A || null == d.A.lastSeenChangelogDate()) return void r.A.markChangelogAsSeen(_, f.date);
            if (d.A.isLocked()) return;
            new Date(f.date) > new Date(A) && (0, u.j)();
        } finally {
            i.h.dispatch({ type: "CHANGE_LOG_RESOLVED" });
        }
    };
}
let E = new _();
