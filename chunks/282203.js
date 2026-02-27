t.d(l, { A: () => o });
var r = t(627968);
let o = (e) => {
    let { skuIds: l = [], skuBlock: t, componentMap: o } = e,
        n = o[t];
    return null == n ? null : l.map((e, l) => (0, r.jsx)(n, { skuId: e, productId: e }, `${e}-${l}`));
};
