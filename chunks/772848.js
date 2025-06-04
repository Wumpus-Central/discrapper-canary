n.d(t, { Z: () => o });
var r = n(258099),
    i = n(883830),
    a = n(14309);
let o = function (e, t, n) {
    if (r.Z.randomUUID && !t && !e) return r.Z.randomUUID();
    let o = (e = e || {}).random || (e.rng || i.Z)();
    if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t)) {
        n = n || 0;
        for (let e = 0; e < 16; ++e) t[n + e] = o[e];
        return t;
    }
    return (0, a.S)(o);
};
