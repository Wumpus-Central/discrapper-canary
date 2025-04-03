var r = n(96403),
    o = /[^\0-\u007E]/,
    a = /[.\u3002\uFF0E\uFF61]/g,
    i = 'Overflow: input needs wider integers to process',
    s = RangeError,
    c = r(a.exec),
    l = Math.floor,
    u = String.fromCharCode,
    d = r(''.charCodeAt),
    p = r([].join),
    h = r([].push),
    f = r(''.replace),
    m = r(''.split),
    y = r(''.toLowerCase),
    v = function (e) {
        for (var t = [], n = 0, r = e.length; n < r; ) {
            var o = d(e, n++);
            if (o >= 55296 && o <= 56319 && n < r) {
                var a = d(e, n++);
                (64512 & a) == 56320 ? h(t, ((1023 & o) << 10) + (1023 & a) + 65536) : (h(t, o), n--);
            } else h(t, o);
        }
        return t;
    },
    g = function (e) {
        return e + 22 + 75 * (e < 26);
    },
    b = function (e, t, n) {
        var r = 0;
        for (e = n ? l(e / 700) : e >> 1, e += l(e / t); e > 455; ) (e = l(e / 35)), (r += 36);
        return l(r + (36 * e) / (e + 38));
    },
    _ = function (e) {
        var t,
            n,
            r = [],
            o = (e = v(e)).length,
            a = 128,
            c = 0,
            d = 72;
        for (t = 0; t < e.length; t++) (n = e[t]) < 128 && h(r, u(n));
        var f = r.length,
            m = f;
        for (f && h(r, '-'); m < o; ) {
            var y = 2147483647;
            for (t = 0; t < e.length; t++) (n = e[t]) >= a && n < y && (y = n);
            var _ = m + 1;
            if (y - a > l((2147483647 - c) / _)) throw new s(i);
            for (c += (y - a) * _, a = y, t = 0; t < e.length; t++) {
                if ((n = e[t]) < a && ++c > 2147483647) throw new s(i);
                if (n === a) {
                    for (var k = c, C = 36; ; ) {
                        var Z = C <= d ? 1 : C >= d + 26 ? 26 : C - d;
                        if (k < Z) break;
                        var w = k - Z,
                            S = 36 - Z;
                        h(r, u(g(Z + (w % S)))), (k = l(w / S)), (C += 36);
                    }
                    h(r, u(g(k))), (d = b(c, _, m === f)), (c = 0), m++;
                }
            }
            c++, a++;
        }
        return p(r, '');
    };
e.exports = function (e) {
    var t,
        n,
        r = [],
        i = m(f(y(e), a, '.'), '.');
    for (t = 0; t < i.length; t++) h(r, c(o, (n = i[t])) ? 'xn--' + _(n) : n);
    return p(r, '.');
};
