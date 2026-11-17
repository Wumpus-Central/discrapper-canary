var r = n(477900);
n(582128);
var i = n(855986),
    l = n(289873),
    a = n(97808),
    s = n(778712),
    o = n(775602),
    c = n(912140),
    u = n(674658),
    m = n(898461),
    d = n(287809),
    g = n(689123),
    I = n(513653),
    x = n(180391);
function T(e) {
    let { skuId: t, size: n, src: g, className: I } = e,
        x = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
        T = (0, i.bG)([o.Ay], () => o.Ay.useReducedMotion),
        { product: p, isFetching: h } = (0, u.q)(t);
    if (h || null == p) return (0, r.jsx)(l.y, { type: l.t.PULSING_ELLIPSIS });
    let f = p.items[0];
    if (null == f || !(0, m.T)(f)) return null;
    let j = (0, c.A)({ legacyAssetId: f.asset, skuId: f.skuId, size: n, canAnimate: !T });
    return (0, r.jsx)(a.Js, {
        "aria-label": x?.username,
        size: n,
        className: I,
        src: g ?? x?.getAvatarURL(void 0, (0, s.FT)(n), !T),
        avatarDecoration: j,
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { maxRewardImageSrc: t, claimableRewards: n, size: l, imageScaling: a = 1.5 } = e,
                c = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
                u = (0, i.bG)([o.Ay], () => o.Ay.useReducedMotion),
                m = (0, s.FT)(l);
            return n.length > 0
                ? (0, r.jsx)("img", { className: g.Sl, alt: "", src: t, style: { height: m * a } })
                : (0, r.jsxs)("div", {
                      className: g.kL,
                      children: [
                          (1 === n.length || 2 === n.length) &&
                              (0, r.jsx)(T, {
                                  skuId: n[0],
                                  size: l,
                                  className: g.M8,
                                  src: 1 === n.length ? c?.getAvatarURL(void 0, (0, s.FT)(l), !u) : x,
                              }),
                          2 === n.length &&
                              (0, r.jsx)("div", {
                                  style: { marginRight: -Math.round(0.321 * m) },
                                  children: (0, r.jsx)(T, { skuId: n[1], size: l, src: I }),
                              }),
                      ],
                  });
        },
    },
);
