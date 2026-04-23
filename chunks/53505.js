n.d(t, { SU: () => c, Vf: () => d, b$: () => u, oW: () => o });
var i = n(481613),
    r = n.n(i),
    a = n(742821),
    s = n(495544),
    _ = n(652215);
let l = "linux";
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = null != n ? `&format=${n}` : "";
    return `${_.AMi.DESKTOP}${t ? "/ptb" : ""}?platform=${e}${i}`;
}
function E() {
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
    return { win: "Windows", osx: "Mac", [l]: "Linux" }[E(e)];
}
function c() {
    let e = E();
    return o(e, !1, e === l ? "tar.gz" : null);
}
function u(e, t, n) {
    let i = null != n ? n.toString() : null;
    switch (t) {
        case "iOS":
            return (0, a.Ay)(i ?? "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                utmSource: e,
                fingerprint: s.default.getFingerprint(),
                attemptId: (0, a.I_)(),
            });
        case "Android":
            return (0, a.Ay)(i ?? "https://play.google.com/store/apps/details", {
                utmSource: e,
                id: "com.discord",
                fingerprint: s.default.getFingerprint(),
                attemptId: (0, a.I_)(),
            });
        default:
            return i ?? "https://www.discord.com";
    }
}
