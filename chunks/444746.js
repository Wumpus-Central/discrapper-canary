"use strict";
n.d(t, { Ng: () => a, sb: () => s, vq: () => i });
var r = n(559374);
function i(e) {
    var t = (0, r.A)(e).Element;
    return e instanceof t || e instanceof Element;
}
function s(e) {
    var t = (0, r.A)(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
}
function a(e) {
    if ("u" < typeof ShadowRoot) return !1;
    var t = (0, r.A)(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
}
