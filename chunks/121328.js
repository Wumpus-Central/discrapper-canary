n.default = {
    locale: 'en',
    pluralRuleFunction: function (e, n) {
        var r = String(e).split('.'),
            i = !r[1],
            a = Number(r[0]) == e,
            o = a && r[0].slice(-1),
            s = a && r[0].slice(-2);
        return n ? (1 == o && 11 != s ? 'one' : 2 == o && 12 != s ? 'two' : 3 == o && 13 != s ? 'few' : 'other') : 1 == e && i ? 'one' : 'other';
    }
};
