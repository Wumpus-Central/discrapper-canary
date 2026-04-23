n.d(t, { A: () => m });
var i = n(64700),
    l = n(311907),
    a = n(256311),
    s = n(773669),
    r = n(222823),
    o = n(954571),
    c = n(883600),
    d = n(942366),
    u = n(343328),
    h = n(652215);
function m(e) {
    let t = (0, d.A)(e),
        n = (0, l.bG)([s.default], () => s.default.locale),
        m = (0, l.bG)([c.A], () => c.A.getChangelog(t ?? "", n), [t, n]),
        A = (0, u.A)(e),
        g = i.useRef(A ? Date.now() : null),
        _ = (0, l.bG)([r.Ay], () => r.Ay.getUnreadCount(e), [e]),
        p = i.useRef(_);
    i.useEffect(() => {
        p.current = _;
    }),
        i.useEffect(() => {
            g.current = Date.now();
        }, [A]),
        i.useEffect(() => {
            A && null != t && a.A.fetchChangelog(t, n, !0);
        }, [t, n, A]),
        i.useEffect(() => {
            A &&
                null != m &&
                o.default.track(h.HAw.CHANGE_LOG_OPENED, {
                    change_log_id: `${m.date}:${m.revision}`,
                    unread_count: p.current,
                });
        }, [A, m]),
        i.useEffect(() => {
            let e = g.current;
            return () => {
                A &&
                    null != m &&
                    null != e &&
                    (o.default.track(h.HAw.CHANGE_LOG_CLOSED, {
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                        change_log_id: `${m.date}:${m.revision}`,
                        unread_count: p.current,
                    }),
                    (g.current = 0));
            };
        }, [A, m]);
}
