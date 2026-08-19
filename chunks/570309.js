IntlMessageFormat.__addLocaleData({
    locale: "sv",
    pluralRuleFunction: function (e, t) {
        var r = String(e).split("."),
            n = !r[1],
            o = Number(r[0]) == e,
            i = o && r[0].slice(-1),
            a = o && r[0].slice(-2);
        return t ? ((1 == i || 2 == i) && 11 != a && 12 != a ? "one" : "other") : 1 == e && n ? "one" : "other";
    },
}),
    IntlMessageFormat.__addLocaleData({ locale: "sv-AX", parentLocale: "sv" }),
    IntlMessageFormat.__addLocaleData({ locale: "sv-FI", parentLocale: "sv" });
