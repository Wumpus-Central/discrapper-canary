n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(518950),
    s = n(998502),
    o = n(388032);
let l = s.ZP.getEnableHardwareAcceleration() ? r.Xo$ : r.qEK,
    u = (e) => {
        let { user: t, guildId: n, avatarDecorationOverride: s, status: u, avatarSize: c = r.EFr.SIZE_120, 'aria-hidden': d = !1, className: f, animateOnHover: _ = !1, questPreviewRewardAssetUrl: p = null } = e,
            {
                avatarDecorationSrc: h,
                avatarSrc: m,
                eventHandlers: g
            } = (0, a.Z)({
                user: t,
                guildId: n,
                size: c,
                showPending: !0,
                avatarDecorationOverride: s,
                animateOnHover: _
            });
        return (0, i.jsx)(l, {
            avatarDecoration: null != h ? h : p,
            src: m,
            size: c,
            status: u,
            'aria-label': d ? void 0 : o.intl.string(o.t.lqaIxM),
            'aria-hidden': d,
            className: f,
            ...g
        });
    };
