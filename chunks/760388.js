IntlMessageFormat.__addLocaleData({
    locale: 'fi',
    pluralRuleFunction: function (e, t) {
        var n = !String(e).split('.')[1];
        return t ? 'other' : 1 == e && n ? 'one' : 'other';
    }
});
