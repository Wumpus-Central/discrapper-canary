t.d(n, {
    AB: () => u,
    ZP: () => s,
    s5: () => c
});
var i = t(442837),
    l = t(271383),
    r = t(594174),
    a = t(69882);
function u(e) {
    let n = (0, i.e7)([r.default], () => r.default.getCurrentUser());
    return s(null == n ? void 0 : n.id, e);
}
function d(e, n, t) {
    return null != n && null != e ? t.getMember(n, e) : null;
}
function o(e) {
    var n;
    return [null !== (n = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== n ? n : null, (0, a.b)(e)];
}
function s(e, n) {
    return o((0, i.e7)([l.ZP], () => d(e, n, l.ZP), [n, e]));
}
function c(e, n) {
    return o(d(e, n, l.ZP));
}
