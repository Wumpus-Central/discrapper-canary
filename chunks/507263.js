"use strict";
n.d(t, { B: () => c }), n(142703), n(321073);
var i = n(228366),
    r = n(426620),
    a = n(597643);
let s = [];
function l() {
    return null != r.A.getType();
}
function o() {
    l() || (s.forEach((e) => d(e)), (s = []));
}
function d(e) {
    setImmediate(() => e());
}
function c(e) {
    a.A.isConnectedOrOverlay() && !l() ? d(e) : s.push(e);
}
i.h.subscribe("CONNECTION_OPEN", o), i.h.subscribe("CONNECTION_RESUMED", o), i.h.subscribe("NUF_COMPLETE", o);
