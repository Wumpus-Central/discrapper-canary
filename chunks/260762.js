n.d(t, { A: () => l });
var i = n(887129),
    r = n(17928),
    a = n(775602);
function s() {
    return Promise.resolve();
}
function _(e) {
    let t = document.querySelector(e);
    null != t && t.focus();
}
function l(e, t) {
    let n = (0, r.bG)([a.A], () => a.A.keyboardModeEnabled);
    return (0, i.Ay)({ id: e, isEnabled: n, orientation: t, setFocus: _, scrollToStart: s, scrollToEnd: s });
}
