t.d(e, { BL: () => o, U8: () => c, cR: () => d, fl: () => i });
var l = t(582128),
    r = t(621466),
    u = t(475815);
function i(n) {
    return null == n ? null : document.querySelector(`[data-frame-id="${CSS.escape(n)}"]`);
}
function a(n) {
    let e, t;
    return (
        null != n &&
        ((t =
            (e = document).fullscreenElement ??
            e.webkitFullscreenElement ??
            e.mozFullScreenElement ??
            e.msFullscreenElement ??
            null),
        ((0, r.vq)(t, Element) ? t.getAttribute("data-frame-id") : null) === n)
    );
}
function c(n) {
    let e = i(n);
    null != e && (0, u.Ub)(e) && (a(n) ? (0, u.sP)(e) : (0, u.tl)(e));
}
function o(n) {
    if (!a(n)) return;
    let e = i(n);
    null != e && (0, u.sP)(e);
}
function s(n) {
    return (0, u.a3)(document, n);
}
function d(n) {
    return l.useSyncExternalStore(s, () => a(n));
}
