n.d(t, {
    Mo: () => c,
    _K: () => u,
    im: () => l
});
var r = n(592125),
    i = n(306680),
    a = n(451478),
    o = n(830917);
function s(e) {
    var t;
    let n = i.ZP.getChannelIdsForWindowId(e)[0];
    return null == n ? null : null != (t = r.Z.getChannel(n)) ? t : null;
}
function l(e) {
    if (null == e) return null;
    let t = (0, o.ZY)(e);
    return null == t ? null : s(t);
}
function c() {
    let e = a.Z.getFocusedWindowId();
    return null == e ? null : s(e);
}
function u(e, t) {
    if (null == e || null == t) return !1;
    let n = (0, o.ZY)(e);
    return n === (0, o.ZY)(t) && null != n;
}
