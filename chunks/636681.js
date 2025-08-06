IntlMessageFormat.__addLocaleData({
    locale: 'lt',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            r = n[1] || '',
            i = Number(n[0]) == e,
            o = i && n[0].slice(-1),
            a = i && n[0].slice(-2);
        return t ? 'other' : 1 == o && (a < 11 || a > 19) ? 'one' : o >= 2 && o <= 9 && (a < 11 || a > 19) ? 'few' : 0 != r ? 'many' : 'other';
    }
});
