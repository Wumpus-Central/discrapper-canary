n.d(t, { Z: () => l }), n(388685);
var r = n(473749),
    i = n(907331);
function l(e) {
    let { wishlistId: t, onAction: n } = e,
        [l, o] = (0, r.useState)(!1),
        a = (0, r.useCallback)(
            (e) => {
                e &&
                    null != t &&
                    (n({
                        action: "VIEW_WISHLIST",
                        wishlistId: t,
                        skuId: null,
                    }),
                    o(!0));
            },
            [n, t],
        );
    return (0, i.O)(a, void 0, null != t && !l);
}
