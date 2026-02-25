"use strict";
l.d(t, { A: () => c });
var r = l(627968),
    a = l(575593),
    n = l(674658),
    i = l(226540),
    s = l(369496),
    o = l(227),
    d = l(486020);
let c = (e) => {
    let { skuId: t, size: l = 128, animated: c = !1 } = e,
        { product: u } = (0, n.q)(t, !0),
        m = u?.items[0];
    if (null == m) return null;
    if (m.type === a.R.AVATAR_DECORATION) {
        let e = d.Ay.getAvatarDecorationURL({ avatarDecoration: m, size: l, canAnimate: c });
        return null != e ? (0, r.jsx)("img", { src: e, alt: m.label }) : null;
    }
    if (m.type === a.R.PROFILE_EFFECT) {
        let e = m.thumbnailPreviewSrc;
        return (0, r.jsx)("img", { src: e, alt: m.accessibilityLabel });
    }
    if (m.type === a.R.NAMEPLATE) {
        let e = (0, s.WK)(m);
        return (0, r.jsx)(o.A, { nameplate: e, placement: i.u.PREVIEW });
    }
    return null;
};
