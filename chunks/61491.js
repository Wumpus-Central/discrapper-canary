function r(e, t, n) {
    return n * (Math.max(e, 0) / t.width);
}
function i(e, t, n) {
    return s((e / t) * 100, n);
}
function s(e, t) {
    return (e / 100) * t.width;
}
function l(e) {
    let t = 0 | e,
        n = Math.floor(t / 3600),
        r = Math.floor((t % 3600) / 60),
        i = t % 60;
    return n > 0
        ? `${n}:${String(r).padStart(2, "0")}:${String(i).padStart(2, "0")}`
        : `${r}:${String(i).padStart(2, "0")}`;
}
n.d(t, { DX: () => i, TO: () => s, hc: () => r, rB: () => l });
