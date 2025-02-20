IntlMessageFormat.__addLocaleData({
    locale: 'cs',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            r = n[0],
            i = !n[1];
        return t ? 'other' : 1 == e && i ? 'one' : r >= 2 && r <= 4 && i ? 'few' : i ? 'other' : 'many';
    }
});
