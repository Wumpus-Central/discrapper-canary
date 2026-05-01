"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(97808),
    s = n(778712),
    a = n(854627),
    o = n(19575),
    l = n(375708);
let u = o.Ay.getEnableHardwareAcceleration() ? r.Js : r.eu,
    c = (e) => {
        let {
                user: t,
                guildId: n,
                avatarDecorationOverride: r,
                status: o,
                avatarSize: c = s._3.SIZE_120,
                "aria-hidden": d = !1,
                className: _,
                animateOnHover: f = !1,
                questPreviewRewardAssetUrl: h = null,
            } = e,
            {
                avatarDecorationSrc: p,
                avatarSrc: E,
                eventHandlers: m,
            } = (0, a.A)({
                userId: t.id,
                guildId: n,
                size: c,
                showPending: !0,
                avatarDecorationOverride: r,
                animateOnHover: f,
            });
        return (0, i.jsx)(u, {
            avatarDecoration: p ?? h,
            src: E,
            size: c,
            status: o,
            "aria-label": d ? void 0 : l.intl.string(l.t.lqaIxI),
            "aria-hidden": d,
            className: _,
            ...m,
        });
    };
