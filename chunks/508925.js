n.d(t, { b: () => c });
var r = n(200651),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(755419),
    l = n(992379);
let c = (e) => {
    let { product: t, className: n } = e,
        i = t.skuId,
        c = s.KO[i];
    if (null != c) {
        let { size: e } = a.ny6[a.EFr.SIZE_152];
        return (0, r.jsxs)('div', {
            className: o()(l.externalProductWrapper, n),
            children: [
                void 0 !== c.asset &&
                    (0, r.jsx)('img', {
                        src: c.asset,
                        alt: t.name,
                        height: e
                    }),
                void 0 !== c.renderAsset && c.renderAsset()
            ]
        });
    }
    return null;
};
