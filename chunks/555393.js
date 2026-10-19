n.d(t, { N: () => s });
var i = n(17928),
    r = n(287809),
    a = n(166403),
    l = n(474090),
    o = n(236233);
function s() {
    let e = (0, i.bG)([r.default], () => r.default.getCurrentUser()),
        t = (0, i.bG)([a.A], () => a.A.getPremiumTypeSubscription());
    if (!(0, i.bG)([a.A], () => a.A.hasFetchedSubscriptions()) && (0, l.ki)(e)) return null;
    let { isEligible: n, reason: s } = (0, o.ij)(e, t);
    return { isEligible: n, state: (0, o.P3)(s), reason: s };
}
