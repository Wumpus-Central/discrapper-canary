r.d(t, { b: () => s });
var n = r(255367),
    a = r(120356),
    l = r.n(a),
    i = r(755419),
    o = r(157570);
let s = (e) => {
    let { product: t, animationState: r, className: a } = e,
        s = i.K[t.skuId];
    return null != s
        ? (0, n.jsx)('div', {
              className: l()(o.externalProductWrapper, a),
              children:
                  null != s.render &&
                  s.render({
                      animationState: r,
                      alt: t.name
                  })
          })
        : null;
};
