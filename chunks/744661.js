IntlMessageFormat.__addLocaleData({
    locale: "ru",
    pluralRuleFunction: function (e, t) {
        var r = String(e).split("."),
            n = r[0],
            o = !r[1],
            i = n.slice(-1),
            a = n.slice(-2);
        return t
            ? "other"
            : o && 1 == i && 11 != a
              ? "one"
              : o && i >= 2 && i <= 4 && (a < 12 || a > 14)
                ? "few"
                : (o && 0 == i) || (o && i >= 5 && i <= 9) || (o && a >= 11 && a <= 14)
                  ? "many"
                  : "other";
    },
}),
    IntlMessageFormat.__addLocaleData({ locale: "ru-BY", parentLocale: "ru" }),
    IntlMessageFormat.__addLocaleData({ locale: "ru-KG", parentLocale: "ru" }),
    IntlMessageFormat.__addLocaleData({ locale: "ru-KZ", parentLocale: "ru" }),
    IntlMessageFormat.__addLocaleData({ locale: "ru-MD", parentLocale: "ru" }),
    IntlMessageFormat.__addLocaleData({ locale: "ru-UA", parentLocale: "ru" });
