IntlMessageFormat.__addLocaleData({
    locale: 'lt',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            i = n[1] || '',
            r = Number(n[0]) == e,
            a = r && n[0].slice(-1),
            s = r && n[0].slice(-2);
        return t ? 'other' : 1 == a && (s < 11 || s > 19) ? 'one' : a >= 2 && a <= 9 && (s < 11 || s > 19) ? 'few' : 0 != i ? 'many' : 'other';
    }
});
