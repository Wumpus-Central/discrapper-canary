i.d(l, { A: () => t });
var a = i(582128),
    s = i(172218);
function t(e) {
    let { wishlistId: l, onAction: i, productLines: t } = e,
        [n, r] = (0, a.useState)(!1),
        d = (0, a.useCallback)(
            (e) => {
                e && null != l && (i({ action: "VIEW_WISHLIST", wishlistId: l, productLines: t ?? void 0 }), r(!0));
            },
            [l, i, t],
        );
    return (0, s.K)(d, void 0, null != l && !n);
}
