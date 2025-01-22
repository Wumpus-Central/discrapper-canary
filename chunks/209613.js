r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(924826),
    a = r(442837),
    o = r(607070);
function s() {
    return Promise.resolve();
}
function l(e) {
    let n = document.querySelector(e);
    null != n && n.focus();
}
function u(e, n) {
    let r = (0, a.e7)([o.Z], () => o.Z.keyboardModeEnabled);
    return (0, i.ZP)({
        id: e,
        isEnabled: r,
        orientation: n,
        setFocus: l,
        scrollToStart: s,
        scrollToEnd: s
    });
}
