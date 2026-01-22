n.d(t, {
    Wb: () => c,
    _U: () => l,
    a3: () => u,
    qf: () => i,
    sP: () => o,
    tl: () => s,
});
var r = n(626584);
function i() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.find((e) => null != e && a(e));
}
function a(e) {
    return (
        null != e.requestFullscreen ||
        null != e.webkitRequestFullscreen ||
        e.webkitSupportsFullscreen ||
        null != e.mozRequestFullScreen ||
        null != e.msRequestFullscreen
    );
}
function s(e) {
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
                : new r.A("FullScreenUtils").warn("Fullscreen API is not supported.");
}
function o(e, t) {
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
                    : new r.A("FullScreenUtils").warn("Fullscreen API is not supported."));
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
let c = (() => {
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
function u(e, t) {
    return (
        e.addEventListener(c, t),
        e.addEventListener("webkitfullscreenchange", t),
        () => {
            e.removeEventListener(c, t), e.removeEventListener("webkitfullscreenchange", t);
        }
    );
}
