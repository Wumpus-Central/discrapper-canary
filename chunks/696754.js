n.r(t), n.d(t, { default: () => h });
var a = {
        lessThanXSeconds: { one: "\u5C11\u65BC 1 \u79D2", other: "\u5C11\u65BC {{count}} \u79D2" },
        xSeconds: { one: "1 \u79D2", other: "{{count}} \u79D2" },
        halfAMinute: "\u534A\u5206\u9418",
        lessThanXMinutes: { one: "\u5C11\u65BC 1 \u5206\u9418", other: "\u5C11\u65BC {{count}} \u5206\u9418" },
        xMinutes: { one: "1 \u5206\u9418", other: "{{count}} \u5206\u9418" },
        xHours: { one: "1 \u5C0F\u6642", other: "{{count}} \u5C0F\u6642" },
        aboutXHours: { one: "\u5927\u7D04 1 \u5C0F\u6642", other: "\u5927\u7D04 {{count}} \u5C0F\u6642" },
        xDays: { one: "1 \u5929", other: "{{count}} \u5929" },
        aboutXWeeks: { one: "\u5927\u7D04 1 \u500B\u661F\u671F", other: "\u5927\u7D04 {{count}} \u500B\u661F\u671F" },
        xWeeks: { one: "1 \u500B\u661F\u671F", other: "{{count}} \u500B\u661F\u671F" },
        aboutXMonths: { one: "\u5927\u7D04 1 \u500B\u6708", other: "\u5927\u7D04 {{count}} \u500B\u6708" },
        xMonths: { one: "1 \u500B\u6708", other: "{{count}} \u500B\u6708" },
        aboutXYears: { one: "\u5927\u7D04 1 \u5E74", other: "\u5927\u7D04 {{count}} \u5E74" },
        xYears: { one: "1 \u5E74", other: "{{count}} \u5E74" },
        overXYears: { one: "\u8D85\u904E 1 \u5E74", other: "\u8D85\u904E {{count}} \u5E74" },
        almostXYears: { one: "\u5C07\u8FD1 1 \u5E74", other: "\u5C07\u8FD1 {{count}} \u5E74" },
    },
    i = n(385987),
    r = {
        date: (0, i.A)({
            formats: {
                full: "y'\u5E74'M'\u6708'd'\u65E5' EEEE",
                long: "y'\u5E74'M'\u6708'd'\u65E5'",
                medium: "yyyy-MM-dd",
                short: "yy-MM-dd",
            },
            defaultWidth: "full",
        }),
        time: (0, i.A)({
            formats: { full: "zzzz a h:mm:ss", long: "z a h:mm:ss", medium: "a h:mm:ss", short: "a h:mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, i.A)({
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
        lastWeek: "'\u4E0A\u500B'eeee p",
        yesterday: "'\u6628\u5929' p",
        today: "'\u4ECA\u5929' p",
        tomorrow: "'\u660E\u5929' p",
        nextWeek: "'\u4E0B\u500B'eeee p",
        other: "P",
    },
    d = n(981737),
    u = {
        ordinalNumber: function (e, t) {
            var n = Number(e);
            switch (null == t ? void 0 : t.unit) {
                case "date":
                    return n + "\u65E5";
                case "hour":
                    return n + "\u6642";
                case "minute":
                    return n + "\u5206";
                case "second":
                    return n + "\u79D2";
                default:
                    return "\u7B2C " + n;
            }
        },
        era: (0, d.A)({
            values: {
                narrow: ["\u524D", "\u516C\u5143"],
                abbreviated: ["\u524D", "\u516C\u5143"],
                wide: ["\u516C\u5143\u524D", "\u516C\u5143"],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, d.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["\u7B2C\u4E00\u523B", "\u7B2C\u4E8C\u523B", "\u7B2C\u4E09\u523B", "\u7B2C\u56DB\u523B"],
                wide: [
                    "\u7B2C\u4E00\u523B\u9418",
                    "\u7B2C\u4E8C\u523B\u9418",
                    "\u7B2C\u4E09\u523B\u9418",
                    "\u7B2C\u56DB\u523B\u9418",
                ],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
                return e - 1;
            },
        }),
        month: (0, d.A)({
            values: {
                narrow: [
                    "\u4E00",
                    "\u4E8C",
                    "\u4E09",
                    "\u56DB",
                    "\u4E94",
                    "\u516D",
                    "\u4E03",
                    "\u516B",
                    "\u4E5D",
                    "\u5341",
                    "\u5341\u4E00",
                    "\u5341\u4E8C",
                ],
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
                    "\u4E00\u6708",
                    "\u4E8C\u6708",
                    "\u4E09\u6708",
                    "\u56DB\u6708",
                    "\u4E94\u6708",
                    "\u516D\u6708",
                    "\u4E03\u6708",
                    "\u516B\u6708",
                    "\u4E5D\u6708",
                    "\u5341\u6708",
                    "\u5341\u4E00\u6708",
                    "\u5341\u4E8C\u6708",
                ],
            },
            defaultWidth: "wide",
        }),
        day: (0, d.A)({
            values: {
                narrow: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"],
                short: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"],
                abbreviated: [
                    "\u9031\u65E5",
                    "\u9031\u4E00",
                    "\u9031\u4E8C",
                    "\u9031\u4E09",
                    "\u9031\u56DB",
                    "\u9031\u4E94",
                    "\u9031\u516D",
                ],
                wide: [
                    "\u661F\u671F\u65E5",
                    "\u661F\u671F\u4E00",
                    "\u661F\u671F\u4E8C",
                    "\u661F\u671F\u4E09",
                    "\u661F\u671F\u56DB",
                    "\u661F\u671F\u4E94",
                    "\u661F\u671F\u516D",
                ],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, d.A)({
            values: {
                narrow: {
                    am: "\u4E0A",
                    pm: "\u4E0B",
                    midnight: "\u51CC\u6668",
                    noon: "\u5348",
                    morning: "\u65E9",
                    afternoon: "\u4E0B\u5348",
                    evening: "\u665A",
                    night: "\u591C",
                },
                abbreviated: {
                    am: "\u4E0A\u5348",
                    pm: "\u4E0B\u5348",
                    midnight: "\u51CC\u6668",
                    noon: "\u4E2D\u5348",
                    morning: "\u65E9\u6668",
                    afternoon: "\u4E2D\u5348",
                    evening: "\u665A\u4E0A",
                    night: "\u591C\u9593",
                },
                wide: {
                    am: "\u4E0A\u5348",
                    pm: "\u4E0B\u5348",
                    midnight: "\u51CC\u6668",
                    noon: "\u4E2D\u5348",
                    morning: "\u65E9\u6668",
                    afternoon: "\u4E2D\u5348",
                    evening: "\u665A\u4E0A",
                    night: "\u591C\u9593",
                },
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: {
                    am: "\u4E0A",
                    pm: "\u4E0B",
                    midnight: "\u51CC\u6668",
                    noon: "\u5348",
                    morning: "\u65E9",
                    afternoon: "\u4E0B\u5348",
                    evening: "\u665A",
                    night: "\u591C",
                },
                abbreviated: {
                    am: "\u4E0A\u5348",
                    pm: "\u4E0B\u5348",
                    midnight: "\u51CC\u6668",
                    noon: "\u4E2D\u5348",
                    morning: "\u65E9\u6668",
                    afternoon: "\u4E2D\u5348",
                    evening: "\u665A\u4E0A",
                    night: "\u591C\u9593",
                },
                wide: {
                    am: "\u4E0A\u5348",
                    pm: "\u4E0B\u5348",
                    midnight: "\u51CC\u6668",
                    noon: "\u4E2D\u5348",
                    morning: "\u65E9\u6668",
                    afternoon: "\u4E2D\u5348",
                    evening: "\u665A\u4E0A",
                    night: "\u591C\u9593",
                },
            },
            defaultFormattingWidth: "wide",
        }),
    },
    s = n(303527);
let h = {
    code: "zh-TW",
    formatDistance: function (e, t, n) {
        var i,
            r = a[e];
        if (
            ((i = "string" == typeof r ? r : 1 === t ? r.one : r.other.replace("{{count}}", String(t))),
            null != n && n.addSuffix)
        )
            if (n.comparison && n.comparison > 0) return i + "\u5167";
            else return i + "\u524D";
        return i;
    },
    formatLong: r,
    formatRelative: function (e, t, n, a) {
        return o[e];
    },
    localize: u,
    match: {
        ordinalNumber: (0, n(722023).A)({
            matchPattern: /^(\u7b2c\s*)?\d+(\u65e5|\u6642|\u5206|\u79d2)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
                return parseInt(e, 10);
            },
        }),
        era: (0, s.A)({
            matchPatterns: {
                narrow: /^(\u524d)/i,
                abbreviated: /^(\u524d)/i,
                wide: /^(\u516c\u5143\u524d|\u516c\u5143)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^(\u524d)/i, /^(\u516c\u5143)/i] },
            defaultParseWidth: "any",
        }),
        quarter: (0, s.A)({
            matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^\u7b2c[\u4e00\u4e8c\u4e09\u56db]\u523b/i,
                wide: /^\u7b2c[\u4e00\u4e8c\u4e09\u56db]\u523b\u9418/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/(1|\u4e00)/i, /(2|\u4e8c)/i, /(3|\u4e09)/i, /(4|\u56db)/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
                return e + 1;
            },
        }),
        month: (0, s.A)({
            matchPatterns: {
                narrow: /^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00])/i,
                abbreviated:
                    /^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00]|\d|1[12])\u6708/i,
                wide: /^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00])\u6708/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [
                    /^\u4e00/i,
                    /^\u4e8c/i,
                    /^\u4e09/i,
                    /^\u56db/i,
                    /^\u4e94/i,
                    /^\u516d/i,
                    /^\u4e03/i,
                    /^\u516b/i,
                    /^\u4e5d/i,
                    /^\u5341(?!(\u4e00|\u4e8c))/i,
                    /^\u5341\u4e00/i,
                    /^\u5341\u4e8c/i,
                ],
                any: [
                    /^\u4e00|1/i,
                    /^\u4e8c|2/i,
                    /^\u4e09|3/i,
                    /^\u56db|4/i,
                    /^\u4e94|5/i,
                    /^\u516d|6/i,
                    /^\u4e03|7/i,
                    /^\u516b|8/i,
                    /^\u4e5d|9/i,
                    /^\u5341(?!(\u4e00|\u4e8c))|10/i,
                    /^\u5341\u4e00|11/i,
                    /^\u5341\u4e8c|12/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        day: (0, s.A)({
            matchPatterns: {
                narrow: /^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,
                short: /^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,
                abbreviated: /^\u9031[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,
                wide: /^\u661f\u671f[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/\u65e5/i, /\u4e00/i, /\u4e8c/i, /\u4e09/i, /\u56db/i, /\u4e94/i, /\u516d/i] },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, s.A)({
            matchPatterns: {
                any: /^(\u4e0a\u5348?|\u4e0b\u5348?|\u5348\u591c|[\u4e2d\u6b63]\u5348|\u65e9\u4e0a?|\u4e0b\u5348|\u665a\u4e0a?|\u51cc\u6668)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
                any: {
                    am: /^\u4e0a\u5348?/i,
                    pm: /^\u4e0b\u5348?/i,
                    midnight: /^\u5348\u591c/i,
                    noon: /^[\u4e2d\u6b63]\u5348/i,
                    morning: /^\u65e9\u4e0a/i,
                    afternoon: /^\u4e0b\u5348/i,
                    evening: /^\u665a\u4e0a?/i,
                    night: /^\u51cc\u6668/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
};
