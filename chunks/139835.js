"use strict";
r.d(t, { P: () => i, Y: () => o });
var n = r(361037);
function o(e) {
    return (
        ("" === e.pointerType && !!e.isTrusted) ||
        ((0, n.m0)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
    );
}
function i(e) {
    return (
        (!(0, n.m0)() && 0 === e.width && 0 === e.height) ||
        (1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType)
    );
}
