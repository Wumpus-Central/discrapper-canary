n.d(s, { A: () => l });
var t = n(582128),
    i = n(172218);
function l(e) {
    let { wishlistId: s, onAction: n, productLines: l } = e,
        [a, r] = (0, t.useState)(!1),
        u = (0, t.useCallback)(
            (e) => {
                e && null != s && (n({ action: "VIEW_WISHLIST", wishlistId: s, productLines: l ?? void 0 }), r(!0));
            },
            [s, n, l],
        );
    return (0, i.K)(u, void 0, null != s && !a);
}
