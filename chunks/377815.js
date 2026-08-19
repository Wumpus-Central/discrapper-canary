IntlMessageFormat.__addLocaleData({
    locale: "de",
    pluralRuleFunction: function (e, t) {
        var r = !String(e).split(".")[1];
        return t ? "other" : 1 == e && r ? "one" : "other";
    },
}),
    IntlMessageFormat.__addLocaleData({ locale: "de-AT", parentLocale: "de" }),
    IntlMessageFormat.__addLocaleData({ locale: "de-BE", parentLocale: "de" }),
    IntlMessageFormat.__addLocaleData({ locale: "de-CH", parentLocale: "de" }),
    IntlMessageFormat.__addLocaleData({ locale: "de-LI", parentLocale: "de" }),
    IntlMessageFormat.__addLocaleData({ locale: "de-LU", parentLocale: "de" });
