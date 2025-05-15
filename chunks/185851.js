IntlMessageFormat.__addLocaleData({
    locale: 'uk',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            r = n[0],
            i = !n[1],
            o = Number(n[0]) == e,
            a = o && n[0].slice(-1),
            s = o && n[0].slice(-2),
            l = r.slice(-1),
            c = r.slice(-2);
        return t ? (3 == a && 13 != s ? 'few' : 'other') : i && 1 == l && 11 != c ? 'one' : i && l >= 2 && l <= 4 && (c < 12 || c > 14) ? 'few' : (i && 0 == l) || (i && l >= 5 && l <= 9) || (i && c >= 11 && c <= 14) ? 'many' : 'other';
    }
});
