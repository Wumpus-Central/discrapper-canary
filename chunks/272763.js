var e = n(517522),
    o = n(921413),
    i = n(914405);
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
