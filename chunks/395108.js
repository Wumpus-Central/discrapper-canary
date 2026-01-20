n.d(t, { Z: () => u });
var r = n(54381),
    i = n(979554),
    a = n(583434),
    o = n(579407),
    s = n(359135),
    l = n(516817),
    c = n(768581);
let u = (e) => {
    let { skuId: t, size: n = 128, animated: u = !1 } = e,
        { product: d } = (0, a.T)(t, !0),
        f = null == d ? void 0 : d.items[0];
    if (null == f) return null;
    if (f.type === i.Z.AVATAR_DECORATION) {
        let e = c.ZP.getAvatarDecorationURL({
            avatarDecoration: f,
            size: n,
            canAnimate: u,
        });
        return (0, r.jsx)("img", {
            src: e,
            alt: "",
        });
    }
    if (f.type === i.Z.PROFILE_EFFECT) {
        let e = f.thumbnailPreviewSrc;
        return (0, r.jsx)("img", {
            src: e,
            alt: "",
        });
    }
    if (f.type === i.Z.NAMEPLATE) {
        let e = (0, o.E)(f);
        return (0, r.jsx)(l.Z, {
            nameplate: e,
            placement: s.i.PREVIEW,
        });
    }
    return null;
};
