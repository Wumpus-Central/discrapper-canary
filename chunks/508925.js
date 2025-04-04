n.d(t, { b: () => l });
var r = n(200651),
    i = n(120356),
    o = n.n(i),
    a = n(755419),
    s = n(157570);
let l = (e) => {
    let { product: t, animationState: n, className: i } = e,
        l = a.KO[t.skuId];
    return null != l
        ? (0, r.jsx)('div', {
              className: o()(s.externalProductWrapper, i),
              children:
                  null != l.render &&
                  l.render({
                      animationState: n,
                      alt: t.name
                  })
          })
        : null;
};
