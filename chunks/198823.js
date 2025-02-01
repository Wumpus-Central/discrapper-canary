IntlMessageFormat.__addLocaleData({
    locale: 'el',
    pluralRuleFunction: function (e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'el-CY',
        parentLocale: 'el'
    });
