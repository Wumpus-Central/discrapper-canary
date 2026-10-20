n.d(t, { Ju: () => s, Oq: () => u, XB: () => l, aI: () => a, km: () => r, o2: () => i, sM: () => o });
let l = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    a = 5242880,
    r = 0x3200000,
    i = 36e5;
function s(e) {
    return l.has(e) ? a : r;
}
function u(e, t) {
    return e <= s(t);
}
function o(e) {
    return `${Math.round(e / 1048576)} MB`;
}
