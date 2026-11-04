var u = r(855986),
    s = r(287809),
    d = r(474090),
    i = r(682901);
r.d(
    t,
    {},
    {
        L: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.PremiumTypes.TIER_2;
            return (0, u.bG)([s.default], () => {
                let t = s.default.getCurrentUser();
                return (0, d.YE)(t, e);
            });
        },
    },
);
