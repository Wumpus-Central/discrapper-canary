var i = n(926515),
    r = n(24033),
    a = n(995739);
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
