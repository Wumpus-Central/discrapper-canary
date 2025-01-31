n.d(t, {
    BA: () => c,
    DX: () => f,
    _j: () => l,
    aK: () => u,
    dq: () => o
});
var i = n(392711),
    r = n.n(i),
    a = n(699516),
    s = n(823379);
function o(e, t) {
    return e.filter((e) => (0, s.lm)(e)).filter((e) => !(null != t ? t.includes(e.id) : a.Z.isBlockedOrIgnored(e.id)));
}
function l(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : a.Z.isBlockedOrIgnored(e)));
}
function u(e) {
    return e.filter((e) => !a.Z.isBlockedOrIgnored(e.ownerId));
}
function c(e, t) {
    return e.some((e) => (null != t ? t.includes(e) : a.Z.isBlockedOrIgnored(e)));
}
function d(e) {
    return a.Z.isBlockedOrIgnored(e.userId);
}
function f(e) {
    return r()(e)
        .filter((e) => !d(e))
        .keyBy('userId')
        .value();
}
