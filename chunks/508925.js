n.d(t, { b: () => s });
var r = n(951288),
    l = n(120356),
    i = n.n(l),
    a = n(755419),
    o = n(200192);
let s = (e) => {
    let { product: t, animationState: n, className: l } = e,
        s = a.K[t.skuId];
    return null != s
        ? (0, r.jsx)("div", {
              className: i()(o.externalProductWrapper, l),
              children:
                  null != s.render &&
                  s.render({
                      animationState: n,
                      alt: t.name,
                  }),
          })
        : null;
};
