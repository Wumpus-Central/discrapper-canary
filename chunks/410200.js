var i = n(11537),
    r = n(685347);
function a(e, t, n, a) {
    var s = !n;
    n || (n = {});
    for (var o = -1, l = t.length; ++o < l; ) {
        var u = t[o],
            c = a ? a(n[u], e[u], u, n, e) : void 0;
        void 0 === c && (c = e[u]), s ? r(n, u, c) : i(n, u, c);
    }
    return n;
}
e.exports = a;
