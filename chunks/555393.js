n.d(t, { N: () => o });
var a = n(17928),
    s = n(287809),
    i = n(166403),
    r = n(474090),
    l = n(721157);
function o() {
    let e = (0, a.bG)([s.default], () => s.default.getCurrentUser()),
        t = (0, a.bG)([i.A], () => i.A.getPremiumTypeSubscription());
    if (!(0, a.bG)([i.A], () => i.A.hasFetchedSubscriptions()) && (0, r.ki)(e)) return null;
    let { isEligible: n, reason: o } = (0, l.ij)(e, t);
    return { isEligible: n, state: (0, l.P3)(o), reason: o };
}
