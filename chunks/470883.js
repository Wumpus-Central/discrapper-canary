n.d(t, {
    BA: () => u,
    DX: () => d,
    _j: () => s,
    aK: () => c,
    dq: () => o,
});
var r = n(392711),
    i = n.n(r),
    l = n(699516),
    a = n(823379);
function o(e, t) {
    return e.filter((e) => (0, a.lm)(e)).filter((e) => !(null != t ? t.includes(e.id) : l.Z.isBlockedOrIgnored(e.id)));
}
function s(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : l.Z.isBlockedOrIgnored(e)));
}
function c(e) {
    return e.filter((e) => !l.Z.isBlockedOrIgnored(e.ownerId));
}
function u(e, t) {
    return e.some((e) => (null != t ? t.includes(e) : l.Z.isBlockedOrIgnored(e)));
}
function d(e) {
    return i()(e)
        .filter((e) => !l.Z.isBlockedOrIgnored(e.userId))
        .keyBy("userId")
        .value();
}
