var i = r(570596),
    a = r(28886),
    o = r(621528);
e.exports = function (e, n, r) {
    var s, l;
    a(e);
    try {
        if (!(s = o(e, 'return'))) {
            if ('throw' === n) throw r;
            return r;
        }
        s = i(s, e);
    } catch (e) {
        (l = !0), (s = e);
    }
    if ('throw' === n) throw r;
    if (l) throw s;
    return a(s), r;
};
