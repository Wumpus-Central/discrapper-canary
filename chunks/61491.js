function n(t, r, e) {
    return e * (Math.max(t, 0) / r.width);
}
function i(t, r, e) {
    return u((t / r) * 100, e);
}
function u(t, r) {
    return (t / 100) * r.width;
}
function o(t) {
    let r = t < 0 ? "-" : "",
        e = 0 | (t = Math.abs(t)),
        n = Math.floor(e / 3600),
        i = Math.floor((e % 3600) / 60),
        u = e % 60;
    return n > 0
        ? `${r}${n}:${String(i).padStart(2, "0")}:${String(u).padStart(2, "0")}`
        : `${r}${i}:${String(u).padStart(2, "0")}`;
}
e.d(r, { DX: () => i, TO: () => u, hc: () => n, rB: () => o });
