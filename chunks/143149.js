function t(i, n) {
    if (void 0 !== i.one && 1 === n) return i.one;
    var e = n % 10,
        t = n % 100;
    return 1 === e && 11 !== t
        ? i.singularNominative.replace("{{count}}", String(n))
        : e >= 2 && e <= 4 && (t < 10 || t > 20)
          ? i.singularGenitive.replace("{{count}}", String(n))
          : i.pluralGenitive.replace("{{count}}", String(n));
}
function a(i) {
    return function (n, e) {
        if (!e || !e.addSuffix) return t(i.regular, n);
        if (e.comparison && e.comparison > 0)
            if (i.future) return t(i.future, n);
            else return "\u0437\u0430 " + t(i.regular, n);
        return i.past ? t(i.past, n) : t(i.regular, n) + " \u0442\u043E\u043C\u0443";
    };
}
e.r(n), e.d(n, { default: () => p });
var r = {
        lessThanXSeconds: a({
            regular: {
                one: "\u043C\u0435\u043D\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
                singularNominative:
                    "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
                singularGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
                pluralGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
            },
            future: {
                one: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
                singularNominative:
                    "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
                singularGenitive:
                    "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
                pluralGenitive:
                    "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
            },
        }),
        xSeconds: a({
            regular: {
                singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0430",
                singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
                pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
            },
            past: {
                singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u0442\u043E\u043C\u0443",
                singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438 \u0442\u043E\u043C\u0443",
                pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u0442\u043E\u043C\u0443",
            },
            future: {
                singularNominative: "\u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
                singularGenitive: "\u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
                pluralGenitive: "\u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
            },
        }),
        halfAMinute: function (i, n) {
            if (n && n.addSuffix)
                if (n.comparison && n.comparison > 0)
                    return "\u0437\u0430 \u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438";
                else return "\u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438 \u0442\u043E\u043C\u0443";
            return "\u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438";
        },
        lessThanXMinutes: a({
            regular: {
                one: "\u043C\u0435\u043D\u0448\u0435 \u0445\u0432\u0438\u043B\u0438\u043D\u0438",
                singularNominative:
                    "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438",
                singularGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D",
                pluralGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D",
            },
            future: {
                one: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 \u0445\u0432\u0438\u043B\u0438\u043D\u0443",
                singularNominative:
                    "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0443",
                singularGenitive:
                    "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438",
                pluralGenitive:
                    "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D",
            },
        }),
        xMinutes: a({
            regular: {
                singularNominative: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0430",
                singularGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438",
                pluralGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D",
            },
            past: {
                singularNominative: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0443 \u0442\u043E\u043C\u0443",
                singularGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438 \u0442\u043E\u043C\u0443",
                pluralGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D \u0442\u043E\u043C\u0443",
            },
            future: {
                singularNominative: "\u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0443",
                singularGenitive: "\u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438",
                pluralGenitive: "\u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D",
            },
        }),
        aboutXHours: a({
            regular: {
                singularNominative:
                    "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D\u0438",
                singularGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D",
                pluralGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D",
            },
            future: {
                singularNominative:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0433\u043E\u0434\u0438\u043D\u0443",
                singularGenitive:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0433\u043E\u0434\u0438\u043D\u0438",
                pluralGenitive:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0433\u043E\u0434\u0438\u043D",
            },
        }),
        xHours: a({
            regular: {
                singularNominative: "{{count}} \u0433\u043E\u0434\u0438\u043D\u0443",
                singularGenitive: "{{count}} \u0433\u043E\u0434\u0438\u043D\u0438",
                pluralGenitive: "{{count}} \u0433\u043E\u0434\u0438\u043D",
            },
        }),
        xDays: a({
            regular: {
                singularNominative: "{{count}} \u0434\u0435\u043D\u044C",
                singularGenitive: "{{count}} \u0434\u043Di",
                pluralGenitive: "{{count}} \u0434\u043D\u0456\u0432",
            },
        }),
        aboutXWeeks: a({
            regular: {
                singularNominative:
                    "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0442\u0438\u0436\u043D\u044F",
                singularGenitive:
                    "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0442\u0438\u0436\u043D\u0456\u0432",
                pluralGenitive:
                    "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0442\u0438\u0436\u043D\u0456\u0432",
            },
            future: {
                singularNominative:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0442\u0438\u0436\u0434\u0435\u043D\u044C",
                singularGenitive:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0442\u0438\u0436\u043D\u0456",
                pluralGenitive:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0442\u0438\u0436\u043D\u0456\u0432",
            },
        }),
        xWeeks: a({
            regular: {
                singularNominative: "{{count}} \u0442\u0438\u0436\u0434\u0435\u043D\u044C",
                singularGenitive: "{{count}} \u0442\u0438\u0436\u043D\u0456",
                pluralGenitive: "{{count}} \u0442\u0438\u0436\u043D\u0456\u0432",
            },
        }),
        aboutXMonths: a({
            regular: {
                singularNominative:
                    "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u043C\u0456\u0441\u044F\u0446\u044F",
                singularGenitive:
                    "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432",
                pluralGenitive:
                    "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432",
            },
            future: {
                singularNominative:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u043C\u0456\u0441\u044F\u0446\u044C",
                singularGenitive:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u043C\u0456\u0441\u044F\u0446\u0456",
                pluralGenitive:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432",
            },
        }),
        xMonths: a({
            regular: {
                singularNominative: "{{count}} \u043C\u0456\u0441\u044F\u0446\u044C",
                singularGenitive: "{{count}} \u043C\u0456\u0441\u044F\u0446\u0456",
                pluralGenitive: "{{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432",
            },
        }),
        aboutXYears: a({
            regular: {
                singularNominative: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0440\u043E\u043A\u0443",
                singularGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0440\u043E\u043A\u0456\u0432",
                pluralGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0440\u043E\u043A\u0456\u0432",
            },
            future: {
                singularNominative:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0440\u0456\u043A",
                singularGenitive:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0440\u043E\u043A\u0438",
                pluralGenitive:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0440\u043E\u043A\u0456\u0432",
            },
        }),
        xYears: a({
            regular: {
                singularNominative: "{{count}} \u0440\u0456\u043A",
                singularGenitive: "{{count}} \u0440\u043E\u043A\u0438",
                pluralGenitive: "{{count}} \u0440\u043E\u043A\u0456\u0432",
            },
        }),
        overXYears: a({
            regular: {
                singularNominative: "\u0431\u0456\u043B\u044C\u0448\u0435 {{count}} \u0440\u043E\u043A\u0443",
                singularGenitive: "\u0431\u0456\u043B\u044C\u0448\u0435 {{count}} \u0440\u043E\u043A\u0456\u0432",
                pluralGenitive: "\u0431\u0456\u043B\u044C\u0448\u0435 {{count}} \u0440\u043E\u043A\u0456\u0432",
            },
            future: {
                singularNominative:
                    "\u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0440\u0456\u043A",
                singularGenitive:
                    "\u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0438",
                pluralGenitive:
                    "\u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0456\u0432",
            },
        }),
        almostXYears: a({
            regular: {
                singularNominative: "\u043C\u0430\u0439\u0436\u0435 {{count}} \u0440\u0456\u043A",
                singularGenitive: "\u043C\u0430\u0439\u0436\u0435 {{count}} \u0440\u043E\u043A\u0438",
                pluralGenitive: "\u043C\u0430\u0439\u0436\u0435 {{count}} \u0440\u043E\u043A\u0456\u0432",
            },
            future: {
                singularNominative: "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u0456\u043A",
                singularGenitive: "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0438",
                pluralGenitive: "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0456\u0432",
            },
        }),
    },
    u = e(385987),
    o = {
        date: (0, u.A)({
            formats: {
                full: "EEEE, do MMMM y '\u0440.'",
                long: "do MMMM y '\u0440.'",
                medium: "d MMM y '\u0440.'",
                short: "dd.MM.y",
            },
            defaultWidth: "full",
        }),
        time: (0, u.A)({
            formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, u.A)({
            formats: {
                full: "{{date}} '\u043E' {{time}}",
                long: "{{date}} '\u043E' {{time}}",
                medium: "{{date}}, {{time}}",
                short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    l = e(29583),
    s = e(204801),
    c = [
        "\u043D\u0435\u0434\u0456\u043B\u044E",
        "\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A",
        "\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A",
        "\u0441\u0435\u0440\u0435\u0434\u0443",
        "\u0447\u0435\u0442\u0432\u0435\u0440",
        "\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044E",
        "\u0441\u0443\u0431\u043E\u0442\u0443",
    ];
function d(i) {
    return "'\u0443 " + c[i] + " \u043E' p";
}
var v = {
        lastWeek: function (i, n, e) {
            var t = (0, l.default)(i),
                a = t.getUTCDay();
            if ((0, s.A)(t, n, e)) return d(a);
            var r = c[a];
            switch (a) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return "'\u0443 \u043C\u0438\u043D\u0443\u043B\u0443 " + r + " \u043E' p";
                case 1:
                case 2:
                case 4:
                    return "'\u0443 \u043C\u0438\u043D\u0443\u043B\u0438\u0439 " + r + " \u043E' p";
            }
        },
        yesterday: "'\u0432\u0447\u043E\u0440\u0430 \u043E' p",
        today: "'\u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u043E' p",
        tomorrow: "'\u0437\u0430\u0432\u0442\u0440\u0430 \u043E' p",
        nextWeek: function (i, n, e) {
            var t = (0, l.default)(i),
                a = t.getUTCDay();
            if ((0, s.A)(t, n, e)) return d(a);
            var r = c[a];
            switch (a) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return "'\u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0443 " + r + " \u043E' p";
                case 1:
                case 2:
                case 4:
                    return "'\u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 " + r + " \u043E' p";
            }
        },
        other: "P",
    },
    g = e(981737),
    m = {
        ordinalNumber: function (i, n) {
            var e,
                t = String(null == n ? void 0 : n.unit),
                a = Number(i);
            return (
                (e =
                    "date" === t
                        ? 3 === a || 23 === a
                            ? "-\u0454"
                            : "-\u0435"
                        : "minute" === t || "second" === t || "hour" === t
                          ? "-\u0430"
                          : "-\u0439"),
                a + e
            );
        },
        era: (0, g.A)({
            values: {
                narrow: ["\u0434\u043E \u043D.\u0435.", "\u043D.\u0435."],
                abbreviated: ["\u0434\u043E \u043D. \u0435.", "\u043D. \u0435."],
                wide: [
                    "\u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u0435\u0440\u0438",
                    "\u043D\u0430\u0448\u043E\u0457 \u0435\u0440\u0438",
                ],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, g.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: [
                    "1-\u0439 \u043A\u0432.",
                    "2-\u0439 \u043A\u0432.",
                    "3-\u0439 \u043A\u0432.",
                    "4-\u0439 \u043A\u0432.",
                ],
                wide: [
                    "1-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B",
                    "2-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B",
                    "3-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B",
                    "4-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B",
                ],
            },
            defaultWidth: "wide",
            argumentCallback: function (i) {
                return i - 1;
            },
        }),
        month: (0, g.A)({
            values: {
                narrow: [
                    "\u0421",
                    "\u041B",
                    "\u0411",
                    "\u041A",
                    "\u0422",
                    "\u0427",
                    "\u041B",
                    "\u0421",
                    "\u0412",
                    "\u0416",
                    "\u041B",
                    "\u0413",
                ],
                abbreviated: [
                    "\u0441\u0456\u0447.",
                    "\u043B\u044E\u0442.",
                    "\u0431\u0435\u0440\u0435\u0437.",
                    "\u043A\u0432\u0456\u0442.",
                    "\u0442\u0440\u0430\u0432.",
                    "\u0447\u0435\u0440\u0432.",
                    "\u043B\u0438\u043F.",
                    "\u0441\u0435\u0440\u043F.",
                    "\u0432\u0435\u0440\u0435\u0441.",
                    "\u0436\u043E\u0432\u0442.",
                    "\u043B\u0438\u0441\u0442\u043E\u043F.",
                    "\u0433\u0440\u0443\u0434.",
                ],
                wide: [
                    "\u0441\u0456\u0447\u0435\u043D\u044C",
                    "\u043B\u044E\u0442\u0438\u0439",
                    "\u0431\u0435\u0440\u0435\u0437\u0435\u043D\u044C",
                    "\u043A\u0432\u0456\u0442\u0435\u043D\u044C",
                    "\u0442\u0440\u0430\u0432\u0435\u043D\u044C",
                    "\u0447\u0435\u0440\u0432\u0435\u043D\u044C",
                    "\u043B\u0438\u043F\u0435\u043D\u044C",
                    "\u0441\u0435\u0440\u043F\u0435\u043D\u044C",
                    "\u0432\u0435\u0440\u0435\u0441\u0435\u043D\u044C",
                    "\u0436\u043E\u0432\u0442\u0435\u043D\u044C",
                    "\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434",
                    "\u0433\u0440\u0443\u0434\u0435\u043D\u044C",
                ],
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: [
                    "\u0421",
                    "\u041B",
                    "\u0411",
                    "\u041A",
                    "\u0422",
                    "\u0427",
                    "\u041B",
                    "\u0421",
                    "\u0412",
                    "\u0416",
                    "\u041B",
                    "\u0413",
                ],
                abbreviated: [
                    "\u0441\u0456\u0447.",
                    "\u043B\u044E\u0442.",
                    "\u0431\u0435\u0440\u0435\u0437.",
                    "\u043A\u0432\u0456\u0442.",
                    "\u0442\u0440\u0430\u0432.",
                    "\u0447\u0435\u0440\u0432.",
                    "\u043B\u0438\u043F.",
                    "\u0441\u0435\u0440\u043F.",
                    "\u0432\u0435\u0440\u0435\u0441.",
                    "\u0436\u043E\u0432\u0442.",
                    "\u043B\u0438\u0441\u0442\u043E\u043F.",
                    "\u0433\u0440\u0443\u0434.",
                ],
                wide: [
                    "\u0441\u0456\u0447\u043D\u044F",
                    "\u043B\u044E\u0442\u043E\u0433\u043E",
                    "\u0431\u0435\u0440\u0435\u0437\u043D\u044F",
                    "\u043A\u0432\u0456\u0442\u043D\u044F",
                    "\u0442\u0440\u0430\u0432\u043D\u044F",
                    "\u0447\u0435\u0440\u0432\u043D\u044F",
                    "\u043B\u0438\u043F\u043D\u044F",
                    "\u0441\u0435\u0440\u043F\u043D\u044F",
                    "\u0432\u0435\u0440\u0435\u0441\u043D\u044F",
                    "\u0436\u043E\u0432\u0442\u043D\u044F",
                    "\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430",
                    "\u0433\u0440\u0443\u0434\u043D\u044F",
                ],
            },
            defaultFormattingWidth: "wide",
        }),
        day: (0, g.A)({
            values: {
                narrow: ["\u041D", "\u041F", "\u0412", "\u0421", "\u0427", "\u041F", "\u0421"],
                short: [
                    "\u043D\u0434",
                    "\u043F\u043D",
                    "\u0432\u0442",
                    "\u0441\u0440",
                    "\u0447\u0442",
                    "\u043F\u0442",
                    "\u0441\u0431",
                ],
                abbreviated: [
                    "\u043D\u0435\u0434",
                    "\u043F\u043E\u043D",
                    "\u0432\u0456\u0432",
                    "\u0441\u0435\u0440",
                    "\u0447\u0442\u0432",
                    "\u043F\u0442\u043D",
                    "\u0441\u0443\u0431",
                ],
                wide: [
                    "\u043D\u0435\u0434\u0456\u043B\u044F",
                    "\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A",
                    "\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A",
                    "\u0441\u0435\u0440\u0435\u0434\u0430",
                    "\u0447\u0435\u0442\u0432\u0435\u0440",
                    "\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044F",
                    "\u0441\u0443\u0431\u043E\u0442\u0430",
                ],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, g.A)({
            values: {
                narrow: {
                    am: "\u0414\u041F",
                    pm: "\u041F\u041F",
                    midnight: "\u043F\u0456\u0432\u043D.",
                    noon: "\u043F\u043E\u043B.",
                    morning: "\u0440\u0430\u043D\u043E\u043A",
                    afternoon: "\u0434\u0435\u043D\u044C",
                    evening: "\u0432\u0435\u0447.",
                    night: "\u043D\u0456\u0447",
                },
                abbreviated: {
                    am: "\u0414\u041F",
                    pm: "\u041F\u041F",
                    midnight: "\u043F\u0456\u0432\u043D.",
                    noon: "\u043F\u043E\u043B.",
                    morning: "\u0440\u0430\u043D\u043E\u043A",
                    afternoon: "\u0434\u0435\u043D\u044C",
                    evening: "\u0432\u0435\u0447.",
                    night: "\u043D\u0456\u0447",
                },
                wide: {
                    am: "\u0414\u041F",
                    pm: "\u041F\u041F",
                    midnight: "\u043F\u0456\u0432\u043D\u0456\u0447",
                    noon: "\u043F\u043E\u043B\u0443\u0434\u0435\u043D\u044C",
                    morning: "\u0440\u0430\u043D\u043E\u043A",
                    afternoon: "\u0434\u0435\u043D\u044C",
                    evening: "\u0432\u0435\u0447\u0456\u0440",
                    night: "\u043D\u0456\u0447",
                },
            },
            defaultWidth: "any",
            formattingValues: {
                narrow: {
                    am: "\u0414\u041F",
                    pm: "\u041F\u041F",
                    midnight: "\u043F\u0456\u0432\u043D.",
                    noon: "\u043F\u043E\u043B.",
                    morning: "\u0440\u0430\u043D\u043A\u0443",
                    afternoon: "\u0434\u043D\u044F",
                    evening: "\u0432\u0435\u0447.",
                    night: "\u043D\u043E\u0447\u0456",
                },
                abbreviated: {
                    am: "\u0414\u041F",
                    pm: "\u041F\u041F",
                    midnight: "\u043F\u0456\u0432\u043D.",
                    noon: "\u043F\u043E\u043B.",
                    morning: "\u0440\u0430\u043D\u043A\u0443",
                    afternoon: "\u0434\u043D\u044F",
                    evening: "\u0432\u0435\u0447.",
                    night: "\u043D\u043E\u0447\u0456",
                },
                wide: {
                    am: "\u0414\u041F",
                    pm: "\u041F\u041F",
                    midnight: "\u043F\u0456\u0432\u043D\u0456\u0447",
                    noon: "\u043F\u043E\u043B\u0443\u0434\u0435\u043D\u044C",
                    morning: "\u0440\u0430\u043D\u043A\u0443",
                    afternoon: "\u0434\u043D\u044F",
                    evening: "\u0432\u0435\u0447.",
                    night: "\u043D\u043E\u0447\u0456",
                },
            },
            defaultFormattingWidth: "wide",
        }),
    },
    f = e(303527);
let p = {
    code: "uk",
    formatDistance: function (i, n, e) {
        return (e = e || {}), r[i](n, e);
    },
    formatLong: o,
    formatRelative: function (i, n, e, t) {
        var a = v[i];
        return "function" == typeof a ? a(n, e, t) : a;
    },
    localize: m,
    match: {
        ordinalNumber: (0, e(722023).A)({
            matchPattern: /^(\d+)(-?(\u0435|\u0439|\u0454|\u0430|\u044f))?/i,
            parsePattern: /\d+/i,
            valueCallback: function (i) {
                return parseInt(i, 10);
            },
        }),
        era: (0, f.A)({
            matchPatterns: {
                narrow: /^((\u0434\u043e )?\u043d\.?\s?\u0435\.?)/i,
                abbreviated: /^((\u0434\u043e )?\u043d\.?\s?\u0435\.?)/i,
                wide: /^(\u0434\u043e \u043d\u0430\u0448\u043e\u0457 \u0435\u0440\u0438|\u043d\u0430\u0448\u043e\u0457 \u0435\u0440\u0438|\u043d\u0430\u0448\u0430 \u0435\u0440\u0430)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^\u0434/i, /^\u043d/i] },
            defaultParseWidth: "any",
        }),
        quarter: (0, f.A)({
            matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^[1234](-?[\u0438\u0456]?\u0439?)? \u043a\u0432.?/i,
                wide: /^[1234](-?[\u0438\u0456]?\u0439?)? \u043a\u0432\u0430\u0440\u0442\u0430\u043b/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (i) {
                return i + 1;
            },
        }),
        month: (0, f.A)({
            matchPatterns: {
                narrow: /^[\u0441\u043b\u0431\u043a\u0442\u0447\u0432\u0436\u0433]/i,
                abbreviated:
                    /^(\u0441\u0456\u0447|\u043b\u044e\u0442|\u0431\u0435\u0440(\u0435\u0437)?|\u043a\u0432\u0456\u0442|\u0442\u0440\u0430\u0432|\u0447\u0435\u0440\u0432|\u043b\u0438\u043f|\u0441\u0435\u0440\u043f|\u0432\u0435\u0440(\u0435\u0441)?|\u0436\u043e\u0432\u0442|\u043b\u0438\u0441(\u0442\u043e\u043f)?|\u0433\u0440\u0443\u0434)\.?/i,
                wide: /^(\u0441\u0456\u0447\u0435\u043d\u044c|\u0441\u0456\u0447\u043d\u044f|\u043b\u044e\u0442\u0438\u0439|\u043b\u044e\u0442\u043e\u0433\u043e|\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c|\u0431\u0435\u0440\u0435\u0437\u043d\u044f|\u043a\u0432\u0456\u0442\u0435\u043d\u044c|\u043a\u0432\u0456\u0442\u043d\u044f|\u0442\u0440\u0430\u0432\u0435\u043d\u044c|\u0442\u0440\u0430\u0432\u043d\u044f|\u0447\u0435\u0440\u0432\u043d\u044f|\u0447\u0435\u0440\u0432\u0435\u043d\u044c|\u043b\u0438\u043f\u0435\u043d\u044c|\u043b\u0438\u043f\u043d\u044f|\u0441\u0435\u0440\u043f\u0435\u043d\u044c|\u0441\u0435\u0440\u043f\u043d\u044f|\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c|\u0432\u0435\u0440\u0435\u0441\u043d\u044f|\u0436\u043e\u0432\u0442\u0435\u043d\u044c|\u0436\u043e\u0432\u0442\u043d\u044f|\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434[\u0430]?|\u0433\u0440\u0443\u0434\u0435\u043d\u044c|\u0433\u0440\u0443\u0434\u043d\u044f)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [
                    /^\u0441/i,
                    /^\u043b/i,
                    /^\u0431/i,
                    /^\u043a/i,
                    /^\u0442/i,
                    /^\u0447/i,
                    /^\u043b/i,
                    /^\u0441/i,
                    /^\u0432/i,
                    /^\u0436/i,
                    /^\u043b/i,
                    /^\u0433/i,
                ],
                any: [
                    /^\u0441\u0456/i,
                    /^\u043b\u044e/i,
                    /^\u0431/i,
                    /^\u043a/i,
                    /^\u0442/i,
                    /^\u0447/i,
                    /^\u043b\u0438\u043f/i,
                    /^\u0441\u0435/i,
                    /^\u0432/i,
                    /^\u0436/i,
                    /^\u043b\u0438\u0441/i,
                    /^\u0433/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        day: (0, f.A)({
            matchPatterns: {
                narrow: /^[\u043d\u043f\u0432\u0441\u0447]/i,
                short: /^(\u043d\u0434|\u043f\u043d|\u0432\u0442|\u0441\u0440|\u0447\u0442|\u043f\u0442|\u0441\u0431)\.?/i,
                abbreviated:
                    /^(\u043d\u0435\u0434|\u043f\u043e\u043d|\u0432\u0456\u0432|\u0441\u0435\u0440|\u0447\u0435?\u0442\u0432|\u043f\u0442\u043d?|\u0441\u0443\u0431)\.?/i,
                wide: /^(\u043d\u0435\u0434\u0456\u043b[\u044f\u0456]|\u043f\u043e\u043d\u0435\u0434\u0456\u043b[\u043e\u043a][\u043a\u0430]|\u0432\u0456\u0432\u0442\u043e\u0440[\u043e\u043a][\u043a\u0430]|\u0441\u0435\u0440\u0435\u0434[\u0430\u0438]|\u0447\u0435\u0442\u0432\u0435\u0440(\u0433\u0430)?|\u043f\W*?\u044f\u0442\u043d\u0438\u0446[\u044f\u0456]|\u0441\u0443\u0431\u043e\u0442[\u0430\u0438])/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^\u043d/i, /^\u043f/i, /^\u0432/i, /^\u0441/i, /^\u0447/i, /^\u043f/i, /^\u0441/i],
                any: [
                    /^\u043d/i,
                    /^\u043f[\u043e\u043d]/i,
                    /^\u0432/i,
                    /^\u0441[\u0435\u0440]/i,
                    /^\u0447/i,
                    /^\u043f\W*?[\u044f\u0442]/i,
                    /^\u0441[\u0443\u0431]/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, f.A)({
            matchPatterns: {
                narrow: /^([\u0434\u043f]\u043f|\u043f\u0456\u0432\u043d\.?|\u043f\u043e\u043b\.?|\u0440\u0430\u043d\u043e\u043a|\u0440\u0430\u043d\u043a\u0443|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\.?|\u043d\u0456\u0447|\u043d\u043e\u0447\u0456)/i,
                abbreviated:
                    /^([\u0434\u043f]\u043f|\u043f\u0456\u0432\u043d\.?|\u043f\u043e\u043b\.?|\u0440\u0430\u043d\u043e\u043a|\u0440\u0430\u043d\u043a\u0443|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\.?|\u043d\u0456\u0447|\u043d\u043e\u0447\u0456)/i,
                wide: /^([\u0434\u043f]\u043f|\u043f\u0456\u0432\u043d\u0456\u0447|\u043f\u043e\u043b\u0443\u0434\u0435\u043d\u044c|\u0440\u0430\u043d\u043e\u043a|\u0440\u0430\u043d\u043a\u0443|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\u0456\u0440|\u0432\u0435\u0447\u043e\u0440\u0430|\u043d\u0456\u0447|\u043d\u043e\u0447\u0456)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                any: {
                    am: /^\u0434\u043f/i,
                    pm: /^\u043f\u043f/i,
                    midnight: /^\u043f\u0456\u0432\u043d/i,
                    noon: /^\u043f\u043e\u043b/i,
                    morning: /^\u0440/i,
                    afternoon: /^\u0434[\u0435\u043d]/i,
                    evening: /^\u0432/i,
                    night: /^\u043d/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 1 },
};
