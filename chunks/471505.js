"use strict";
n.d(t, { G: () => l });
var r = n(64700),
    i = n(152472),
    a = n(486318);
function l(e) {
    let { userId: t, sku: n, location: l, trackButtonClick: s, onError: o } = e,
        { handleToggle: c, ...u } = (0, i.c)({
            userId: t,
            skuId: n.id,
            nuxGraphic: (0, a.N)(n),
            location: l,
            onError: o,
        }),
        d = r.useCallback(async () => {
            s?.(), await c();
        }, [s, c]);
    return { ...u, handleToggle: d };
}
