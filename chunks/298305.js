n.d(t, { A: () => I });
var r = n(627968);
n(64700);
var i = n(17928),
    l = n(289873),
    s = n(97808),
    a = n(778712),
    o = n(775602),
    c = n(912140),
    u = n(674658),
    d = n(898461),
    m = n(287809),
    g = n(786353),
    x = n(513653),
    T = n(180391);
function f(e) {
    let { skuId: t, size: n, src: g, className: x } = e,
        T = (0, i.bG)([m.default], () => m.default.getCurrentUser()),
        f = (0, i.bG)([o.Ay], () => o.Ay.useReducedMotion),
        { product: I, isFetching: h } = (0, u.q)(t);
    if (h || null == I) return (0, r.jsx)(l.y, { type: l.t.PULSING_ELLIPSIS });
    let p = I.items[0];
    if (null == p || !(0, d.T)(p)) return null;
    let E = (0, c.A)({ legacyAssetId: p.asset, skuId: p.skuId, size: n, canAnimate: !f });
    return (0, r.jsx)(s.Js, {
        "aria-label": T?.username,
        size: n,
        className: x,
        src: g ?? T?.getAvatarURL(void 0, (0, a.FT)(n), !f),
        avatarDecoration: E,
    });
}
function I(e) {
    let { maxRewardImageSrc: t, claimableRewards: n, size: l, imageScaling: s = 1.5 } = e,
        c = (0, i.bG)([m.default], () => m.default.getCurrentUser()),
        u = (0, i.bG)([o.Ay], () => o.Ay.useReducedMotion),
        d = (0, a.FT)(l);
    return n.length > 0
        ? (0, r.jsx)("img", { alt: "", src: t, style: { height: d * s } })
        : (0, r.jsxs)("div", {
              className: g.kL,
              children: [
                  (1 === n.length || 2 === n.length) &&
                      (0, r.jsx)(f, {
                          skuId: n[0],
                          size: l,
                          className: g.M8,
                          src: 1 === n.length ? c?.getAvatarURL(void 0, (0, a.FT)(l), !u) : T,
                      }),
                  2 === n.length &&
                      (0, r.jsx)("div", {
                          style: { marginRight: -Math.round(0.321 * d) },
                          children: (0, r.jsx)(f, { skuId: n[1], size: l, src: x }),
                      }),
              ],
          });
}
