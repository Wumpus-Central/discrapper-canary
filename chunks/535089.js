t.d(l, { A: () => i });
var s = t(582128),
    n = t(172218);
function i(e) {
    let { wishlistId: l, onAction: t, productLines: i } = e,
        [a, r] = (0, s.useState)(!1),
        u = (0, s.useCallback)(
            (e) => {
                e && null != l && (t({ action: "VIEW_WISHLIST", wishlistId: l, productLines: i ?? void 0 }), r(!0));
            },
            [l, t, i],
        );
    return (0, n.K)(u, void 0, null != l && !a);
}
