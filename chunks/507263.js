"use strict";
n.d(t, { B: () => c }), n(142703), n(321073);
var r = n(73153),
    i = n(426620),
    s = n(142120);
let a = [];
function o() {
    return null != i.A.getType();
}
function l() {
    o() || (a.forEach((e) => u(e)), (a = []));
}
function u(e) {
    setImmediate(() => e());
}
function c(e) {
    s.A.isConnectedOrOverlay() && !o() ? u(e) : a.push(e);
}
r.h.subscribe("CONNECTION_OPEN", l), r.h.subscribe("CONNECTION_RESUMED", l), r.h.subscribe("NUF_COMPLETE", l);
