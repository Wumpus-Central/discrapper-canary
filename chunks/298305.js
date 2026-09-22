n.d(t, { A: () => I });
var r = n(477900);
n(582128);
var l = n(17928),
    i = n(289873),
    s = n(97808),
    a = n(778712),
    o = n(775602),
    c = n(912140),
    u = n(674658),
    d = n(898461),
    g = n(287809),
    m = n(689123),
    h = n(513653),
    x = n(180391);
function f(e) {
    let { skuId: t, size: n, src: m, className: h } = e,
        x = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
        f = (0, l.bG)([o.Ay], () => o.Ay.useReducedMotion),
        { product: I, isFetching: p } = (0, u.q)(t);
    if (p || null == I) return (0, r.jsx)(i.y, { type: i.t.PULSING_ELLIPSIS });
    let T = I.items[0];
    if (null == T || !(0, d.T)(T)) return null;
    let C = (0, c.A)({ legacyAssetId: T.asset, skuId: T.skuId, size: n, canAnimate: !f });
    return (0, r.jsx)(s.Js, {
        "aria-label": x?.username,
        size: n,
        className: h,
        src: m ?? x?.getAvatarURL(void 0, (0, a.FT)(n), !f),
        avatarDecoration: C,
    });
}
function I(e) {
    let { maxRewardImageSrc: t, claimableRewards: n, size: i, imageScaling: s = 1.5 } = e,
        c = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
        u = (0, l.bG)([o.Ay], () => o.Ay.useReducedMotion),
        d = (0, a.FT)(i);
    return n.length > 0
        ? (0, r.jsx)("img", { className: m.Sl, alt: "", src: t, style: { height: d * s } })
        : (0, r.jsxs)("div", {
              className: m.kL,
              children: [
                  (1 === n.length || 2 === n.length) &&
                      (0, r.jsx)(f, {
                          skuId: n[0],
                          size: i,
                          className: m.M8,
                          src: 1 === n.length ? c?.getAvatarURL(void 0, (0, a.FT)(i), !u) : x,
                      }),
                  2 === n.length &&
                      (0, r.jsx)("div", {
                          style: { marginRight: -Math.round(0.321 * d) },
                          children: (0, r.jsx)(f, { skuId: n[1], size: i, src: h }),
                      }),
              ],
          });
}
