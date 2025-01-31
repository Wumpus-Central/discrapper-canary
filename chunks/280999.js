n.d(t, {
    I: () => c,
    T: () => d
});
var i = n(259630),
    r = n(52948),
    a = n(968735),
    s = n(548097),
    o = ['type', 'style'],
    l = Date.now();
function u(e) {
    return ''.concat(l, '_').concat(e, '_').concat(l);
}
function c(e, t, n, i) {
    void 0 === i && (i = {});
    var r = d(e, t, n, i).reduce(function (e, t) {
        var n = t.value;
        return 'string' != typeof n ? e.push(n) : 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += n) : e.push(n), e;
    }, []);
    return 1 === r.length ? r[0] : 0 === r.length ? '' : r;
}
function d(e, t, n, l) {
    var c = e.locale,
        d = e.onError;
    void 0 === l && (l = {}), Intl.ListFormat || d(new a.u_('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', a.jK.MISSING_INTL_API));
    var f = (0, r.L6)(l, o);
    try {
        var _ = {},
            p = n.map(function (e, t) {
                if ('object' == typeof e) {
                    var n = u(t);
                    return (_[n] = e), n;
                }
                return String(e);
            });
        return t(c, f)
            .formatToParts(p)
            .map(function (e) {
                return 'literal' === e.type ? e : (0, i.pi)((0, i.pi)({}, e), { value: _[e.value] || e.value });
            });
    } catch (e) {
        d(new s.Qe('Error formatting list.', c, e));
    }
    return n;
}
