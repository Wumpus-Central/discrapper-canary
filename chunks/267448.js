"use strict";
var r = n(675879),
    a = /[^\0-\u007E]/,
    o = /[.\u3002\uFF0E\uFF61]/g,
    i = "Overflow: input needs wider integers to process",
    s = RangeError,
    l = r(o.exec),
    c = Math.floor,
    u = String.fromCharCode,
    d = r("".charCodeAt),
    p = r([].join),
    h = r([].push),
    f = r("".replace),
    m = r("".split),
    y = r("".toLowerCase),
    v = function (e) {
        for (var t = [], n = 0, r = e.length; n < r; ) {
            var a = d(e, n++);
            if (a >= 55296 && a <= 56319 && n < r) {
                var o = d(e, n++);
                (64512 & o) == 56320 ? h(t, ((1023 & a) << 10) + (1023 & o) + 65536) : (h(t, a), n--);
            } else h(t, a);
        }
        return t;
    },
    g = function (e) {
        return e + 22 + 75 * (e < 26);
    },
    b = function (e, t, n) {
        var r = 0;
        for (e = n ? c(e / 700) : e >> 1, e += c(e / t); e > 455; ) (e = c(e / 35)), (r += 36);
        return c(r + (36 * e) / (e + 38));
    },
    _ = function (e) {
        var t,
            n,
            r = [],
            a = (e = v(e)).length,
            o = 128,
            l = 0,
            d = 72;
        for (t = 0; t < e.length; t++) (n = e[t]) < 128 && h(r, u(n));
        var f = r.length,
            m = f;
        for (f && h(r, "-"); m < a; ) {
            var y = 0x7fffffff;
            for (t = 0; t < e.length; t++) (n = e[t]) >= o && n < y && (y = n);
            var _ = m + 1;
            if (y - o > c((0x7fffffff - l) / _)) throw new s(i);
            for (l += (y - o) * _, o = y, t = 0; t < e.length; t++) {
                if ((n = e[t]) < o && ++l > 0x7fffffff) throw new s(i);
                if (n === o) {
                    for (var k = l, C = 36; ; ) {
                        var w = C <= d ? 1 : C >= d + 26 ? 26 : C - d;
                        if (k < w) break;
                        var S = k - w,
                            N = 36 - w;
                        h(r, u(g(w + (S % N)))), (k = c(S / N)), (C += 36);
                    }
                    h(r, u(g(k))), (d = b(l, _, m === f)), (l = 0), m++;
                }
            }
            l++, o++;
        }
        return p(r, "");
    };
e.exports = function (e) {
    var t,
        n,
        r = [],
        i = m(f(y(e), o, "."), ".");
    for (t = 0; t < i.length; t++) h(r, l(a, (n = i[t])) ? "xn--" + _(n) : n);
    return p(r, ".");
};
