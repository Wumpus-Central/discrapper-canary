r.d(t, { b: () => s });
var n = r(200651),
    l = r(120356),
    i = r.n(l),
    a = r(755419),
    o = r(151108);
let s = (e) => {
    let { product: t, className: r } = e,
        l = t.skuId,
        s = a.K[l];
    return null != s
        ? (0, n.jsx)('div', {
              className: i()(o.externalProductWrapper, r),
              children: (0, n.jsx)('img', {
                  src: s.asset,
                  alt: t.name,
                  height: 152
              })
          })
        : null;
};
