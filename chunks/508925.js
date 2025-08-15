r.d(t, { b: () => s });
var n = r(951288),
    l = r(120356),
    a = r.n(l),
    i = r(755419),
    o = r(200192);
let s = (e) => {
    let { product: t, animationState: r, className: l } = e,
        s = i.K[t.skuId];
    return null != s
        ? (0, n.jsx)("div", {
              className: a()(o.externalProductWrapper, l),
              children:
                  null != s.render &&
                  s.render({
                      animationState: r,
                      alt: t.name,
                  }),
          })
        : null;
};
