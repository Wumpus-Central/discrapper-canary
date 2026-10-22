e.d(a, { Ju: () => s, Oq: () => c, XB: () => i, aI: () => r, km: () => l, lN: () => o, o2: () => u, sM: () => h });
var n = e(255438);
let i = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    r = 221552 == e.j ? 5242880 : null,
    l = 221552 == e.j ? 0x3200000 : null,
    o = 10,
    u = 221552 == e.j ? 36e5 : null;
function s(t) {
    return i.has(t) ? r : l;
}
function c(t, a) {
    return t <= s(a);
}
function h(t) {
    return (0, n.up)(t, { useKibibytes: !0, useSpace: !0 });
}
