IntlMessageFormat.__addLocaleData({
    locale: "pl",
    pluralRuleFunction: function (e, t) {
        var n = String(e).split("."),
            i = n[0],
            r = !n[1],
            s = i.slice(-1),
            a = i.slice(-2);
        return t
            ? "other"
            : 1 == e && r
              ? "one"
              : r && s >= 2 && s <= 4 && (a < 12 || a > 14)
                ? "few"
                : (r && 1 != i && (0 == s || 1 == s)) || (r && s >= 5 && s <= 9) || (r && a >= 12 && a <= 14)
                  ? "many"
                  : "other";
    },
});
