r.d(t, { A: () => h });
var i = r(627968);
r(64700);
var n = r(17928),
    a = r(289873),
    s = r(97808),
    l = r(778712),
    o = r(775602),
    c = r(912140),
    d = r(674658),
    u = r(898461),
    m = r(287809),
    g = r(476630),
    x = r(513653),
    p = r(180391);
function T(e) {
    let { skuId: t, size: r, src: g, className: x } = e,
        p = (0, n.bG)([m.default], () => m.default.getCurrentUser()),
        T = (0, n.bG)([o.A], () => o.A.useReducedMotion),
        { product: h, isFetching: I } = (0, d.q)(t);
    if (I || null == h) return (0, i.jsx)(a.y, { type: a.t.PULSING_ELLIPSIS });
    let f = h.items[0];
    if (null == f || !(0, u.T)(f)) return null;
    let j = (0, c.A)({ legacyAssetId: f.asset, skuId: f.skuId, size: r, canAnimate: !T });
    return (0, i.jsx)(s.Js, {
        "aria-label": p?.username,
        size: r,
        className: x,
        src: g ?? p?.getAvatarURL(void 0, (0, l.FT)(r), !T),
        avatarDecoration: j,
    });
}
function h(e) {
    let { maxRewardImageSrc: t, claimableRewards: r, size: a, imageScaling: s = 1.5 } = e,
        c = (0, n.bG)([m.default], () => m.default.getCurrentUser()),
        d = (0, n.bG)([o.A], () => o.A.useReducedMotion),
        u = (0, l.FT)(a);
    return r.length > 0
        ? (0, i.jsx)("img", { alt: "", src: t, style: { height: u * s } })
        : (0, i.jsxs)("div", {
              className: g.kL,
              children: [
                  (1 === r.length || 2 === r.length) &&
                      (0, i.jsx)(T, {
                          skuId: r[0],
                          size: a,
                          className: g.M8,
                          src: 1 === r.length ? c?.getAvatarURL(void 0, (0, l.FT)(a), !d) : p,
                      }),
                  2 === r.length &&
                      (0, i.jsx)("div", {
                          style: { marginRight: -Math.round(0.321 * u) },
                          children: (0, i.jsx)(T, { skuId: r[1], size: a, src: x }),
                      }),
              ],
          });
}
