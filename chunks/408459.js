var r = n(300823),
    i = n(776892);
e.exports = function (e, t, n, a) {
    var s = !n;
    n || (n = {});
    for (var o = -1, l = t.length; ++o < l; ) {
        var c = t[o],
            u = a ? a(n[c], e[c], c, n, e) : void 0;
        void 0 === u && (u = e[c]), s ? i(n, c, u) : r(n, c, u);
    }
    return n;
};
