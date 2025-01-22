r.d(n, {
    T: function () {
        return u;
    },
    uf: function () {
        return l;
    }
});
var i = r(548097),
    a = r(52948),
    o = ['style', 'currency', 'unit', 'unitDisplay', 'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'compactDisplay', 'currencyDisplay', 'currencySign', 'notation', 'signDisplay', 'unit', 'unitDisplay', 'numberingSystem', 'trailingZeroDisplay', 'roundingPriority', 'roundingIncrement', 'roundingMode'];
function s(e, n, r) {
    var i = e.locale,
        s = e.formats,
        l = e.onError;
    void 0 === r && (r = {});
    var u = r.format,
        c = (u && (0, a.TB)(s, 'number', u, l)) || {};
    return n(i, (0, a.L6)(r, o, c));
}
function l(e, n, r, a) {
    void 0 === a && (a = {});
    try {
        return s(e, n, a).format(r);
    } catch (n) {
        e.onError(new i.Qe('Error formatting number.', e.locale, n));
    }
    return String(r);
}
function u(e, n, r, a) {
    void 0 === a && (a = {});
    try {
        return s(e, n, a).formatToParts(r);
    } catch (n) {
        e.onError(new i.Qe('Error formatting number.', e.locale, n));
    }
    return [];
}
