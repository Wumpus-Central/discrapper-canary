var n = r(410323),
    s = /[^\0-\u007E]/,
    i = /[.\u3002\uFF0E\uFF61]/g,
    a = "Overflow: input needs wider integers to process",
    h = RangeError,
    o = n(i.exec),
    u = Math.floor,
    f = String.fromCharCode,
    l = n("".charCodeAt),
    c = n([].join),
    p = n([].push),
    g = n("".replace),
    v = n("".split),
    d = n("".toLowerCase),
    m = function (e) {
        for (var t = [], r = 0, n = e.length; r < n; ) {
            var s = l(e, r++);
            if (s >= 55296 && s <= 56319 && r < n) {
                var i = l(e, r++);
                (64512 & i) == 56320 ? p(t, ((1023 & s) << 10) + (1023 & i) + 65536) : (p(t, s), r--);
            } else p(t, s);
        }
        return t;
    },
    w = function (e) {
        return e + 22 + 75 * (e < 26);
    },
    b = function (e, t, r) {
        var n = 0;
        for (e = r ? u(e / 700) : e >> 1, e += u(e / t); e > 455; ) (e = u(e / 35)), (n += 36);
        return u(n + (36 * e) / (e + 38));
    },
    y = function (e) {
        var t,
            r,
            n = [],
            s = (e = m(e)).length,
            i = 128,
            o = 0,
            l = 72;
        for (t = 0; t < e.length; t++) (r = e[t]) < 128 && p(n, f(r));
        var g = n.length,
            v = g;
        for (g && p(n, "-"); v < s; ) {
            var d = 2147483647;
            for (t = 0; t < e.length; t++) (r = e[t]) >= i && r < d && (d = r);
            var y = v + 1;
            if (d - i > u((2147483647 - o) / y)) throw new h(a);
            for (o += (d - i) * y, i = d, t = 0; t < e.length; t++) {
                if ((r = e[t]) < i && ++o > 2147483647) throw new h(a);
                if (r === i) {
                    for (var k = o, S = 36; ; ) {
                        var P = S <= l ? 1 : S >= l + 26 ? 26 : S - l;
                        if (k < P) break;
                        var U = k - P,
                            R = 36 - P;
                        p(n, f(w(P + (U % R)))), (k = u(U / R)), (S += 36);
                    }
                    p(n, f(w(k))), (l = b(o, y, v === g)), (o = 0), v++;
                }
            }
            o++, i++;
        }
        return c(n, "");
    };
e.exports = function (e) {
    var t,
        r,
        n = [],
        a = v(g(d(e), i, "."), ".");
    for (t = 0; t < a.length; t++) p(n, o(s, (r = a[t])) ? "xn--" + y(r) : r);
    return c(n, ".");
};
