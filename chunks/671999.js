function i(e, t, n) {
    return new MouseEvent(e, {
        screenX: t,
        screenY: n,
        clientX: t,
        clientY: n,
        bubbles: !0,
        view: window
    });
}
function r(e, t, n) {
    let i = document.elementFromPoint(t, n);
    if (null == i) throw Error();
    i.dispatchEvent(e);
}
n.d(t, {
    B: () => i,
    J: () => r
}),
    n(411104);
