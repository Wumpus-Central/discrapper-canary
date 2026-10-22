l.d(t, { BL: () => o, U8: () => c, cR: () => d, fl: () => i });
var e = l(582128),
    r = l(621466),
    u = l(475815);
function i(n) {
    return null == n ? null : document.querySelector(`[data-frame-id="${CSS.escape(n)}"]`);
}
function a(n) {
    let t, l;
    return (
        null != n &&
        ((l =
            (t = document).fullscreenElement ??
            t.webkitFullscreenElement ??
            t.mozFullScreenElement ??
            t.msFullscreenElement ??
            null),
        ((0, r.vq)(l, Element) ? l.getAttribute("data-frame-id") : null) === n)
    );
}
function c(n) {
    let t = i(n);
    null != t && (0, u.Ub)(t) && (a(n) ? (0, u.sP)(t) : (0, u.tl)(t));
}
function o(n) {
    if (!a(n)) return;
    let t = i(n);
    null != t && (0, u.sP)(t);
}
function s(n) {
    return (0, u.a3)(document, n);
}
function d(n) {
    return e.useSyncExternalStore(s, () => a(n));
}
