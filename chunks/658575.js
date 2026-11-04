var i = n(855986),
    a = n(587895),
    l = n(212534),
    o = n(851767);
n.d(
    t,
    {},
    {
        G: function (e) {
            return (0, i.bG)(
                [a.A, o.A, l.A],
                () =>
                    a.A.getApplication(e)?.storefront_available ??
                    o.A.getUserProfile(e)?.application?.storefront_available ??
                    l.A.getApplication(e)?.storefront_available ??
                    !1,
                [e],
            );
        },
    },
);
