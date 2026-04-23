l.d(t, { Gn: () => c, Ju: () => o, _w: () => d, lI: () => u });
var n = l(417597),
    i = l(580630),
    s = l(695515),
    a = l(923531),
    r = l(191627);
function d(e) {
    return (0, n.yK)([s.A], () => s.A.getActionsForDisplayType(e));
}
function c(e) {
    return (0, n.bG)([s.A], () => s.A.getTotalForDisplayType(e));
}
function u() {
    return (0, n.bG)([s.A], () => Object.values(r.NV).some((e) => s.A.getTotalForDisplayType(e) > 0));
}
function o(e) {
    let t = c(e) ?? 0;
    if (e === r.NV.TOTAL_VOICE_MINUTES) return (0, a.hO)(t);
    if (e === r.NV.PURCHASES) {
        let e = s.A.getTotalSpendAmount(),
            t = s.A.getTotalSpendCurrency();
        if (null != e && null != t) return (0, i.RS)(e, t);
    }
    return t;
}
