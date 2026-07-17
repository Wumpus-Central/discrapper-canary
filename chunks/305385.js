"use strict";
n.d(t, { A: () => _, V: () => u });
var i = n(775602),
    r = n(267102),
    a = n(256905),
    s = n(536763),
    l = n(531685),
    o = n(365971),
    d = n(652215);
function c(e) {
    let { user: t, guildId: n, alt: a } = e,
        s = t.getAvatarURL(n, d.XAf, !i.Ay.useReducedMotion),
        c = (function () {
            let e = (0, r.rH)(),
                { width: t, height: n } = l.A.windowSize(null != e ? (0, o.Q2)(e.renderWindow) : void 0);
            return Math.min(d.XAf, Math.round(0.7 * Math.min(t, n)));
        })();
    return { type: "IMAGE", url: s, original: s, width: c, height: c, alt: a };
}
function u(e) {
    let { user: t, guildId: n } = e,
        i = c({ user: t, guildId: n });
    (0, s.A)({ src: i.url, width: i.width ?? d.XAf, height: i.height ?? d.XAf, options: i });
}
function _(e) {
    let { user: t, guildId: n, alt: i } = e;
    (0, a.R)({
        location: "user_profile_avatar",
        items: [c({ user: t, guildId: n, alt: i })],
        shouldHideMediaOptions: !0,
    });
}
