"use strict";
r.d(t, { A: () => u });
var n = r(627968);
r(64700);
var i = r(97808),
    a = r(778712),
    l = r(854627),
    s = r(19575),
    o = r(985018);
let c = s.Ay.getEnableHardwareAcceleration() ? i.Js : i.eu,
    u = (e) => {
        let {
                user: t,
                guildId: r,
                avatarDecorationOverride: i,
                status: s,
                avatarSize: u = a._3.SIZE_120,
                "aria-hidden": d = !1,
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
                guildId: r,
                size: u,
                showPending: !0,
                avatarDecorationOverride: i,
                animateOnHover: p,
            });
        return (0, n.jsx)(c, {
            avatarDecoration: m ?? f,
            src: h,
            size: u,
            status: s,
            "aria-label": d ? void 0 : o.intl.string(o.t.lqaIxI),
            "aria-hidden": d,
            className: _,
            ...g,
        });
    };
