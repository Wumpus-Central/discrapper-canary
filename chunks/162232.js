"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var a = n(97808),
    i = n(778712),
    l = n(854627),
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
                className: _,
                animateOnHover: p = !1,
                questPreviewRewardAssetUrl: f = null,
            } = e,
            {
                avatarDecorationSrc: m,
                avatarSrc: h,
                eventHandlers: g,
            } = (0, l.A)({
                userId: t.id,
                guildId: n,
                size: d,
                showPending: !0,
                avatarDecorationOverride: a,
                animateOnHover: p,
            });
        return (0, r.jsx)(c, {
            avatarDecoration: m ?? f,
            src: h,
            size: d,
            status: s,
            "aria-label": u ? void 0 : o.intl.string(o.t.lqaIxI),
            "aria-hidden": u,
            className: _,
            ...g,
        });
    };
