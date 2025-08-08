n.d(t, { b: () => s });
var r = n(255367),
    l = n(120356),
    a = n.n(l),
    i = n(755419),
    o = n(157570);
let s = (e) => {
    let { product: t, animationState: n, className: l } = e,
        s = i.K[t.skuId];
    return null != s
        ? (0, r.jsx)("div", {
              className: a()(o.externalProductWrapper, l),
              children:
                  null != s.render &&
                  s.render({
                      animationState: n,
                      alt: t.name,
                  }),
          })
        : null;
};
