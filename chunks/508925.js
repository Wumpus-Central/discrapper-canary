r.d(t, { b: () => o });
var n = r(54381),
    a = r(120356),
    i = r.n(a),
    s = r(755419),
    l = r(669790);
let o = (e) => {
    let { product: t, animationState: r, className: a } = e,
        o = s.K[t.skuId];
    return null != o
        ? (0, n.jsx)("div", {
              className: i()(l.externalProductWrapper, a),
              children:
                  null != o.render &&
                  o.render({
                      animationState: r,
                      alt: t.name,
                  }),
          })
        : null;
};
