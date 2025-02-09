n.d(t, {
    T: () => l,
    uf: () => o
});
var i = n(562344),
    r = n(383998),
    a = ['style', 'currency', 'unit', 'unitDisplay', 'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'compactDisplay', 'currencyDisplay', 'currencySign', 'notation', 'signDisplay', 'unit', 'unitDisplay', 'numberingSystem', 'trailingZeroDisplay', 'roundingPriority', 'roundingIncrement', 'roundingMode'];
function s(e, t, n) {
    var i = e.locale,
        s = e.formats,
        o = e.onError;
    void 0 === n && (n = {});
    var l = n.format,
        u = (l && (0, r.TB)(s, 'number', l, o)) || {};
    return t(i, (0, r.L6)(n, a, u));
}
function o(e, t, n, r) {
    void 0 === r && (r = {});
    try {
        return s(e, t, r).format(n);
    } catch (t) {
        e.onError(new i.Qe('Error formatting number.', e.locale, t));
    }
    return String(n);
}
function l(e, t, n, r) {
    void 0 === r && (r = {});
    try {
        return s(e, t, r).formatToParts(n);
    } catch (t) {
        e.onError(new i.Qe('Error formatting number.', e.locale, t));
    }
    return [];
}
