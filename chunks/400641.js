n.d(t, { Gn: () => c, Ju: () => u, _w: () => o, lI: () => d });
var i = n(417597),
    s = n(580630),
    r = n(695515),
    a = n(923531),
    l = n(191627);
function o(e) {
    return (0, i.yK)([r.A], () => r.A.getActionsForDisplayType(e));
}
function c(e) {
    return (0, i.bG)([r.A], () => r.A.getTotalForDisplayType(e));
}
function d() {
    return (0, i.bG)([r.A], () => Object.values(l.NV).some((e) => r.A.getTotalForDisplayType(e) > 0));
}
function u(e) {
    let t = c(e) ?? 0;
    if (e === l.NV.TOTAL_VOICE_MINUTES) return (0, a.hO)(t);
    if (e === l.NV.PURCHASES) {
        let e = r.A.getTotalSpendAmount(),
            t = r.A.getTotalSpendCurrency();
        if (null != e && null != t) return (0, s.RS)(e, t);
    }
    return t;
}
