n.d(t, { Ju: () => o, Oq: () => d, XB: () => a, aI: () => r, km: () => i, lN: () => s, o2: () => u, sM: () => c });
var l = n(255438);
let a = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    r = 5242880,
    i = 0x3200000,
    s = 10,
    u = 36e5;
function o(e) {
    return a.has(e) ? r : i;
}
function d(e, t) {
    return e <= o(t);
}
function c(e) {
    return (0, l.up)(e, { useKibibytes: !0, useSpace: !0 });
}
