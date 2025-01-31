n.d(t, { I: () => o });
var i = n(52948),
    r = n(968735),
    a = n(548097),
    s = ['style', 'type', 'fallback', 'languageDisplay'];
function o(e, t, n, o) {
    var l = e.locale,
        u = e.onError;
    Intl.DisplayNames || u(new r.u_('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', r.jK.MISSING_INTL_API));
    var c = (0, i.L6)(o, s);
    try {
        return t(l, c).of(n);
    } catch (e) {
        u(new a.Qe('Error formatting display name.', l, e));
    }
}
