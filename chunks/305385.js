var n = t(775602),
    l = t(267102),
    s = t(256905),
    r = t(536763),
    a = t(531685),
    u = t(365971);
function o(e) {
    let { user: i, guildId: t, alt: s } = e,
        r = i.getAvatarURL(t, 1024, !n.Ay.useReducedMotion),
        o = (function () {
            let e = (0, l.rH)(),
                { width: i, height: t } = a.A.windowSize(null != e ? (0, u.Q2)(e.renderWindow) : void 0);
            return Math.min(1024, Math.round(0.7 * Math.min(i, t)));
        })();
    return { type: "IMAGE", url: r, original: r, width: o, height: o, alt: s };
}
(t(652215),
    t.d(
        i,
        {},
        {
            A: function (e) {
                let { user: i, guildId: t, alt: n } = e;
                (0, s.R)({
                    location: "user_profile_avatar",
                    items: [o({ user: i, guildId: t, alt: n })],
                    shouldHideMediaOptions: !0,
                });
            },
            V: function (e) {
                let { user: i, guildId: t } = e,
                    n = o({ user: i, guildId: t });
                (0, r.A)({ src: n.url, width: n.width ?? 1024, height: n.height ?? 1024, options: n });
            },
        },
    ));
