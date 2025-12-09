n.d(t, { b: () => o });
var a = n(54381),
    r = n(120356),
    i = n.n(r),
    l = n(755419),
    s = n(200192);
let o = (e) => {
    let { product: t, animationState: n, className: r } = e,
        o = l.K[t.skuId];
    return null != o
        ? (0, a.jsx)("div", {
              className: i()(s.externalProductWrapper, r),
              children:
                  null != o.render &&
                  o.render({
                      animationState: n,
                      alt: t.name,
                  }),
          })
        : null;
};
