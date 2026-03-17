"use strict";
n.d(t, { _: () => a });
var r = n(627968),
    i = n(139146),
    s = n(486318);
function a(e) {
    let { sku: t, ...n } = e;
    return (0, r.jsx)(i._, { skuId: t.id, productName: t.name, nuxGraphic: (0, s.N)(t), ...n });
}
