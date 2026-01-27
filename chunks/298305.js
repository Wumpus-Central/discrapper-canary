n.d(t, {
    A: () => g,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(775602),
    o = n(920064),
    l = n(674658),
    c = n(898461),
    u = n(287809),
    d = n(504721),
    f = n(513653),
    p = n(180391);
let _ = 1.5,
    h = 0.321;

function m(e) {
    let { skuId: t, size: n, src: d, className: f } = e,
        p = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        _ = (0, i.bG)([s.A], () => s.A.useReducedMotion),
        { product: h, isFetching: m } = (0, l.q)(t);
    if (m || null == h)
        return (0, r.jsx)(a.y$y, {
            type: a.tVU.PULSING_ELLIPSIS,
        });
    let g = h.items[0];
    if (null == g || !(0, c.T)(g)) return null;
    let E = (0, o.A)(g.asset, n, !_);
    return (0, r.jsx)(a.JsQ, {
        "aria-label": null == p ? void 0 : p.username,
        size: n,
        className: f,
        src: null != d ? d : null == p ? void 0 : p.getAvatarURL(void 0, (0, a.FT9)(n), !_),
        avatarDecoration: E,
    });
}

function g(e) {
    let { maxRewardImageSrc: t, claimableRewards: n, size: o, imageScaling: l = _ } = e,
        c = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        g = (0, i.bG)([s.A], () => s.A.useReducedMotion),
        E = (0, a.FT9)(o),
        y = {
            height: E * l,
        };
    return n.length > 0
        ? (0, r.jsx)("img", {
              alt: "",
              src: t,
              style: y,
          })
        : (0, r.jsxs)("div", {
              className: d.kL,
              children: [
                  (1 === n.length || 2 === n.length) &&
                      (0, r.jsx)(m, {
                          skuId: n[0],
                          size: o,
                          className: d.M8,
                          src: 1 === n.length ? (null == c ? void 0 : c.getAvatarURL(void 0, (0, a.FT9)(o), !g)) : p,
                      }),
                  2 === n.length &&
                      (0, r.jsx)("div", {
                          style: {
                              marginRight: -Math.round(E * h),
                          },
                          children: (0, r.jsx)(m, {
                              skuId: n[1],
                              size: o,
                              src: f,
                          }),
                      }),
              ],
          });
}
