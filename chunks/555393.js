n.d(t, { N: () => o });
var a = n(17928),
    s = n(531260),
    i = n(287809),
    r = n(166403),
    l = n(721157);
function o() {
    let e = (0, a.bG)([i.default], () => i.default.getCurrentUser()),
        t = (0, a.bG)([r.A], () => r.A.getPremiumTypeSubscription()),
        n = (0, a.bG)([r.A], () => r.A.hasFetchedSubscriptions()),
        { fractionalState: o, fetched: c } = (0, s.A)();
    if (!n || !c) return null;
    let { isEligible: d, reason: u } = (0, l.ij)(e, t, o);
    return { isEligible: d, state: (0, l.P3)(u), reason: u };
}
