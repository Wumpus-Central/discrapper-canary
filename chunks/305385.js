t.d(i, { A: () => c, V: () => A });
var n = t(775602),
    l = t(267102),
    s = t(256905),
    r = t(536763),
    a = t(531685),
    u = t(365971),
    o = t(652215);
function d(e) {
    let { user: i, guildId: t, alt: s } = e,
        r = i.getAvatarURL(t, o.XAf, !n.Ay.useReducedMotion),
        d = (function () {
            let e = (0, l.rH)(),
                { width: i, height: t } = a.A.windowSize(null != e ? (0, u.Q2)(e.renderWindow) : void 0);
            return Math.min(o.XAf, Math.round(0.7 * Math.min(i, t)));
        })();
    return { type: "IMAGE", url: r, original: r, width: d, height: d, alt: s };
}
function A(e) {
    let { user: i, guildId: t } = e,
        n = d({ user: i, guildId: t });
    (0, r.A)({ src: n.url, width: n.width ?? o.XAf, height: n.height ?? o.XAf, options: n });
}
function c(e) {
    let { user: i, guildId: t, alt: n } = e;
    (0, s.R)({
        location: "user_profile_avatar",
        items: [d({ user: i, guildId: t, alt: n })],
        shouldHideMediaOptions: !0,
    });
}
