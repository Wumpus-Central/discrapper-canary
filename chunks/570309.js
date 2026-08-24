IntlMessageFormat.__addLocaleData({
    locale: "sv",
    pluralRuleFunction: function (e, t) {
        var r = String(e).split("."),
            n = !r[1],
            i = Number(r[0]) == e,
            o = i && r[0].slice(-1),
            a = i && r[0].slice(-2);
        return t ? ((1 == o || 2 == o) && 11 != a && 12 != a ? "one" : "other") : 1 == e && n ? "one" : "other";
    },
}),
    IntlMessageFormat.__addLocaleData({ locale: "sv-AX", parentLocale: "sv" }),
    IntlMessageFormat.__addLocaleData({ locale: "sv-FI", parentLocale: "sv" });
