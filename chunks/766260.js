var r = n(410323),
    i = 2147483647,
    a = 36,
    s = 1,
    o = 26,
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
    b = Math.floor,
    y = String.fromCharCode,
    O = r("".charCodeAt),
    A = r([].join),
    v = r([].push),
    S = r("".replace),
    I = r("".split),
    T = r("".toLowerCase),
    C = function (e) {
        for (var t = [], n = 0, r = e.length; n < r; ) {
            var i = O(e, n++);
            if (i >= 55296 && i <= 56319 && n < r) {
                var a = O(e, n++);
                (64512 & a) == 56320 ? v(t, ((1023 & i) << 10) + (1023 & a) + 65536) : (v(t, i), n--);
            } else v(t, i);
        }
        return t;
    },
    N = function (e) {
        return e + 22 + 75 * (e < 26);
    },
    R = function (e, t, n) {
        var r = 0;
        for (e = n ? b(e / c) : e >> 1, e += b(e / t); e > (m * o) >> 1; ) (e = b(e / m)), (r += a);
        return b(r + ((m + 1) * e) / (e + l));
    },
    w = function (e) {
        var t,
            n,
            r = [],
            l = (e = C(e)).length,
            c = d,
            p = 0,
            _ = u;
        for (t = 0; t < e.length; t++) (n = e[t]) < 128 && v(r, y(n));
        var m = r.length,
            E = m;
        for (m && v(r, f); E < l; ) {
            var O = i;
            for (t = 0; t < e.length; t++) (n = e[t]) >= c && n < O && (O = n);
            var S = E + 1;
            if (O - c > b((i - p) / S)) throw new g(h);
            for (p += (O - c) * S, c = O, t = 0; t < e.length; t++) {
                if ((n = e[t]) < c && ++p > i) throw new g(h);
                if (n === c) {
                    for (var I = p, T = a; ; ) {
                        var w = T <= _ ? s : T >= _ + o ? o : T - _;
                        if (I < w) break;
                        var P = I - w,
                            D = a - w;
                        v(r, y(N(w + (P % D)))), (I = b(P / D)), (T += a);
                    }
                    v(r, y(N(I))), (_ = R(p, S, E === m)), (p = 0), E++;
                }
            }
            p++, c++;
        }
        return A(r, "");
    };
e.exports = function (e) {
    var t,
        n,
        r = [],
        i = I(S(T(e), _, "."), ".");
    for (t = 0; t < i.length; t++) v(r, E(p, (n = i[t])) ? "xn--" + w(n) : n);
    return A(r, ".");
};
