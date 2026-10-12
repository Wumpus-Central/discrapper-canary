n.d(t, { Ju: () => s, Oq: () => o, XB: () => l, aI: () => a, km: () => i, o2: () => r, sM: () => d });
let l = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    a = 5242880,
    i = 0x3200000,
    r = 36e5;
function s(e) {
    return l.has(e) ? a : i;
}
function o(e, t) {
    return e <= s(t);
}
function d(e) {
    return `${Math.round(e / 1048576)} MB`;
}
