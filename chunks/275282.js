n.d(t, { R: () => o });
var i = n(52948),
    r = n(548097),
    a = n(968735),
    s = ['type'];
function o(e, t, n, o) {
    var l = e.locale,
        u = e.onError;
    void 0 === o && (o = {}), Intl.PluralRules || u(new a.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', a.jK.MISSING_INTL_API));
    var c = (0, i.L6)(o, s);
    try {
        return t(l, c).select(n);
    } catch (e) {
        u(new r.Qe('Error formatting plural.', l, e));
    }
    return 'other';
}
