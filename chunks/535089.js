n.d(t, {
    A: () => a,
}),
    n(896048);
var r = n(64700),
    i = n(172218);

function a(e) {
    let { wishlistId: t, onAction: n, productLines: a } = e,
        [s, o] = (0, r.useState)(!1),
        l = (0, r.useCallback)(
            (e) => {
                e &&
                    null != t &&
                    (n({
                        action: "VIEW_WISHLIST",
                        wishlistId: t,
                        productLines: null != a ? a : void 0,
                    }),
                    o(!0));
            },
            [t, n, a],
        );
    return (0, i.K)(l, void 0, null != t && !s);
}
