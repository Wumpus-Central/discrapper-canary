IntlMessageFormat.__addLocaleData({
    locale: "cs",
    pluralRuleFunction: function (e, t) {
        var r = String(e).split("."),
            n = r[0],
            o = !r[1];
        return t ? "other" : 1 == e && o ? "one" : n >= 2 && n <= 4 && o ? "few" : o ? "other" : "many";
    },
});
