var r = n(960081),
    i = Math.floor,
    o = function (e, t) {
        var n = e.length,
            l = i(n / 2);
        return n < 8 ? a(e, t) : s(e, o(r(e, 0, l), t), o(r(e, l), t), t);
    },
    a = function (e, t) {
        for (var n, r, i = e.length, o = 1; o < i; ) {
            for (r = o, n = e[o]; r && t(e[r - 1], n) > 0; ) e[r] = e[--r];
            r !== o++ && (e[r] = n);
        }
        return e;
    },
    s = function (e, t, n, r) {
        for (var i = t.length, o = n.length, a = 0, s = 0; a < i || s < o; ) e[a + s] = a < i && s < o ? (0 >= r(t[a], n[s]) ? t[a++] : n[s++]) : a < i ? t[a++] : n[s++];
        return e;
    };
e.exports = o;
