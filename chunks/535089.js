var i = l(582128),
    a = l(172218);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { wishlistId: t, onAction: l, productLines: s } = e,
                [n, r] = (0, i.useState)(!1),
                d = (0, i.useCallback)(
                    (e) => {
                        e &&
                            null != t &&
                            (l({ action: "VIEW_WISHLIST", wishlistId: t, productLines: s ?? void 0 }), r(!0));
                    },
                    [t, l, s],
                );
            return (0, a.K)(d, void 0, null != t && !n);
        },
    },
);
