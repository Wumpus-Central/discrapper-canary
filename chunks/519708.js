IntlMessageFormat.__addLocaleData({
    locale: 'zh',
    pluralRuleFunction: function (e, t) {
        return 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'zh-Hans',
        parentLocale: 'zh'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'zh-Hans-HK',
        parentLocale: 'zh-Hans'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'zh-Hans-MO',
        parentLocale: 'zh-Hans'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'zh-Hans-SG',
        parentLocale: 'zh-Hans'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'zh-Hant',
        pluralRuleFunction: function (e, t) {
            return 'other';
        }
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'zh-Hant-HK',
        parentLocale: 'zh-Hant'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'zh-Hant-MO',
        parentLocale: 'zh-Hant-HK'
    });
