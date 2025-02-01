IntlMessageFormat.__addLocaleData({
    locale: 'nl',
    pluralRuleFunction: function (e, t) {
        var n = !String(e).split('.')[1];
        return t ? 'other' : 1 == e && n ? 'one' : 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'nl-AW',
        parentLocale: 'nl'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'nl-BE',
        parentLocale: 'nl'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'nl-BQ',
        parentLocale: 'nl'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'nl-CW',
        parentLocale: 'nl'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'nl-SR',
        parentLocale: 'nl'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'nl-SX',
        parentLocale: 'nl'
    });
