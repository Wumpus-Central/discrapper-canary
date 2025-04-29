var r = n(46015),
    i = 2147483647,
    o = 36,
    a = 1,
    s = 26,
    l = 38,
    c = 700,
    u = 72,
    d = 128,
    f = '-',
    _ = /[^\0-\u007E]/,
    p = /[.\u3002\uFF0E\uFF61]/g,
    h = 'Overflow: input needs wider integers to process',
    m = 35,
    g = RangeError,
    E = r(p.exec),
    b = Math.floor,
    y = String.fromCharCode,
    O = r(''.charCodeAt),
    v = r([].join),
    I = r([].push),
    S = r(''.replace),
    T = r(''.split),
    A = r(''.toLowerCase),
    N = function (e) {
        for (var t = [], n = 0, r = e.length; n < r; ) {
            var i = O(e, n++);
            if (i >= 55296 && i <= 56319 && n < r) {
                var o = O(e, n++);
                (64512 & o) == 56320 ? I(t, ((1023 & i) << 10) + (1023 & o) + 65536) : (I(t, i), n--);
            } else I(t, i);
        }
        return t;
    },
    C = function (e) {
        return e + 22 + 75 * (e < 26);
    },
    R = function (e, t, n) {
        var r = 0;
        for (e = n ? b(e / c) : e >> 1, e += b(e / t); e > (m * s) >> 1; ) (e = b(e / m)), (r += o);
        return b(r + ((m + 1) * e) / (e + l));
    },
    P = function (e) {
        var t,
            n,
            r = [],
            l = (e = N(e)).length,
            c = d,
            _ = 0,
            p = u;
        for (t = 0; t < e.length; t++) (n = e[t]) < 128 && I(r, y(n));
        var m = r.length,
            E = m;
        for (m && I(r, f); E < l; ) {
            var O = i;
            for (t = 0; t < e.length; t++) (n = e[t]) >= c && n < O && (O = n);
            var S = E + 1;
            if (O - c > b((i - _) / S)) throw new g(h);
            for (_ += (O - c) * S, c = O, t = 0; t < e.length; t++) {
                if ((n = e[t]) < c && ++_ > i) throw new g(h);
                if (n === c) {
                    for (var T = _, A = o; ; ) {
                        var P = A <= p ? a : A >= p + s ? s : A - p;
                        if (T < P) break;
                        var w = T - P,
                            D = o - P;
                        I(r, y(C(P + (w % D)))), (T = b(w / D)), (A += o);
                    }
                    I(r, y(C(T))), (p = R(_, S, E === m)), (_ = 0), E++;
                }
            }
            _++, c++;
        }
        return v(r, '');
    };
e.exports = function (e) {
    var t,
        n,
        r = [],
        i = T(S(A(e), p, '.'), '.');
    for (t = 0; t < i.length; t++) I(r, E(_, (n = i[t])) ? 'xn--' + P(n) : n);
    return v(r, '.');
};
