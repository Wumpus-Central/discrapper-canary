t.d(n, { b: () => s });
var r = t(54381),
    l = t(120356),
    i = t.n(l),
    a = t(755419),
    o = t(200192);
let s = (e) => {
    let { product: n, animationState: t, className: l } = e,
        s = a.K[n.skuId];
    return null != s
        ? (0, r.jsx)("div", {
              className: i()(o.externalProductWrapper, l),
              children:
                  null != s.render &&
                  s.render({
                      animationState: t,
                      alt: n.name,
                  }),
          })
        : null;
};
