n.d(t, { A: () => a });
var i = n(64700),
    l = n(172218);
function a(e) {
    let { wishlistId: t, onAction: n, productLines: a } = e,
        [s, r] = (0, i.useState)(!1),
        o = (0, i.useCallback)(
            (e) => {
                e && null != t && (n({ action: "VIEW_WISHLIST", wishlistId: t, productLines: a ?? void 0 }), r(!0));
            },
            [t, n, a],
        );
    return (0, l.K)(o, void 0, null != t && !s);
}
