r.d(t, {
    A: () => x,
});
var n = r(627968);
r(64700);
var i = r(311907),
    l = r(397927),
    a = r(775602),
    s = r(920064),
    o = r(674658),
    c = r(898461),
    u = r(287809),
    d = r(504721),
    m = r(513653),
    p = r(180391);

function g(e) {
    let { skuId: t, size: r, src: d, className: m } = e,
        p = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        g = (0, i.bG)([a.A], () => a.A.useReducedMotion),
        { product: x, isFetching: C } = (0, o.q)(t);
    if (C || null == x)
        return (0, n.jsx)(l.y$y, {
            type: l.tVU.PULSING_ELLIPSIS,
        });
    let f = x.items[0];
    if (null == f || !(0, c.T)(f)) return null;
    let T = (0, s.A)(f.asset, r, !g);
    return (0, n.jsx)(l.JsQ, {
        "aria-label": null == p ? void 0 : p.username,
        size: r,
        className: m,
        src: null != d ? d : null == p ? void 0 : p.getAvatarURL(void 0, (0, l.FT9)(r), !g),
        avatarDecoration: T,
    });
}

function x(e) {
    let { maxRewardImageSrc: t, claimableRewards: r, size: s, imageScaling: o = 1.5 } = e,
        c = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        x = (0, i.bG)([a.A], () => a.A.useReducedMotion),
        C = (0, l.FT9)(s);
    return r.length > 0
        ? (0, n.jsx)("img", {
              alt: "",
              src: t,
              style: {
                  height: C * o,
              },
          })
        : (0, n.jsxs)("div", {
              className: d.kL,
              children: [
                  (1 === r.length || 2 === r.length) &&
                      (0, n.jsx)(g, {
                          skuId: r[0],
                          size: s,
                          className: d.M8,
                          src: 1 === r.length ? (null == c ? void 0 : c.getAvatarURL(void 0, (0, l.FT9)(s), !x)) : p,
                      }),
                  2 === r.length &&
                      (0, n.jsx)("div", {
                          style: {
                              marginRight: -Math.round(0.321 * C),
                          },
                          children: (0, n.jsx)(g, {
                              skuId: r[1],
                              size: s,
                              src: m,
                          }),
                      }),
              ],
          });
}
