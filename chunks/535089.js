t.d(s, { A: () => l });
var n = t(582128),
    i = t(172218);
function l(e) {
    let { wishlistId: s, onAction: t, productLines: l } = e,
        [a, r] = (0, n.useState)(!1),
        u = (0, n.useCallback)(
            (e) => {
                e && null != s && (t({ action: "VIEW_WISHLIST", wishlistId: s, productLines: l ?? void 0 }), r(!0));
            },
            [s, t, l],
        );
    return (0, i.K)(u, void 0, null != s && !a);
}
