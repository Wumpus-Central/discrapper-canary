var n = r(46015),
    i = /[^\0-\u007E]/,
    s = /[.\u3002\uFF0E\uFF61]/g,
    a = 'Overflow: input needs wider integers to process',
    o = RangeError,
    u = n(s.exec),
    h = Math.floor,
    c = String.fromCharCode,
    f = n(''.charCodeAt),
    l = n([].join),
    p = n([].push),
    v = n(''.replace),
    g = n(''.split),
    d = n(''.toLowerCase),
    m = function (t) {
        for (var e = [], r = 0, n = t.length; r < n; ) {
            var i = f(t, r++);
            if (i >= 55296 && i <= 56319 && r < n) {
                var s = f(t, r++);
                (64512 & s) == 56320 ? p(e, ((1023 & i) << 10) + (1023 & s) + 65536) : (p(e, i), r--);
            } else p(e, i);
        }
        return e;
    },
    y = function (t) {
        return t + 22 + 75 * (t < 26);
    },
    b = function (t, e, r) {
        var n = 0;
        for (t = r ? h(t / 700) : t >> 1, t += h(t / e); t > 455; ) ((t = h(t / 35)), (n += 36));
        return h(n + (36 * t) / (t + 38));
    },
    w = function (t) {
        var e,
            r,
            n = [],
            i = (t = m(t)).length,
            s = 128,
            u = 0,
            f = 72;
        for (e = 0; e < t.length; e++) (r = t[e]) < 128 && p(n, c(r));
        var v = n.length,
            g = v;
        for (v && p(n, '-'); g < i; ) {
            var d = 2147483647;
            for (e = 0; e < t.length; e++) (r = t[e]) >= s && r < d && (d = r);
            var w = g + 1;
            if (d - s > h((2147483647 - u) / w)) throw new o(a);
            for (u += (d - s) * w, s = d, e = 0; e < t.length; e++) {
                if ((r = t[e]) < s && ++u > 2147483647) throw new o(a);
                if (r === s) {
                    for (var x = u, S = 36; ; ) {
                        var R = S <= f ? 1 : S >= f + 26 ? 26 : S - f;
                        if (x < R) break;
                        var k = x - R,
                            P = 36 - R;
                        (p(n, c(y(R + (k % P)))), (x = h(k / P)), (S += 36));
                    }
                    (p(n, c(y(x))), (f = b(u, w, g === v)), (u = 0), g++);
                }
            }
            (u++, s++);
        }
        return l(n, '');
    };
t.exports = function (t) {
    var e,
        r,
        n = [],
        a = g(v(d(t), s, '.'), '.');
    for (e = 0; e < a.length; e++) p(n, u(i, (r = a[e])) ? 'xn--' + w(r) : r);
    return l(n, '.');
};
