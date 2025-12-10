r.d(t, { b: () => o });
var n = r(54381),
    i = r(120356),
    a = r.n(i),
    s = r(755419),
    l = r(200192);
let o = (e) => {
    let { product: t, animationState: r, className: i } = e,
        o = s.K[t.skuId];
    return null != o
        ? (0, n.jsx)("div", {
              className: a()(l.externalProductWrapper, i),
              children:
                  null != o.render &&
                  o.render({
                      animationState: r,
                      alt: t.name,
                  }),
          })
        : null;
};
