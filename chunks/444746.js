n.d(t, {
    Ng: () => s,
    sb: () => a,
    vq: () => i,
});
var r = n(559374);
function i(e) {
    var t = (0, r.A)(e).Element;
    return e instanceof t || e instanceof Element;
}
function a(e) {
    var t = (0, r.A)(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
}
function s(e) {
    if ("u" < typeof ShadowRoot) return !1;
    var t = (0, r.A)(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
}
