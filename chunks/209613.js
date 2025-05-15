n.d(t, { Z: () => l });
var r = n(924826),
    i = n(442837),
    o = n(607070);
function a() {
    return Promise.resolve();
}
function s(e) {
    let t = document.querySelector(e);
    null != t && t.focus();
}
function l(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.keyboardModeEnabled);
    return (0, r.ZP)({
        id: e,
        isEnabled: n,
        orientation: t,
        setFocus: s,
        scrollToStart: a,
        scrollToEnd: a
    });
}
