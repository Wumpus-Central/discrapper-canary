i.d(l, { A: () => a });
var t = i(582128),
    n = i(172218);
function a(e) {
    let { wishlistId: l, onAction: i, productLines: a } = e,
        [s, r] = (0, t.useState)(!1),
        d = (0, t.useCallback)(
            (e) => {
                e && null != l && (i({ action: "VIEW_WISHLIST", wishlistId: l, productLines: a ?? void 0 }), r(!0));
            },
            [l, i, a],
        );
    return (0, n.K)(d, void 0, null != l && !s);
}
