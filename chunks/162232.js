"use strict";
r.d(t, { A: () => d });
var n = r(627968);
r(64700);
var i = r(97808),
    a = r(778712),
    s = r(854627),
    l = r(19575),
    o = r(985018);
let c = l.Ay.getEnableHardwareAcceleration() ? i.Js : i.eu,
    d = (e) => {
        let {
                user: t,
                guildId: r,
                avatarDecorationOverride: i,
                status: l,
                avatarSize: d = a._3.SIZE_120,
                "aria-hidden": u = !1,
                className: _,
                animateOnHover: p = !1,
                questPreviewRewardAssetUrl: f = null,
            } = e,
            {
                avatarDecorationSrc: m,
                avatarSrc: h,
                eventHandlers: g,
            } = (0, s.A)({
                userId: t.id,
                guildId: r,
                size: d,
                showPending: !0,
                avatarDecorationOverride: i,
                animateOnHover: p,
            });
        return (0, n.jsx)(c, {
            avatarDecoration: m ?? f,
            src: h,
            size: d,
            status: l,
            "aria-label": u ? void 0 : o.intl.string(o.t.lqaIxI),
            "aria-hidden": u,
            className: _,
            ...g,
        });
    };
