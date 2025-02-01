IntlMessageFormat.__addLocaleData({
    locale: 'uk',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            i = n[0],
            r = !n[1],
            a = Number(n[0]) == e,
            s = a && n[0].slice(-1),
            o = a && n[0].slice(-2),
            l = i.slice(-1),
            u = i.slice(-2);
        return t ? (3 == s && 13 != o ? 'few' : 'other') : r && 1 == l && 11 != u ? 'one' : r && l >= 2 && l <= 4 && (u < 12 || u > 14) ? 'few' : (r && 0 == l) || (r && l >= 5 && l <= 9) || (r && u >= 11 && u <= 14) ? 'many' : 'other';
    }
});
