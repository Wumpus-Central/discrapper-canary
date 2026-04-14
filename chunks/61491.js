"use strict";
n.d(t, { DX: () => a, TO: () => o, hc: () => s, rB: () => l });
let r = 3600,
    i = 60;
function s(e, t, n) {
    return n * (Math.max(e, 0) / t.width);
}
function a(e, t, n) {
    return o((e / t) * 100, n);
}
function o(e, t) {
    return (e / 100) * t.width;
}
function l(e) {
    let t = 0 | e,
        n = Math.floor(t / r),
        s = Math.floor((t % r) / i),
        a = t % i;
    return n > 0
        ? `${n}:${String(s).padStart(2, "0")}:${String(a).padStart(2, "0")}`
        : `${s}:${String(a).padStart(2, "0")}`;
}
