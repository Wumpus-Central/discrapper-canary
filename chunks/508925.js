r.d(t, { b: () => s });
var n = r(255367),
    l = r(120356),
    i = r.n(l),
    a = r(755419),
    o = r(157570);
let s = (e) => {
    let { product: t, animationState: r, className: l } = e,
        s = a.K[t.skuId];
    return null != s
        ? (0, n.jsx)('div', {
              className: i()(o.externalProductWrapper, l),
              children:
                  null != s.render &&
                  s.render({
                      animationState: r,
                      alt: t.name
                  })
          })
        : null;
};
