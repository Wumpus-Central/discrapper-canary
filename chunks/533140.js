l.d(t, { Uv: () => i, V0: () => c, c2: () => u, w4: () => o });
var n = l(582128),
    a = l(621466),
    r = l(475815);
function i(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function s(e) {
    let t;
    return (
        null != e &&
        ((t =
            document.fullscreenElement ??
            document.webkitFullscreenElement ??
            document.mozFullScreenElement ??
            document.msFullscreenElement ??
            null),
        ((0, a.vq)(t, Element) ? t.getAttribute("data-frame-id") : null) === e)
    );
}
function o(e) {
    let t = i(e);
    null != t && (0, r.Ub)(t) && (s(e) ? (0, r.sP)(t) : (0, r.tl)(t));
}
function u(e) {
    if (!s(e)) return;
    let t = i(e);
    null != t && (0, r.sP)(t);
}
function d(e) {
    return (0, r.a3)(document, e);
}
function c(e) {
    return n.useSyncExternalStore(d, () => s(e));
}
