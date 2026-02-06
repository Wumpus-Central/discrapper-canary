"use strict";
n.d(t, { A: () => i });
var r = n(627968);
let i = (e) => {
    let { skuIds: t = [], skuBlock: n, componentMap: i } = e,
        a = i[n];
    return null == a ? null : t.map((e, t) => (0, r.jsx)(a, { skuId: e }, `${e}-${t}`));
};
