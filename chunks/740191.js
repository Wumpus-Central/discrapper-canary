IntlMessageFormat.__addLocaleData({
    locale: 'pl',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            r = n[0],
            i = !n[1],
            o = r.slice(-1),
            a = r.slice(-2);
        return t ? 'other' : 1 == e && i ? 'one' : i && o >= 2 && o <= 4 && (a < 12 || a > 14) ? 'few' : (i && 1 != r && (0 == o || 1 == o)) || (i && o >= 5 && o <= 9) || (i && a >= 12 && a <= 14) ? 'many' : 'other';
    }
});
