n.d(t, { Z: () => _ });
var r = n(73800),
    i = n(442837),
    a = n(661111),
    o = n(706454),
    s = n(306680),
    l = n(626135),
    c = n(802098),
    u = n(193701),
    d = n(702321),
    f = n(981631);
function _(e) {
    let t = (0, u.Z)(e),
        n = (0, i.e7)([o.default], () => o.default.locale),
        _ = (0, i.e7)([c.Z], () => c.Z.getChangelog(null != t ? t : '', n), [t, n]),
        p = (0, d.Z)(e),
        h = r.useRef(p ? Date.now() : null),
        m = (0, i.e7)([s.ZP], () => s.ZP.getUnreadCount(e), [e]),
        g = r.useRef(m);
    (r.useEffect(() => {
        g.current = m;
    }),
        r.useEffect(() => {
            h.current = Date.now();
        }, [p]),
        r.useEffect(() => {
            p && null != t && a.Z.fetchChangelog(t, n, !0);
        }, [t, n, p]),
        r.useEffect(() => {
            p &&
                null != _ &&
                l.default.track(f.rMx.CHANGE_LOG_OPENED, {
                    change_log_id: ''.concat(_.date, ':').concat(_.revision),
                    unread_count: g.current
                });
        }, [p, _]),
        r.useEffect(() => {
            let e = h.current;
            return () => {
                p &&
                    null != _ &&
                    null != e &&
                    (l.default.track(f.rMx.CHANGE_LOG_CLOSED, {
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        change_log_id: ''.concat(_.date, ':').concat(_.revision),
                        unread_count: g.current
                    }),
                    (h.current = 0));
            };
        }, [p, _]));
}
