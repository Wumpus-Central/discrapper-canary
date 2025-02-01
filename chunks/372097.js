IntlMessageFormat.__addLocaleData({
    locale: 'ro',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            i = !n[1],
            r = Number(n[0]) == e && n[0].slice(-2);
        return t ? (1 == e ? 'one' : 'other') : 1 == e && i ? 'one' : !i || 0 == e || (1 != e && r >= 1 && r <= 19) ? 'few' : 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'ro-MD',
        parentLocale: 'ro'
    });
