var i = n(855986),
    r = n(832163);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { applicationId: t, guildId: n } = e;
            return (0, i.bG)(
                [r.A],
                () =>
                    null != t
                        ? r.A.getStorefrontDataForApplicationId(t)
                        : null != n
                          ? r.A.getStorefrontData(n)
                          : void 0,
                [t, n],
            );
        },
    },
);
