"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(575593),
    a = n(674658),
    s = n(628856),
    o = n(226540),
    l = n(227),
    u = n(486020);
let c = (e) => {
    let { skuId: t, size: n = 128, animated: c = !1 } = e,
        { product: d } = (0, a.q)(t, !0),
        _ = d?.items[0];
    if (null == _) return null;
    if (_.type === i.R.AVATAR_DECORATION) {
        let e = u.Ay.getAvatarDecorationURL({ avatarDecoration: _, size: n, canAnimate: c });
        return (0, r.jsx)("img", { src: e, alt: "" });
    }
    if (_.type === i.R.PROFILE_EFFECT) {
        let e = _.thumbnailPreviewSrc;
        return (0, r.jsx)("img", { src: e, alt: "" });
    }
    if (_.type === i.R.NAMEPLATE) {
        let e = (0, s.D)(_);
        return (0, r.jsx)(l.A, { nameplate: e, placement: o.u.PREVIEW });
    }
    return null;
};
