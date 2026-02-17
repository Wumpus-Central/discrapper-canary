"use strict";
n.d(t, { DX: () => s, hc: () => a, rB: () => o });
let r = 3600,
    i = 60;
function a(e, t, n) {
    return n * (Math.max(e - t.left, 0) / t.width);
}
function s(e, t, n) {
    return n.left + (e / t) * n.width;
}
function o(e) {
    let t = 0 | e,
        n = Math.floor(t / r),
        a = Math.floor((t % r) / i),
        s = t % i;
    return n > 0
        ? `${n}:${String(a).padStart(2, "0")}:${String(s).padStart(2, "0")}`
        : `${a}:${String(s).padStart(2, "0")}`;
}
