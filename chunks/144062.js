IntlMessageFormat.__addLocaleData({
    locale: 'da',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            i = n[0],
            r = Number(n[0]) == e;
        return t ? 'other' : 1 != e && (r || (0 != i && 1 != i)) ? 'other' : 'one';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'da-GL',
        parentLocale: 'da'
    });
