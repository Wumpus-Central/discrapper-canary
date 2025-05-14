IntlMessageFormat.__addLocaleData({
    locale: 'hr',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            r = n[0],
            i = n[1] || '',
            o = !n[1],
            a = r.slice(-1),
            s = r.slice(-2),
            l = i.slice(-1),
            c = i.slice(-2);
        return t ? 'other' : (o && 1 == a && 11 != s) || (1 == l && 11 != c) ? 'one' : (o && a >= 2 && a <= 4 && (s < 12 || s > 14)) || (l >= 2 && l <= 4 && (c < 12 || c > 14)) ? 'few' : 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'hr-BA',
        parentLocale: 'hr'
    });
