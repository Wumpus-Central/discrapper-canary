IntlMessageFormat.__addLocaleData({
    locale: 'cs',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            i = n[0],
            r = !n[1];
        return t ? 'other' : 1 == e && r ? 'one' : i >= 2 && i <= 4 && r ? 'few' : r ? 'other' : 'many';
    }
});
