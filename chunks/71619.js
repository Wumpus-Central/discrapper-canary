t.d(n, {
    AB: () => a,
    ZP: () => c,
    s5: () => s
});
var i = t(442837),
    l = t(271383),
    r = t(594174),
    u = t(69882);
function a(e) {
    let n = (0, i.e7)([r.default], () => r.default.getCurrentUser());
    return c(null == n ? void 0 : n.id, e);
}
function o(e, n, t) {
    return null != n && null != e ? t.getMember(n, e) : null;
}
function d(e) {
    var n;
    return [null !== (n = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== n ? n : null, (0, u.b)(e)];
}
function c(e, n) {
    return d((0, i.e7)([l.ZP], () => o(e, n, l.ZP), [n, e]));
}
function s(e, n) {
    return d(o(e, n, l.ZP));
}
