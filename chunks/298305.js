n.d(e, { A: () => f });
var r = n(477900);
n(582128);
var i = n(17928),
    l = n(289873),
    a = n(97808),
    s = n(778712),
    o = n(775602),
    c = n(912140),
    g = n(674658),
    u = n(898461),
    m = n(287809),
    d = n(689123),
    x = n(513653),
    T = n(180391);
function I(t) {
    let { skuId: e, size: n, src: d, className: x } = t,
        T = (0, i.bG)([m.default], () => m.default.getCurrentUser()),
        I = (0, i.bG)([o.Ay], () => o.Ay.useReducedMotion),
        { product: f, isFetching: p } = (0, g.q)(e);
    if (p || null == f) return (0, r.jsx)(l.y, { type: l.t.PULSING_ELLIPSIS });
    let h = f.items[0];
    if (null == h || !(0, u.T)(h)) return null;
    let C = (0, c.A)({ legacyAssetId: h.asset, skuId: h.skuId, size: n, canAnimate: !I });
    return (0, r.jsx)(a.Js, {
        "aria-label": T?.username,
        size: n,
        className: x,
        src: d ?? T?.getAvatarURL(void 0, (0, s.FT)(n), !I),
        avatarDecoration: C,
    });
}
function f(t) {
    let { maxRewardImageSrc: e, claimableRewards: n, size: l, imageScaling: a = 1.5 } = t,
        c = (0, i.bG)([m.default], () => m.default.getCurrentUser()),
        g = (0, i.bG)([o.Ay], () => o.Ay.useReducedMotion),
        u = (0, s.FT)(l);
    return n.length > 0
        ? (0, r.jsx)("img", { className: d.Sl, alt: "", src: e, style: { height: u * a } })
        : (0, r.jsxs)("div", {
              className: d.kL,
              children: [
                  (1 === n.length || 2 === n.length) &&
                      (0, r.jsx)(I, {
                          skuId: n[0],
                          size: l,
                          className: d.M8,
                          src: 1 === n.length ? c?.getAvatarURL(void 0, (0, s.FT)(l), !g) : T,
                      }),
                  2 === n.length &&
                      (0, r.jsx)("div", {
                          style: { marginRight: -Math.round(0.321 * u) },
                          children: (0, r.jsx)(I, { skuId: n[1], size: l, src: x }),
                      }),
              ],
          });
}
