n.d(t, { Z: () => a }), n(388685);
var r = n(473749),
    i = n(907331);
function a(e) {
    let { wishlistId: t, onAction: n, productLines: a } = e,
        [o, s] = (0, r.useState)(!1),
        l = (0, r.useCallback)(
            (e) => {
                e &&
                    null != t &&
                    (n({
                        action: "VIEW_WISHLIST",
                        wishlistId: t,
                        productLines: null != a ? a : void 0,
                    }),
                    s(!0));
            },
            [t, n, a],
        );
    return (0, i.O)(l, void 0, null != t && !o);
}
