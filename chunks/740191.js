IntlMessageFormat.__addLocaleData({
    locale: 'pl',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            i = n[0],
            r = !n[1],
            a = i.slice(-1),
            s = i.slice(-2);
        return t ? 'other' : 1 == e && r ? 'one' : r && a >= 2 && a <= 4 && (s < 12 || s > 14) ? 'few' : (r && 1 != i && (0 == a || 1 == a)) || (r && a >= 5 && a <= 9) || (r && s >= 12 && s <= 14) ? 'many' : 'other';
    }
});
