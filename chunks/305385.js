t.d(e, { A: () => A, V: () => c });
var a = t(775602),
    s = t(267102),
    n = t(256905),
    l = t(536763),
    r = t(531685),
    u = t(365971),
    o = t(652215);
function d(i) {
    let { user: e, guildId: t, alt: n } = i,
        l = e.getAvatarURL(t, o.XAf, !a.Ay.useReducedMotion),
        d = (function () {
            let i = (0, s.rH)(),
                { width: e, height: t } = r.A.windowSize(null != i ? (0, u.Q2)(i.renderWindow) : void 0);
            return Math.min(o.XAf, Math.round(0.7 * Math.min(e, t)));
        })();
    return { type: "IMAGE", url: l, original: l, width: d, height: d, alt: n };
}
function c(i) {
    let { user: e, guildId: t } = i,
        a = d({ user: e, guildId: t });
    (0, l.A)({ src: a.url, width: a.width ?? o.XAf, height: a.height ?? o.XAf, options: a });
}
function A(i) {
    let { user: e, guildId: t, alt: a } = i;
    (0, n.R)({
        location: "user_profile_avatar",
        items: [d({ user: e, guildId: t, alt: a })],
        shouldHideMediaOptions: !0,
    });
}
