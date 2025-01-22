var i = r(960081),
    a = Math.floor,
    o = function (e, n) {
        var r = e.length,
            u = a(r / 2);
        return r < 8 ? s(e, n) : l(e, o(i(e, 0, u), n), o(i(e, u), n), n);
    },
    s = function (e, n) {
        for (var r, i, a = e.length, o = 1; o < a; ) {
            for (i = o, r = e[o]; i && n(e[i - 1], r) > 0; ) e[i] = e[--i];
            i !== o++ && (e[i] = r);
        }
        return e;
    },
    l = function (e, n, r, i) {
        for (var a = n.length, o = r.length, s = 0, l = 0; s < a || l < o; ) e[s + l] = s < a && l < o ? (0 >= i(n[s], r[l]) ? n[s++] : r[l++]) : s < a ? n[s++] : r[l++];
        return e;
    };
e.exports = o;
