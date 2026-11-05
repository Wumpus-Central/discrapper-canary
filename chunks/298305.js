var r = n(477900);
n(582128);
var o = n(855986),
    i = n(289873),
    a = n(97808),
    s = n(778712),
    l = n(775602),
    c = n(912140),
    g = n(674658),
    u = n(898461),
    m = n(287809),
    d = n(689123),
    I = n(513653),
    x = n(180391);
function h(t) {
    let { skuId: e, size: n, src: d, className: I } = t,
        x = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
        h = (0, o.bG)([l.Ay], () => l.Ay.useReducedMotion),
        { product: p, isFetching: T } = (0, g.q)(e);
    if (T || null == p) return (0, r.jsx)(i.y, { type: i.t.PULSING_ELLIPSIS });
    let f = p.items[0];
    if (null == f || !(0, u.T)(f)) return null;
    let S = (0, c.A)({ legacyAssetId: f.asset, skuId: f.skuId, size: n, canAnimate: !h });
    return (0, r.jsx)(a.Js, {
        "aria-label": x?.username,
        size: n,
        className: I,
        src: d ?? x?.getAvatarURL(void 0, (0, s.FT)(n), !h),
        avatarDecoration: S,
    });
}
n.d(
    e,
    {},
    {
        A: function (t) {
            let { maxRewardImageSrc: e, claimableRewards: n, size: i, imageScaling: a = 1.5 } = t,
                c = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
                g = (0, o.bG)([l.Ay], () => l.Ay.useReducedMotion),
                u = (0, s.FT)(i);
            return n.length > 0
                ? (0, r.jsx)("img", { className: d.Sl, alt: "", src: e, style: { height: u * a } })
                : (0, r.jsxs)("div", {
                      className: d.kL,
                      children: [
                          (1 === n.length || 2 === n.length) &&
                              (0, r.jsx)(h, {
                                  skuId: n[0],
                                  size: i,
                                  className: d.M8,
                                  src: 1 === n.length ? c?.getAvatarURL(void 0, (0, s.FT)(i), !g) : x,
                              }),
                          2 === n.length &&
                              (0, r.jsx)("div", {
                                  style: { marginRight: -Math.round(0.321 * u) },
                                  children: (0, r.jsx)(h, { skuId: n[1], size: i, src: I }),
                              }),
                      ],
                  });
        },
    },
);
