n.d(t, { Z: () => l }), n(388685);
var r = n(473749),
    i = n(907331);
function l(e) {
    let { wishlistId: t, onAction: n, productLines: l } = e,
        [o, a] = (0, r.useState)(!1),
        s = (0, r.useCallback)(
            (e) => {
                e &&
                    null != t &&
                    (n({
                        action: "VIEW_WISHLIST",
                        wishlistId: t,
                        productLines: null != l ? l : void 0,
                    }),
                    a(!0));
            },
            [t, n, l],
        );
    return (0, i.O)(s, void 0, null != t && !o);
}
