r.d(n, {
    R: function () {
        return l;
    }
});
var i = r(52948),
    a = r(548097),
    o = r(968735),
    s = ['type'];
function l(e, n, r, l) {
    var u = e.locale,
        c = e.onError;
    void 0 === l && (l = {}), !Intl.PluralRules && c(new o.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', o.jK.MISSING_INTL_API));
    var d = (0, i.L6)(l, s);
    try {
        return n(u, d).select(r);
    } catch (e) {
        c(new a.Qe('Error formatting plural.', u, e));
    }
    return 'other';
}
