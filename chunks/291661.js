"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(854627),
    s = n(837921),
    o = n(985018);
let l = s.Ay.getEnableHardwareAcceleration() ? i.JsQ : i.euF,
    u = (e) => {
        let {
                user: t,
                guildId: n,
                avatarDecorationOverride: s,
                status: u,
                avatarSize: c = i._3J.SIZE_120,
                "aria-hidden": d = !1,
                className: _,
                animateOnHover: f = !1,
                questPreviewRewardAssetUrl: p = null,
            } = e,
            {
                avatarDecorationSrc: h,
                avatarSrc: m,
                eventHandlers: g,
            } = (0, a.A)({
                userId: t.id,
                guildId: n,
                size: c,
                showPending: !0,
                avatarDecorationOverride: s,
                animateOnHover: f,
            });
        return (0, r.jsx)(l, {
            avatarDecoration: h ?? p,
            src: m,
            size: c,
            status: u,
            "aria-label": d ? void 0 : o.intl.string(o.t.lqaIxI),
            "aria-hidden": d,
            className: _,
            ...g,
        });
    };
