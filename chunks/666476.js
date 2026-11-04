var e = n(255438);
let r = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    i = 221552 == n.j ? 5242880 : null,
    o = 221552 == n.j ? 0x3200000 : null,
    u = 221552 == n.j ? 36e5 : null;
function c(t) {
    return r.has(t) ? i : o;
}
n.d(
    a,
    {},
    {
        Ju: c,
        Oq: function (t, a) {
            return t <= c(a);
        },
        XB: r,
        aI: i,
        km: o,
        o2: u,
        sM: function (t) {
            return (0, e.up)(t, { useKibibytes: !0, useSpace: !0 });
        },
    },
);
