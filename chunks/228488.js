r.d(n, {
    Dj: function () {
        return s;
    },
    NO: function () {
        return c;
    },
    Pr: function () {
        return l;
    },
    fn: function () {
        return a;
    },
    rB: function () {
        return u;
    },
    uF: function () {
        return d;
    }
});
var i = r(710845);
function a() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    return n.find((e) => null != e && o(e));
}
function o(e) {
    return null != e.requestFullscreen || null != e.webkitRequestFullscreen || e.webkitSupportsFullscreen || null != e.mozRequestFullScreen || null != e.msRequestFullscreen;
}
function s(e) {
    'function' == typeof e.requestFullscreen ? e.requestFullscreen() : 'function' == typeof e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : 'function' == typeof e.webkitEnterFullscreen ? e.webkitEnterFullscreen() : 'function' == typeof e.mozRequestFullScreen ? e.mozRequestFullScreen() : 'function' == typeof e.msRequestFullscreen ? e.msRequestFullscreen() : new i.Z('FullScreenUtils').warn('Fullscreen API is not supported.');
}
function l(e, n) {
    let r = null != n ? n : document;
    u(null, r) && ('function' == typeof r.exitFullscreen ? r.exitFullscreen() : 'function' == typeof r.webkitExitFullscreen ? r.webkitExitFullscreen() : 'function' == typeof e.webkitExitFullscreen ? e.webkitExitFullscreen() : 'function' == typeof r.mozCancelFullScreen ? r.mozCancelFullScreen() : 'function' == typeof r.msExitFullscreen ? r.msExitFullscreen() : new i.Z('FullScreenUtils').warn('Fullscreen API is not supported.'));
}
function u(e, n) {
    let r = null != n ? n : document;
    return !!(null != r.fullscreenElement || null != r.mozFullScreenElement || null != r.webkitFullscreenElement || null != r.msFullscreenElement || (null != e && e.webkitDisplayingFullscreen));
}
let c = (() => {
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
function d(e, n) {
    return (
        e.addEventListener(c, n),
        e.addEventListener('webkitfullscreenchange', n),
        () => {
            e.removeEventListener(c, n), e.removeEventListener('webkitfullscreenchange', n);
        }
    );
}
