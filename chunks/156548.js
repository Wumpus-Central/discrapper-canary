t.d(e, { BL: () => o, U8: () => c, cR: () => s, fl: () => i });
var l = t(582128),
    u = t(621466),
    r = t(475815);
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
        ((0, u.vq)(t, Element) ? t.getAttribute("data-frame-id") : null) === n)
    );
}
function c(n) {
    let e = i(n);
    null != e && (0, r.Ub)(e) && (a(n) ? (0, r.sP)(e) : (0, r.tl)(e));
}
function o(n) {
    if (!a(n)) return;
    let e = i(n);
    null != e && (0, r.sP)(e);
}
function d(n) {
    return (0, r.a3)(document, n);
}
function s(n) {
    return l.useSyncExternalStore(d, () => a(n));
}
