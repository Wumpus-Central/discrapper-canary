"use strict";
n.d(t, { B: () => c }), n(142703), n(321073);
var r = n(73153),
    i = n(426620),
    a = n(142120);
let s = [];
function o() {
    return null != i.A.getType();
}
function l() {
    o() || (s.forEach((e) => u(e)), (s = []));
}
function u(e) {
    setImmediate(() => e());
}
function c(e) {
    a.A.isConnectedOrOverlay() && !o() ? u(e) : s.push(e);
}
r.h.subscribe("CONNECTION_OPEN", l), r.h.subscribe("CONNECTION_RESUMED", l), r.h.subscribe("NUF_COMPLETE", l);
