t.default = {
    locale: 'en',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            i = !n[1],
            r = Number(n[0]) == e,
            a = r && n[0].slice(-1),
            s = r && n[0].slice(-2);
        return t ? (1 == a && 11 != s ? 'one' : 2 == a && 12 != s ? 'two' : 3 == a && 13 != s ? 'few' : 'other') : 1 == e && i ? 'one' : 'other';
    }
};
