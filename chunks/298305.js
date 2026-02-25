i.d(t, { A: () => g });
var r = i(627968);
i(64700);
var n = i(311907),
    s = i(397927),
    a = i(775602),
    l = i(580314),
    o = i(674658),
    c = i(898461),
    d = i(287809),
    m = i(633023),
    u = i(513653),
    x = i(180391);
function C(e) {
    let { skuId: t, size: i, src: m, className: u } = e,
        x = (0, n.bG)([d.default], () => d.default.getCurrentUser()),
        C = (0, n.bG)([a.A], () => a.A.useReducedMotion),
        { product: g, isFetching: p } = (0, o.q)(t);
    if (p || null == g) return (0, r.jsx)(s.y$y, { type: s.tVU.PULSING_ELLIPSIS });
    let T = g.items[0];
    if (null == T || !(0, c.T)(T)) return null;
    let h = (0, l.A)({ legacyAssetId: T.asset, skuId: T.skuId, size: i, canAnimate: !C });
    return (0, r.jsx)(s.JsQ, {
        "aria-label": x?.username,
        size: i,
        className: u,
        src: m ?? x?.getAvatarURL(void 0, (0, s.FT9)(i), !C),
        avatarDecoration: h,
    });
}
function g(e) {
    let { maxRewardImageSrc: t, claimableRewards: i, size: l, imageScaling: o = 1.5 } = e,
        c = (0, n.bG)([d.default], () => d.default.getCurrentUser()),
        g = (0, n.bG)([a.A], () => a.A.useReducedMotion),
        p = (0, s.FT9)(l);
    return i.length > 0
        ? (0, r.jsx)("img", { alt: "", src: t, style: { height: p * o } })
        : (0, r.jsxs)("div", {
              className: m.kL,
              children: [
                  (1 === i.length || 2 === i.length) &&
                      (0, r.jsx)(C, {
                          skuId: i[0],
                          size: l,
                          className: m.M8,
                          src: 1 === i.length ? c?.getAvatarURL(void 0, (0, s.FT9)(l), !g) : x,
                      }),
                  2 === i.length &&
                      (0, r.jsx)("div", {
                          style: { marginRight: -Math.round(0.321 * p) },
                          children: (0, r.jsx)(C, { skuId: i[1], size: l, src: u }),
                      }),
              ],
          });
}
