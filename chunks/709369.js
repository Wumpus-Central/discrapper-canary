var n = r(580983),
    i = r(179122),
    s = r(3831);
t.exports = function (t, e, r) {
    var a, o;
    i(t);
    try {
        if (!(a = s(t, 'return'))) {
            if ('throw' === e) throw r;
            return r;
        }
        a = n(a, t);
    } catch (t) {
        ((o = !0), (a = t));
    }
    if ('throw' === e) throw r;
    if (o) throw a;
    return (i(a), r);
};
