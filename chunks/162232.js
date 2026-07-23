"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(97808),
    a = n(778712),
    s = n(854627),
    l = n(19575),
    o = n(375708);
let d = l.Ay.getEnableHardwareAcceleration() ? r.Js : r.eu,
    c = function (e) {
        let {
                user: t,
                guildId: n,
                avatarDecorationOverride: r,
                status: l,
                avatarSize: c = a._3.SIZE_120,
                "aria-hidden": u = !1,
                className: _,
                animateOnHover: E = !1,
                questPreviewRewardAssetUrl: A = null,
                decorationName: h,
            } = e,
            {
                avatarDecorationSrc: I,
                avatarSrc: f,
                eventHandlers: p,
            } = (0, s.A)({
                userId: t.id,
                guildId: n,
                size: c,
                showPending: !0,
                avatarDecorationOverride: r,
                animateOnHover: E,
            }),
            T = (() => {
                if (!u)
                    return "string" == typeof h
                        ? o.intl.formatToPlainString(o.t.Do2lxE, { a11y_text: h })
                        : null === h
                          ? o.intl.string(o.t["7hRBmC"])
                          : o.intl.string(o.t.lqaIxI);
            })();
        return (0, i.jsx)(d, {
            avatarDecoration: I ?? A,
            src: f,
            size: c,
            status: l,
            "aria-label": T,
            "aria-hidden": u,
            className: _,
            ...p,
        });
    };
