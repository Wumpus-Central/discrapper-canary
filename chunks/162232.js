a.d(t, { A: () => d });
var n = a(627968);
a(64700);
var r = a(97808),
    l = a(778712),
    i = a(854627),
    s = a(19575),
    o = a(985018);
let c = s.Ay.getEnableHardwareAcceleration() ? r.Js : r.eu,
    d = (e) => {
        let {
                user: t,
                guildId: a,
                avatarDecorationOverride: r,
                status: s,
                avatarSize: d = l._3.SIZE_120,
                "aria-hidden": u = !1,
                className: h,
                animateOnHover: p = !1,
                questPreviewRewardAssetUrl: m = null,
            } = e,
            {
                avatarDecorationSrc: f,
                avatarSrc: b,
                eventHandlers: _,
            } = (0, i.A)({
                userId: t.id,
                guildId: a,
                size: d,
                showPending: !0,
                avatarDecorationOverride: r,
                animateOnHover: p,
            });
        return (0, n.jsx)(c, {
            avatarDecoration: f ?? m,
            src: b,
            size: d,
            status: s,
            "aria-label": u ? void 0 : o.intl.string(o.t.lqaIxI),
            "aria-hidden": u,
            className: h,
            ..._,
        });
    };
