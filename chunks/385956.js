n.d(t, {
    T: () => o,
    v: () => a
});
var r = n(442837),
    i = n(355298),
    l = n(333984);
function a(e) {
    return (0, r.e7)([i.Z], () => i.Z.isMessageRequest(e), [e]);
}
function o(e) {
    return (0, r.e7)([i.Z, l.Z], () => null != e && (i.Z.isMessageRequest(e) || l.Z.isSpam(e)));
}
