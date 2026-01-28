var r = n(410323),
    i = 0x7fffffff,
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
    h = "Overflow: input needs wider integers to process",
    m = 35,
    g = RangeError,
    E = r(_.exec),
    y = Math.floor,
    b = String.fromCharCode,
    O = r("".charCodeAt),
    v = r([].join),
    A = r([].push),
    I = r("".replace),
    S = r("".split),
    T = r("".toLowerCase),
    C = function (e) {
        for (var t = [], n = 0, r = e.length; n < r; ) {
            var i = O(e, n++);
            if (i >= 55296 && i <= 56319 && n < r) {
                var a = O(e, n++);
                (64512 & a) == 56320 ? A(t, ((1023 & i) << 10) + (1023 & a) + 65536) : (A(t, i), n--);
            } else A(t, i);
        }
        return t;
    },
    N = function (e) {
        return e + 22 + 75 * (e < 26);
    },
    w = function (e, t, n) {
        var r = 0;
        for (e = n ? y(e / c) : e >> 1, e += y(e / t); e > (m * s) >> 1; ) (e = y(e / m)), (r += a);
        return y(r + ((m + 1) * e) / (e + l));
    },
    R = function (e) {
        var t,
            n,
            r = [],
            l = (e = C(e)).length,
            c = d,
            p = 0,
            _ = u;
        for (t = 0; t < e.length; t++) (n = e[t]) < 128 && A(r, b(n));
        var m = r.length,
            E = m;
        for (m && A(r, f); E < l; ) {
            var O = i;
            for (t = 0; t < e.length; t++) (n = e[t]) >= c && n < O && (O = n);
            var I = E + 1;
            if (O - c > y((i - p) / I)) throw new g(h);
            for (p += (O - c) * I, c = O, t = 0; t < e.length; t++) {
                if ((n = e[t]) < c && ++p > i) throw new g(h);
                if (n === c) {
                    for (var S = p, T = a; ; ) {
                        var R = T <= _ ? o : T >= _ + s ? s : T - _;
                        if (S < R) break;
                        var P = S - R,
                            D = a - R;
                        A(r, b(N(R + (P % D)))), (S = y(P / D)), (T += a);
                    }
                    A(r, b(N(S))), (_ = w(p, I, E === m)), (p = 0), E++;
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
        i = S(I(T(e), _, "."), ".");
    for (t = 0; t < i.length; t++) A(r, E(p, (n = i[t])) ? "xn--" + R(n) : n);
    return v(r, ".");
};
