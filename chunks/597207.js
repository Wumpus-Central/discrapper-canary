var i = r(317063),
    a = r(757209);
function o(e) {
    return i(function (n, r) {
        var i = -1,
            o = r.length,
            s = o > 1 ? r[o - 1] : void 0,
            l = o > 2 ? r[2] : void 0;
        for (s = e.length > 3 && 'function' == typeof s ? (o--, s) : void 0, l && a(r[0], r[1], l) && ((s = o < 3 ? void 0 : s), (o = 1)), n = Object(n); ++i < o; ) {
            var u = r[i];
            u && e(n, u, i, s);
        }
        return n;
    });
}
e.exports = o;
