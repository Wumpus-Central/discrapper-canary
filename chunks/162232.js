a.d(t, { A: () => d });
var r = a(627968);
a(64700);
var n = a(97808),
    l = a(778712),
    i = a(854627),
    s = a(19575),
    o = a(985018);
let c = s.Ay.getEnableHardwareAcceleration() ? n.Js : n.eu,
    d = (e) => {
        let {
                user: t,
                guildId: a,
                avatarDecorationOverride: n,
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
                avatarDecorationOverride: n,
                animateOnHover: p,
            });
        return (0, r.jsx)(c, {
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
