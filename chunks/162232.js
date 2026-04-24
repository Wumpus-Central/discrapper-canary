"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(97808),
    a = n(778712),
    l = n(854627),
    s = n(19575),
    o = n(985018);
let c = s.Ay.getEnableHardwareAcceleration() ? i.Js : i.eu,
    u = (e) => {
        let {
                user: t,
                guildId: n,
                avatarDecorationOverride: i,
                status: s,
                avatarSize: u = a._3.SIZE_120,
                "aria-hidden": d = !1,
                className: _,
                animateOnHover: p = !1,
                questPreviewRewardAssetUrl: f = null,
            } = e,
            {
                avatarDecorationSrc: h,
                avatarSrc: m,
                eventHandlers: g,
            } = (0, l.A)({
                userId: t.id,
                guildId: n,
                size: u,
                showPending: !0,
                avatarDecorationOverride: i,
                animateOnHover: p,
            });
        return (0, r.jsx)(c, {
            avatarDecoration: h ?? f,
            src: m,
            size: u,
            status: s,
            "aria-label": d ? void 0 : o.intl.string(o.t.lqaIxI),
            "aria-hidden": d,
            className: _,
            ...g,
        });
    };
