n.d(t, { N: () => o });
var i = n(17928),
    r = n(287809),
    a = n(166403),
    l = n(474090),
    s = n(721157);
function o() {
    let e = (0, i.bG)([r.default], () => r.default.getCurrentUser()),
        t = (0, i.bG)([a.A], () => a.A.getPremiumTypeSubscription());
    if (!(0, i.bG)([a.A], () => a.A.hasFetchedSubscriptions()) && (0, l.ki)(e)) return null;
    let { isEligible: n, reason: o } = (0, s.ij)(e, t);
    return { isEligible: n, state: (0, s.P3)(o), reason: o };
}
