a.d(n, { Ju: () => s, Oq: () => l, XB: () => i, aI: () => r, km: () => o, lN: () => u, o2: () => c, sM: () => h });
var e = a(255438);
let i = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    r = 221552 == a.j ? 5242880 : null,
    o = 221552 == a.j ? 0x3200000 : null,
    u = 10,
    c = 221552 == a.j ? 36e5 : null;
function s(t) {
    return i.has(t) ? r : o;
}
function l(t, n) {
    return t <= s(n);
}
function h(t) {
    return (0, e.up)(t, { useKibibytes: !0, useSpace: !0 });
}
