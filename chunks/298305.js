var r = n(477900);
n(582128);
var i = n(855986),
    s = n(289873),
    a = n(97808),
    l = n(778712),
    o = n(775602),
    c = n(912140),
    g = n(674658),
    u = n(898461),
    d = n(287809),
    m = n(689123),
    x = n(513653),
    h = n(180391);
function T(t) {
    let { skuId: e, size: n, src: m, className: x } = t,
        h = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
        T = (0, i.bG)([o.Ay], () => o.Ay.useReducedMotion),
        { product: p, isFetching: I } = (0, g.q)(e);
    if (I || null == p) return (0, r.jsx)(s.y, { type: s.t.PULSING_ELLIPSIS });
    let f = p.items[0];
    if (null == f || !(0, u.T)(f)) return null;
    let C = (0, c.A)({ legacyAssetId: f.asset, skuId: f.skuId, size: n, canAnimate: !T });
    return (0, r.jsx)(a.Js, {
        "aria-label": h?.username,
        size: n,
        className: x,
        src: m ?? h?.getAvatarURL(void 0, (0, l.FT)(n), !T),
        avatarDecoration: C,
    });
}
n.d(
    e,
    {},
    {
        A: function (t) {
            let { maxRewardImageSrc: e, claimableRewards: n, size: s, imageScaling: a = 1.5 } = t,
                c = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
                g = (0, i.bG)([o.Ay], () => o.Ay.useReducedMotion),
                u = (0, l.FT)(s);
            return n.length > 0
                ? (0, r.jsx)("img", { className: m.Sl, alt: "", src: e, style: { height: u * a } })
                : (0, r.jsxs)("div", {
                      className: m.kL,
                      children: [
                          (1 === n.length || 2 === n.length) &&
                              (0, r.jsx)(T, {
                                  skuId: n[0],
                                  size: s,
                                  className: m.M8,
                                  src: 1 === n.length ? c?.getAvatarURL(void 0, (0, l.FT)(s), !g) : h,
                              }),
                          2 === n.length &&
                              (0, r.jsx)("div", {
                                  style: { marginRight: -Math.round(0.321 * u) },
                                  children: (0, r.jsx)(T, { skuId: n[1], size: s, src: x }),
                              }),
                      ],
                  });
        },
    },
);
