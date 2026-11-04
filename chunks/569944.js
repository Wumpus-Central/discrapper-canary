var s = n(260509),
    a = n(488926),
    t = n(652215);
n.d(
    l,
    {},
    {
        c: function (e, l) {
            return (
                !!((0, s.bM)(e, l) || a.$3({ permission: t.xBc.ADMINISTRATOR, context: e, user: l })) ||
                (a.$3({ permission: t.xBc.MANAGE_GUILD, context: e, user: l }) &&
                    a.$3({ permission: t.xBc.MANAGE_ROLES, context: e, user: l }))
            );
        },
    },
);
