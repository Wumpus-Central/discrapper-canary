n.d(t, {
    A: () => l,
});
var r = n(884362),
    i = n(311907),
    a = n(775602);

function s() {
    return Promise.resolve();
}

function o(e) {
    let t = document.querySelector(e);
    null != t && t.focus();
}

function l(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.keyboardModeEnabled);
    return (0, r.Ay)({
        id: e,
        isEnabled: n,
        orientation: t,
        setFocus: o,
        scrollToStart: s,
        scrollToEnd: s,
    });
}
