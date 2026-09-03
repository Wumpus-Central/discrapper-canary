i.d(t, { N: () => o });
var s = i(17928),
    n = i(531260),
    r = i(287809),
    a = i(166403),
    l = i(721157);
function o() {
    let e = (0, s.bG)([r.default], () => r.default.getCurrentUser()),
        t = (0, s.bG)([a.A], () => a.A.getPremiumTypeSubscription()),
        i = (0, s.bG)([a.A], () => a.A.hasFetchedSubscriptions()),
        { fractionalState: o, fetched: d } = (0, n.A)();
    if (!i || !d) return null;
    let { isEligible: c, reason: u } = (0, l.ij)(e, t, o);
    return { isEligible: c, state: (0, l.P3)(u), reason: u };
}
