var i = r(926515),
    a = r(24033),
    o = r(995739);
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
