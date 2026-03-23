"use strict";
n.d(t, { G: () => a });
var r = n(64700),
    i = n(574499),
    s = n(486318);
function a(e) {
    let { userId: t, sku: n, location: a, trackButtonClick: o, onError: l } = e,
        { handleToggle: u, ...c } = (0, i.c)({
            userId: t,
            skuId: n.id,
            nuxGraphic: (0, s.N)(n),
            location: a,
            onError: l,
        }),
        d = r.useCallback(async () => {
            o?.(), await u();
        }, [o, u]);
    return { ...c, handleToggle: d };
}
