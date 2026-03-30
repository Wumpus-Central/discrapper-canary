"use strict";
i.d(t, { A: () => a });
var n = i(64700),
    s = i(172218);
function a(e) {
    let { wishlistId: t, onAction: i, productLines: a } = e,
        [l, r] = (0, n.useState)(!1),
        o = (0, n.useCallback)(
            (e) => {
                e && null != t && (i({ action: "VIEW_WISHLIST", wishlistId: t, productLines: a ?? void 0 }), r(!0));
            },
            [t, i, a],
        );
    return (0, s.K)(o, void 0, null != t && !l);
}
