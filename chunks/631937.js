n.d(t, { Z: () => f });
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
function f(e) {
    let t = (0, u.Z)(e),
        n = (0, r.e7)([a.default], () => a.default.locale),
        f = (0, r.e7)([c.Z], () => c.Z.getChangelog(null != t ? t : "", n), [t, n]),
        h = (0, d.Z)(e),
        m = i.useRef(h ? Date.now() : null),
        g = (0, r.e7)([o.ZP], () => o.ZP.getUnreadCount(e), [e]),
        b = i.useRef(g);
    i.useEffect(() => {
        b.current = g;
    }),
        i.useEffect(() => {
            m.current = Date.now();
        }, [h]),
        i.useEffect(() => {
            h && null != t && l.Z.fetchChangelog(t, n, !0);
        }, [t, n, h]),
        i.useEffect(() => {
            h &&
                null != f &&
                s.default.track(p.rMx.CHANGE_LOG_OPENED, {
                    change_log_id: "".concat(f.date, ":").concat(f.revision),
                    unread_count: b.current,
                });
        }, [h, f]),
        i.useEffect(() => {
            let e = m.current;
            return () => {
                h &&
                    null != f &&
                    null != e &&
                    (s.default.track(p.rMx.CHANGE_LOG_CLOSED, {
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        change_log_id: "".concat(f.date, ":").concat(f.revision),
                        unread_count: b.current,
                    }),
                    (m.current = 0));
            };
        }, [h, f]);
}
