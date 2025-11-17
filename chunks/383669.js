n.d(t, {
    Z: () => i,
    c: () => a,
});
var r = n(21814);
function i(e) {
    return (
        ("" === e.pointerType && !!e.isTrusted) ||
        ((0, r.Dt)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
    );
}
function a(e) {
    return (
        (!(0, r.Dt)() && 0 === e.width && 0 === e.height) ||
        (1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType)
    );
}
