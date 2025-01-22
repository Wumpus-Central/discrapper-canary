var i = r(258099),
    a = r(883830),
    o = r(14309);
function s(e, n, r) {
    if (i.Z.randomUUID && !n && !e) return i.Z.randomUUID();
    let s = (e = e || {}).random || (e.rng || a.Z)();
    if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), n)) {
        r = r || 0;
        for (let e = 0; e < 16; ++e) n[r + e] = s[e];
        return n;
    }
    return (0, o.S)(s);
}
n.Z = s;
