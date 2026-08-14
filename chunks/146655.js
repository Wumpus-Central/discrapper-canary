n.d(t, { A: () => g });
var i = n(582128),
    l = n(17928),
    r = n(87664),
    s = n(517164),
    u = n(20805),
    a = n(83971),
    c = n(583846),
    d = n(626822),
    o = n(290863),
    p = n(343129),
    A = n(731854);
let h = [],
    b = [];
function g(e) {
    let t = (0, l.bG)([d.Ay], () => d.Ay.supports(A.O5.VIDEO)),
        n = (0, r.A)(e),
        g = (0, l.bG)([o.A], () => o.A.getActivities(e)),
        f = (0, l.bG)([s.A], () => s.A.getUserOutbox(e)),
        { live: v, recent: k } = (0, i.useMemo)(() => {
            let e = (0, p.U)(g),
                t = f?.entries.filter(
                    (t) =>
                        !(0, c.Hd)(t) &&
                        ((0, u.Tq)(t)
                            ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, a.qb)(t, e))
                            : (0, u.Lf)(t)
                              ? !e.some((e) => null != e && (0, a.SU)(t, e))
                              : (0, u.$R)(t)),
                );
            return { live: 0 === e.length ? h : e, recent: null == t || 0 === t.length ? b : t };
        }, [g, f?.entries]);
    return { live: v, recent: k, stream: t ? n : null, outbox: f };
}
