n.d(t, { N: () => c });
var a = n(17928),
    s = n(531260),
    i = n(287809),
    r = n(166403),
    l = n(721157);
function c() {
    let e = (0, a.bG)([i.default], () => i.default.getCurrentUser()),
        t = (0, a.bG)([r.A], () => r.A.getPremiumTypeSubscription()),
        n = (0, a.bG)([r.A], () => r.A.hasFetchedSubscriptions()),
        { fractionalState: c, fetched: o } = (0, s.A)();
    if (!n || !o) return null;
    let { isEligible: d, reason: u } = (0, l.ij)(e, t, c);
    return { isEligible: d, state: (0, l.P3)(u), reason: u };
}
