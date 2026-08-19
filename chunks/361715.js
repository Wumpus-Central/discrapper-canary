IntlMessageFormat.__addLocaleData({
    locale: "da",
    pluralRuleFunction: function (e, t) {
        var r = String(e).split("."),
            n = r[0],
            o = Number(r[0]) == e;
        return t || (1 != e && (o || (0 != n && 1 != n))) ? "other" : "one";
    },
}),
    IntlMessageFormat.__addLocaleData({ locale: "da-GL", parentLocale: "da" });
