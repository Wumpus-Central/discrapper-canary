a.r(t), a.d(t, { default: () => h });
var i = {
        lessThanXSeconds: {
            one: "\u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC \u03AD\u03BD\u03B1 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03BF",
            other: "\u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC {{count}} \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1",
        },
        xSeconds: {
            one: "1 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03BF",
            other: "{{count}} \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1",
        },
        halfAMinute: "\u03BC\u03B9\u03C3\u03CC \u03BB\u03B5\u03C0\u03C4\u03CC",
        lessThanXMinutes: {
            one: "\u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC \u03AD\u03BD\u03B1 \u03BB\u03B5\u03C0\u03C4\u03CC",
            other: "\u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC {{count}} \u03BB\u03B5\u03C0\u03C4\u03AC",
        },
        xMinutes: { one: "1 \u03BB\u03B5\u03C0\u03C4\u03CC", other: "{{count}} \u03BB\u03B5\u03C0\u03C4\u03AC" },
        aboutXHours: {
            one: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 1 \u03CE\u03C1\u03B1",
            other: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 {{count}} \u03CE\u03C1\u03B5\u03C2",
        },
        xHours: { one: "1 \u03CE\u03C1\u03B1", other: "{{count}} \u03CE\u03C1\u03B5\u03C2" },
        xDays: { one: "1 \u03B7\u03BC\u03AD\u03C1\u03B1", other: "{{count}} \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2" },
        aboutXWeeks: {
            one: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 1 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1",
            other: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 {{count}} \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2",
        },
        xWeeks: {
            one: "1 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1",
            other: "{{count}} \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2",
        },
        aboutXMonths: {
            one: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 1 \u03BC\u03AE\u03BD\u03B1\u03C2",
            other: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 {{count}} \u03BC\u03AE\u03BD\u03B5\u03C2",
        },
        xMonths: { one: "1 \u03BC\u03AE\u03BD\u03B1\u03C2", other: "{{count}} \u03BC\u03AE\u03BD\u03B5\u03C2" },
        aboutXYears: {
            one: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 1 \u03C7\u03C1\u03CC\u03BD\u03BF",
            other: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 {{count}} \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1",
        },
        xYears: { one: "1 \u03C7\u03C1\u03CC\u03BD\u03BF", other: "{{count}} \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1" },
        overXYears: {
            one: "\u03C0\u03AC\u03BD\u03C9 \u03B1\u03C0\u03CC 1 \u03C7\u03C1\u03CC\u03BD\u03BF",
            other: "\u03C0\u03AC\u03BD\u03C9 \u03B1\u03C0\u03CC {{count}} \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1",
        },
        almostXYears: {
            one: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 1 \u03C7\u03C1\u03CC\u03BD\u03BF",
            other: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 {{count}} \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1",
        },
    },
    n = a(385987),
    r = {
        date: (0, n.A)({
            formats: { full: "EEEE, d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "d/M/yy" },
            defaultWidth: "full",
        }),
        time: (0, n.A)({
            formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" },
            defaultWidth: "full",
        }),
        dateTime: (0, n.A)({
            formats: {
                full: "{{date}} - {{time}}",
                long: "{{date}} - {{time}}",
                medium: "{{date}}, {{time}}",
                short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    o = {
        lastWeek: function (e) {
            return 6 === e.getUTCDay()
                ? "'\u03C4\u03BF \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF' eeee '\u03C3\u03C4\u03B9\u03C2' p"
                : "'\u03C4\u03B7\u03BD \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03B7' eeee '\u03C3\u03C4\u03B9\u03C2' p";
        },
        yesterday: "'\u03C7\u03B8\u03B5\u03C2 \u03C3\u03C4\u03B9\u03C2' p",
        today: "'\u03C3\u03AE\u03BC\u03B5\u03C1\u03B1 \u03C3\u03C4\u03B9\u03C2' p",
        tomorrow: "'\u03B1\u03CD\u03C1\u03B9\u03BF \u03C3\u03C4\u03B9\u03C2' p",
        nextWeek: "eeee '\u03C3\u03C4\u03B9\u03C2' p",
        other: "P",
    },
    d = a(981737),
    u = {
        ordinalNumber: function (e, t) {
            var a = Number(e),
                i = null == t ? void 0 : t.unit;
            return (
                a +
                ("year" === i || "month" === i
                    ? "\u03BF\u03C2"
                    : "week" === i || "dayOfYear" === i || "day" === i || "hour" === i || "date" === i
                      ? "\u03B7"
                      : "\u03BF")
            );
        },
        era: (0, d.A)({
            values: {
                narrow: ["\u03C0\u03A7", "\u03BC\u03A7"],
                abbreviated: ["\u03C0.\u03A7.", "\u03BC.\u03A7."],
                wide: [
                    "\u03C0\u03C1\u03BF \u03A7\u03C1\u03B9\u03C3\u03C4\u03BF\u03CD",
                    "\u03BC\u03B5\u03C4\u03AC \u03A7\u03C1\u03B9\u03C3\u03C4\u03CC\u03BD",
                ],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, d.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["\u03A41", "\u03A42", "\u03A43", "\u03A44"],
                wide: [
                    "1\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF",
                    "2\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF",
                    "3\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF",
                    "4\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF",
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
                    "\u0399",
                    "\u03A6",
                    "\u039C",
                    "\u0391",
                    "\u039C",
                    "\u0399",
                    "\u0399",
                    "\u0391",
                    "\u03A3",
                    "\u039F",
                    "\u039D",
                    "\u0394",
                ],
                abbreviated: [
                    "\u0399\u03B1\u03BD",
                    "\u03A6\u03B5\u03B2",
                    "\u039C\u03AC\u03C1",
                    "\u0391\u03C0\u03C1",
                    "\u039C\u03AC\u03B9",
                    "\u0399\u03BF\u03CD\u03BD",
                    "\u0399\u03BF\u03CD\u03BB",
                    "\u0391\u03CD\u03B3",
                    "\u03A3\u03B5\u03C0",
                    "\u039F\u03BA\u03C4",
                    "\u039D\u03BF\u03AD",
                    "\u0394\u03B5\u03BA",
                ],
                wide: [
                    "\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2",
                    "\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2",
                    "\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2",
                    "\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2",
                    "\u039C\u03AC\u03B9\u03BF\u03C2",
                    "\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2",
                    "\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2",
                    "\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2",
                    "\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2",
                    "\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2",
                    "\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2",
                    "\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2",
                ],
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: [
                    "\u0399",
                    "\u03A6",
                    "\u039C",
                    "\u0391",
                    "\u039C",
                    "\u0399",
                    "\u0399",
                    "\u0391",
                    "\u03A3",
                    "\u039F",
                    "\u039D",
                    "\u0394",
                ],
                abbreviated: [
                    "\u0399\u03B1\u03BD",
                    "\u03A6\u03B5\u03B2",
                    "\u039C\u03B1\u03C1",
                    "\u0391\u03C0\u03C1",
                    "\u039C\u03B1\u0390",
                    "\u0399\u03BF\u03C5\u03BD",
                    "\u0399\u03BF\u03C5\u03BB",
                    "\u0391\u03C5\u03B3",
                    "\u03A3\u03B5\u03C0",
                    "\u039F\u03BA\u03C4",
                    "\u039D\u03BF\u03B5",
                    "\u0394\u03B5\u03BA",
                ],
                wide: [
                    "\u0399\u03B1\u03BD\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5",
                    "\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5",
                    "\u039C\u03B1\u03C1\u03C4\u03AF\u03BF\u03C5",
                    "\u0391\u03C0\u03C1\u03B9\u03BB\u03AF\u03BF\u03C5",
                    "\u039C\u03B1\u0390\u03BF\u03C5",
                    "\u0399\u03BF\u03C5\u03BD\u03AF\u03BF\u03C5",
                    "\u0399\u03BF\u03C5\u03BB\u03AF\u03BF\u03C5",
                    "\u0391\u03C5\u03B3\u03BF\u03CD\u03C3\u03C4\u03BF\u03C5",
                    "\u03A3\u03B5\u03C0\u03C4\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5",
                    "\u039F\u03BA\u03C4\u03C9\u03B2\u03C1\u03AF\u03BF\u03C5",
                    "\u039D\u03BF\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5",
                    "\u0394\u03B5\u03BA\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5",
                ],
            },
            defaultFormattingWidth: "wide",
        }),
        day: (0, d.A)({
            values: {
                narrow: ["\u039A", "\u0394", "T", "\u03A4", "\u03A0", "\u03A0", "\u03A3"],
                short: [
                    "\u039A\u03C5",
                    "\u0394\u03B5",
                    "\u03A4\u03C1",
                    "\u03A4\u03B5",
                    "\u03A0\u03AD",
                    "\u03A0\u03B1",
                    "\u03A3\u03AC",
                ],
                abbreviated: [
                    "\u039A\u03C5\u03C1",
                    "\u0394\u03B5\u03C5",
                    "\u03A4\u03C1\u03AF",
                    "\u03A4\u03B5\u03C4",
                    "\u03A0\u03AD\u03BC",
                    "\u03A0\u03B1\u03C1",
                    "\u03A3\u03AC\u03B2",
                ],
                wide: [
                    "\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE",
                    "\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1",
                    "\u03A4\u03C1\u03AF\u03C4\u03B7",
                    "\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7",
                    "\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7",
                    "\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE",
                    "\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF",
                ],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, d.A)({
            values: {
                narrow: {
                    am: "\u03C0\u03BC",
                    pm: "\u03BC\u03BC",
                    midnight: "\u03BC\u03B5\u03C3\u03AC\u03BD\u03C5\u03C7\u03C4\u03B1",
                    noon: "\u03BC\u03B5\u03C3\u03B7\u03BC\u03AD\u03C1\u03B9",
                    morning: "\u03C0\u03C1\u03C9\u03AF",
                    afternoon: "\u03B1\u03C0\u03CC\u03B3\u03B5\u03C5\u03BC\u03B1",
                    evening: "\u03B2\u03C1\u03AC\u03B4\u03C5",
                    night: "\u03BD\u03CD\u03C7\u03C4\u03B1",
                },
                abbreviated: {
                    am: "\u03C0.\u03BC.",
                    pm: "\u03BC.\u03BC.",
                    midnight: "\u03BC\u03B5\u03C3\u03AC\u03BD\u03C5\u03C7\u03C4\u03B1",
                    noon: "\u03BC\u03B5\u03C3\u03B7\u03BC\u03AD\u03C1\u03B9",
                    morning: "\u03C0\u03C1\u03C9\u03AF",
                    afternoon: "\u03B1\u03C0\u03CC\u03B3\u03B5\u03C5\u03BC\u03B1",
                    evening: "\u03B2\u03C1\u03AC\u03B4\u03C5",
                    night: "\u03BD\u03CD\u03C7\u03C4\u03B1",
                },
                wide: {
                    am: "\u03C0.\u03BC.",
                    pm: "\u03BC.\u03BC.",
                    midnight: "\u03BC\u03B5\u03C3\u03AC\u03BD\u03C5\u03C7\u03C4\u03B1",
                    noon: "\u03BC\u03B5\u03C3\u03B7\u03BC\u03AD\u03C1\u03B9",
                    morning: "\u03C0\u03C1\u03C9\u03AF",
                    afternoon: "\u03B1\u03C0\u03CC\u03B3\u03B5\u03C5\u03BC\u03B1",
                    evening: "\u03B2\u03C1\u03AC\u03B4\u03C5",
                    night: "\u03BD\u03CD\u03C7\u03C4\u03B1",
                },
            },
            defaultWidth: "wide",
        }),
    },
    s = a(303527);
let h = {
    code: "el",
    formatDistance: function (e, t, a) {
        var n,
            r = i[e];
        if (
            ((n = "string" == typeof r ? r : 1 === t ? r.one : r.other.replace("{{count}}", String(t))),
            null != a && a.addSuffix)
        )
            if (a.comparison && a.comparison > 0) return "\u03C3\u03B5 " + n;
            else return n + " \u03C0\u03C1\u03B9\u03BD";
        return n;
    },
    formatLong: r,
    formatRelative: function (e, t) {
        var a = o[e];
        return "function" == typeof a ? a(t) : a;
    },
    localize: u,
    match: {
        ordinalNumber: (0, a(722023).A)({
            matchPattern: /^(\d+)(\u03bf\u03c2|\u03b7|\u03bf)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
                return parseInt(e, 10);
            },
        }),
        era: (0, s.A)({
            matchPatterns: {
                narrow: /^(\u03c0\u03a7|\u03bc\u03a7)/i,
                abbreviated:
                    /^(\u03c0\.?\s?\u03c7\.?|\u03c0\.?\s?\u03ba\.?\s?\u03c7\.?|\u03bc\.?\s?\u03c7\.?|\u03ba\.?\s?\u03c7\.?)/i,
                wide: /^(\u03c0\u03c1\u03bf \u03a7\u03c1\u03b9\u03c3\u03c4\u03bf(\u03cd|\u03c5)|\u03c0\u03c1\u03b9\u03bd \u03b1\u03c0(\u03cc|\u03bf) \u03c4\u03b7\u03bd \u039a\u03bf\u03b9\u03bd(\u03ae|\u03b7) \u03a7\u03c1\u03bf\u03bd\u03bf\u03bb\u03bf\u03b3(\u03af|\u03b9)\u03b1|\u03bc\u03b5\u03c4(\u03ac|\u03b1) \u03a7\u03c1\u03b9\u03c3\u03c4(\u03cc|\u03bf)\u03bd|\u039a\u03bf\u03b9\u03bd(\u03ae|\u03b7) \u03a7\u03c1\u03bf\u03bd\u03bf\u03bb\u03bf\u03b3(\u03af|\u03b9)\u03b1)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^\u03c0/i, /^(\u03bc|\u03ba)/i] },
            defaultParseWidth: "any",
        }),
        quarter: (0, s.A)({
            matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^\u03c4[1234]/i,
                wide: /^[1234]\u03bf? \u03c4\u03c1(\u03af|\u03b9)\u03bc\u03b7\u03bd\u03bf/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
                return e + 1;
            },
        }),
        month: (0, s.A)({
            matchPatterns: {
                narrow: /^[\u03b9\u03c6\u03bc\u03b1\u03bc\u03b9\u03b9\u03b1\u03c3\u03bf\u03bd\u03b4]/i,
                abbreviated:
                    /^(\u03b9\u03b1\u03bd|\u03c6\u03b5\u03b2|\u03bc[\u03ac\u03b1]\u03c1|\u03b1\u03c0\u03c1|\u03bc[\u03ac\u03b1][\u03b9\u0390]|\u03b9\u03bf[\u03cd\u03c5]\u03bd|\u03b9\u03bf[\u03cd\u03c5]\u03bb|\u03b1[\u03cd\u03c5]\u03b3|\u03c3\u03b5\u03c0|\u03bf\u03ba\u03c4|\u03bd\u03bf[\u03ad\u03b5]|\u03b4\u03b5\u03ba)/i,
                wide: /^(\u03bc[\u03ac\u03b1][\u03b9\u0390]|\u03b1[\u03cd\u03c5]\u03b3\u03bf[\u03c5\u03cd]\u03c3\u03c4)(\u03bf\u03c2|\u03bf\u03c5)|(\u03b9\u03b1\u03bd\u03bf\u03c5[\u03ac\u03b1]\u03c1|\u03c6\u03b5\u03b2\u03c1\u03bf\u03c5[\u03ac\u03b1]\u03c1|\u03bc[\u03ac\u03b1]\u03c1\u03c4|\u03b1\u03c0\u03c1[\u03af\u03b9]\u03bb|\u03b9\u03bf[\u03cd\u03c5]\u03bd|\u03b9\u03bf[\u03cd\u03c5]\u03bb|\u03c3\u03b5\u03c0\u03c4[\u03ad\u03b5]\u03bc\u03b2\u03c1|\u03bf\u03ba\u03c4[\u03ce\u03c9]\u03b2\u03c1|\u03bd\u03bf[\u03ad\u03b5]\u03bc\u03b2\u03c1|\u03b4\u03b5\u03ba[\u03ad\u03b5]\u03bc\u03b2\u03c1)(\u03b9\u03bf\u03c2|\u03af\u03bf\u03c5)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [
                    /^\u03b9/i,
                    /^\u03c6/i,
                    /^\u03bc/i,
                    /^\u03b1/i,
                    /^\u03bc/i,
                    /^\u03b9/i,
                    /^\u03b9/i,
                    /^\u03b1/i,
                    /^\u03c3/i,
                    /^\u03bf/i,
                    /^\u03bd/i,
                    /^\u03b4/i,
                ],
                any: [
                    /^\u03b9\u03b1/i,
                    /^\u03c6/i,
                    /^\u03bc[\u03ac\u03b1]\u03c1/i,
                    /^\u03b1\u03c0/i,
                    /^\u03bc[\u03ac\u03b1][\u03b9\u0390]/i,
                    /^\u03b9\u03bf[\u03cd\u03c5]\u03bd/i,
                    /^\u03b9\u03bf[\u03cd\u03c5]\u03bb/i,
                    /^\u03b1[\u03cd\u03c5]/i,
                    /^\u03c3/i,
                    /^\u03bf/i,
                    /^\u03bd/i,
                    /^\u03b4/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        day: (0, s.A)({
            matchPatterns: {
                narrow: /^[\u03ba\u03b4\u03c4\u03c0\u03c3]/i,
                short: /^(\u03ba\u03c5|\u03b4\u03b5|\u03c4\u03c1|\u03c4\u03b5|\u03c0[\u03b5\u03ad]|\u03c0[\u03b1\u03ac]|\u03c3[\u03b1\u03ac])/i,
                abbreviated:
                    /^(\u03ba\u03c5\u03c1|\u03b4\u03b5\u03c5|\u03c4\u03c1\u03b9|\u03c4\u03b5\u03c4|\u03c0\u03b5\u03bc|\u03c0\u03b1\u03c1|\u03c3\u03b1\u03b2)/i,
                wide: /^(\u03ba\u03c5\u03c1\u03b9\u03b1\u03ba(\u03ae|\u03b7)|\u03b4\u03b5\u03c5\u03c4(\u03ad|\u03b5)\u03c1\u03b1|\u03c4\u03c1(\u03af|\u03b9)\u03c4\u03b7|\u03c4\u03b5\u03c4(\u03ac|\u03b1)\u03c1\u03c4\u03b7|\u03c0(\u03ad|\u03b5)\u03bc\u03c0\u03c4\u03b7|\u03c0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5(\u03ae|\u03b7)|\u03c3(\u03ac|\u03b1)\u03b2\u03b2\u03b1\u03c4\u03bf)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^\u03ba/i, /^\u03b4/i, /^\u03c4/i, /^\u03c4/i, /^\u03c0/i, /^\u03c0/i, /^\u03c3/i],
                any: [
                    /^\u03ba/i,
                    /^\u03b4/i,
                    /^\u03c4\u03c1/i,
                    /^\u03c4\u03b5/i,
                    /^\u03c0[\u03b5\u03ad]/i,
                    /^\u03c0[\u03b1\u03ac]/i,
                    /^\u03c3/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, s.A)({
            matchPatterns: {
                narrow: /^(\u03c0\u03bc|\u03bc\u03bc|\u03bc\u03b5\u03c3(\u03ac|\u03b1)\u03bd\u03c5\u03c7\u03c4\u03b1|\u03bc\u03b5\u03c3\u03b7\u03bc(\u03ad|\u03b5)\u03c1\u03b9|\u03c0\u03c1\u03c9(\u03af|\u03b9)|\u03b1\u03c0(\u03cc|\u03bf)\u03b3\u03b5\u03c5\u03bc\u03b1|\u03b2\u03c1(\u03ac|\u03b1)\u03b4\u03c5|\u03bd(\u03cd|\u03c5)\u03c7\u03c4\u03b1)/i,
                any: /^([\u03c0\u03bc]\.?\s?\u03bc\.?|\u03bc\u03b5\u03c3(\u03ac|\u03b1)\u03bd\u03c5\u03c7\u03c4\u03b1|\u03bc\u03b5\u03c3\u03b7\u03bc(\u03ad|\u03b5)\u03c1\u03b9|\u03c0\u03c1\u03c9(\u03af|\u03b9)|\u03b1\u03c0(\u03cc|\u03bf)\u03b3\u03b5\u03c5\u03bc\u03b1|\u03b2\u03c1(\u03ac|\u03b1)\u03b4\u03c5|\u03bd(\u03cd|\u03c5)\u03c7\u03c4\u03b1)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
                any: {
                    am: /^\u03c0\u03bc|\u03c0\.\s?\u03bc\./i,
                    pm: /^\u03bc\u03bc|\u03bc\.\s?\u03bc\./i,
                    midnight: /^\u03bc\u03b5\u03c3\u03ac\u03bd/i,
                    noon: /^\u03bc\u03b5\u03c3\u03b7\u03bc(\u03ad|\u03b5)/i,
                    morning: /\u03c0\u03c1\u03c9(\u03af|\u03b9)/i,
                    afternoon: /\u03b1\u03c0(\u03cc|\u03bf)\u03b3\u03b5\u03c5\u03bc\u03b1/i,
                    evening: /\u03b2\u03c1(\u03ac|\u03b1)\u03b4\u03c5/i,
                    night: /\u03bd(\u03cd|\u03c5)\u03c7\u03c4\u03b1/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
};
