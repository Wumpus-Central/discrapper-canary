n.d(t, { Z: () => h });
var r = n(192379),
    i = n(442837),
    l = n(661111),
    o = n(706454),
    a = n(306680),
    s = n(626135),
    c = n(802098),
    u = n(193701),
    d = n(702321),
    p = n(981631);
function h(e) {
    let t = (0, u.Z)(e),
        n = (0, i.e7)([o.default], () => o.default.locale),
        h = (0, i.e7)([c.Z], () => c.Z.getChangelog(null != t ? t : '', n), [t, n]),
        f = (0, d.Z)(e),
        m = r.useRef(f ? Date.now() : null),
        g = (0, i.e7)([a.ZP], () => a.ZP.getUnreadCount(e), [e]),
        b = r.useRef(g);
    r.useEffect(() => {
        b.current = g;
    }),
        r.useEffect(() => {
            m.current = Date.now();
        }, [f]),
        r.useEffect(() => {
            f && null != t && l.Z.fetchChangelog(t, n, !0);
        }, [t, n, f]),
        r.useEffect(() => {
            f &&
                null != h &&
                s.default.track(p.rMx.CHANGE_LOG_OPENED, {
                    change_log_id: ''.concat(h.date, ':').concat(h.revision),
                    unread_count: b.current
                });
        }, [f, h]),
        r.useEffect(() => {
            let e = m.current;
            return () => {
                f &&
                    null != h &&
                    null != e &&
                    (s.default.track(p.rMx.CHANGE_LOG_CLOSED, {
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        change_log_id: ''.concat(h.date, ':').concat(h.revision),
                        unread_count: b.current
                    }),
                    (m.current = 0));
            };
        }, [f, h]);
}
