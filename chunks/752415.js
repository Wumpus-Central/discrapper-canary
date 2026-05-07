n.r(t), n.d(t, { default: () => h });
var a = {
        lessThanXSeconds: { one: "1\uCD08 \uBBF8\uB9CC", other: "{{count}}\uCD08 \uBBF8\uB9CC" },
        xSeconds: { one: "1\uCD08", other: "{{count}}\uCD08" },
        halfAMinute: "30\uCD08",
        lessThanXMinutes: { one: "1\uBD84 \uBBF8\uB9CC", other: "{{count}}\uBD84 \uBBF8\uB9CC" },
        xMinutes: { one: "1\uBD84", other: "{{count}}\uBD84" },
        aboutXHours: { one: "\uC57D 1\uC2DC\uAC04", other: "\uC57D {{count}}\uC2DC\uAC04" },
        xHours: { one: "1\uC2DC\uAC04", other: "{{count}}\uC2DC\uAC04" },
        xDays: { one: "1\uC77C", other: "{{count}}\uC77C" },
        aboutXWeeks: { one: "\uC57D 1\uC8FC", other: "\uC57D {{count}}\uC8FC" },
        xWeeks: { one: "1\uC8FC", other: "{{count}}\uC8FC" },
        aboutXMonths: { one: "\uC57D 1\uAC1C\uC6D4", other: "\uC57D {{count}}\uAC1C\uC6D4" },
        xMonths: { one: "1\uAC1C\uC6D4", other: "{{count}}\uAC1C\uC6D4" },
        aboutXYears: { one: "\uC57D 1\uB144", other: "\uC57D {{count}}\uB144" },
        xYears: { one: "1\uB144", other: "{{count}}\uB144" },
        overXYears: { one: "1\uB144 \uC774\uC0C1", other: "{{count}}\uB144 \uC774\uC0C1" },
        almostXYears: { one: "\uAC70\uC758 1\uB144", other: "\uAC70\uC758 {{count}}\uB144" },
    },
    r = n(385987),
    i = {
        date: (0, r.A)({
            formats: {
                full: "y\uB144 M\uC6D4 d\uC77C EEEE",
                long: "y\uB144 M\uC6D4 d\uC77C",
                medium: "y.MM.dd",
                short: "y.MM.dd",
            },
            defaultWidth: "full",
        }),
        time: (0, r.A)({
            formats: {
                full: "a H\uC2DC mm\uBD84 ss\uCD08 zzzz",
                long: "a H:mm:ss z",
                medium: "HH:mm:ss",
                short: "HH:mm",
            },
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
        lastWeek: "'\uC9C0\uB09C' eeee p",
        yesterday: "'\uC5B4\uC81C' p",
        today: "'\uC624\uB298' p",
        tomorrow: "'\uB0B4\uC77C' p",
        nextWeek: "'\uB2E4\uC74C' eeee p",
        other: "P",
    },
    d = n(981737),
    s = {
        ordinalNumber: function (e, t) {
            var n = Number(e);
            switch (String(null == t ? void 0 : t.unit)) {
                case "minute":
                case "second":
                    return String(n);
                case "date":
                    return n + "\uC77C";
                default:
                    return n + "\uBC88\uC9F8";
            }
        },
        era: (0, d.A)({
            values: { narrow: ["BC", "AD"], abbreviated: ["BC", "AD"], wide: ["\uAE30\uC6D0\uC804", "\uC11C\uAE30"] },
            defaultWidth: "wide",
        }),
        quarter: (0, d.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                wide: ["1\uBD84\uAE30", "2\uBD84\uAE30", "3\uBD84\uAE30", "4\uBD84\uAE30"],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
                return e - 1;
            },
        }),
        month: (0, d.A)({
            values: {
                narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                abbreviated: [
                    "1\uC6D4",
                    "2\uC6D4",
                    "3\uC6D4",
                    "4\uC6D4",
                    "5\uC6D4",
                    "6\uC6D4",
                    "7\uC6D4",
                    "8\uC6D4",
                    "9\uC6D4",
                    "10\uC6D4",
                    "11\uC6D4",
                    "12\uC6D4",
                ],
                wide: [
                    "1\uC6D4",
                    "2\uC6D4",
                    "3\uC6D4",
                    "4\uC6D4",
                    "5\uC6D4",
                    "6\uC6D4",
                    "7\uC6D4",
                    "8\uC6D4",
                    "9\uC6D4",
                    "10\uC6D4",
                    "11\uC6D4",
                    "12\uC6D4",
                ],
            },
            defaultWidth: "wide",
        }),
        day: (0, d.A)({
            values: {
                narrow: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"],
                short: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"],
                abbreviated: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"],
                wide: [
                    "\uC77C\uC694\uC77C",
                    "\uC6D4\uC694\uC77C",
                    "\uD654\uC694\uC77C",
                    "\uC218\uC694\uC77C",
                    "\uBAA9\uC694\uC77C",
                    "\uAE08\uC694\uC77C",
                    "\uD1A0\uC694\uC77C",
                ],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, d.A)({
            values: {
                narrow: {
                    am: "\uC624\uC804",
                    pm: "\uC624\uD6C4",
                    midnight: "\uC790\uC815",
                    noon: "\uC815\uC624",
                    morning: "\uC544\uCE68",
                    afternoon: "\uC624\uD6C4",
                    evening: "\uC800\uB141",
                    night: "\uBC24",
                },
                abbreviated: {
                    am: "\uC624\uC804",
                    pm: "\uC624\uD6C4",
                    midnight: "\uC790\uC815",
                    noon: "\uC815\uC624",
                    morning: "\uC544\uCE68",
                    afternoon: "\uC624\uD6C4",
                    evening: "\uC800\uB141",
                    night: "\uBC24",
                },
                wide: {
                    am: "\uC624\uC804",
                    pm: "\uC624\uD6C4",
                    midnight: "\uC790\uC815",
                    noon: "\uC815\uC624",
                    morning: "\uC544\uCE68",
                    afternoon: "\uC624\uD6C4",
                    evening: "\uC800\uB141",
                    night: "\uBC24",
                },
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: {
                    am: "\uC624\uC804",
                    pm: "\uC624\uD6C4",
                    midnight: "\uC790\uC815",
                    noon: "\uC815\uC624",
                    morning: "\uC544\uCE68",
                    afternoon: "\uC624\uD6C4",
                    evening: "\uC800\uB141",
                    night: "\uBC24",
                },
                abbreviated: {
                    am: "\uC624\uC804",
                    pm: "\uC624\uD6C4",
                    midnight: "\uC790\uC815",
                    noon: "\uC815\uC624",
                    morning: "\uC544\uCE68",
                    afternoon: "\uC624\uD6C4",
                    evening: "\uC800\uB141",
                    night: "\uBC24",
                },
                wide: {
                    am: "\uC624\uC804",
                    pm: "\uC624\uD6C4",
                    midnight: "\uC790\uC815",
                    noon: "\uC815\uC624",
                    morning: "\uC544\uCE68",
                    afternoon: "\uC624\uD6C4",
                    evening: "\uC800\uB141",
                    night: "\uBC24",
                },
            },
            defaultFormattingWidth: "wide",
        }),
    },
    u = n(303527);
let h = {
    code: "ko",
    formatDistance: function (e, t, n) {
        var r,
            i = a[e];
        if (
            ((r = "string" == typeof i ? i : 1 === t ? i.one : i.other.replace("{{count}}", t.toString())),
            null != n && n.addSuffix)
        )
            if (n.comparison && n.comparison > 0) return r + " \uD6C4";
            else return r + " \uC804";
        return r;
    },
    formatLong: i,
    formatRelative: function (e, t, n, a) {
        return o[e];
    },
    localize: s,
    match: {
        ordinalNumber: (0, n(722023).A)({
            matchPattern: /^(\d+)(\uc77c|\ubc88\uc9f8)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
                return parseInt(e, 10);
            },
        }),
        era: (0, u.A)({
            matchPatterns: {
                narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                wide: /^(\uae30\uc6d0\uc804|\uc11c\uae30)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^(bc|\uae30\uc6d0\uc804)/i, /^(ad|\uc11c\uae30)/i] },
            defaultParseWidth: "any",
        }),
        quarter: (0, u.A)({
            matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234]\uc0ac?\ubd84\uae30/i },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
                return e + 1;
            },
        }),
        month: (0, u.A)({
            matchPatterns: {
                narrow: /^(1[012]|[123456789])/,
                abbreviated: /^(1[012]|[123456789])\uc6d4/i,
                wide: /^(1[012]|[123456789])\uc6d4/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^1\uc6d4?$/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/] },
            defaultParseWidth: "any",
        }),
        day: (0, u.A)({
            matchPatterns: {
                narrow: /^[\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0]/,
                short: /^[\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0]/,
                abbreviated: /^[\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0]/,
                wide: /^[\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0]\uc694\uc77c/,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^\uc77c/, /^\uc6d4/, /^\ud654/, /^\uc218/, /^\ubaa9/, /^\uae08/, /^\ud1a0/] },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, u.A)({
            matchPatterns: {
                any: /^(am|pm|\uc624\uc804|\uc624\ud6c4|\uc790\uc815|\uc815\uc624|\uc544\uce68|\uc800\ub141|\ubc24)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
                any: {
                    am: /^(am|\uc624\uc804)/i,
                    pm: /^(pm|\uc624\ud6c4)/i,
                    midnight: /^\uc790\uc815/i,
                    noon: /^\uc815\uc624/i,
                    morning: /^\uc544\uce68/i,
                    afternoon: /^\uc624\ud6c4/i,
                    evening: /^\uc800\ub141/i,
                    night: /^\ubc24/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
};
