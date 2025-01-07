n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(192379),
    l = n(442837),
    r = n(661111),
    a = n(706454),
    s = n(306680),
    o = n(626135),
    c = n(802098),
    d = n(193701),
    u = n(702321),
    h = n(981631);
function p(e) {
    let t = (0, d.Z)(e),
        n = (0, l.e7)([a.default], () => a.default.locale),
        p = (0, l.e7)([c.Z], () => c.Z.getChangelog(null != t ? t : '', n), [t, n]),
        m = (0, u.Z)(e),
        f = i.useRef(m ? Date.now() : null),
        g = (0, l.e7)([s.ZP], () => s.ZP.getUnreadCount(e), [e]),
        C = i.useRef(g);
    i.useEffect(() => {
        C.current = g;
    }),
        i.useEffect(() => {
            f.current = Date.now();
        }, [m]),
        i.useEffect(() => {
            m && null != t && r.Z.fetchChangelog(t, n, !0);
        }, [t, n, m]),
        i.useEffect(() => {
            m &&
                null != p &&
                o.default.track(h.rMx.CHANGE_LOG_OPENED, {
                    change_log_id: ''.concat(p.date, ':').concat(p.revision),
                    unread_count: C.current
                });
        }, [m, p]),
        i.useEffect(() => {
            let e = f.current;
            return () => {
                m &&
                    null != p &&
                    null != e &&
                    (o.default.track(h.rMx.CHANGE_LOG_CLOSED, {
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        change_log_id: ''.concat(p.date, ':').concat(p.revision),
                        unread_count: C.current
                    }),
                    (f.current = 0));
            };
        }, [m, p]);
}
