n.d(t, { R: () => p });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(979554),
    o = n(481060),
    l = n(1585),
    u = n(125988),
    c = n(998502),
    d = n(388032),
    f = n(638079);
let _ = c.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK,
    p = (e) => {
        let { item: t, user: n, isHighlighted: r = !1, isPurchased: c = !1, avatarSize: p = o.EFr.SIZE_152, avatarPlaceholderSrc: h } = e,
            m = (0, l.y9)(p),
            {
                avatarDecorationSrc: g,
                eventHandlers: E,
                avatarPlaceholderSrc: v
            } = (0, u.Z)({
                user: n,
                avatarDecorationOverride: (null == t ? void 0 : t.type) === s.Z.AVATAR_DECORATION ? t : void 0,
                size: m,
                onlyAnimateOnHover: !r
            });
        return (0, i.jsx)(_, {
            ...E,
            avatarDecoration: g,
            src: r ? (null == n ? void 0 : n.getAvatarURL(void 0, 152, !0)) : null != h ? h : v,
            imageClassName: r ? f.fadeInAvatarImg : void 0,
            className: a()(f.avatar, { [f.avatarPurchased]: c && !r }),
            size: p,
            'aria-label': d.intl.string(d.t.lqaIxM)
        });
    };
