"use strict";
n.d(t, { A: () => u, P: () => l });
var r = n(627968);
n(64700);
var i = n(525723),
    s = n(413748),
    a = n(516248),
    o = n(985018);
let l = () => {
    let e = (0, s.t4)((e) => e.selectedSkuId);
    return (0, i.vw)({ skuId: e }) ? o.intl.format(o.t.fsOXXO, {}) : null;
};
function u() {
    let e = l();
    return null == e ? null : (0, r.jsx)(a.A, { message: e });
}
