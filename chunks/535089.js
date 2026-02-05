n.d(t, { A: () => s });
var i = n(64700),
    l = n(172218);
function s(e) {
    let { wishlistId: t, onAction: n, productLines: s } = e,
        [a, r] = (0, i.useState)(!1),
        o = (0, i.useCallback)(
            (e) => {
                e && null != t && (n({ action: "VIEW_WISHLIST", wishlistId: t, productLines: s ?? void 0 }), r(!0));
            },
            [t, n, s],
        );
    return (0, l.K)(o, void 0, null != t && !a);
}
