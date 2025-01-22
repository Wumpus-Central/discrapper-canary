r.d(n, {
    I: function () {
        return d;
    },
    T: function () {
        return f;
    }
});
var i = r(259630),
    a = r(52948),
    o = r(968735),
    s = r(548097),
    l = ['type', 'style'],
    u = Date.now();
function c(e) {
    return ''.concat(u, '_').concat(e, '_').concat(u);
}
function d(e, n, r, i) {
    void 0 === i && (i = {});
    var a = f(e, n, r, i).reduce(function (e, n) {
        var r = n.value;
        return 'string' != typeof r ? e.push(r) : 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += r) : e.push(r), e;
    }, []);
    return 1 === a.length ? a[0] : 0 === a.length ? '' : a;
}
function f(e, n, r, u) {
    var d = e.locale,
        f = e.onError;
    void 0 === u && (u = {}), !Intl.ListFormat && f(new o.u_('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', o.jK.MISSING_INTL_API));
    var p = (0, a.L6)(u, l);
    try {
        var h = {},
            _ = r.map(function (e, n) {
                if ('object' == typeof e) {
                    var r = c(n);
                    return (h[r] = e), r;
                }
                return String(e);
            });
        return n(d, p)
            .formatToParts(_)
            .map(function (e) {
                return 'literal' === e.type ? e : (0, i.pi)((0, i.pi)({}, e), { value: h[e.value] || e.value });
            });
    } catch (e) {
        f(new s.Qe('Error formatting list.', d, e));
    }
    return r;
}
