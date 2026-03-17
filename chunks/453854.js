a.d(t, { A: () => c });
var l = a(627968),
    r = a(575593),
    n = a(674658),
    o = a(226540),
    s = a(369496),
    d = a(227),
    i = a(486020);
let c = (e) => {
    let { skuId: t, size: a = 128, animated: c = !1 } = e,
        { product: x } = (0, n.q)(t, !0),
        u = x?.items[0];
    if (null == u) return null;
    if (u.type === r.R.AVATAR_DECORATION) {
        let e = i.Ay.getAvatarDecorationURL({ avatarDecoration: u, size: a, canAnimate: c });
        return null != e ? (0, l.jsx)("img", { src: e, alt: u.label }) : null;
    }
    if (u.type === r.R.PROFILE_EFFECT) {
        let e = u.thumbnailPreviewSrc;
        return (0, l.jsx)("img", { src: e, alt: u.accessibilityLabel });
    }
    if (u.type === r.R.NAMEPLATE) {
        let e = (0, s.WK)(u);
        return (0, l.jsx)(d.A, { nameplate: e, placement: o.u.PREVIEW });
    }
    return null;
};
