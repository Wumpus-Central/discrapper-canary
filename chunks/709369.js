var r = n(580983),
    i = n(179122),
    o = n(3831);
e.exports = function (e, t, n) {
    var a, s;
    i(e);
    try {
        if (!(a = o(e, 'return'))) {
            if ('throw' === t) throw n;
            return n;
        }
        a = r(a, e);
    } catch (e) {
        (s = !0), (a = e);
    }
    if ('throw' === t) throw n;
    if (s) throw a;
    return i(a), n;
};
