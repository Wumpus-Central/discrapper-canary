n.d(t, { b: () => o });
var a = n(54381),
    l = n(120356),
    r = n.n(l),
    i = n(755419),
    s = n(200192);
let o = (e) => {
    let { product: t, animationState: n, className: l } = e,
        o = i.K[t.skuId];
    return null != o
        ? (0, a.jsx)("div", {
              className: r()(s.externalProductWrapper, l),
              children:
                  null != o.render &&
                  o.render({
                      animationState: n,
                      alt: t.name,
                  }),
          })
        : null;
};
