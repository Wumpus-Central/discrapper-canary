l.d(t, { Uv: () => r, V0: () => c, c2: () => o, w4: () => u });
var n = l(582128),
    a = l(621466),
    i = l(475815);
function r(e) {
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
function u(e) {
    let t = r(e);
    null != t && (0, i.Ub)(t) && (s(e) ? (0, i.sP)(t) : (0, i.tl)(t));
}
function o(e) {
    if (!s(e)) return;
    let t = r(e);
    null != t && (0, i.sP)(t);
}
function d(e) {
    return (0, i.a3)(document, e);
}
function c(e) {
    return n.useSyncExternalStore(d, () => s(e));
}
