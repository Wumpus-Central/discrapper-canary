t.d(e, { A: () => A, V: () => c });
var s = t(775602),
    a = t(267102),
    n = t(256905),
    l = t(536763),
    r = t(531685),
    u = t(365971),
    o = t(652215);
function d(i) {
    let { user: e, guildId: t, alt: n } = i,
        l = e.getAvatarURL(t, o.XAf, !s.Ay.useReducedMotion),
        d = (function () {
            let i = (0, a.rH)(),
                { width: e, height: t } = r.A.windowSize(null != i ? (0, u.Q2)(i.renderWindow) : void 0);
            return Math.min(o.XAf, Math.round(0.7 * Math.min(e, t)));
        })();
    return { type: "IMAGE", url: l, original: l, width: d, height: d, alt: n };
}
function c(i) {
    let { user: e, guildId: t } = i,
        s = d({ user: e, guildId: t });
    (0, l.A)({ src: s.url, width: s.width ?? o.XAf, height: s.height ?? o.XAf, options: s });
}
function A(i) {
    let { user: e, guildId: t, alt: s } = i;
    (0, n.R)({
        location: "user_profile_avatar",
        items: [d({ user: e, guildId: t, alt: s })],
        shouldHideMediaOptions: !0,
    });
}
