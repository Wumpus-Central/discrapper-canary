function r(e, t) {
    void 0 === t && (t = 0);
    var n = e % 19,
        r = Math.floor(e / 100),
        i = e % 100,
        a = Math.floor(r / 4),
        o = r % 4,
        s = Math.floor((r + 8) / 25),
        l = Math.floor((r - s + 1) / 3),
        c = Math.floor(19 * n + r - a - l + 15) % 30,
        u = Math.floor(32 + 2 * o + 2 * Math.floor(i / 4) - c - (i % 4)) % 7,
        d = Math.floor((n + 11 * c + 22 * u) / 451);
    return [Math.ceil((Date.UTC(e, Math.floor((c + u - 7 * d + 114) / 31) - 1, ((c + u - 7 * d + 114) % 31) + 1 + t) - Date.UTC(e, 0, 1)) / 86400000)];
}
n.d(t, { d: () => r });
