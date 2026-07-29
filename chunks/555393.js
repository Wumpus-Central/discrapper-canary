i.d(t, { N: () => l });
var s = i(17928),
    r = i(531260),
    n = i(166403),
    a = i(721157);
function l() {
    let e = (0, s.bG)([n.A], () => n.A.getPremiumTypeSubscription()),
        t = (0, s.bG)([n.A], () => n.A.hasFetchedSubscriptions()),
        { fractionalState: i, fetched: l } = (0, r.A)();
    if (!t || !l) return null;
    let { isEligible: o, reason: d } = (0, a.ij)(e, i);
    return { isEligible: o, state: (0, a.P3)(d), reason: d };
}
