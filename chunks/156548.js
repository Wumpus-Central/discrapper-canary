t.d(n, { BL: () => o, U8: () => a, cR: () => f, fl: () => c });
var l = t(582128),
    u = t(621466),
    r = t(475815);
function c(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function i(e) {
    let n, t;
    return (
        null != e &&
        ((t =
            (n = document).fullscreenElement ??
            n.webkitFullscreenElement ??
            n.mozFullScreenElement ??
            n.msFullscreenElement ??
            null),
        ((0, u.vq)(t, Element) ? t.getAttribute("data-frame-id") : null) === e)
    );
}
function a(e) {
    let n = c(e);
    null != n && (0, r.Ub)(n) && (i(e) ? (0, r.sP)(n) : (0, r.tl)(n));
}
function o(e) {
    if (!i(e)) return;
    let n = c(e);
    null != n && (0, r.sP)(n);
}
function d(e) {
    return (0, r.a3)(document, e);
}
function f(e) {
    return l.useSyncExternalStore(d, () => i(e));
}
