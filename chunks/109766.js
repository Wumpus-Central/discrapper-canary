function i(e, t) {
    void 0 === t && (t = 0);
    var n = e % 19,
        i = Math.floor(e / 100),
        r = e % 100,
        a = Math.floor(i / 4),
        s = i % 4,
        o = Math.floor((i + 8) / 25),
        l = Math.floor((i - o + 1) / 3),
        u = Math.floor(19 * n + i - a - l + 15) % 30,
        c = Math.floor(32 + 2 * s + 2 * Math.floor(r / 4) - u - (r % 4)) % 7,
        d = Math.floor((n + 11 * u + 22 * c) / 451);
    return [Math.ceil((Date.UTC(e, Math.floor((u + c - 7 * d + 114) / 31) - 1, ((u + c - 7 * d + 114) % 31) + 1 + t) - Date.UTC(e, 0, 1)) / 86400000)];
}
n.d(t, { d: () => i });
