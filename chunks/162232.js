n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(97808),
    s = n(778712),
    a = n(854627),
    r = n(837921),
    o = n(985018);
let d = r.Ay.getEnableHardwareAcceleration() ? l.Js : l.eu,
    c = (e) => {
        let {
                user: t,
                guildId: n,
                avatarDecorationOverride: l,
                status: r,
                avatarSize: c = s._3.SIZE_120,
                "aria-hidden": u = !1,
                className: h,
                animateOnHover: A = !1,
                questPreviewRewardAssetUrl: _ = null,
            } = e,
            {
                avatarDecorationSrc: m,
                avatarSrc: g,
                eventHandlers: p,
            } = (0, a.A)({
                userId: t.id,
                guildId: n,
                size: c,
                showPending: !0,
                avatarDecorationOverride: l,
                animateOnHover: A,
            });
        return (0, i.jsx)(d, {
            avatarDecoration: m ?? _,
            src: g,
            size: c,
            status: r,
            "aria-label": u ? void 0 : o.intl.string(o.t.lqaIxI),
            "aria-hidden": u,
            className: h,
            ...p,
        });
    };
