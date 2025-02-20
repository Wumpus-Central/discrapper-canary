IntlMessageFormat.__addLocaleData({
    locale: 'ro',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            r = !n[1],
            i = Number(n[0]) == e && n[0].slice(-2);
        return t ? (1 == e ? 'one' : 'other') : 1 == e && r ? 'one' : !r || 0 == e || (1 != e && i >= 1 && i <= 19) ? 'few' : 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'ro-MD',
        parentLocale: 'ro'
    });
