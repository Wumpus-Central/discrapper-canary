n.d(s, { A: () => i });
var l = n(582128),
    t = n(172218);
function i(e) {
    let { wishlistId: s, onAction: n, productLines: i } = e,
        [a, r] = (0, l.useState)(!1),
        u = (0, l.useCallback)(
            (e) => {
                e && null != s && (n({ action: "VIEW_WISHLIST", wishlistId: s, productLines: i ?? void 0 }), r(!0));
            },
            [s, n, i],
        );
    return (0, t.K)(u, void 0, null != s && !a);
}
