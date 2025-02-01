IntlMessageFormat.__addLocaleData({
    locale: 'it',
    pluralRuleFunction: function (e, t) {
        var n = !String(e).split('.')[1];
        return t ? (11 == e || 8 == e || 80 == e || 800 == e ? 'many' : 'other') : 1 == e && n ? 'one' : 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'it-CH',
        parentLocale: 'it'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'it-SM',
        parentLocale: 'it'
    });
