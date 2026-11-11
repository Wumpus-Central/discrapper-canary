var i = n(855986),
    r = n(287809),
    a = n(855531),
    s = n(773527);
n.d(
    t,
    {},
    {
        $X: function (e, t) {
            return (0, s.YY)(e, r.default.getCurrentUser()?.premiumType, t);
        },
        FL: function (e, t) {
            return (0, s.U5)({
                perk: e,
                premiumType: r.default.getCurrentUser()?.premiumType,
                isCampaignEnabled: (0, a.iA)(t),
            });
        },
        Lz: function (e, t) {
            let n = (0, a.dp)(t),
                l = (0, i.bG)([r.default], () => r.default.getCurrentUser()?.premiumType);
            return (0, s.U5)({ perk: e, premiumType: l, isCampaignEnabled: n });
        },
    },
);
