n.d(t, { Z: () => h });
var i = n(473749),
    r = n(442837),
    l = n(661111),
    a = n(706454),
    o = n(306680),
    s = n(626135),
    c = n(802098),
    u = n(193701),
    d = n(702321),
    p = n(981631);
function h(e) {
    let t = (0, u.Z)(e),
        n = (0, r.e7)([a.default], () => a.default.locale),
        h = (0, r.e7)([c.Z], () => c.Z.getChangelog(null != t ? t : "", n), [t, n]),
        f = (0, d.Z)(e),
        m = i.useRef(f ? Date.now() : null),
        g = (0, r.e7)([o.ZP], () => o.ZP.getUnreadCount(e), [e]),
        b = i.useRef(g);
    i.useEffect(() => {
        b.current = g;
    }),
        i.useEffect(() => {
            m.current = Date.now();
        }, [f]),
        i.useEffect(() => {
            f && null != t && l.Z.fetchChangelog(t, n, !0);
        }, [t, n, f]),
        i.useEffect(() => {
            f &&
                null != h &&
                s.default.track(p.rMx.CHANGE_LOG_OPENED, {
                    change_log_id: "".concat(h.date, ":").concat(h.revision),
                    unread_count: b.current,
                });
        }, [f, h]),
        i.useEffect(() => {
            let e = m.current;
            return () => {
                f &&
                    null != h &&
                    null != e &&
                    (s.default.track(p.rMx.CHANGE_LOG_CLOSED, {
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        change_log_id: "".concat(h.date, ":").concat(h.revision),
                        unread_count: b.current,
                    }),
                    (m.current = 0));
            };
        }, [f, h]);
}
