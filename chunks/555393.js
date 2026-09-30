a.d(t, { N: () => o });
var n = a(17928),
    s = a(531260),
    i = a(287809),
    r = a(166403),
    l = a(721157);
function o() {
    let e = (0, n.bG)([i.default], () => i.default.getCurrentUser()),
        t = (0, n.bG)([r.A], () => r.A.getPremiumTypeSubscription()),
        a = (0, n.bG)([r.A], () => r.A.hasFetchedSubscriptions()),
        { fractionalState: o, fetched: c } = (0, s.A)();
    if (!a || !c) return null;
    let { isEligible: d, reason: u } = (0, l.ij)(e, t, o);
    return { isEligible: d, state: (0, l.P3)(u), reason: u };
}
