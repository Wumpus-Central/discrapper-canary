IntlMessageFormat.__addLocaleData({
    locale: "uk",
    pluralRuleFunction: function (e, t) {
        var r = String(e).split("."),
            n = r[0],
            o = !r[1],
            i = Number(r[0]) == e,
            a = i && r[0].slice(-1),
            s = i && r[0].slice(-2),
            l = n.slice(-1),
            u = n.slice(-2);
        return t
            ? 3 == a && 13 != s
                ? "few"
                : "other"
            : o && 1 == l && 11 != u
              ? "one"
              : o && l >= 2 && l <= 4 && (u < 12 || u > 14)
                ? "few"
                : (o && 0 == l) || (o && l >= 5 && l <= 9) || (o && u >= 11 && u <= 14)
                  ? "many"
                  : "other";
    },
});
