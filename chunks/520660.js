var i = r(96403),
    a = 2147483647,
    o = 36,
    s = 1,
    l = 26,
    u = 38,
    c = 700,
    d = 72,
    f = 128,
    p = '-',
    h = /[^\0-\u007E]/,
    _ = /[.\u3002\uFF0E\uFF61]/g,
    m = 'Overflow: input needs wider integers to process',
    g = 35,
    E = RangeError,
    v = i(_.exec),
    y = Math.floor,
    b = String.fromCharCode,
    I = i(''.charCodeAt),
    T = i([].join),
    S = i([].push),
    A = i(''.replace),
    C = i(''.split),
    N = i(''.toLowerCase),
    R = function (e) {
        for (var n = [], r = 0, i = e.length; r < i; ) {
            var a = I(e, r++);
            if (a >= 55296 && a <= 56319 && r < i) {
                var o = I(e, r++);
                (64512 & o) == 56320 ? S(n, ((1023 & a) << 10) + (1023 & o) + 65536) : (S(n, a), r--);
            } else S(n, a);
        }
        return n;
    },
    O = function (e) {
        return e + 22 + 75 * (e < 26);
    },
    D = function (e, n, r) {
        var i = 0;
        for (e = r ? y(e / c) : e >> 1, e += y(e / n); e > (g * l) >> 1; ) (e = y(e / g)), (i += o);
        return y(i + ((g + 1) * e) / (e + u));
    },
    x = function (e) {
        var n,
            r,
            i = [],
            u = (e = R(e)).length,
            c = f,
            h = 0,
            _ = d;
        for (n = 0; n < e.length; n++) (r = e[n]) < 128 && S(i, b(r));
        var g = i.length,
            v = g;
        for (g && S(i, p); v < u; ) {
            var I = a;
            for (n = 0; n < e.length; n++) (r = e[n]) >= c && r < I && (I = r);
            var A = v + 1;
            if (I - c > y((a - h) / A)) throw new E(m);
            for (h += (I - c) * A, c = I, n = 0; n < e.length; n++) {
                if ((r = e[n]) < c && ++h > a) throw new E(m);
                if (r === c) {
                    for (var C = h, N = o; ; ) {
                        var x = N <= _ ? s : N >= _ + l ? l : N - _;
                        if (C < x) break;
                        var L = C - x,
                            w = o - x;
                        S(i, b(O(x + (L % w)))), (C = y(L / w)), (N += o);
                    }
                    S(i, b(O(C))), (_ = D(h, A, v === g)), (h = 0), v++;
                }
            }
            h++, c++;
        }
        return T(i, '');
    };
e.exports = function (e) {
    var n,
        r,
        i = [],
        a = C(A(N(e), _, '.'), '.');
    for (n = 0; n < a.length; n++) S(i, v(h, (r = a[n])) ? 'xn--' + x(r) : r);
    return T(i, '.');
};
