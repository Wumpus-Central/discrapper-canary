var r = n(11537),
    i = n(685347);
e.exports = function (e, t, n, a) {
    var o = !n;
    n || (n = {});
    for (var s = -1, l = t.length; ++s < l; ) {
        var c = t[s],
            u = a ? a(n[c], e[c], c, n, e) : void 0;
        void 0 === u && (u = e[c]), o ? i(n, c, u) : r(n, c, u);
    }
    return n;
};
