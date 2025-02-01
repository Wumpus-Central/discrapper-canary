IntlMessageFormat.__addLocaleData({
    locale: 'pt',
    pluralRuleFunction: function (e, t) {
        var n = Number(String(e).split('.')[0]) == e;
        return t ? 'other' : n && e >= 0 && e <= 2 && 2 != e ? 'one' : 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'pt-AO',
        parentLocale: 'pt-PT'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'pt-PT',
        parentLocale: 'pt',
        pluralRuleFunction: function (e, t) {
            var n = !String(e).split('.')[1];
            return t ? 'other' : 1 == e && n ? 'one' : 'other';
        }
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'pt-CV',
        parentLocale: 'pt-PT'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'pt-GW',
        parentLocale: 'pt-PT'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'pt-MO',
        parentLocale: 'pt-PT'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'pt-MZ',
        parentLocale: 'pt-PT'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'pt-ST',
        parentLocale: 'pt-PT'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'pt-TL',
        parentLocale: 'pt-PT'
    });
