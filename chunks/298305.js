n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(17928),
    l = n(289873),
    s = n(97808),
    a = n(778712),
    o = n(775602),
    c = n(912140),
    u = n(674658),
    m = n(898461),
    d = n(287809),
    g = n(80918),
    x = n(513653),
    T = n(180391);
function I(e) {
    let { skuId: t, size: n, src: g, className: x } = e,
        T = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
        I = (0, i.bG)([o.Ay], () => o.Ay.useReducedMotion),
        { product: p, isFetching: h } = (0, u.q)(t);
    if (h || null == p) return (0, r.jsx)(l.y, { type: l.t.PULSING_ELLIPSIS });
    let f = p.items[0];
    if (null == f || !(0, m.T)(f)) return null;
    let j = (0, c.A)({ legacyAssetId: f.asset, skuId: f.skuId, size: n, canAnimate: !I });
    return (0, r.jsx)(s.Js, {
        "aria-label": T?.username,
        size: n,
        className: x,
        src: g ?? T?.getAvatarURL(void 0, (0, a.FT)(n), !I),
        avatarDecoration: j,
    });
}
function p(e) {
    let { maxRewardImageSrc: t, claimableRewards: n, size: l, imageScaling: s = 1.5 } = e,
        c = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
        u = (0, i.bG)([o.Ay], () => o.Ay.useReducedMotion),
        m = (0, a.FT)(l);
    return n.length > 0
        ? (0, r.jsx)("img", { alt: "", src: t, style: { height: m * s } })
        : (0, r.jsxs)("div", {
              className: g.kL,
              children: [
                  (1 === n.length || 2 === n.length) &&
                      (0, r.jsx)(I, {
                          skuId: n[0],
                          size: l,
                          className: g.M8,
                          src: 1 === n.length ? c?.getAvatarURL(void 0, (0, a.FT)(l), !u) : T,
                      }),
                  2 === n.length &&
                      (0, r.jsx)("div", {
                          style: { marginRight: -Math.round(0.321 * m) },
                          children: (0, r.jsx)(I, { skuId: n[1], size: l, src: x }),
                      }),
              ],
          });
}
