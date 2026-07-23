t.d(e, { A: () => A, V: () => c });
var n = t(775602),
    a = t(267102),
    s = t(256905),
    l = t(536763),
    r = t(531685),
    u = t(365971),
    o = t(652215);
function d(i) {
    let { user: e, guildId: t, alt: s } = i,
        l = e.getAvatarURL(t, o.XAf, !n.Ay.useReducedMotion),
        d = (function () {
            let i = (0, a.rH)(),
                { width: e, height: t } = r.A.windowSize(null != i ? (0, u.Q2)(i.renderWindow) : void 0);
            return Math.min(o.XAf, Math.round(0.7 * Math.min(e, t)));
        })();
    return { type: "IMAGE", url: l, original: l, width: d, height: d, alt: s };
}
function c(i) {
    let { user: e, guildId: t } = i,
        n = d({ user: e, guildId: t });
    (0, l.A)({ src: n.url, width: n.width ?? o.XAf, height: n.height ?? o.XAf, options: n });
}
function A(i) {
    let { user: e, guildId: t, alt: n } = i;
    (0, s.R)({
        location: "user_profile_avatar",
        items: [d({ user: e, guildId: t, alt: n })],
        shouldHideMediaOptions: !0,
    });
}
