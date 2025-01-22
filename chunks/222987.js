r.d(n, {
    S: function () {
        return u;
    }
});
var i = r(52948),
    a = r(968735),
    o = r(548097),
    s = ['numeric', 'style'];
function l(e, n, r) {
    var a = e.locale,
        o = e.formats,
        l = e.onError;
    void 0 === r && (r = {});
    var u = r.format,
        c = (!!u && (0, i.TB)(o, 'relative', u, l)) || {};
    return n(a, (0, i.L6)(r, s, c));
}
function u(e, n, r, i, s) {
    void 0 === s && (s = {}), !i && (i = 'second'), !Intl.RelativeTimeFormat && e.onError(new a.u_('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', a.jK.MISSING_INTL_API));
    try {
        return l(e, n, s).format(r, i);
    } catch (n) {
        e.onError(new o.Qe('Error formatting relative time.', e.locale, n));
    }
    return String(r);
}
