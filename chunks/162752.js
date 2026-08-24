IntlMessageFormat.__addLocaleData({
    locale: "uk",
    pluralRuleFunction: function (e, t) {
        var r = String(e).split("."),
            n = r[0],
            i = !r[1],
            o = Number(r[0]) == e,
            a = o && r[0].slice(-1),
            s = o && r[0].slice(-2),
            l = n.slice(-1),
            u = n.slice(-2);
        return t
            ? 3 == a && 13 != s
                ? "few"
                : "other"
            : i && 1 == l && 11 != u
              ? "one"
              : i && l >= 2 && l <= 4 && (u < 12 || u > 14)
                ? "few"
                : (i && 0 == l) || (i && l >= 5 && l <= 9) || (i && u >= 11 && u <= 14)
                  ? "many"
                  : "other";
    },
});
