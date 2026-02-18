t.d(r, { A: () => l });
var d = t(627968);
let l = (e) => {
    let { skuIds: r = [], skuBlock: t, componentMap: l } = e,
        c = l[t];
    return null == c ? null : r.map((e, r) => (0, d.jsx)(c, { skuId: e }, `${e}-${r}`));
};
