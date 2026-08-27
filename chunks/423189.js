"use strict";
r.d(t, { P: () => o, Y: () => i });
var n = r(644255);
function i(e) {
    return (
        ("" === e.pointerType && !!e.isTrusted) ||
        ((0, n.m0)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
    );
}
function o(e) {
    return (
        (!(0, n.m0)() && 0 === e.width && 0 === e.height) ||
        ((0, n.m0)() &&
            1 === e.width &&
            1 === e.height &&
            0 === e.pressure &&
            0 === e.detail &&
            "mouse" === e.pointerType)
    );
}
