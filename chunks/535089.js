var l = n(582128),
    i = n(172218);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { wishlistId: t, onAction: n, productLines: r } = e,
                [u, a] = (0, l.useState)(!1),
                s = (0, l.useCallback)(
                    (e) => {
                        e &&
                            null != t &&
                            (n({ action: "VIEW_WISHLIST", wishlistId: t, productLines: r ?? void 0 }), a(!0));
                    },
                    [t, n, r],
                );
            return (0, i.K)(s, void 0, null != t && !u);
        },
    },
);
