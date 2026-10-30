n.d(a, { Ju: () => s, Oq: () => l, XB: () => r, aI: () => i, km: () => o, lN: () => u, o2: () => c, sM: () => h });
var e = n(255438);
let r = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    i = 221552 == n.j ? 5242880 : null,
    o = 221552 == n.j ? 0x3200000 : null,
    u = 10,
    c = 221552 == n.j ? 36e5 : null;
function s(t) {
    return r.has(t) ? i : o;
}
function l(t, a) {
    return t <= s(a);
}
function h(t) {
    return (0, e.up)(t, { useKibibytes: !0, useSpace: !0 });
}
