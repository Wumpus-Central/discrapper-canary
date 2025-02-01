IntlMessageFormat.__addLocaleData({
    locale: 'bg',
    pluralRuleFunction: function (e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
    }
});
