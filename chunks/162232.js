l.d(t, { A: () => u });
var r = l(627968);
l(64700);
var a = l(97808),
    s = l(778712),
    n = l(854627),
    i = l(837921),
    c = l(985018);
let o = i.Ay.getEnableHardwareAcceleration() ? a.Js : a.eu,
    u = (e) => {
        let {
                user: t,
                guildId: l,
                avatarDecorationOverride: a,
                status: i,
                avatarSize: u = s._3.SIZE_120,
                "aria-hidden": d = !1,
                className: m,
                animateOnHover: A = !1,
                questPreviewRewardAssetUrl: p = null,
            } = e,
            {
                avatarDecorationSrc: _,
                avatarSrc: h,
                eventHandlers: g,
            } = (0, n.A)({
                userId: t.id,
                guildId: l,
                size: u,
                showPending: !0,
                avatarDecorationOverride: a,
                animateOnHover: A,
            });
        return (0, r.jsx)(o, {
            avatarDecoration: _ ?? p,
            src: h,
            size: u,
            status: i,
            "aria-label": d ? void 0 : c.intl.string(c.t.lqaIxI),
            "aria-hidden": d,
            className: m,
            ...g,
        });
    };
