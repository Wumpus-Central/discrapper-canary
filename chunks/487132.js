n.r(t), n.d(t, { default: () => c });
var i = n(981737),
    a = {
        1: "\u0967",
        2: "\u0968",
        3: "\u0969",
        4: "\u096A",
        5: "\u096B",
        6: "\u096C",
        7: "\u096D",
        8: "\u096E",
        9: "\u096F",
        0: "\u0966",
    },
    r = {
        "\u0967": "1",
        "\u0968": "2",
        "\u0969": "3",
        "\u096A": "4",
        "\u096B": "5",
        "\u096C": "6",
        "\u096D": "7",
        "\u096E": "8",
        "\u096F": "9",
        "\u0966": "0",
    };
function o(e) {
    return e.toString().replace(/\d/g, function (e) {
        return a[e];
    });
}
var d = {
        ordinalNumber: function (e, t) {
            return o(Number(e));
        },
        era: (0, i.A)({
            values: {
                narrow: ["\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u094D\u0935\u0940"],
                abbreviated: ["\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u094D\u0935\u0940"],
                wide: ["\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u0935\u0940 \u0938\u0928"],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, i.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["\u0924\u093F1", "\u0924\u093F2", "\u0924\u093F3", "\u0924\u093F4"],
                wide: [
                    "\u092A\u0939\u0932\u0940 \u0924\u093F\u092E\u093E\u0939\u0940",
                    "\u0926\u0942\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940",
                    "\u0924\u0940\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940",
                    "\u091A\u094C\u0925\u0940 \u0924\u093F\u092E\u093E\u0939\u0940",
                ],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
                return e - 1;
            },
        }),
        month: (0, i.A)({
            values: {
                narrow: [
                    "\u091C",
                    "\u092B\u093C",
                    "\u092E\u093E",
                    "\u0905",
                    "\u092E\u0908",
                    "\u091C\u0942",
                    "\u091C\u0941",
                    "\u0905\u0917",
                    "\u0938\u093F",
                    "\u0905\u0915\u094D\u091F\u0942",
                    "\u0928",
                    "\u0926\u093F",
                ],
                abbreviated: [
                    "\u091C\u0928",
                    "\u092B\u093C\u0930",
                    "\u092E\u093E\u0930\u094D\u091A",
                    "\u0905\u092A\u094D\u0930\u0948\u0932",
                    "\u092E\u0908",
                    "\u091C\u0942\u0928",
                    "\u091C\u0941\u0932",
                    "\u0905\u0917",
                    "\u0938\u093F\u0924",
                    "\u0905\u0915\u094D\u091F\u0942",
                    "\u0928\u0935",
                    "\u0926\u093F\u0938",
                ],
                wide: [
                    "\u091C\u0928\u0935\u0930\u0940",
                    "\u092B\u093C\u0930\u0935\u0930\u0940",
                    "\u092E\u093E\u0930\u094D\u091A",
                    "\u0905\u092A\u094D\u0930\u0948\u0932",
                    "\u092E\u0908",
                    "\u091C\u0942\u0928",
                    "\u091C\u0941\u0932\u093E\u0908",
                    "\u0905\u0917\u0938\u094D\u0924",
                    "\u0938\u093F\u0924\u0902\u092C\u0930",
                    "\u0905\u0915\u094D\u091F\u0942\u092C\u0930",
                    "\u0928\u0935\u0902\u092C\u0930",
                    "\u0926\u093F\u0938\u0902\u092C\u0930",
                ],
            },
            defaultWidth: "wide",
        }),
        day: (0, i.A)({
            values: {
                narrow: [
                    "\u0930",
                    "\u0938\u094B",
                    "\u092E\u0902",
                    "\u092C\u0941",
                    "\u0917\u0941",
                    "\u0936\u0941",
                    "\u0936",
                ],
                short: [
                    "\u0930",
                    "\u0938\u094B",
                    "\u092E\u0902",
                    "\u092C\u0941",
                    "\u0917\u0941",
                    "\u0936\u0941",
                    "\u0936",
                ],
                abbreviated: [
                    "\u0930\u0935\u093F",
                    "\u0938\u094B\u092E",
                    "\u092E\u0902\u0917\u0932",
                    "\u092C\u0941\u0927",
                    "\u0917\u0941\u0930\u0941",
                    "\u0936\u0941\u0915\u094D\u0930",
                    "\u0936\u0928\u093F",
                ],
                wide: [
                    "\u0930\u0935\u093F\u0935\u093E\u0930",
                    "\u0938\u094B\u092E\u0935\u093E\u0930",
                    "\u092E\u0902\u0917\u0932\u0935\u093E\u0930",
                    "\u092C\u0941\u0927\u0935\u093E\u0930",
                    "\u0917\u0941\u0930\u0941\u0935\u093E\u0930",
                    "\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930",
                    "\u0936\u0928\u093F\u0935\u093E\u0930",
                ],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, i.A)({
            values: {
                narrow: {
                    am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
                    pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
                    midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
                    noon: "\u0926\u094B\u092A\u0939\u0930",
                    morning: "\u0938\u0941\u092C\u0939",
                    afternoon: "\u0926\u094B\u092A\u0939\u0930",
                    evening: "\u0936\u093E\u092E",
                    night: "\u0930\u093E\u0924",
                },
                abbreviated: {
                    am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
                    pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
                    midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
                    noon: "\u0926\u094B\u092A\u0939\u0930",
                    morning: "\u0938\u0941\u092C\u0939",
                    afternoon: "\u0926\u094B\u092A\u0939\u0930",
                    evening: "\u0936\u093E\u092E",
                    night: "\u0930\u093E\u0924",
                },
                wide: {
                    am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
                    pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
                    midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
                    noon: "\u0926\u094B\u092A\u0939\u0930",
                    morning: "\u0938\u0941\u092C\u0939",
                    afternoon: "\u0926\u094B\u092A\u0939\u0930",
                    evening: "\u0936\u093E\u092E",
                    night: "\u0930\u093E\u0924",
                },
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: {
                    am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
                    pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
                    midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
                    noon: "\u0926\u094B\u092A\u0939\u0930",
                    morning: "\u0938\u0941\u092C\u0939",
                    afternoon: "\u0926\u094B\u092A\u0939\u0930",
                    evening: "\u0936\u093E\u092E",
                    night: "\u0930\u093E\u0924",
                },
                abbreviated: {
                    am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
                    pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
                    midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
                    noon: "\u0926\u094B\u092A\u0939\u0930",
                    morning: "\u0938\u0941\u092C\u0939",
                    afternoon: "\u0926\u094B\u092A\u0939\u0930",
                    evening: "\u0936\u093E\u092E",
                    night: "\u0930\u093E\u0924",
                },
                wide: {
                    am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
                    pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
                    midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
                    noon: "\u0926\u094B\u092A\u0939\u0930",
                    morning: "\u0938\u0941\u092C\u0939",
                    afternoon: "\u0926\u094B\u092A\u0939\u0930",
                    evening: "\u0936\u093E\u092E",
                    night: "\u0930\u093E\u0924",
                },
            },
            defaultFormattingWidth: "wide",
        }),
    },
    u = {
        lessThanXSeconds: {
            one: "\u0967 \u0938\u0947\u0915\u0902\u0921 \u0938\u0947 \u0915\u092E",
            other: "{{count}} \u0938\u0947\u0915\u0902\u0921 \u0938\u0947 \u0915\u092E",
        },
        xSeconds: { one: "\u0967 \u0938\u0947\u0915\u0902\u0921", other: "{{count}} \u0938\u0947\u0915\u0902\u0921" },
        halfAMinute: "\u0906\u0927\u093E \u092E\u093F\u0928\u091F",
        lessThanXMinutes: {
            one: "\u0967 \u092E\u093F\u0928\u091F \u0938\u0947 \u0915\u092E",
            other: "{{count}} \u092E\u093F\u0928\u091F \u0938\u0947 \u0915\u092E",
        },
        xMinutes: { one: "\u0967 \u092E\u093F\u0928\u091F", other: "{{count}} \u092E\u093F\u0928\u091F" },
        aboutXHours: {
            one: "\u0932\u0917\u092D\u0917 \u0967 \u0918\u0902\u091F\u093E",
            other: "\u0932\u0917\u092D\u0917 {{count}} \u0918\u0902\u091F\u0947",
        },
        xHours: { one: "\u0967 \u0918\u0902\u091F\u093E", other: "{{count}} \u0918\u0902\u091F\u0947" },
        xDays: { one: "\u0967 \u0926\u093F\u0928", other: "{{count}} \u0926\u093F\u0928" },
        aboutXWeeks: {
            one: "\u0932\u0917\u092D\u0917 \u0967 \u0938\u092A\u094D\u0924\u093E\u0939",
            other: "\u0932\u0917\u092D\u0917 {{count}} \u0938\u092A\u094D\u0924\u093E\u0939",
        },
        xWeeks: {
            one: "\u0967 \u0938\u092A\u094D\u0924\u093E\u0939",
            other: "{{count}} \u0938\u092A\u094D\u0924\u093E\u0939",
        },
        aboutXMonths: {
            one: "\u0932\u0917\u092D\u0917 \u0967 \u092E\u0939\u0940\u0928\u093E",
            other: "\u0932\u0917\u092D\u0917 {{count}} \u092E\u0939\u0940\u0928\u0947",
        },
        xMonths: { one: "\u0967 \u092E\u0939\u0940\u0928\u093E", other: "{{count}} \u092E\u0939\u0940\u0928\u0947" },
        aboutXYears: {
            one: "\u0932\u0917\u092D\u0917 \u0967 \u0935\u0930\u094D\u0937",
            other: "\u0932\u0917\u092D\u0917 {{count}} \u0935\u0930\u094D\u0937",
        },
        xYears: { one: "\u0967 \u0935\u0930\u094D\u0937", other: "{{count}} \u0935\u0930\u094D\u0937" },
        overXYears: {
            one: "\u0967 \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915",
            other: "{{count}} \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915",
        },
        almostXYears: {
            one: "\u0932\u0917\u092D\u0917 \u0967 \u0935\u0930\u094D\u0937",
            other: "\u0932\u0917\u092D\u0917 {{count}} \u0935\u0930\u094D\u0937",
        },
    },
    h = n(385987),
    s = {
        date: (0, h.A)({
            formats: { full: "EEEE, do MMMM, y", long: "do MMMM, y", medium: "d MMM, y", short: "dd/MM/yyyy" },
            defaultWidth: "full",
        }),
        time: (0, h.A)({
            formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" },
            defaultWidth: "full",
        }),
        dateTime: (0, h.A)({
            formats: {
                full: "{{date}} '\u0915\u094B' {{time}}",
                long: "{{date}} '\u0915\u094B' {{time}}",
                medium: "{{date}}, {{time}}",
                short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    m = {
        lastWeek: "'\u092A\u093F\u091B\u0932\u0947' eeee p",
        yesterday: "'\u0915\u0932' p",
        today: "'\u0906\u091C' p",
        tomorrow: "'\u0915\u0932' p",
        nextWeek: "eeee '\u0915\u094B' p",
        other: "P",
    },
    l = n(303527);
let c = {
    code: "hi",
    formatDistance: function (e, t, n) {
        var i,
            a = u[e];
        if (
            ((i = "string" == typeof a ? a : 1 === t ? a.one : a.other.replace("{{count}}", o(t))),
            null != n && n.addSuffix)
        )
            if (n.comparison && n.comparison > 0) return i + "\u092E\u0947 ";
            else return i + " \u092A\u0939\u0932\u0947";
        return i;
    },
    formatLong: s,
    formatRelative: function (e, t, n, i) {
        return m[e];
    },
    localize: d,
    match: {
        ordinalNumber: (0, n(722023).A)({
            matchPattern: /^[\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f]+/i,
            parsePattern: /^[\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f]+/i,
            valueCallback: function (e) {
                return Number(
                    e
                        .toString()
                        .replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (e) {
                            return r[e];
                        }),
                );
            },
        }),
        era: (0, l.A)({
            matchPatterns: {
                narrow: /^(\u0908\u0938\u093e-\u092a\u0942\u0930\u094d\u0935|\u0908\u0938\u094d\u0935\u0940)/i,
                abbreviated: /^(\u0908\u0938\u093e\.?\s?\u092a\u0942\u0930\u094d\u0935\.?|\u0908\u0938\u093e\.?)/i,
                wide: /^(\u0908\u0938\u093e-\u092a\u0942\u0930\u094d\u0935|\u0908\u0938\u0935\u0940 \u092a\u0942\u0930\u094d\u0935|\u0908\u0938\u0935\u0940 \u0938\u0928|\u0908\u0938\u0935\u0940)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^b/i, /^(a|c)/i] },
            defaultParseWidth: "any",
        }),
        quarter: (0, l.A)({
            matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^\u0924\u093f[1234]/i,
                wide: /^[1234](\u092a\u0939\u0932\u0940|\u0926\u0942\u0938\u0930\u0940|\u0924\u0940\u0938\u0930\u0940|\u091a\u094c\u0925\u0940)? \u0924\u093f\u092e\u093e\u0939\u0940/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
                return e + 1;
            },
        }),
        month: (0, l.A)({
            matchPatterns: {
                narrow: /^[\u091c\u092b\u093c\u092e\u093e\u0905\u092a\u094d\u092e\u0908\u091c\u0942\u0928\u091c\u0941\u0905\u0917\u0938\u093f\u0905\u0915\u094d\u0924\u0928\u0926\u093f]/i,
                abbreviated:
                    /^(\u091c\u0928|\u092b\u093c\u0930|\u092e\u093e\u0930\u094d\u091a|\u0905\u092a\u094d|\u092e\u0908|\u091c\u0942\u0928|\u091c\u0941\u0932|\u0905\u0917|\u0938\u093f\u0924|\u0905\u0915\u094d\u0924\u0942|\u0928\u0935|\u0926\u093f\u0938)/i,
                wide: /^(\u091c\u0928\u0935\u0930\u0940|\u092b\u093c\u0930\u0935\u0930\u0940|\u092e\u093e\u0930\u094d\u091a|\u0905\u092a\u094d\u0930\u0948\u0932|\u092e\u0908|\u091c\u0942\u0928|\u091c\u0941\u0932\u093e\u0908|\u0905\u0917\u0938\u094d\u0924|\u0938\u093f\u0924\u0902\u092c\u0930|\u0905\u0915\u094d\u0924\u0942\u092c\u0930|\u0928\u0935\u0902\u092c\u0930|\u0926\u093f\u0938\u0902\u092c\u0930)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [
                    /^\u091c/i,
                    /^\u092b\u093c/i,
                    /^\u092e\u093e/i,
                    /^\u0905\u092a\u094d/i,
                    /^\u092e\u0908/i,
                    /^\u091c\u0942/i,
                    /^\u091c\u0941/i,
                    /^\u0905\u0917/i,
                    /^\u0938\u093f/i,
                    /^\u0905\u0915\u094d\u0924\u0942/i,
                    /^\u0928/i,
                    /^\u0926\u093f/i,
                ],
                any: [
                    /^\u091c\u0928/i,
                    /^\u092b\u093c/i,
                    /^\u092e\u093e/i,
                    /^\u0905\u092a\u094d/i,
                    /^\u092e\u0908/i,
                    /^\u091c\u0942/i,
                    /^\u091c\u0941/i,
                    /^\u0905\u0917/i,
                    /^\u0938\u093f/i,
                    /^\u0905\u0915\u094d\u0924\u0942/i,
                    /^\u0928\u0935/i,
                    /^\u0926\u093f\u0938/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        day: (0, l.A)({
            matchPatterns: {
                narrow: /^[\u0930\u0935\u093f\u0938\u094b\u092e\u092e\u0902\u0917\u0932\u092c\u0941\u0927\u0917\u0941\u0930\u0941\u0936\u0941\u0915\u094d\u0930\u0936\u0928\u093f]/i,
                short: /^(\u0930\u0935\u093f|\u0938\u094b\u092e|\u092e\u0902\u0917\u0932|\u092c\u0941\u0927|\u0917\u0941\u0930\u0941|\u0936\u0941\u0915\u094d\u0930|\u0936\u0928\u093f)/i,
                abbreviated:
                    /^(\u0930\u0935\u093f|\u0938\u094b\u092e|\u092e\u0902\u0917\u0932|\u092c\u0941\u0927|\u0917\u0941\u0930\u0941|\u0936\u0941\u0915\u094d\u0930|\u0936\u0928\u093f)/i,
                wide: /^(\u0930\u0935\u093f\u0935\u093e\u0930|\u0938\u094b\u092e\u0935\u093e\u0930|\u092e\u0902\u0917\u0932\u0935\u093e\u0930|\u092c\u0941\u0927\u0935\u093e\u0930|\u0917\u0941\u0930\u0941\u0935\u093e\u0930|\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930|\u0936\u0928\u093f\u0935\u093e\u0930)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [
                    /^\u0930\u0935\u093f/i,
                    /^\u0938\u094b\u092e/i,
                    /^\u092e\u0902\u0917\u0932/i,
                    /^\u092c\u0941\u0927/i,
                    /^\u0917\u0941\u0930\u0941/i,
                    /^\u0936\u0941\u0915\u094d\u0930/i,
                    /^\u0936\u0928\u093f/i,
                ],
                any: [
                    /^\u0930\u0935\u093f/i,
                    /^\u0938\u094b\u092e/i,
                    /^\u092e\u0902\u0917\u0932/i,
                    /^\u092c\u0941\u0927/i,
                    /^\u0917\u0941\u0930\u0941/i,
                    /^\u0936\u0941\u0915\u094d\u0930/i,
                    /^\u0936\u0928\u093f/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, l.A)({
            matchPatterns: {
                narrow: /^(\u092a\u0942|\u0905|\u092e|\u0926.\?|\u0938\u0941|\u0926\u094b|\u0936\u093e|\u0930\u093e)/i,
                any: /^(\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928|\u0905\u092a\u0930\u093e\u0939\u094d\u0928|\u092e|\u0926.\?|\u0938\u0941|\u0926\u094b|\u0936\u093e|\u0930\u093e)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
                any: {
                    am: /^\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928/i,
                    pm: /^\u0905\u092a\u0930\u093e\u0939\u094d\u0928/i,
                    midnight: /^\u092e\u0927\u094d\u092f/i,
                    noon: /^\u0926\u094b/i,
                    morning: /\u0938\u0941/i,
                    afternoon: /\u0926\u094b/i,
                    evening: /\u0936\u093e/i,
                    night: /\u0930\u093e/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 0, firstWeekContainsDate: 4 },
};
