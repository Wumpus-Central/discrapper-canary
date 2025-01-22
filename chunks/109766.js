function i(e, n) {
    void 0 === n && (n = 0);
    var r = e % 19,
        i = Math.floor(e / 100),
        a = e % 100,
        o = Math.floor(i / 4),
        s = i % 4,
        l = Math.floor((i + 8) / 25),
        u = Math.floor((i - l + 1) / 3),
        c = Math.floor(19 * r + i - o - u + 15) % 30,
        d = Math.floor(32 + 2 * s + 2 * Math.floor(a / 4) - c - (a % 4)) % 7,
        f = Math.floor((r + 11 * c + 22 * d) / 451);
    return [Math.ceil((Date.UTC(e, Math.floor((c + d - 7 * f + 114) / 31) - 1, ((c + d - 7 * f + 114) % 31) + 1 + n) - Date.UTC(e, 0, 1)) / 86400000)];
}
r.d(n, {
    d: function () {
        return i;
    }
});
