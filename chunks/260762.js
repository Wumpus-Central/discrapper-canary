"use strict";
n.d(t, { A: () => l });
var i = n(887129),
    r = n(17928),
    s = n(775602);
function a() {
    return Promise.resolve();
}
function o(e) {
    let t = document.querySelector(e);
    null != t && t.focus();
}
function l(e, t) {
    let n = (0, r.bG)([s.A], () => s.A.keyboardModeEnabled);
    return (0, i.Ay)({ id: e, isEnabled: n, orientation: t, setFocus: o, scrollToStart: a, scrollToEnd: a });
}
