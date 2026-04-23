n.d(t, { B: () => u }), n(142703), n(321073);
var i = n(228366),
    r = n(426620),
    l = n(366853);
let a = [];
function s() {
    return null != r.A.getType();
}
function o() {
    s() || (a.forEach((e) => d(e)), (a = []));
}
function d(e) {
    setImmediate(() => e());
}
function u(e) {
    l.A.isConnectedOrOverlay() && !s() ? d(e) : a.push(e);
}
i.h.subscribe("CONNECTION_OPEN", o), i.h.subscribe("CONNECTION_RESUMED", o), i.h.subscribe("NUF_COMPLETE", o);
