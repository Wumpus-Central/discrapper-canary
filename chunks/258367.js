n.d(t, { A: () => p });
var r = n(64700),
    l = n(311907),
    i = n(256311),
    a = n(773669),
    s = n(222823),
    o = n(954571),
    c = n(883600),
    u = n(942366),
    d = n(343328),
    f = n(652215);
function p(e) {
    let t = (0, u.A)(e),
        n = (0, l.bG)([a.default], () => a.default.locale),
        p = (0, l.bG)([c.A], () => c.A.getChangelog(null != t ? t : "", n), [t, n]),
        h = (0, d.A)(e),
        b = r.useRef(h ? Date.now() : null),
        g = (0, l.bG)([s.Ay], () => s.Ay.getUnreadCount(e), [e]),
        m = r.useRef(g);
    r.useEffect(() => {
        m.current = g;
    }),
        r.useEffect(() => {
            b.current = Date.now();
        }, [h]),
        r.useEffect(() => {
            h && null != t && i.A.fetchChangelog(t, n, !0);
        }, [t, n, h]),
        r.useEffect(() => {
            h &&
                null != p &&
                o.default.track(f.HAw.CHANGE_LOG_OPENED, {
                    change_log_id: "".concat(p.date, ":").concat(p.revision),
                    unread_count: m.current,
                });
        }, [h, p]),
        r.useEffect(() => {
            let e = b.current;
            return () => {
                h &&
                    null != p &&
                    null != e &&
                    (o.default.track(f.HAw.CHANGE_LOG_CLOSED, {
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        change_log_id: "".concat(p.date, ":").concat(p.revision),
                        unread_count: m.current,
                    }),
                    (b.current = 0));
            };
        }, [h, p]);
}
