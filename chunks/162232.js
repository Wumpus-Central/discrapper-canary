"use strict";
n.d(t, { A: () => c });
var a = n(627968);
n(64700);
var i = n(97808),
    r = n(778712),
    l = n(854627),
    s = n(837921),
    d = n(985018);
let o = s.Ay.getEnableHardwareAcceleration() ? i.Js : i.eu,
    c = (e) => {
        let {
                user: t,
                guildId: n,
                avatarDecorationOverride: i,
                status: s,
                avatarSize: c = r._3.SIZE_120,
                "aria-hidden": u = !1,
                className: _,
                animateOnHover: m = !1,
                questPreviewRewardAssetUrl: p = null,
            } = e,
            {
                avatarDecorationSrc: h,
                avatarSrc: g,
                eventHandlers: f,
            } = (0, l.A)({
                userId: t.id,
                guildId: n,
                size: c,
                showPending: !0,
                avatarDecorationOverride: i,
                animateOnHover: m,
            });
        return (0, a.jsx)(o, {
            avatarDecoration: h ?? p,
            src: g,
            size: c,
            status: s,
            "aria-label": u ? void 0 : d.intl.string(d.t.lqaIxI),
            "aria-hidden": u,
            className: _,
            ...f,
        });
    };
