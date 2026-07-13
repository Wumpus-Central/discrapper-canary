n.d(t, { A: () => p });
var i = n(64700),
    l = n(17928),
    s = n(87664),
    a = n(517164),
    r = n(20805),
    o = n(83971),
    d = n(583846),
    c = n(290863),
    u = n(343129);
let h = [],
    m = [];
function p(e) {
    let t = (0, s.A)(e),
        n = (0, l.bG)([c.A], () => c.A.getActivities(e)),
        p = (0, l.bG)([a.A], () => a.A.getUserOutbox(e)),
        { live: g, recent: f } = (0, i.useMemo)(() => {
            let e = (0, u.U)(n),
                t = p?.entries.filter(
                    (t) =>
                        !(0, d.Hd)(t) &&
                        ((0, r.Tq)(t)
                            ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, o.qb)(t, e))
                            : (0, r.Lf)(t)
                              ? !e.some((e) => null != e && (0, o.SU)(t, e))
                              : (0, r.$R)(t)),
                );
            return { live: 0 === e.length ? h : e, recent: null == t || 0 === t.length ? m : t };
        }, [n, p?.entries]);
    return { live: g, recent: f, stream: t, outbox: p };
}
