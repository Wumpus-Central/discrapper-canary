IntlMessageFormat.__addLocaleData({
    locale: "pl",
    pluralRuleFunction: function (e, t) {
        var r = String(e).split("."),
            n = r[0],
            o = !r[1],
            i = n.slice(-1),
            a = n.slice(-2);
        return t
            ? "other"
            : 1 == e && o
              ? "one"
              : o && i >= 2 && i <= 4 && (a < 12 || a > 14)
                ? "few"
                : (o && 1 != n && (0 == i || 1 == i)) || (o && i >= 5 && i <= 9) || (o && a >= 12 && a <= 14)
                  ? "many"
                  : "other";
    },
});
