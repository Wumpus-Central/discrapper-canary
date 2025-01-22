IntlMessageFormat.__addLocaleData({
    locale: 'pl',
    pluralRuleFunction: function (e, n) {
        var r = String(e).split('.'),
            i = r[0],
            a = !r[1],
            o = i.slice(-1),
            s = i.slice(-2);
        return n ? 'other' : 1 == e && a ? 'one' : a && o >= 2 && o <= 4 && (s < 12 || s > 14) ? 'few' : (a && 1 != i && (0 == o || 1 == o)) || (a && o >= 5 && o <= 9) || (a && s >= 12 && s <= 14) ? 'many' : 'other';
    }
});
