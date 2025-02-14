t.d(n, {
    AB: () => o,
    ZP: () => s,
    s5: () => c
});
var i = t(442837),
    l = t(271383),
    a = t(594174),
    r = t(69882);
function o(e) {
    let n = (0, i.e7)([a.default], () => a.default.getCurrentUser());
    return s(null == n ? void 0 : n.id, e);
}
function u(e, n, t) {
    return null != n && null != e ? t.getMember(n, e) : null;
}
function d(e) {
    var n;
    return [null !== (n = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== n ? n : null, (0, r.b)(e)];
}
function s(e, n) {
    return d((0, i.e7)([l.ZP], () => u(e, n, l.ZP), [n, e]));
}
function c(e, n) {
    return d(u(e, n, l.ZP));
}
