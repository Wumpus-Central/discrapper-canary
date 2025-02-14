t.d(n, {
    AB: () => l,
    ZP: () => _,
    s5: () => d
});
var i = t(442837),
    o = t(271383),
    r = t(594174),
    a = t(69882);
function l(e) {
    let n = (0, i.e7)([r.default], () => r.default.getCurrentUser());
    return _(null == n ? void 0 : n.id, e);
}
function c(e, n, t) {
    return null != n && null != e ? t.getMember(n, e) : null;
}
function s(e) {
    var n;
    return [null !== (n = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== n ? n : null, (0, a.b)(e)];
}
function _(e, n) {
    return s((0, i.e7)([o.ZP], () => c(e, n, o.ZP), [n, e]));
}
function d(e, n) {
    return s(c(e, n, o.ZP));
}
