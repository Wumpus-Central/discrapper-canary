IntlMessageFormat.__addLocaleData({
    locale: 'lt',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            r = n[1] || '',
            i = Number(n[0]) == e,
            a = i && n[0].slice(-1),
            o = i && n[0].slice(-2);
        return t ? 'other' : 1 == a && (o < 11 || o > 19) ? 'one' : a >= 2 && a <= 9 && (o < 11 || o > 19) ? 'few' : 0 != r ? 'many' : 'other';
    }
});
