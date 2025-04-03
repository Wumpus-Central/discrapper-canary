var e = n(570596),
    o = n(28886),
    i = n(621528);
t.exports = function (t, r, n) {
    var u, s;
    o(t);
    try {
        if (!(u = i(t, 'return'))) {
            if ('throw' === r) throw n;
            return n;
        }
        u = e(u, t);
    } catch (t) {
        (s = !0), (u = t);
    }
    if ('throw' === r) throw n;
    if (s) throw u;
    return o(u), n;
};
