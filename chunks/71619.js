n.d(t, {
    AB: () => o,
    ZP: () => c,
    s5: () => d
});
var i = n(442837),
    r = n(271383),
    a = n(594174),
    s = n(69882);
function o(e) {
    let t = (0, i.e7)([a.default], () => a.default.getCurrentUser());
    return c(null == t ? void 0 : t.id, e);
}
function l(e, t, n) {
    return null != t && null != e ? n.getMember(t, e) : null;
}
function u(e) {
    var t;
    return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, s.b)(e)];
}
function c(e, t) {
    return u((0, i.e7)([r.ZP], () => l(e, t, r.ZP), [t, e]));
}
function d(e, t) {
    return u(l(e, t, r.ZP));
}
