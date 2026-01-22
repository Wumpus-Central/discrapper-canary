n.d(t, { B: () => u }), n(142703), n(321073);
var r = n(73153),
    i = n(426620),
    a = n(142120);
let s = [];
function o() {
    return null != i.A.getType();
}
function l() {
    o() || (s.forEach((e) => c(e)), (s = []));
}
function c(e) {
    setImmediate(() => e());
}
function u(e) {
    a.A.isConnectedOrOverlay() && !o() ? c(e) : s.push(e);
}
r.h.subscribe("CONNECTION_OPEN", l), r.h.subscribe("CONNECTION_RESUMED", l), r.h.subscribe("NUF_COMPLETE", l);
