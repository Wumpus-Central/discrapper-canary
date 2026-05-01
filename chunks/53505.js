n.d(t, { SU: () => E, Vf: () => _, b$: () => u, oW: () => d });
var i = n(481613),
    a = n.n(i),
    r = n(742821),
    s = n(495544),
    l = n(652215);
let o = "linux";
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = null != n ? `&format=${n}` : "";
    return `${l.AMi.DESKTOP}${t ? "/ptb" : ""}?platform=${e}${i}`;
}
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a().os?.family;
    return null == e
        ? "win"
        : -1 !== e.indexOf("Ubuntu") ||
            -1 !== e.indexOf("Debian") ||
            -1 !== e.indexOf("Fedora") ||
            -1 !== e.indexOf("Red Hat") ||
            -1 !== e.indexOf("SuSE") ||
            -1 !== e.indexOf("Linux")
          ? o
          : -1 !== e.indexOf("OS X")
            ? "osx"
            : "win";
}
function _(e) {
    return { win: "Windows", osx: "Mac", [o]: "Linux" }[c(e)];
}
function E() {
    let e = c();
    return d(e, !1, e === o ? "tar.gz" : null);
}
function u(e, t, n) {
    let i = null != n ? n.toString() : null;
    switch (t) {
        case "iOS":
            return (0, r.Ay)(i ?? "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                utmSource: e,
                fingerprint: s.default.getFingerprint(),
                attemptId: (0, r.I_)(),
            });
        case "Android":
            return (0, r.Ay)(i ?? "https://play.google.com/store/apps/details", {
                utmSource: e,
                id: "com.discord",
                fingerprint: s.default.getFingerprint(),
                attemptId: (0, r.I_)(),
            });
        default:
            return i ?? "https://www.discord.com";
    }
}
