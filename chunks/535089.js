"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    s = n(172218);
function l(e) {
    let { wishlistId: t, onAction: n, productLines: l } = e,
        [a, r] = (0, i.useState)(!1),
        o = (0, i.useCallback)(
            (e) => {
                e && null != t && (n({ action: "VIEW_WISHLIST", wishlistId: t, productLines: l ?? void 0 }), r(!0));
            },
            [t, n, l],
        );
    return (0, s.K)(o, void 0, null != t && !a);
}
