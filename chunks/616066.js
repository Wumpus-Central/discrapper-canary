r.d(n, {
    R: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(979554),
    l = r(481060),
    u = r(1585),
    c = r(125988),
    d = r(998502),
    f = r(388032),
    p = r(638079);
let h = d.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar,
    _ = (e) => {
        let { item: n, user: r, isHighlighted: a = !1, isPurchased: d = !1, avatarSize: _ = l.AvatarSizes.SIZE_152, avatarPlaceholderSrc: m } = e,
            g = (0, u.y9)(_),
            {
                avatarDecorationSrc: E,
                eventHandlers: v,
                avatarPlaceholderSrc: y
            } = (0, c.Z)({
                user: r,
                avatarDecorationOverride: (null == n ? void 0 : n.type) === s.Z.AVATAR_DECORATION ? n : void 0,
                size: g,
                onlyAnimateOnHover: !a
            });
        return (0, i.jsx)(h, {
            ...v,
            avatarDecoration: E,
            src: a ? (null == r ? void 0 : r.getAvatarURL(void 0, 152, !0)) : null != m ? m : y,
            imageClassName: a ? p.fadeInAvatarImg : void 0,
            className: o()(p.avatar, { [p.avatarPurchased]: d && !a }),
            size: _,
            'aria-label': f.intl.string(f.t.lqaIxM)
        });
    };
