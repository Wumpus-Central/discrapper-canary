var i = n(855986),
    a = n(287809),
    l = n(166403),
    r = n(474090),
    s = n(721157);
n.d(
    t,
    {},
    {
        N: function () {
            let e = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
                t = (0, i.bG)([l.A], () => l.A.getPremiumTypeSubscription());
            if (!(0, i.bG)([l.A], () => l.A.hasFetchedSubscriptions()) && (0, r.ki)(e)) return null;
            let { isEligible: n, reason: o } = (0, s.ij)(e, t);
            return { isEligible: n, state: (0, s.P3)(o), reason: o };
        },
    },
);
