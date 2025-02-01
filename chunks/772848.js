n.d(t, { Z: () => s });
var i = n(258099),
    r = n(883830),
    a = n(14309);
let s = function (e, t, n) {
    if (i.Z.randomUUID && !t && !e) return i.Z.randomUUID();
    let s = (e = e || {}).random || (e.rng || r.Z)();
    if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), t)) {
        n = n || 0;
        for (let e = 0; e < 16; ++e) t[n + e] = s[e];
        return t;
    }
    return (0, a.S)(s);
};
