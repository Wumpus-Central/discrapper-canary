function r(e, t, n) {
    return n * (Math.max(e, 0) / t.width);
}
function l(e, t, n) {
    return a((e / t) * 100, n);
}
function a(e, t) {
    return (e / 100) * t.width;
}
function i(e) {
    let t = e < 0 ? "-" : "",
        n = 0 | (e = Math.abs(e)),
        r = Math.floor(n / 3600),
        l = Math.floor((n % 3600) / 60),
        a = n % 60;
    return r > 0
        ? `${t}${r}:${String(l).padStart(2, "0")}:${String(a).padStart(2, "0")}`
        : `${t}${l}:${String(a).padStart(2, "0")}`;
}
n.d(t, { DX: () => l, TO: () => a, hc: () => r, rB: () => i });
