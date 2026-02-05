"use strict";
n.d(t, { SU: () => T, Vf: () => I, b$: () => y, oW: () => E });
var r = n(481613),
    i = n.n(r),
    a = n(49485),
    s = n(961350),
    o = n(652215);
let l = "Ubuntu",
    u = "Debian",
    c = "Fedora",
    d = "Red Hat",
    _ = "SuSE",
    f = "Linux",
    p = "OS X",
    h = "win",
    m = "osx",
    g = "linux";
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = t ? "/ptb" : "",
        i = null != n ? `&format=${n}` : "";
    return `${o.AMi.DESKTOP}${r}?platform=${e}${i}`;
}
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i().os?.family;
    return null == e
        ? h
        : -1 !== e.indexOf(l) ||
            -1 !== e.indexOf(u) ||
            -1 !== e.indexOf(c) ||
            -1 !== e.indexOf(d) ||
            -1 !== e.indexOf(_) ||
            -1 !== e.indexOf(f)
          ? g
          : -1 !== e.indexOf(p)
            ? m
            : h;
}
function I(e) {
    return { [h]: "Windows", [m]: "Mac", [g]: "Linux" }[A(e)];
}
function T() {
    let e = A(),
        t = e === g ? "tar.gz" : null;
    return E(e, !1, t);
}
function y(e, t, n) {
    let r = null != n ? n.toString() : null;
    switch (t) {
        case "iOS":
            return (0, a.Ay)(r ?? "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                utmSource: e,
                fingerprint: s.default.getFingerprint(),
                attemptId: (0, a.I_)(),
            });
        case "Android":
            return (0, a.Ay)(r ?? "https://play.google.com/store/apps/details", {
                utmSource: e,
                id: "com.discord",
                fingerprint: s.default.getFingerprint(),
                attemptId: (0, a.I_)(),
            });
        default:
            return r ?? "https://www.discord.com";
    }
}
