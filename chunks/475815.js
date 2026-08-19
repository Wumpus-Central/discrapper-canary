"use strict";
n.d(t, { Wb: () => o, _U: () => l, a3: () => d, qf: () => r, sP: () => s, tl: () => a });
var i = n(626584);
function r() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.find((e) => {
        var t;
        return (
            null != e &&
            (null != (t = e).requestFullscreen ||
                null != t.webkitRequestFullscreen ||
                t.webkitSupportsFullscreen ||
                null != t.mozRequestFullScreen ||
                null != t.msRequestFullscreen)
        );
    });
}
function a(e) {
    "function" == typeof e.requestFullscreen
        ? e.requestFullscreen()
        : "function" == typeof e.webkitRequestFullscreen
          ? e.webkitRequestFullscreen()
          : "function" == typeof e.webkitEnterFullscreen
            ? e.webkitEnterFullscreen()
            : "function" == typeof e.mozRequestFullScreen
              ? e.mozRequestFullScreen()
              : "function" == typeof e.msRequestFullscreen
                ? e.msRequestFullscreen()
                : new i.A("FullScreenUtils").warn("Fullscreen API is not supported.");
}
function s(e, t) {
    let n = null != t ? t : document;
    l(null, n) &&
        ("function" == typeof n.exitFullscreen
            ? n.exitFullscreen()
            : "function" == typeof n.webkitExitFullscreen
              ? n.webkitExitFullscreen()
              : "function" == typeof e.webkitExitFullscreen
                ? e.webkitExitFullscreen()
                : "function" == typeof n.mozCancelFullScreen
                  ? n.mozCancelFullScreen()
                  : "function" == typeof n.msExitFullscreen
                    ? n.msExitFullscreen()
                    : new i.A("FullScreenUtils").warn("Fullscreen API is not supported."));
}
function l(e, t) {
    let n = null != t ? t : document;
    return !!(
        null != n.fullscreenElement ||
        null != n.mozFullScreenElement ||
        null != n.webkitFullscreenElement ||
        null != n.msFullscreenElement ||
        (null != e && e.webkitDisplayingFullscreen)
    );
}
let o = (() => {
    if ("u" > typeof document) {
        let e = document.createElement("video");
        if ("function" == typeof e.requestFullscreen);
        else if ("function" == typeof e.webkitRequestFullscreen) return "webkitfullscreenchange";
        else if ("function" == typeof e.webkitEnterFullscreen) return "webkitendfullscreen";
        else if ("function" == typeof e.mozRequestFullScreen) return "mozfullscreenchange";
        else if ("function" == typeof e.msRequestFullscreen) return "msfullscreenchange";
    } else console.warn("FullScreenUtils has been imported in a non-web environment");
    return "fullscreenchange";
})();
function d(e, t) {
    return (
        e.addEventListener(o, t),
        e.addEventListener("webkitfullscreenchange", t),
        () => {
            e.removeEventListener(o, t), e.removeEventListener("webkitfullscreenchange", t);
        }
    );
}
