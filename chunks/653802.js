IntlMessageFormat.__addLocaleData({
    locale: "cs",
    pluralRuleFunction: function (e, t) {
        var r = String(e).split("."),
            n = r[0],
            i = !r[1];
        return t ? "other" : 1 == e && i ? "one" : n >= 2 && n <= 4 && i ? "few" : i ? "other" : "many";
    },
});
