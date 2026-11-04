var n = l(855986),
    r = l(832163);
l.d(
    e,
    {},
    {
        A: function (t) {
            let { applicationId: e, guildId: l } = t;
            return (0, n.bG)(
                [r.A],
                () =>
                    null != e
                        ? r.A.getStorefrontDataForApplicationId(e)
                        : null != l
                          ? r.A.getStorefrontData(l)
                          : void 0,
                [e, l],
            );
        },
    },
);
