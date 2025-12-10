var r = n(46015),
    i = 2147483647,
    a = 36,
    o = 1,
    s = 26,
    l = 38,
    c = 700,
    u = 72,
    d = 128,
    f = "-",
    p = /[^\0-\u007E]/,
    _ = /[.\u3002\uFF0E\uFF61]/g,
    m = "Overflow: input needs wider integers to process",
    h = 35,
    g = RangeError,
    E = r(_.exec),
    b = Math.floor,
    y = String.fromCharCode,
    O = r("".charCodeAt),
    v = r([].join),
    S = r([].push),
    I = r("".replace),
    T = r("".split),
    C = r("".toLowerCase),
    A = function (e) {
        for (var t = [], n = 0, r = e.length; n < r; ) {
            var i = O(e, n++);
            if (i >= 55296 && i <= 56319 && n < r) {
                var a = O(e, n++);
                (64512 & a) == 56320 ? S(t, ((1023 & i) << 10) + (1023 & a) + 65536) : (S(t, i), n--);
            } else S(t, i);
        }
        return t;
    },
    N = function (e) {
        return e + 22 + 75 * (e < 26);
    },
    P = function (e, t, n) {
        var r = 0;
        for (e = n ? b(e / c) : e >> 1, e += b(e / t); e > (h * s) >> 1; ) (e = b(e / h)), (r += a);
        return b(r + ((h + 1) * e) / (e + l));
    },
    R = function (e) {
        var t,
            n,
            r = [],
            l = (e = A(e)).length,
            c = d,
            p = 0,
            _ = u;
        for (t = 0; t < e.length; t++) (n = e[t]) < 128 && S(r, y(n));
        var h = r.length,
            E = h;
        for (h && S(r, f); E < l; ) {
            var O = i;
            for (t = 0; t < e.length; t++) (n = e[t]) >= c && n < O && (O = n);
            var I = E + 1;
            if (O - c > b((i - p) / I)) throw new g(m);
            for (p += (O - c) * I, c = O, t = 0; t < e.length; t++) {
                if ((n = e[t]) < c && ++p > i) throw new g(m);
                if (n === c) {
                    for (var T = p, C = a; ; ) {
                        var R = C <= _ ? o : C >= _ + s ? s : C - _;
                        if (T < R) break;
                        var D = T - R,
                            w = a - R;
                        S(r, y(N(R + (D % w)))), (T = b(D / w)), (C += a);
                    }
                    S(r, y(N(T))), (_ = P(p, I, E === h)), (p = 0), E++;
                }
            }
            p++, c++;
        }
        return v(r, "");
    };
e.exports = function (e) {
    var t,
        n,
        r = [],
        i = T(I(C(e), _, "."), ".");
    for (t = 0; t < i.length; t++) S(r, E(p, (n = i[t])) ? "xn--" + R(n) : n);
    return v(r, ".");
};
