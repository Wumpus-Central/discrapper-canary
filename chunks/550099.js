var i = n(517352),
    a = n(287809),
    r = n(693369),
    l = n(412260),
    o = n(891786);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            if (!(0, r.U)(t)) return null;
            let n = i.bt[t],
                [s] = l.A.getPromotionsByPartner(e).oneTime;
            if (null == s) return null;
            let d = a.default.getCurrentUser(),
                c = new Date();
            return (0, o.A)(
                s.marketingComponents.filter((e) => e.properties.properties.oneofKind === n),
                c,
                (e) => null != d && e.isIncludedInRollout(d.id, c),
            );
        },
    },
);
