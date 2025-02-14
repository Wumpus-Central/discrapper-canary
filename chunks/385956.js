t.d(n, {
    T: () => o,
    v: () => r
});
var i = t(442837),
    l = t(355298),
    a = t(333984);
function r(e) {
    return (0, i.e7)([l.Z], () => l.Z.isMessageRequest(e), [e]);
}
function o(e) {
    return (0, i.e7)([l.Z, a.Z], () => null != e && (l.Z.isMessageRequest(e) || a.Z.isSpam(e)));
}
