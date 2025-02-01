IntlMessageFormat.__addLocaleData({
    locale: 'hr',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            i = n[0],
            r = n[1] || '',
            a = !n[1],
            s = i.slice(-1),
            o = i.slice(-2),
            l = r.slice(-1),
            u = r.slice(-2);
        return t ? 'other' : (a && 1 == s && 11 != o) || (1 == l && 11 != u) ? 'one' : (a && s >= 2 && s <= 4 && (o < 12 || o > 14)) || (l >= 2 && l <= 4 && (u < 12 || u > 14)) ? 'few' : 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'hr-BA',
        parentLocale: 'hr'
    });
