n.d(t, { A: () => d });
var l = n(627968);
n(64700);
var a = n(97808),
    i = n(778712),
    r = n(854627),
    s = n(19575),
    o = n(985018);
let c = s.Ay.getEnableHardwareAcceleration() ? a.Js : a.eu,
    d = (e) => {
        let {
                user: t,
                guildId: n,
                avatarDecorationOverride: a,
                status: s,
                avatarSize: d = i._3.SIZE_120,
                "aria-hidden": u = !1,
                className: m,
                animateOnHover: h = !1,
                questPreviewRewardAssetUrl: f = null,
            } = e,
            {
                avatarDecorationSrc: _,
                avatarSrc: g,
                eventHandlers: p,
            } = (0, r.A)({
                userId: t.id,
                guildId: n,
                size: d,
                showPending: !0,
                avatarDecorationOverride: a,
                animateOnHover: h,
            });
        return (0, l.jsx)(c, {
            avatarDecoration: _ ?? f,
            src: g,
            size: d,
            status: s,
            "aria-label": u ? void 0 : o.intl.string(o.t.lqaIxI),
            "aria-hidden": u,
            className: m,
            ...p,
        });
    };
