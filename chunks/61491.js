"use strict";
function i(e, t, n) {
    return n * (Math.max(e, 0) / t.width);
}
function r(e, t, n) {
    return s((e / t) * 100, n);
}
function s(e, t) {
    return (e / 100) * t.width;
}
function a(e) {
    let t = 0 | e,
        n = Math.floor(t / 3600),
        i = Math.floor((t % 3600) / 60),
        r = t % 60;
    return n > 0
        ? `${n}:${String(i).padStart(2, "0")}:${String(r).padStart(2, "0")}`
        : `${i}:${String(r).padStart(2, "0")}`;
}
n.d(t, { DX: () => r, TO: () => s, hc: () => i, rB: () => a });
