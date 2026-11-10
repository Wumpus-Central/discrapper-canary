var n = l(582128),
    i = l(172218);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { wishlistId: t, onAction: l, productLines: a } = e,
                [r, s] = (0, n.useState)(!1),
                u = (0, n.useCallback)(
                    (e) => {
                        e &&
                            null != t &&
                            (l({ action: "VIEW_WISHLIST", wishlistId: t, productLines: a ?? void 0 }), s(!0));
                    },
                    [t, l, a],
                );
            return (0, i.K)(u, void 0, null != t && !r);
        },
    },
);
