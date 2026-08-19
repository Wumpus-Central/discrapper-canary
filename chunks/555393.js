i.d(t, { N: () => l });
var s = i(17928),
    n = i(531260),
    r = i(166403),
    a = i(721157);
function l() {
    let e = (0, s.bG)([r.A], () => r.A.getPremiumTypeSubscription()),
        t = (0, s.bG)([r.A], () => r.A.hasFetchedSubscriptions()),
        { fractionalState: i, fetched: l } = (0, n.A)();
    if (!t || !l) return null;
    let { isEligible: o, reason: d } = (0, a.ij)(e, i);
    return { isEligible: o, state: (0, a.P3)(d), reason: d };
}
