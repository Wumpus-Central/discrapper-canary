n.d(t, {
    BA: () => u,
    DX: () => f,
    _j: () => l,
    aK: () => c,
    dq: () => s
});
var r = n(392711),
    i = n.n(r),
    a = n(699516),
    o = n(823379);
function s(e, t) {
    return e.filter((e) => (0, o.lm)(e)).filter((e) => !(null != t ? t.includes(e.id) : a.Z.isBlockedOrIgnored(e.id)));
}
function l(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : a.Z.isBlockedOrIgnored(e)));
}
function c(e) {
    return e.filter((e) => !a.Z.isBlockedOrIgnored(e.ownerId));
}
function u(e, t) {
    return e.some((e) => (null != t ? t.includes(e) : a.Z.isBlockedOrIgnored(e)));
}
function d(e) {
    return a.Z.isBlockedOrIgnored(e.userId);
}
function f(e) {
    return i()(e)
        .filter((e) => !d(e))
        .keyBy('userId')
        .value();
}
