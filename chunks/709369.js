var r = n(580983),
    i = n(179122),
    a = n(3831);
e.exports = function (e, t, n) {
    var o, s;
    i(e);
    try {
        if (!(o = a(e, 'return'))) {
            if ('throw' === t) throw n;
            return n;
        }
        o = r(o, e);
    } catch (e) {
        (s = !0), (o = e);
    }
    if ('throw' === t) throw n;
    if (s) throw o;
    return i(o), n;
};
