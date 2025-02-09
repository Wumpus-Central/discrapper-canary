n.d(t, { S: () => l });
var i = n(383998),
    r = n(968735),
    a = n(562344),
    s = ['numeric', 'style'];
function o(e, t, n) {
    var r = e.locale,
        a = e.formats,
        o = e.onError;
    void 0 === n && (n = {});
    var l = n.format,
        u = (!!l && (0, i.TB)(a, 'relative', l, o)) || {};
    return t(r, (0, i.L6)(n, s, u));
}
function l(e, t, n, i, s) {
    void 0 === s && (s = {}), i || (i = 'second'), Intl.RelativeTimeFormat || e.onError(new r.u_('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', r.jK.MISSING_INTL_API));
    try {
        return o(e, t, s).format(n, i);
    } catch (t) {
        e.onError(new a.Qe('Error formatting relative time.', e.locale, t));
    }
    return String(n);
}
