a.d(t, { A: () => c });
var l = a(627968),
    r = a(575593),
    n = a(674658),
    s = a(88686),
    i = a(780898),
    d = a(214881),
    o = a(486020);
let c = (e) => {
    let { skuId: t, size: a = 128, animated: c = !1 } = e,
        { product: u } = (0, n.q)(t, !0),
        h = u?.items[0];
    if (null == h) return null;
    if (h.type === r.R.AVATAR_DECORATION) {
        let e = o.Ay.getAvatarDecorationURL({ avatarDecoration: h, size: a, canAnimate: c });
        return null != e ? (0, l.jsx)("img", { src: e, alt: h.label }) : null;
    }
    if (h.type === r.R.PROFILE_EFFECT) {
        let e = h.thumbnailPreviewSrc;
        return (0, l.jsx)("img", { src: e, alt: h.accessibilityLabel });
    }
    if (h.type === r.R.NAMEPLATE) {
        let e = (0, i.WK)(h);
        return (0, l.jsx)(d.A, { nameplate: e, placement: s.u.PREVIEW });
    }
    return null;
};
