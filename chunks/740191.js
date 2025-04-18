IntlMessageFormat.__addLocaleData({
    locale: 'pl',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            r = n[0],
            i = !n[1],
            a = r.slice(-1),
            o = r.slice(-2);
        return t ? 'other' : 1 == e && i ? 'one' : i && a >= 2 && a <= 4 && (o < 12 || o > 14) ? 'few' : (i && 1 != r && (0 == a || 1 == a)) || (i && a >= 5 && a <= 9) || (i && o >= 12 && o <= 14) ? 'many' : 'other';
    }
});
