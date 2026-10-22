a.d(n, { Ju: () => s, Oq: () => c, XB: () => r, aI: () => i, km: () => l, lN: () => o, o2: () => u, sM: () => f });
var e = a(255438);
let r = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    i = 221552 == a.j ? 5242880 : null,
    l = 221552 == a.j ? 0x3200000 : null,
    o = 10,
    u = 221552 == a.j ? 36e5 : null;
function s(t) {
    return r.has(t) ? i : l;
}
function c(t, n) {
    return t <= s(n);
}
function f(t) {
    return (0, e.up)(t, { useKibibytes: !0, useSpace: !0 });
}
