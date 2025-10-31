n.d(t, { Z: () => f });
var r = n(647438),
    i = n(442837),
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
        n = (0, i.e7)([a.default], () => a.default.locale),
        f = (0, i.e7)([c.Z], () => c.Z.getChangelog(null != t ? t : "", n), [t, n]),
        h = (0, d.Z)(e),
        m = r.useRef(h ? Date.now() : null),
        g = (0, i.e7)([o.ZP], () => o.ZP.getUnreadCount(e), [e]),
        b = r.useRef(g);
    r.useEffect(() => {
        b.current = g;
    }),
        r.useEffect(() => {
            m.current = Date.now();
        }, [h]),
        r.useEffect(() => {
            h && null != t && l.Z.fetchChangelog(t, n, !0);
        }, [t, n, h]),
        r.useEffect(() => {
            h &&
                null != f &&
                s.default.track(p.rMx.CHANGE_LOG_OPENED, {
                    change_log_id: "".concat(f.date, ":").concat(f.revision),
                    unread_count: b.current,
                });
        }, [h, f]),
        r.useEffect(() => {
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
