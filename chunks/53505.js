"use strict";
n.d(t, { SU: () => _, Vf: () => d, b$: () => f, oW: () => u });
var i = n(481613),
    r = n.n(i),
    s = n(742821),
    a = n(495544),
    o = n(652215);
let l = "linux";
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = null != n ? `&format=${n}` : "";
    return `${o.AMi.DESKTOP}${t ? "/ptb" : ""}?platform=${e}${i}`;
}
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r().os?.family;
    return null == e
        ? "win"
        : -1 !== e.indexOf("Ubuntu") ||
            -1 !== e.indexOf("Debian") ||
            -1 !== e.indexOf("Fedora") ||
            -1 !== e.indexOf("Red Hat") ||
            -1 !== e.indexOf("SuSE") ||
            -1 !== e.indexOf("Linux")
          ? l
          : -1 !== e.indexOf("OS X")
            ? "osx"
            : "win";
}
function d(e) {
    return { win: "Windows", osx: "Mac", [l]: "Linux" }[c(e)];
}
function _() {
    let e = c();
    return u(e, !1, e === l ? "tar.gz" : null);
}
function f(e, t, n) {
    let i = null != n ? n.toString() : null;
    switch (t) {
        case "iOS":
            return (0, s.Ay)(i ?? "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                utmSource: e,
                fingerprint: a.default.getFingerprint(),
                attemptId: (0, s.I_)(),
            });
        case "Android":
            return (0, s.Ay)(i ?? "https://play.google.com/store/apps/details", {
                utmSource: e,
                id: "com.discord",
                fingerprint: a.default.getFingerprint(),
                attemptId: (0, s.I_)(),
            });
        default:
            return i ?? "https://www.discord.com";
    }
}
