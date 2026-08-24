i.d(s, { A: () => t });
var a = i(582128),
    n = i(172218);
function t(e) {
    let { wishlistId: s, onAction: i, productLines: t } = e,
        [l, r] = (0, a.useState)(!1),
        u = (0, a.useCallback)(
            (e) => {
                e && null != s && (i({ action: "VIEW_WISHLIST", wishlistId: s, productLines: t ?? void 0 }), r(!0));
            },
            [s, i, t],
        );
    return (0, n.K)(u, void 0, null != s && !l);
}
