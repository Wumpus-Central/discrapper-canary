n.d(e, {
    R: function () {
        return p;
    }
});
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    o = n(979554),
    s = n(481060),
    l = n(1585),
    c = n(125988),
    d = n(998502),
    u = n(388032),
    f = n(638079);
let g = d.ZP.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar,
    p = (t) => {
        let { item: e, user: n, isHighlighted: a = !1, isPurchased: d = !1, avatarSize: p = s.AvatarSizes.SIZE_152, avatarPlaceholderSrc: v } = t,
            h = (0, l.y9)(p),
            {
                avatarDecorationSrc: m,
                eventHandlers: b,
                avatarPlaceholderSrc: x
            } = (0, c.Z)({
                user: n,
                avatarDecorationOverride: (null == e ? void 0 : e.type) === o.Z.AVATAR_DECORATION ? e : void 0,
                size: h,
                onlyAnimateOnHover: !a
            });
        return (0, r.jsx)(g, {
            ...b,
            avatarDecoration: m,
            src: a ? (null == n ? void 0 : n.getAvatarURL(void 0, 152, !0)) : null != v ? v : x,
            imageClassName: a ? f.fadeInAvatarImg : void 0,
            className: i()(f.avatar, { [f.avatarPurchased]: d && !a }),
            size: p,
            'aria-label': u.intl.string(u.t.lqaIxM)
        });
    };
