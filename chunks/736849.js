var i = n(570596),
    r = n(28886),
    a = n(621528);
e.exports = function (e, t, n) {
    var s, o;
    r(e);
    try {
        if (!(s = a(e, 'return'))) {
            if ('throw' === t) throw n;
            return n;
        }
        s = i(s, e);
    } catch (e) {
        (o = !0), (s = e);
    }
    if ('throw' === t) throw n;
    if (o) throw s;
    return r(s), n;
};
