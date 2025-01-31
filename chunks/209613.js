n.d(t, { Z: () => l });
var i = n(924826),
    r = n(442837),
    a = n(607070);
function s() {
    return Promise.resolve();
}
function o(e) {
    let t = document.querySelector(e);
    null != t && t.focus();
}
function l(e, t) {
    let n = (0, r.e7)([a.Z], () => a.Z.keyboardModeEnabled);
    return (0, i.ZP)({
        id: e,
        isEnabled: n,
        orientation: t,
        setFocus: o,
        scrollToStart: s,
        scrollToEnd: s
    });
}
