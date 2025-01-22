var i = r(200651);
r(192379);
var a = r(481060),
    o = r(518950),
    s = r(998502),
    l = r(388032);
let u = s.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar,
    c = (e) => {
        let { user: n, guildId: r, avatarDecorationOverride: s, status: c, avatarSize: d = a.AvatarSizes.SIZE_120, 'aria-hidden': f = !1, className: p, animateOnHover: h = !1, questPreviewRewardAssetUrl: _ = null } = e,
            {
                avatarDecorationSrc: m,
                avatarSrc: g,
                eventHandlers: E
            } = (0, o.Z)({
                user: n,
                guildId: r,
                size: d,
                showPending: !0,
                avatarDecorationOverride: s,
                animateOnHover: h
            });
        return (0, i.jsx)(u, {
            avatarDecoration: null != m ? m : _,
            src: g,
            size: d,
            status: c,
            'aria-label': f ? void 0 : l.intl.string(l.t.lqaIxM),
            'aria-hidden': f,
            className: p,
            ...E
        });
    };
n.Z = c;
