i.r(t), i.d(t, { default: () => h });
var n = {
        lessThanXSeconds: {
            one: "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 1 \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",
            other: "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 {{count}} \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",
        },
        xSeconds: {
            one: "1 \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",
            other: "{{count}} \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",
        },
        halfAMinute: "\u0E04\u0E23\u0E36\u0E48\u0E07\u0E19\u0E32\u0E17\u0E35",
        lessThanXMinutes: {
            one: "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 1 \u0E19\u0E32\u0E17\u0E35",
            other: "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 {{count}} \u0E19\u0E32\u0E17\u0E35",
        },
        xMinutes: { one: "1 \u0E19\u0E32\u0E17\u0E35", other: "{{count}} \u0E19\u0E32\u0E17\u0E35" },
        aboutXHours: {
            one: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",
            other: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 {{count}} \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",
        },
        xHours: {
            one: "1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",
            other: "{{count}} \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",
        },
        xDays: { one: "1 \u0E27\u0E31\u0E19", other: "{{count}} \u0E27\u0E31\u0E19" },
        aboutXWeeks: {
            one: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 1 \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C",
            other: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 {{count}} \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C",
        },
        xWeeks: {
            one: "1 \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C",
            other: "{{count}} \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C",
        },
        aboutXMonths: {
            one: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 1 \u0E40\u0E14\u0E37\u0E2D\u0E19",
            other: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 {{count}} \u0E40\u0E14\u0E37\u0E2D\u0E19",
        },
        xMonths: { one: "1 \u0E40\u0E14\u0E37\u0E2D\u0E19", other: "{{count}} \u0E40\u0E14\u0E37\u0E2D\u0E19" },
        aboutXYears: {
            one: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 1 \u0E1B\u0E35",
            other: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 {{count}} \u0E1B\u0E35",
        },
        xYears: { one: "1 \u0E1B\u0E35", other: "{{count}} \u0E1B\u0E35" },
        overXYears: {
            one: "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 1 \u0E1B\u0E35",
            other: "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 {{count}} \u0E1B\u0E35",
        },
        almostXYears: {
            one: "\u0E40\u0E01\u0E37\u0E2D\u0E1A 1 \u0E1B\u0E35",
            other: "\u0E40\u0E01\u0E37\u0E2D\u0E1A {{count}} \u0E1B\u0E35",
        },
    },
    a = i(385987),
    o = {
        date: (0, a.A)({
            formats: {
                full: "\u0E27\u0E31\u0E19EEEE\u0E17\u0E35\u0E48 do MMMM y",
                long: "do MMMM y",
                medium: "d MMM y",
                short: "dd/MM/yyyy",
            },
            defaultWidth: "full",
        }),
        time: (0, a.A)({
            formats: {
                full: "H:mm:ss \u0E19. zzzz",
                long: "H:mm:ss \u0E19. z",
                medium: "H:mm:ss \u0E19.",
                short: "H:mm \u0E19.",
            },
            defaultWidth: "medium",
        }),
        dateTime: (0, a.A)({
            formats: {
                full: "{{date}} '\u0E40\u0E27\u0E25\u0E32' {{time}}",
                long: "{{date}} '\u0E40\u0E27\u0E25\u0E32' {{time}}",
                medium: "{{date}}, {{time}}",
                short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    r = {
        lastWeek: "eeee'\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27\u0E40\u0E27\u0E25\u0E32' p",
        yesterday: "'\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E19\u0E19\u0E35\u0E49\u0E40\u0E27\u0E25\u0E32' p",
        today: "'\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49\u0E40\u0E27\u0E25\u0E32' p",
        tomorrow: "'\u0E1E\u0E23\u0E38\u0E48\u0E07\u0E19\u0E35\u0E49\u0E40\u0E27\u0E25\u0E32' p",
        nextWeek: "eeee '\u0E40\u0E27\u0E25\u0E32' p",
        other: "P",
    },
    d = i(981737),
    u = {
        ordinalNumber: function (e, t) {
            return String(e);
        },
        era: (0, d.A)({
            values: {
                narrow: ["B", "\u0E04\u0E28"],
                abbreviated: ["BC", "\u0E04.\u0E28."],
                wide: [
                    "\u0E1B\u0E35\u0E01\u0E48\u0E2D\u0E19\u0E04\u0E23\u0E34\u0E2A\u0E15\u0E01\u0E32\u0E25",
                    "\u0E04\u0E23\u0E34\u0E2A\u0E15\u0E4C\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A",
                ],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, d.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                wide: [
                    "\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A\u0E41\u0E23\u0E01",
                    "\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A\u0E17\u0E35\u0E48\u0E2A\u0E2D\u0E07",
                    "\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21",
                    "\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A\u0E17\u0E35\u0E48\u0E2A\u0E35\u0E48",
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
                    "\u0E21.\u0E04.",
                    "\u0E01.\u0E1E.",
                    "\u0E21\u0E35.\u0E04.",
                    "\u0E40\u0E21.\u0E22.",
                    "\u0E1E.\u0E04.",
                    "\u0E21\u0E34.\u0E22.",
                    "\u0E01.\u0E04.",
                    "\u0E2A.\u0E04.",
                    "\u0E01.\u0E22.",
                    "\u0E15.\u0E04.",
                    "\u0E1E.\u0E22.",
                    "\u0E18.\u0E04.",
                ],
                abbreviated: [
                    "\u0E21.\u0E04.",
                    "\u0E01.\u0E1E.",
                    "\u0E21\u0E35.\u0E04.",
                    "\u0E40\u0E21.\u0E22.",
                    "\u0E1E.\u0E04.",
                    "\u0E21\u0E34.\u0E22.",
                    "\u0E01.\u0E04.",
                    "\u0E2A.\u0E04.",
                    "\u0E01.\u0E22.",
                    "\u0E15.\u0E04.",
                    "\u0E1E.\u0E22.",
                    "\u0E18.\u0E04.",
                ],
                wide: [
                    "\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21",
                    "\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C",
                    "\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21",
                    "\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19",
                    "\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21",
                    "\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19",
                    "\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21",
                    "\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21",
                    "\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19",
                    "\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21",
                    "\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19",
                    "\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21",
                ],
            },
            defaultWidth: "wide",
        }),
        day: (0, d.A)({
            values: {
                narrow: ["\u0E2D\u0E32.", "\u0E08.", "\u0E2D.", "\u0E1E.", "\u0E1E\u0E24.", "\u0E28.", "\u0E2A."],
                short: ["\u0E2D\u0E32.", "\u0E08.", "\u0E2D.", "\u0E1E.", "\u0E1E\u0E24.", "\u0E28.", "\u0E2A."],
                abbreviated: ["\u0E2D\u0E32.", "\u0E08.", "\u0E2D.", "\u0E1E.", "\u0E1E\u0E24.", "\u0E28.", "\u0E2A."],
                wide: [
                    "\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C",
                    "\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C",
                    "\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23",
                    "\u0E1E\u0E38\u0E18",
                    "\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35",
                    "\u0E28\u0E38\u0E01\u0E23\u0E4C",
                    "\u0E40\u0E2A\u0E32\u0E23\u0E4C",
                ],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, d.A)({
            values: {
                narrow: {
                    am: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
                    pm: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
                    midnight: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E04\u0E37\u0E19",
                    noon: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
                    morning: "\u0E40\u0E0A\u0E49\u0E32",
                    afternoon: "\u0E1A\u0E48\u0E32\u0E22",
                    evening: "\u0E40\u0E22\u0E47\u0E19",
                    night: "\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19",
                },
                abbreviated: {
                    am: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
                    pm: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
                    midnight: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E04\u0E37\u0E19",
                    noon: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
                    morning: "\u0E40\u0E0A\u0E49\u0E32",
                    afternoon: "\u0E1A\u0E48\u0E32\u0E22",
                    evening: "\u0E40\u0E22\u0E47\u0E19",
                    night: "\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19",
                },
                wide: {
                    am: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
                    pm: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
                    midnight: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E04\u0E37\u0E19",
                    noon: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
                    morning: "\u0E40\u0E0A\u0E49\u0E32",
                    afternoon: "\u0E1A\u0E48\u0E32\u0E22",
                    evening: "\u0E40\u0E22\u0E47\u0E19",
                    night: "\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19",
                },
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: {
                    am: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
                    pm: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
                    midnight: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E04\u0E37\u0E19",
                    noon: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
                    morning: "\u0E15\u0E2D\u0E19\u0E40\u0E0A\u0E49\u0E32",
                    afternoon: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E27\u0E31\u0E19",
                    evening: "\u0E15\u0E2D\u0E19\u0E40\u0E22\u0E47\u0E19",
                    night: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19",
                },
                abbreviated: {
                    am: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
                    pm: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
                    midnight: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E04\u0E37\u0E19",
                    noon: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
                    morning: "\u0E15\u0E2D\u0E19\u0E40\u0E0A\u0E49\u0E32",
                    afternoon: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E27\u0E31\u0E19",
                    evening: "\u0E15\u0E2D\u0E19\u0E40\u0E22\u0E47\u0E19",
                    night: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19",
                },
                wide: {
                    am: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
                    pm: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
                    midnight: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E04\u0E37\u0E19",
                    noon: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
                    morning: "\u0E15\u0E2D\u0E19\u0E40\u0E0A\u0E49\u0E32",
                    afternoon: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E27\u0E31\u0E19",
                    evening: "\u0E15\u0E2D\u0E19\u0E40\u0E22\u0E47\u0E19",
                    night: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19",
                },
            },
            defaultFormattingWidth: "wide",
        }),
    },
    s = i(303527);
let h = {
    code: "th",
    formatDistance: function (e, t, i) {
        var a,
            o = n[e];
        if (
            ((a = "string" == typeof o ? o : 1 === t ? o.one : o.other.replace("{{count}}", String(t))),
            null != i && i.addSuffix)
        )
            if (!i.comparison || !(i.comparison > 0))
                return a + "\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E21\u0E32";
            else if ("halfAMinute" === e) return "\u0E43\u0E19" + a;
            else return "\u0E43\u0E19 " + a;
        return a;
    },
    formatLong: o,
    formatRelative: function (e, t, i, n) {
        return r[e];
    },
    localize: u,
    match: {
        ordinalNumber: (0, i(722023).A)({
            matchPattern: /^\d+/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
                return parseInt(e, 10);
            },
        }),
        era: (0, s.A)({
            matchPatterns: {
                narrow: /^([bB]|[aA]|\u0e04\u0e28)/i,
                abbreviated: /^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|\u0e04\.?\u0e28\.?)/i,
                wide: /^(\u0e01\u0e48\u0e2d\u0e19\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e01\u0e32\u0e25|\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e4c\u0e28\u0e31\u0e01\u0e23\u0e32\u0e0a|\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e01\u0e32\u0e25)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                any: [
                    /^[bB]/i,
                    /^(^[aA]|\u0e04\.?\u0e28\.?|\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e01\u0e32\u0e25|\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e4c\u0e28\u0e31\u0e01\u0e23\u0e32\u0e0a|)/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        quarter: (0, s.A)({
            matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^q[1234]/i,
                wide: /^\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a(\u0e17\u0e35\u0e48)? ?[1234]/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                any: [
                    /(1|\u0e41\u0e23\u0e01|\u0e2b\u0e19\u0e36\u0e48\u0e07)/i,
                    /(2|\u0e2a\u0e2d\u0e07)/i,
                    /(3|\u0e2a\u0e32\u0e21)/i,
                    /(4|\u0e2a\u0e35\u0e48)/i,
                ],
            },
            defaultParseWidth: "any",
            valueCallback: function (e) {
                return e + 1;
            },
        }),
        month: (0, s.A)({
            matchPatterns: {
                narrow: /^(\u0e21\.?\u0e04\.?|\u0e01\.?\u0e1e\.?|\u0e21\u0e35\.?\u0e04\.?|\u0e40\u0e21\.?\u0e22\.?|\u0e1e\.?\u0e04\.?|\u0e21\u0e34\.?\u0e22\.?|\u0e01\.?\u0e04\.?|\u0e2a\.?\u0e04\.?|\u0e01\.?\u0e22\.?|\u0e15\.?\u0e04\.?|\u0e1e\.?\u0e22\.?|\u0e18\.?\u0e04\.?)/i,
                abbreviated:
                    /^(\u0e21\.?\u0e04\.?|\u0e01\.?\u0e1e\.?|\u0e21\u0e35\.?\u0e04\.?|\u0e40\u0e21\.?\u0e22\.?|\u0e1e\.?\u0e04\.?|\u0e21\u0e34\.?\u0e22\.?|\u0e01\.?\u0e04\.?|\u0e2a\.?\u0e04\.?|\u0e01\.?\u0e22\.?|\u0e15\.?\u0e04\.?|\u0e1e\.?\u0e22\.?|\u0e18\.?\u0e04\.?')/i,
                wide: /^(\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21|\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c|\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21|\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19|\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21|\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19|\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21|\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21|\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19|\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21|\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19|\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                wide: [
                    /^\u0e21\u0e01/i,
                    /^\u0e01\u0e38\u0e21/i,
                    /^\u0e21\u0e35/i,
                    /^\u0e40\u0e21/i,
                    /^\u0e1e\u0e24\u0e29/i,
                    /^\u0e21\u0e34/i,
                    /^\u0e01\u0e23\u0e01/i,
                    /^\u0e2a/i,
                    /^\u0e01\u0e31\u0e19/i,
                    /^\u0e15/i,
                    /^\u0e1e\u0e24\u0e28/i,
                    /^\u0e18/i,
                ],
                any: [
                    /^\u0e21\.?\u0e04\.?/i,
                    /^\u0e01\.?\u0e1e\.?/i,
                    /^\u0e21\u0e35\.?\u0e04\.?/i,
                    /^\u0e40\u0e21\.?\u0e22\.?/i,
                    /^\u0e1e\.?\u0e04\.?/i,
                    /^\u0e21\u0e34\.?\u0e22\.?/i,
                    /^\u0e01\.?\u0e04\.?/i,
                    /^\u0e2a\.?\u0e04\.?/i,
                    /^\u0e01\.?\u0e22\.?/i,
                    /^\u0e15\.?\u0e04\.?/i,
                    /^\u0e1e\.?\u0e22\.?/i,
                    /^\u0e18\.?\u0e04\.?/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        day: (0, s.A)({
            matchPatterns: {
                narrow: /^(\u0e2d\u0e32\.?|\u0e08\.?|\u0e2d\.?|\u0e1e\u0e24\.?|\u0e1e\.?|\u0e28\.?|\u0e2a\.?)/i,
                short: /^(\u0e2d\u0e32\.?|\u0e08\.?|\u0e2d\.?|\u0e1e\u0e24\.?|\u0e1e\.?|\u0e28\.?|\u0e2a\.?)/i,
                abbreviated: /^(\u0e2d\u0e32\.?|\u0e08\.?|\u0e2d\.?|\u0e1e\u0e24\.?|\u0e1e\.?|\u0e28\.?|\u0e2a\.?)/i,
                wide: /^(\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c|\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c|\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23|\u0e1e\u0e38\u0e18|\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35|\u0e28\u0e38\u0e01\u0e23\u0e4c|\u0e40\u0e2a\u0e32\u0e23\u0e4c)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                wide: [
                    /^\u0e2d\u0e32/i,
                    /^\u0e08\u0e31/i,
                    /^\u0e2d\u0e31/i,
                    /^\u0e1e\u0e38\u0e18/i,
                    /^\u0e1e\u0e24/i,
                    /^\u0e28/i,
                    /^\u0e40\u0e2a/i,
                ],
                any: [
                    /^\u0e2d\u0e32/i,
                    /^\u0e08/i,
                    /^\u0e2d/i,
                    /^\u0e1e(?!\u0e24)/i,
                    /^\u0e1e\u0e24/i,
                    /^\u0e28/i,
                    /^\u0e2a/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, s.A)({
            matchPatterns: {
                any: /^(\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07\u0e04\u0e37\u0e19|\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|(\u0e15\u0e2d\u0e19.*?)?.*(\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e40\u0e0a\u0e49\u0e32|\u0e1a\u0e48\u0e32\u0e22|\u0e40\u0e22\u0e47\u0e19|\u0e01\u0e25\u0e32\u0e07\u0e04\u0e37\u0e19))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
                any: {
                    am: /^\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/i,
                    pm: /^\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/i,
                    midnight: /^\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07\u0e04\u0e37\u0e19/i,
                    noon: /^\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/i,
                    morning: /\u0e40\u0e0a\u0e49\u0e32/i,
                    afternoon: /\u0e1a\u0e48\u0e32\u0e22/i,
                    evening: /\u0e40\u0e22\u0e47\u0e19/i,
                    night: /\u0e01\u0e25\u0e32\u0e07\u0e04\u0e37\u0e19/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
};
