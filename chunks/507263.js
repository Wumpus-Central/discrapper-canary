n.d(t, { B: () => u }), n(142703), n(321073);
var i = n(228366),
    l = n(426620),
    a = n(446458);
let r = [];
function s() {
    return null != l.A.getType();
}
function o() {
    s() || (r.forEach((e) => d(e)), (r = []));
}
function d(e) {
    setImmediate(() => e());
}
function u(e) {
    a.A.isConnectedOrOverlay() && !s() ? d(e) : r.push(e);
}
i.h.subscribe("CONNECTION_OPEN", o), i.h.subscribe("CONNECTION_RESUMED", o), i.h.subscribe("NUF_COMPLETE", o);
