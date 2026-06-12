IntlMessageFormat.__addLocaleData({
    locale: "ru",
    pluralRuleFunction: function (e, t) {
        var n = String(e).split("."),
            i = n[0],
            r = !n[1],
            s = i.slice(-1),
            a = i.slice(-2);
        return t
            ? "other"
            : r && 1 == s && 11 != a
              ? "one"
              : r && s >= 2 && s <= 4 && (a < 12 || a > 14)
                ? "few"
                : (r && 0 == s) || (r && s >= 5 && s <= 9) || (r && a >= 11 && a <= 14)
                  ? "many"
                  : "other";
    },
}),
    IntlMessageFormat.__addLocaleData({ locale: "ru-BY", parentLocale: "ru" }),
    IntlMessageFormat.__addLocaleData({ locale: "ru-KG", parentLocale: "ru" }),
    IntlMessageFormat.__addLocaleData({ locale: "ru-KZ", parentLocale: "ru" }),
    IntlMessageFormat.__addLocaleData({ locale: "ru-MD", parentLocale: "ru" }),
    IntlMessageFormat.__addLocaleData({ locale: "ru-UA", parentLocale: "ru" });
