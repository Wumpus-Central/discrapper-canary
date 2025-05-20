n.d(t, { Z: () => d });
var r = n(442837),
    i = n(607070),
    o = n(667105),
    a = n(291175),
    s = n(792481),
    l = n(848572),
    c = n(46140);
let u = 604800000;
function d(e) {
    let { location: t } = e,
        n = s.X.useExperiment({ location: t }),
        d = (0, r.e7)([i.Z], () => i.Z.useReducedMotion),
        f = (0, l.kG)(),
        _ = (0, l.GG)(),
        p = (0, o.Ws)({ location: c.dr.CONFLICT_CHECKS });
    if (null == f || null == _ || !n.enabled || !p || d) return !1;
    let h = (0, a.fv)(f),
        m = new Date(_);
    return m.setMonth(_.getMonth() + h.tenureReqNumMonths), new Date().getTime() - m.getTime() < u;
}
