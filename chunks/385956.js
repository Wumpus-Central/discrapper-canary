e.d(t, {
    T: function () {
        return a;
    },
    v: function () {
        return l;
    }
});
var r = e(442837),
    i = e(355298),
    u = e(333984);
function l(n) {
    return (0, r.e7)([i.Z], () => i.Z.isMessageRequest(n), [n]);
}
function a(n) {
    return (0, r.e7)([i.Z, u.Z], () => null != n && (i.Z.isMessageRequest(n) || u.Z.isSpam(n)));
}
