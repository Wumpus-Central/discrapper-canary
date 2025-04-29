n.d(t, { Z: () => a });
var r = n(258099),
    i = n(883830),
    o = n(14309);
let a = function (e, t, n) {
    if (r.Z.randomUUID && !t && !e) return r.Z.randomUUID();
    let a = (e = e || {}).random || (e.rng || i.Z)();
    if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t)) {
        n = n || 0;
        for (let e = 0; e < 16; ++e) t[n + e] = a[e];
        return t;
    }
    return (0, o.S)(a);
};
