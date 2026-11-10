var i = n(287809),
    a = n(693369),
    r = n(412260),
    l = n(891786);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            if (!(0, a.Uy)(t)) return null;
            let [n] = r.A.getPromotionsByPartner(e).oneTime;
            if (null == n) return null;
            let s = i.default.getCurrentUser(),
                o = new Date();
            return (0, l.A)(
                n.marketingComponents.filter((e) => (0, a.a9)(e, t)),
                o,
                (e) => null != s && e.isIncludedInRollout(s.id, o),
            );
        },
    },
);
