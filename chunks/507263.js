"use strict";
n.d(t, { B: () => c }), n(142703), n(321073);
var i = n(228366),
    r = n(426620),
    s = n(587626);
let a = [];
function o() {
    return null != r.A.getType();
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
i.h.subscribe("CONNECTION_OPEN", l), i.h.subscribe("CONNECTION_RESUMED", l), i.h.subscribe("NUF_COMPLETE", l);
