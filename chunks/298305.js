"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(289873),
    a = n(97808),
    o = n(778712),
    l = n(775602),
    u = n(912140),
    c = n(674658),
    d = n(898461),
    _ = n(287809),
    h = n(80918),
    f = n(513653),
    p = n(180391);
function E(e) {
    let { skuId: t, size: n, src: h, className: f } = e,
        p = (0, r.bG)([_.default], () => _.default.getCurrentUser()),
        E = (0, r.bG)([l.Ay], () => l.Ay.useReducedMotion),
        { product: m, isFetching: g } = (0, c.q)(t);
    if (g || null == m) return (0, i.jsx)(s.y, { type: s.t.PULSING_ELLIPSIS });
    let A = m.items[0];
    if (null == A || !(0, d.T)(A)) return null;
    let I = (0, u.A)({ legacyAssetId: A.asset, skuId: A.skuId, size: n, canAnimate: !E });
    return (0, i.jsx)(a.Js, {
        "aria-label": p?.username,
        size: n,
        className: f,
        src: h ?? p?.getAvatarURL(void 0, (0, o.FT)(n), !E),
        avatarDecoration: I,
    });
}
function m(e) {
    let { maxRewardImageSrc: t, claimableRewards: n, size: s, imageScaling: a = 1.5 } = e,
        u = (0, r.bG)([_.default], () => _.default.getCurrentUser()),
        c = (0, r.bG)([l.Ay], () => l.Ay.useReducedMotion),
        d = (0, o.FT)(s);
    return n.length > 0
        ? (0, i.jsx)("img", { alt: "", src: t, style: { height: d * a } })
        : (0, i.jsxs)("div", {
              className: h.kL,
              children: [
                  (1 === n.length || 2 === n.length) &&
                      (0, i.jsx)(E, {
                          skuId: n[0],
                          size: s,
                          className: h.M8,
                          src: 1 === n.length ? u?.getAvatarURL(void 0, (0, o.FT)(s), !c) : p,
                      }),
                  2 === n.length &&
                      (0, i.jsx)("div", {
                          style: { marginRight: -Math.round(0.321 * d) },
                          children: (0, i.jsx)(E, { skuId: n[1], size: s, src: f }),
                      }),
              ],
          });
}
