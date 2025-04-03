var r = n(960081),
    o = Math.floor,
    a = function (e, t) {
        var n = e.length,
            c = o(n / 2);
        return n < 8 ? i(e, t) : s(e, a(r(e, 0, c), t), a(r(e, c), t), t);
    },
    i = function (e, t) {
        for (var n, r, o = e.length, a = 1; a < o; ) {
            for (r = a, n = e[a]; r && t(e[r - 1], n) > 0; ) e[r] = e[--r];
            r !== a++ && (e[r] = n);
        }
        return e;
    },
    s = function (e, t, n, r) {
        for (var o = t.length, a = n.length, i = 0, s = 0; i < o || s < a; ) e[i + s] = i < o && s < a ? (0 >= r(t[i], n[s]) ? t[i++] : n[s++]) : i < o ? t[i++] : n[s++];
        return e;
    };
e.exports = a;
