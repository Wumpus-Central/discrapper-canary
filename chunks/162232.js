"use strict";
a.d(t, { A: () => c });
var r = a(627968);
a(64700);
var l = a(97808),
    n = a(778712),
    i = a(854627),
    s = a(837921),
    o = a(985018);
let d = s.Ay.getEnableHardwareAcceleration() ? l.Js : l.eu,
    c = (e) => {
        let {
                user: t,
                guildId: a,
                avatarDecorationOverride: l,
                status: s,
                avatarSize: c = n._3.SIZE_120,
                "aria-hidden": u = !1,
                className: h,
                animateOnHover: p = !1,
                questPreviewRewardAssetUrl: _ = null,
            } = e,
            {
                avatarDecorationSrc: m,
                avatarSrc: b,
                eventHandlers: g,
            } = (0, i.A)({
                userId: t.id,
                guildId: a,
                size: c,
                showPending: !0,
                avatarDecorationOverride: l,
                animateOnHover: p,
            });
        return (0, r.jsx)(d, {
            avatarDecoration: m ?? _,
            src: b,
            size: c,
            status: s,
            "aria-label": u ? void 0 : o.intl.string(o.t.lqaIxI),
            "aria-hidden": u,
            className: h,
            ...g,
        });
    };
