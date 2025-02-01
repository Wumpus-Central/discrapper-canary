IntlMessageFormat.__addLocaleData({
    locale: 'no',
    pluralRuleFunction: function (e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
    }
});
