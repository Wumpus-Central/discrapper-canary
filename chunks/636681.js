IntlMessageFormat.__addLocaleData({
    locale: 'lt',
    pluralRuleFunction: function (e, n) {
        var r = String(e).split('.'),
            i = r[1] || '',
            a = Number(r[0]) == e,
            o = a && r[0].slice(-1),
            s = a && r[0].slice(-2);
        return n ? 'other' : 1 == o && (s < 11 || s > 19) ? 'one' : o >= 2 && o <= 9 && (s < 11 || s > 19) ? 'few' : 0 != i ? 'many' : 'other';
    }
});
