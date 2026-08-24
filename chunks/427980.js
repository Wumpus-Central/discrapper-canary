IntlMessageFormat.__addLocaleData({
    locale: "pl",
    pluralRuleFunction: function (e, t) {
        var r = String(e).split("."),
            n = r[0],
            i = !r[1],
            o = n.slice(-1),
            a = n.slice(-2);
        return t
            ? "other"
            : 1 == e && i
              ? "one"
              : i && o >= 2 && o <= 4 && (a < 12 || a > 14)
                ? "few"
                : (i && 1 != n && (0 == o || 1 == o)) || (i && o >= 5 && o <= 9) || (i && a >= 12 && a <= 14)
                  ? "many"
                  : "other";
    },
});
