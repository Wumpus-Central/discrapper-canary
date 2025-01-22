IntlMessageFormat.__addLocaleData({
    locale: 'uk',
    pluralRuleFunction: function (e, n) {
        var r = String(e).split('.'),
            i = r[0],
            a = !r[1],
            o = Number(r[0]) == e,
            s = o && r[0].slice(-1),
            l = o && r[0].slice(-2),
            u = i.slice(-1),
            c = i.slice(-2);
        return n ? (3 == s && 13 != l ? 'few' : 'other') : a && 1 == u && 11 != c ? 'one' : a && u >= 2 && u <= 4 && (c < 12 || c > 14) ? 'few' : (a && 0 == u) || (a && u >= 5 && u <= 9) || (a && c >= 11 && c <= 14) ? 'many' : 'other';
    }
});
