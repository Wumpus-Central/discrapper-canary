n.d(t, { A: () => o });
var i = n(887129),
    s = n(17928),
    l = n(775602);
function r() {
    return Promise.resolve();
}
function a(e) {
    let t = document.querySelector(e);
    null != t && t.focus();
}
function o(e, t) {
    let n = (0, s.bG)([l.Ay], () => l.Ay.keyboardModeEnabled);
    return (0, i.Ay)({ id: e, isEnabled: n, orientation: t, setFocus: a, scrollToStart: r, scrollToEnd: r });
}
