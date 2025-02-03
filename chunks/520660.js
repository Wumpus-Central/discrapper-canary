var i = n(96403),
    r = 2147483647,
    a = 36,
    s = 1,
    o = 26,
    l = 38,
    u = 700,
    c = 72,
    d = 128,
    f = '-',
    _ = /[^\0-\u007E]/,
    p = /[.\u3002\uFF0E\uFF61]/g,
    h = 'Overflow: input needs wider integers to process',
    m = 35,
    g = RangeError,
    E = i(p.exec),
    v = Math.floor,
    y = String.fromCharCode,
    I = i(''.charCodeAt),
    b = i([].join),
    T = i([].push),
    S = i(''.replace),
    A = i(''.split),
    N = i(''.toLowerCase),
    C = function (e) {
        for (var t = [], n = 0, i = e.length; n < i; ) {
            var r = I(e, n++);
            if (r >= 55296 && r <= 56319 && n < i) {
                var a = I(e, n++);
                (64512 & a) == 56320 ? T(t, ((1023 & r) << 10) + (1023 & a) + 65536) : (T(t, r), n--);
            } else T(t, r);
        }
        return t;
    },
    R = function (e) {
        return e + 22 + 75 * (e < 26);
    },
    O = function (e, t, n) {
        var i = 0;
        for (e = n ? v(e / u) : e >> 1, e += v(e / t); e > (m * o) >> 1; ) (e = v(e / m)), (i += a);
        return v(i + ((m + 1) * e) / (e + l));
    },
    D = function (e) {
        var t,
            n,
            i = [],
            l = (e = C(e)).length,
            u = d,
            _ = 0,
            p = c;
        for (t = 0; t < e.length; t++) (n = e[t]) < 128 && T(i, y(n));
        var m = i.length,
            E = m;
        for (m && T(i, f); E < l; ) {
            var I = r;
            for (t = 0; t < e.length; t++) (n = e[t]) >= u && n < I && (I = n);
            var S = E + 1;
            if (I - u > v((r - _) / S)) throw new g(h);
            for (_ += (I - u) * S, u = I, t = 0; t < e.length; t++) {
                if ((n = e[t]) < u && ++_ > r) throw new g(h);
                if (n === u) {
                    for (var A = _, N = a; ; ) {
                        var D = N <= p ? s : N >= p + o ? o : N - p;
                        if (A < D) break;
                        var x = A - D,
                            L = a - D;
                        T(i, y(R(D + (x % L)))), (A = v(x / L)), (N += a);
                    }
                    T(i, y(R(A))), (p = O(_, S, E === m)), (_ = 0), E++;
                }
            }
            _++, u++;
        }
        return b(i, '');
    };
e.exports = function (e) {
    var t,
        n,
        i = [],
        r = A(S(N(e), p, '.'), '.');
    for (t = 0; t < r.length; t++) T(i, E(_, (n = r[t])) ? 'xn--' + D(n) : n);
    return b(i, '.');
};
