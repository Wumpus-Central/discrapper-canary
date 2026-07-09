n.d(t, { A: () => A });
var i = n(64700),
    l = n(17928),
    r = n(87664),
    s = n(517164),
    u = n(20805),
    c = n(83971),
    a = n(583846),
    d = n(290863),
    h = n(343129);
let o = [],
    p = [];
function A(e) {
    let t = (0, r.A)(e),
        n = (0, l.bG)([d.A], () => d.A.getActivities(e)),
        A = (0, l.bG)([s.A], () => s.A.getUserOutbox(e)),
        { live: b, recent: g } = (0, i.useMemo)(() => {
            let e = (0, h.U)(n),
                t = A?.entries.filter(
                    (t) =>
                        !(0, a.Hd)(t) &&
                        ((0, u.Tq)(t)
                            ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, c.qb)(t, e))
                            : (0, u.Lf)(t)
                              ? !e.some((e) => null != e && (0, c.SU)(t, e))
                              : (0, u.$R)(t)),
                );
            return { live: 0 === e.length ? o : e, recent: null == t || 0 === t.length ? p : t };
        }, [n, A?.entries]);
    return { live: b, recent: g, stream: t, outbox: A };
}
