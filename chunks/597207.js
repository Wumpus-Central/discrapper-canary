var r = n(317063),
    i = n(757209);
function o(e) {
    return r(function (t, n) {
        var r = -1,
            o = n.length,
            a = o > 1 ? n[o - 1] : void 0,
            s = o > 2 ? n[2] : void 0;
        for (a = e.length > 3 && 'function' == typeof a ? (o--, a) : void 0, s && i(n[0], n[1], s) && ((a = o < 3 ? void 0 : a), (o = 1)), t = Object(t); ++r < o; ) {
            var l = n[r];
            l && e(t, l, r, a);
        }
        return t;
    });
}
e.exports = o;
