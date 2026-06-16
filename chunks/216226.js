n.r(t), n.d(t, { default: () => c });
var a = {
        lessThanXSeconds: {
            one: "1\u79D2\u672A\u6E80",
            other: "{{count}}\u79D2\u672A\u6E80",
            oneWithSuffix: "\u7D041\u79D2",
            otherWithSuffix: "\u7D04{{count}}\u79D2",
        },
        xSeconds: { one: "1\u79D2", other: "{{count}}\u79D2" },
        halfAMinute: "30\u79D2",
        lessThanXMinutes: {
            one: "1\u5206\u672A\u6E80",
            other: "{{count}}\u5206\u672A\u6E80",
            oneWithSuffix: "\u7D041\u5206",
            otherWithSuffix: "\u7D04{{count}}\u5206",
        },
        xMinutes: { one: "1\u5206", other: "{{count}}\u5206" },
        aboutXHours: { one: "\u7D041\u6642\u9593", other: "\u7D04{{count}}\u6642\u9593" },
        xHours: { one: "1\u6642\u9593", other: "{{count}}\u6642\u9593" },
        xDays: { one: "1\u65E5", other: "{{count}}\u65E5" },
        aboutXWeeks: { one: "\u7D041\u9031\u9593", other: "\u7D04{{count}}\u9031\u9593" },
        xWeeks: { one: "1\u9031\u9593", other: "{{count}}\u9031\u9593" },
        aboutXMonths: { one: "\u7D041\u304B\u6708", other: "\u7D04{{count}}\u304B\u6708" },
        xMonths: { one: "1\u304B\u6708", other: "{{count}}\u304B\u6708" },
        aboutXYears: { one: "\u7D041\u5E74", other: "\u7D04{{count}}\u5E74" },
        xYears: { one: "1\u5E74", other: "{{count}}\u5E74" },
        overXYears: { one: "1\u5E74\u4EE5\u4E0A", other: "{{count}}\u5E74\u4EE5\u4E0A" },
        almostXYears: { one: "1\u5E74\u8FD1\u304F", other: "{{count}}\u5E74\u8FD1\u304F" },
    },
    r = n(385987),
    i = {
        date: (0, r.A)({
            formats: {
                full: "y\u5E74M\u6708d\u65E5EEEE",
                long: "y\u5E74M\u6708d\u65E5",
                medium: "y/MM/dd",
                short: "y/MM/dd",
            },
            defaultWidth: "full",
        }),
        time: (0, r.A)({
            formats: { full: "H\u6642mm\u5206ss\u79D2 zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, r.A)({
            formats: {
                full: "{{date}} {{time}}",
                long: "{{date}} {{time}}",
                medium: "{{date}} {{time}}",
                short: "{{date}} {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    o = {
        lastWeek: "\u5148\u9031\u306Eeeee\u306Ep",
        yesterday: "\u6628\u65E5\u306Ep",
        today: "\u4ECA\u65E5\u306Ep",
        tomorrow: "\u660E\u65E5\u306Ep",
        nextWeek: "\u7FCC\u9031\u306Eeeee\u306Ep",
        other: "P",
    },
    d = n(981737),
    u = {
        ordinalNumber: function (e, t) {
            var n = Number(e);
            switch (String(null == t ? void 0 : t.unit)) {
                case "year":
                    return "".concat(n, "\u5E74");
                case "quarter":
                    return "\u7B2C".concat(n, "\u56DB\u534A\u671F");
                case "month":
                    return "".concat(n, "\u6708");
                case "week":
                    return "\u7B2C".concat(n, "\u9031");
                case "date":
                    return "".concat(n, "\u65E5");
                case "hour":
                    return "".concat(n, "\u6642");
                case "minute":
                    return "".concat(n, "\u5206");
                case "second":
                    return "".concat(n, "\u79D2");
                default:
                    return "".concat(n);
            }
        },
        era: (0, d.A)({
            values: {
                narrow: ["BC", "AC"],
                abbreviated: ["\u7D00\u5143\u524D", "\u897F\u66A6"],
                wide: ["\u7D00\u5143\u524D", "\u897F\u66A6"],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, d.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                wide: [
                    "\u7B2C1\u56DB\u534A\u671F",
                    "\u7B2C2\u56DB\u534A\u671F",
                    "\u7B2C3\u56DB\u534A\u671F",
                    "\u7B2C4\u56DB\u534A\u671F",
                ],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
                return Number(e) - 1;
            },
        }),
        month: (0, d.A)({
            values: {
                narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                abbreviated: [
                    "1\u6708",
                    "2\u6708",
                    "3\u6708",
                    "4\u6708",
                    "5\u6708",
                    "6\u6708",
                    "7\u6708",
                    "8\u6708",
                    "9\u6708",
                    "10\u6708",
                    "11\u6708",
                    "12\u6708",
                ],
                wide: [
                    "1\u6708",
                    "2\u6708",
                    "3\u6708",
                    "4\u6708",
                    "5\u6708",
                    "6\u6708",
                    "7\u6708",
                    "8\u6708",
                    "9\u6708",
                    "10\u6708",
                    "11\u6708",
                    "12\u6708",
                ],
            },
            defaultWidth: "wide",
        }),
        day: (0, d.A)({
            values: {
                narrow: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"],
                short: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"],
                abbreviated: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"],
                wide: [
                    "\u65E5\u66DC\u65E5",
                    "\u6708\u66DC\u65E5",
                    "\u706B\u66DC\u65E5",
                    "\u6C34\u66DC\u65E5",
                    "\u6728\u66DC\u65E5",
                    "\u91D1\u66DC\u65E5",
                    "\u571F\u66DC\u65E5",
                ],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, d.A)({
            values: {
                narrow: {
                    am: "\u5348\u524D",
                    pm: "\u5348\u5F8C",
                    midnight: "\u6DF1\u591C",
                    noon: "\u6B63\u5348",
                    morning: "\u671D",
                    afternoon: "\u5348\u5F8C",
                    evening: "\u591C",
                    night: "\u6DF1\u591C",
                },
                abbreviated: {
                    am: "\u5348\u524D",
                    pm: "\u5348\u5F8C",
                    midnight: "\u6DF1\u591C",
                    noon: "\u6B63\u5348",
                    morning: "\u671D",
                    afternoon: "\u5348\u5F8C",
                    evening: "\u591C",
                    night: "\u6DF1\u591C",
                },
                wide: {
                    am: "\u5348\u524D",
                    pm: "\u5348\u5F8C",
                    midnight: "\u6DF1\u591C",
                    noon: "\u6B63\u5348",
                    morning: "\u671D",
                    afternoon: "\u5348\u5F8C",
                    evening: "\u591C",
                    night: "\u6DF1\u591C",
                },
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: {
                    am: "\u5348\u524D",
                    pm: "\u5348\u5F8C",
                    midnight: "\u6DF1\u591C",
                    noon: "\u6B63\u5348",
                    morning: "\u671D",
                    afternoon: "\u5348\u5F8C",
                    evening: "\u591C",
                    night: "\u6DF1\u591C",
                },
                abbreviated: {
                    am: "\u5348\u524D",
                    pm: "\u5348\u5F8C",
                    midnight: "\u6DF1\u591C",
                    noon: "\u6B63\u5348",
                    morning: "\u671D",
                    afternoon: "\u5348\u5F8C",
                    evening: "\u591C",
                    night: "\u6DF1\u591C",
                },
                wide: {
                    am: "\u5348\u524D",
                    pm: "\u5348\u5F8C",
                    midnight: "\u6DF1\u591C",
                    noon: "\u6B63\u5348",
                    morning: "\u671D",
                    afternoon: "\u5348\u5F8C",
                    evening: "\u591C",
                    night: "\u6DF1\u591C",
                },
            },
            defaultFormattingWidth: "wide",
        }),
    },
    h = n(722023),
    s = n(303527);
let c = {
    code: "ja",
    formatDistance: function (e, t, n) {
        n = n || {};
        var r,
            i = a[e];
        if (
            ((r =
                "string" == typeof i
                    ? i
                    : 1 === t
                      ? n.addSuffix && i.oneWithSuffix
                          ? i.oneWithSuffix
                          : i.one
                      : n.addSuffix && i.otherWithSuffix
                        ? i.otherWithSuffix.replace("{{count}}", String(t))
                        : i.other.replace("{{count}}", String(t))),
            n.addSuffix)
        )
            if (n.comparison && n.comparison > 0) return r + "\u5F8C";
            else return r + "\u524D";
        return r;
    },
    formatLong: i,
    formatRelative: function (e, t, n, a) {
        return o[e];
    },
    localize: u,
    match: {
        ordinalNumber: (0, h.A)({
            matchPattern: /^\u7b2c?\d+(\u5e74|\u56db\u534a\u671f|\u6708|\u9031|\u65e5|\u6642|\u5206|\u79d2)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
                return parseInt(e, 10);
            },
        }),
        era: (0, s.A)({
            matchPatterns: {
                narrow: /^(B\.?C\.?|A\.?D\.?)/i,
                abbreviated: /^(\u7d00\u5143[\u524d\u5f8c]|\u897f\u66a6)/i,
                wide: /^(\u7d00\u5143[\u524d\u5f8c]|\u897f\u66a6)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^B/i, /^A/i],
                any: [/^(\u7d00\u5143\u524d)/i, /^(\u897f\u66a6|\u7d00\u5143\u5f8c)/i],
            },
            defaultParseWidth: "any",
        }),
        quarter: (0, s.A)({
            matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^Q[1234]/i,
                wide: /^\u7b2c[1234\u4e00\u4e8c\u4e09\u56db\uff11\uff12\uff13\uff14]\u56db\u534a\u671f/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                any: [/(1|\u4e00|\uff11)/i, /(2|\u4e8c|\uff12)/i, /(3|\u4e09|\uff13)/i, /(4|\u56db|\uff14)/i],
            },
            defaultParseWidth: "any",
            valueCallback: function (e) {
                return e + 1;
            },
        }),
        month: (0, s.A)({
            matchPatterns: {
                narrow: /^([123456789]|1[012])/,
                abbreviated: /^([123456789]|1[012])\u6708/i,
                wide: /^([123456789]|1[012])\u6708/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^1\D/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/] },
            defaultParseWidth: "any",
        }),
        day: (0, s.A)({
            matchPatterns: {
                narrow: /^[\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f]/,
                short: /^[\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f]/,
                abbreviated: /^[\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f]/,
                wide: /^[\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f]\u66dc\u65e5/,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^\u65e5/, /^\u6708/, /^\u706b/, /^\u6c34/, /^\u6728/, /^\u91d1/, /^\u571f/] },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, s.A)({
            matchPatterns: {
                any: /^(AM|PM|\u5348\u524d|\u5348\u5f8c|\u6b63\u5348|\u6df1\u591c|\u771f\u591c\u4e2d|\u591c|\u671d)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
                any: {
                    am: /^(A|\u5348\u524d)/i,
                    pm: /^(P|\u5348\u5f8c)/i,
                    midnight: /^\u6df1\u591c|\u771f\u591c\u4e2d/i,
                    noon: /^\u6b63\u5348/i,
                    morning: /^\u671d/i,
                    afternoon: /^\u5348\u5f8c/i,
                    evening: /^\u591c/i,
                    night: /^\u6df1\u591c/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
};
