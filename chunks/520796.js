"use strict";
r.d(t, { A: () => c, P: () => o });
var i = r(627968);
r(64700);
var a = r(94420),
    n = r(525723),
    s = r(516248),
    l = r(985018);
let o = () => {
    let e = (0, a.t4)((e) => e.selectedSkuId);
    return (0, n.vw)({ skuId: e }) ? l.intl.format(l.t.fsOXXO, {}) : null;
};
function c() {
    let e = o();
    return null == e ? null : (0, i.jsx)(s.A, { message: e });
}
