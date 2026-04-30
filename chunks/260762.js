n.d(t, { A: () => o });
var i = n(887129),
    l = n(17928),
    r = n(775602);
function s() {
    return Promise.resolve();
}
function a(e) {
    let t = document.querySelector(e);
    null != t && t.focus();
}
function o(e, t) {
    let n = (0, l.bG)([r.A], () => r.A.keyboardModeEnabled);
    return (0, i.Ay)({ id: e, isEnabled: n, orientation: t, setFocus: a, scrollToStart: s, scrollToEnd: s });
}
