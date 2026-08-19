"use strict";
n.d(t, { A: () => o });
var l = n(887129),
    i = n(17928),
    s = n(775602);
function r() {
    return Promise.resolve();
}
function a(e) {
    let t = document.querySelector(e);
    null != t && t.focus();
}
function o(e, t) {
    let n = (0, i.bG)([s.Ay], () => s.Ay.keyboardModeEnabled);
    return (0, l.Ay)({ id: e, isEnabled: n, orientation: t, setFocus: a, scrollToStart: r, scrollToEnd: r });
}
