n.d(t, {
    Gn: () => c,
    Ju: () => d,
    _w: () => l,
    lI: () => u,
});
var r = n(417597),
    i = n(580630),
    a = n(695515),
    s = n(923531),
    o = n(191627);
function l(e) {
    return (0, r.yK)([a.A], () => a.A.getActionsForDisplayType(e));
}
function c(e) {
    return (0, r.bG)([a.A], () => a.A.getTotalForDisplayType(e));
}
function u() {
    return (0, r.bG)([a.A], () => Object.values(o.NV).some((e) => a.A.getTotalForDisplayType(e) > 0));
}
function d(e) {
    var t;
    let n = null != (t = c(e)) ? t : 0;
    if (e === o.NV.TOTAL_VOICE_MINUTES) return (0, s.hO)(n);
    if (e === o.NV.PURCHASES) {
        let e = a.A.getTotalSpendAmount(),
            t = a.A.getTotalSpendCurrency();
        if (null != e && null != t) return (0, i.RS)(e, t);
    }
    return n;
}
