n.d(t, {
    Dj: () => s,
    NO: () => u,
    Pr: () => o,
    fn: () => r,
    rB: () => l,
    uF: () => c
});
var i = n(710845);
function r() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.find((e) => null != e && a(e));
}
function a(e) {
    return null != e.requestFullscreen || null != e.webkitRequestFullscreen || e.webkitSupportsFullscreen || null != e.mozRequestFullScreen || null != e.msRequestFullscreen;
}
function s(e) {
    'function' == typeof e.requestFullscreen ? e.requestFullscreen() : 'function' == typeof e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : 'function' == typeof e.webkitEnterFullscreen ? e.webkitEnterFullscreen() : 'function' == typeof e.mozRequestFullScreen ? e.mozRequestFullScreen() : 'function' == typeof e.msRequestFullscreen ? e.msRequestFullscreen() : new i.Z('FullScreenUtils').warn('Fullscreen API is not supported.');
}
function o(e, t) {
    let n = null != t ? t : document;
    l(null, n) && ('function' == typeof n.exitFullscreen ? n.exitFullscreen() : 'function' == typeof n.webkitExitFullscreen ? n.webkitExitFullscreen() : 'function' == typeof e.webkitExitFullscreen ? e.webkitExitFullscreen() : 'function' == typeof n.mozCancelFullScreen ? n.mozCancelFullScreen() : 'function' == typeof n.msExitFullscreen ? n.msExitFullscreen() : new i.Z('FullScreenUtils').warn('Fullscreen API is not supported.'));
}
function l(e, t) {
    let n = null != t ? t : document;
    return !!(null != n.fullscreenElement || null != n.mozFullScreenElement || null != n.webkitFullscreenElement || null != n.msFullscreenElement || (null != e && e.webkitDisplayingFullscreen));
}
let u = (() => {
    if ('undefined' != typeof document) {
        let e = document.createElement('video');
        if ('function' == typeof e.requestFullscreen);
        else if ('function' == typeof e.webkitRequestFullscreen) return 'webkitfullscreenchange';
        else if ('function' == typeof e.webkitEnterFullscreen) return 'webkitendfullscreen';
        else if ('function' == typeof e.mozRequestFullScreen) return 'mozfullscreenchange';
        else if ('function' == typeof e.msRequestFullscreen) return 'msfullscreenchange';
    } else console.warn('FullScreenUtils has been imported in a non-web environment');
    return 'fullscreenchange';
})();
function c(e, t) {
    return (
        e.addEventListener(u, t),
        e.addEventListener('webkitfullscreenchange', t),
        () => {
            e.removeEventListener(u, t), e.removeEventListener('webkitfullscreenchange', t);
        }
    );
}
