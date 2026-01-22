n.d(t, { A: () => u });
var r = n(627968),
    i = n(575593),
    a = n(674658),
    s = n(628856),
    o = n(226540),
    l = n(227),
    c = n(486020);
let u = (e) => {
    let { skuId: t, size: n = 128, animated: u = !1 } = e,
        { product: d } = (0, a.q)(t, !0),
        f = null == d ? void 0 : d.items[0];
    if (null == f) return null;
    if (f.type === i.R.AVATAR_DECORATION) {
        let e = c.Ay.getAvatarDecorationURL({
            avatarDecoration: f,
            size: n,
            canAnimate: u,
        });
        return (0, r.jsx)("img", {
            src: e,
            alt: "",
        });
    }
    if (f.type === i.R.PROFILE_EFFECT) {
        let e = f.thumbnailPreviewSrc;
        return (0, r.jsx)("img", {
            src: e,
            alt: "",
        });
    }
    if (f.type === i.R.NAMEPLATE) {
        let e = (0, s.D)(f);
        return (0, r.jsx)(l.A, {
            nameplate: e,
            placement: o.u.PREVIEW,
        });
    }
    return null;
};
