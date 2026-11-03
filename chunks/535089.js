i.d(l, { A: () => n });
var a = i(582128),
    s = i(172218);
function n(e) {
    let { wishlistId: l, onAction: i, productLines: n } = e,
        [t, r] = (0, a.useState)(!1),
        d = (0, a.useCallback)(
            (e) => {
                e && null != l && (i({ action: "VIEW_WISHLIST", wishlistId: l, productLines: n ?? void 0 }), r(!0));
            },
            [l, i, n],
        );
    return (0, s.K)(d, void 0, null != l && !t);
}
