a.d(t, { A: () => d });
var n = a(627968);
a(64700);
var l = a(97808),
    r = a(778712),
    i = a(854627),
    s = a(19575),
    o = a(985018);
let c = s.Ay.getEnableHardwareAcceleration() ? l.Js : l.eu,
    d = (e) => {
        let {
                user: t,
                guildId: a,
                avatarDecorationOverride: l,
                status: s,
                avatarSize: d = r._3.SIZE_120,
                "aria-hidden": u = !1,
                className: h,
                animateOnHover: p = !1,
                questPreviewRewardAssetUrl: m = null,
            } = e,
            {
                avatarDecorationSrc: f,
                avatarSrc: _,
                eventHandlers: b,
            } = (0, i.A)({
                userId: t.id,
                guildId: a,
                size: d,
                showPending: !0,
                avatarDecorationOverride: l,
                animateOnHover: p,
            });
        return (0, n.jsx)(c, {
            avatarDecoration: f ?? m,
            src: _,
            size: d,
            status: s,
            "aria-label": u ? void 0 : o.intl.string(o.t.lqaIxI),
            "aria-hidden": u,
            className: h,
            ...b,
        });
    };
