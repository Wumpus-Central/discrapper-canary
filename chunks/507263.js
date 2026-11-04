(n(142703), n(321073));
var i = n(73153),
    r = n(426620),
    a = n(225123);
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
(i.h.subscribe("CONNECTION_OPEN", o),
    i.h.subscribe("CONNECTION_RESUMED", o),
    i.h.subscribe("NUF_COMPLETE", o),
    n.d(
        t,
        {},
        {
            B: function (e) {
                a.A.isConnectedOrOverlay() && !l() ? d(e) : s.push(e);
            },
        },
    ));
