r.d(n, {
    I: function () {
        return l;
    }
});
var i = r(52948),
    a = r(968735),
    o = r(548097),
    s = ['style', 'type', 'fallback', 'languageDisplay'];
function l(e, n, r, l) {
    var u = e.locale,
        c = e.onError;
    !Intl.DisplayNames && c(new a.u_('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', a.jK.MISSING_INTL_API));
    var d = (0, i.L6)(l, s);
    try {
        return n(u, d).of(r);
    } catch (e) {
        c(new o.Qe('Error formatting display name.', u, e));
    }
}
