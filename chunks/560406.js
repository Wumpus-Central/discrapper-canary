var n = r(46015),
    i = /[^\0-\u007E]/,
    s = /[.\u3002\uFF0E\uFF61]/g,
    a = "Overflow: input needs wider integers to process",
    h = RangeError,
    o = n(s.exec),
    u = Math.floor,
    f = String.fromCharCode,
    c = n("".charCodeAt),
    l = n([].join),
    p = n([].push),
    g = n("".replace),
    v = n("".split),
    d = n("".toLowerCase),
    m = function (e) {
        for (var t = [], r = 0, n = e.length; r < n; ) {
            var i = c(e, r++);
            if (i >= 55296 && i <= 56319 && r < n) {
                var s = c(e, r++);
                (64512 & s) == 56320 ? p(t, ((1023 & i) << 10) + (1023 & s) + 65536) : (p(t, i), r--);
            } else p(t, i);
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
            i = (e = m(e)).length,
            s = 128,
            o = 0,
            c = 72;
        for (t = 0; t < e.length; t++) (r = e[t]) < 128 && p(n, f(r));
        var g = n.length,
            v = g;
        for (g && p(n, "-"); v < i; ) {
            var d = 2147483647;
            for (t = 0; t < e.length; t++) (r = e[t]) >= s && r < d && (d = r);
            var y = v + 1;
            if (d - s > u((2147483647 - o) / y)) throw new h(a);
            for (o += (d - s) * y, s = d, t = 0; t < e.length; t++) {
                if ((r = e[t]) < s && ++o > 2147483647) throw new h(a);
                if (r === s) {
                    for (var k = o, S = 36; ; ) {
                        var P = S <= c ? 1 : S >= c + 26 ? 26 : S - c;
                        if (k < P) break;
                        var U = k - P,
                            R = 36 - P;
                        p(n, f(w(P + (U % R)))), (k = u(U / R)), (S += 36);
                    }
                    p(n, f(w(k))), (c = b(o, y, v === g)), (o = 0), v++;
                }
            }
            o++, s++;
        }
        return l(n, "");
    };
e.exports = function (e) {
    var t,
        r,
        n = [],
        a = v(g(d(e), s, "."), ".");
    for (t = 0; t < a.length; t++) p(n, o(i, (r = a[t])) ? "xn--" + y(r) : r);
    return l(n, ".");
};
