"use strict";
a.d(t, { A: () => c });
var r = a(627968),
    l = a(575593),
    n = a(674658),
    i = a(88686),
    s = a(780898),
    o = a(214881),
    d = a(486020);
let c = (e) => {
    let { skuId: t, size: a = 128, animated: c = !1 } = e,
        { product: u } = (0, n.q)(t, !0),
        h = u?.items[0];
    if (null == h) return null;
    if (h.type === l.R.AVATAR_DECORATION) {
        let e = d.Ay.getAvatarDecorationURL({ avatarDecoration: h, size: a, canAnimate: c });
        return null != e ? (0, r.jsx)("img", { src: e, alt: h.label }) : null;
    }
    if (h.type === l.R.PROFILE_EFFECT) {
        let e = h.thumbnailPreviewSrc;
        return (0, r.jsx)("img", { src: e, alt: h.accessibilityLabel });
    }
    if (h.type === l.R.NAMEPLATE) {
        let e = (0, s.WK)(h);
        return (0, r.jsx)(o.A, { nameplate: e, placement: i.u.PREVIEW });
    }
    return null;
};
