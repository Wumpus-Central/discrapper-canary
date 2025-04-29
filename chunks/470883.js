n.d(t, {
    BA: () => u,
    DX: () => f,
    _j: () => l,
    aK: () => c,
    dq: () => s
});
var r = n(392711),
    i = n.n(r),
    o = n(699516),
    a = n(823379);
function s(e, t) {
    return e.filter((e) => (0, a.lm)(e)).filter((e) => !(null != t ? t.includes(e.id) : o.Z.isBlockedOrIgnored(e.id)));
}
function l(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : o.Z.isBlockedOrIgnored(e)));
}
function c(e) {
    return e.filter((e) => !o.Z.isBlockedOrIgnored(e.ownerId));
}
function u(e, t) {
    return e.some((e) => (null != t ? t.includes(e) : o.Z.isBlockedOrIgnored(e)));
}
function d(e) {
    return o.Z.isBlockedOrIgnored(e.userId);
}
function f(e) {
    return i()(e)
        .filter((e) => !d(e))
        .keyBy('userId')
        .value();
}
