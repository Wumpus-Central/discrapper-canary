n.d(t, { A: () => I });
var r = n(477900);
n(582128);
var l = n(17928),
    i = n(289873),
    a = n(97808),
    s = n(778712),
    o = n(775602),
    c = n(912140),
    u = n(674658),
    d = n(898461),
    m = n(287809),
    g = n(689123),
    x = n(513653),
    T = n(180391);
function p(e) {
    let { skuId: t, size: n, src: g, className: x } = e,
        T = (0, l.bG)([m.default], () => m.default.getCurrentUser()),
        p = (0, l.bG)([o.Ay], () => o.Ay.useReducedMotion),
        { product: I, isFetching: h } = (0, u.q)(t);
    if (h || null == I) return (0, r.jsx)(i.y, { type: i.t.PULSING_ELLIPSIS });
    let f = I.items[0];
    if (null == f || !(0, d.T)(f)) return null;
    let j = (0, c.A)({ legacyAssetId: f.asset, skuId: f.skuId, size: n, canAnimate: !p });
    return (0, r.jsx)(a.Js, {
        "aria-label": T?.username,
        size: n,
        className: x,
        src: g ?? T?.getAvatarURL(void 0, (0, s.FT)(n), !p),
        avatarDecoration: j,
    });
}
function I(e) {
    let { maxRewardImageSrc: t, claimableRewards: n, size: i, imageScaling: a = 1.5 } = e,
        c = (0, l.bG)([m.default], () => m.default.getCurrentUser()),
        u = (0, l.bG)([o.Ay], () => o.Ay.useReducedMotion),
        d = (0, s.FT)(i);
    return n.length > 0
        ? (0, r.jsx)("img", { className: g.Sl, alt: "", src: t, style: { height: d * a } })
        : (0, r.jsxs)("div", {
              className: g.kL,
              children: [
                  (1 === n.length || 2 === n.length) &&
                      (0, r.jsx)(p, {
                          skuId: n[0],
                          size: i,
                          className: g.M8,
                          src: 1 === n.length ? c?.getAvatarURL(void 0, (0, s.FT)(i), !u) : T,
                      }),
                  2 === n.length &&
                      (0, r.jsx)("div", {
                          style: { marginRight: -Math.round(0.321 * d) },
                          children: (0, r.jsx)(p, { skuId: n[1], size: i, src: x }),
                      }),
              ],
          });
}
