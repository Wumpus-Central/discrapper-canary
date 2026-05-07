n.r(t), n.d(t, { default: () => l });
var a = {
        lessThanXSeconds: { one: "mindre \xe4n en sekund", other: "mindre \xe4n {{count}} sekunder" },
        xSeconds: { one: "en sekund", other: "{{count}} sekunder" },
        halfAMinute: "en halv minut",
        lessThanXMinutes: { one: "mindre \xe4n en minut", other: "mindre \xe4n {{count}} minuter" },
        xMinutes: { one: "en minut", other: "{{count}} minuter" },
        aboutXHours: { one: "ungef\xe4r en timme", other: "ungef\xe4r {{count}} timmar" },
        xHours: { one: "en timme", other: "{{count}} timmar" },
        xDays: { one: "en dag", other: "{{count}} dagar" },
        aboutXWeeks: { one: "ungef\xe4r en vecka", other: "ungef\xe4r {{count}} vecka" },
        xWeeks: { one: "en vecka", other: "{{count}} vecka" },
        aboutXMonths: { one: "ungef\xe4r en m\xe5nad", other: "ungef\xe4r {{count}} m\xe5nader" },
        xMonths: { one: "en m\xe5nad", other: "{{count}} m\xe5nader" },
        aboutXYears: { one: "ungef\xe4r ett \xe5r", other: "ungef\xe4r {{count}} \xe5r" },
        xYears: { one: "ett \xe5r", other: "{{count}} \xe5r" },
        overXYears: { one: "\xf6ver ett \xe5r", other: "\xf6ver {{count}} \xe5r" },
        almostXYears: { one: "n\xe4stan ett \xe5r", other: "n\xe4stan {{count}} \xe5r" },
    },
    r = ["noll", "en", "tv\xe5", "tre", "fyra", "fem", "sex", "sju", "\xe5tta", "nio", "tio", "elva", "tolv"],
    i = n(385987),
    o = {
        date: (0, i.A)({
            formats: { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "y-MM-dd" },
            defaultWidth: "full",
        }),
        time: (0, i.A)({
            formats: { full: "'kl'. HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, i.A)({
            formats: {
                full: "{{date}} 'kl.' {{time}}",
                long: "{{date}} 'kl.' {{time}}",
                medium: "{{date}} {{time}}",
                short: "{{date}} {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    d = {
        lastWeek: "'i' EEEE's kl.' p",
        yesterday: "'ig\xe5r kl.' p",
        today: "'idag kl.' p",
        tomorrow: "'imorgon kl.' p",
        nextWeek: "EEEE 'kl.' p",
        other: "P",
    },
    m = n(981737),
    s = {
        ordinalNumber: function (e, t) {
            var n = Number(e),
                a = n % 100;
            if (a > 20 || a < 10)
                switch (a % 10) {
                    case 1:
                    case 2:
                        return n + ":a";
                }
            return n + ":e";
        },
        era: (0, m.A)({
            values: {
                narrow: ["f.Kr.", "e.Kr."],
                abbreviated: ["f.Kr.", "e.Kr."],
                wide: ["f\xf6re Kristus", "efter Kristus"],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, m.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                wide: ["1:a kvartalet", "2:a kvartalet", "3:e kvartalet", "4:e kvartalet"],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
                return e - 1;
            },
        }),
        month: (0, m.A)({
            values: {
                narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                abbreviated: [
                    "jan.",
                    "feb.",
                    "mars",
                    "apr.",
                    "maj",
                    "juni",
                    "juli",
                    "aug.",
                    "sep.",
                    "okt.",
                    "nov.",
                    "dec.",
                ],
                wide: [
                    "januari",
                    "februari",
                    "mars",
                    "april",
                    "maj",
                    "juni",
                    "juli",
                    "augusti",
                    "september",
                    "oktober",
                    "november",
                    "december",
                ],
            },
            defaultWidth: "wide",
        }),
        day: (0, m.A)({
            values: {
                narrow: ["S", "M", "T", "O", "T", "F", "L"],
                short: ["s\xf6", "m\xe5", "ti", "on", "to", "fr", "l\xf6"],
                abbreviated: ["s\xf6n", "m\xe5n", "tis", "ons", "tors", "fre", "l\xf6r"],
                wide: ["s\xf6ndag", "m\xe5ndag", "tisdag", "onsdag", "torsdag", "fredag", "l\xf6rdag"],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, m.A)({
            values: {
                narrow: {
                    am: "fm",
                    pm: "em",
                    midnight: "midnatt",
                    noon: "middag",
                    morning: "morg.",
                    afternoon: "efterm.",
                    evening: "kv\xe4ll",
                    night: "natt",
                },
                abbreviated: {
                    am: "f.m.",
                    pm: "e.m.",
                    midnight: "midnatt",
                    noon: "middag",
                    morning: "morgon",
                    afternoon: "efterm.",
                    evening: "kv\xe4ll",
                    night: "natt",
                },
                wide: {
                    am: "f\xf6rmiddag",
                    pm: "eftermiddag",
                    midnight: "midnatt",
                    noon: "middag",
                    morning: "morgon",
                    afternoon: "eftermiddag",
                    evening: "kv\xe4ll",
                    night: "natt",
                },
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: {
                    am: "fm",
                    pm: "em",
                    midnight: "midnatt",
                    noon: "middag",
                    morning: "p\xe5 morg.",
                    afternoon: "p\xe5 efterm.",
                    evening: "p\xe5 kv\xe4llen",
                    night: "p\xe5 natten",
                },
                abbreviated: {
                    am: "fm",
                    pm: "em",
                    midnight: "midnatt",
                    noon: "middag",
                    morning: "p\xe5 morg.",
                    afternoon: "p\xe5 efterm.",
                    evening: "p\xe5 kv\xe4llen",
                    night: "p\xe5 natten",
                },
                wide: {
                    am: "fm",
                    pm: "em",
                    midnight: "midnatt",
                    noon: "middag",
                    morning: "p\xe5 morgonen",
                    afternoon: "p\xe5 eftermiddagen",
                    evening: "p\xe5 kv\xe4llen",
                    night: "p\xe5 natten",
                },
            },
            defaultFormattingWidth: "wide",
        }),
    },
    u = n(303527);
let l = {
    code: "sv",
    formatDistance: function (e, t, n) {
        var i,
            o = a[e];
        if (
            ((i =
                "string" == typeof o
                    ? o
                    : 1 === t
                      ? o.one
                      : n && n.onlyNumeric
                        ? o.other.replace("{{count}}", String(t))
                        : o.other.replace("{{count}}", t < 13 ? r[t] : String(t))),
            null != n && n.addSuffix)
        )
            if (n.comparison && n.comparison > 0) return "om " + i;
            else return i + " sedan";
        return i;
    },
    formatLong: o,
    formatRelative: function (e, t, n, a) {
        return d[e];
    },
    localize: s,
    match: {
        ordinalNumber: (0, n(722023).A)({
            matchPattern: /^(\d+)(:a|:e)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
                return parseInt(e, 10);
            },
        }),
        era: (0, u.A)({
            matchPatterns: {
                narrow: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
                abbreviated: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
                wide: /^(f\xf6re Kristus|f\xf6re v\xe5r tid|efter Kristus|v\xe5r tid)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^f/i, /^[ev]/i] },
            defaultParseWidth: "any",
        }),
        quarter: (0, u.A)({
            matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](:a|:e)? kvartalet/i },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
                return e + 1;
            },
        }),
        month: (0, u.A)({
            matchPatterns: {
                narrow: /^[jfmasond]/i,
                abbreviated: /^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,
                wide: /^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i],
            },
            defaultParseWidth: "any",
        }),
        day: (0, u.A)({
            matchPatterns: {
                narrow: /^[smtofl]/i,
                short: /^(s\xf6|m\xe5|ti|on|to|fr|l\xf6)/i,
                abbreviated: /^(s\xf6n|m\xe5n|tis|ons|tors|fre|l\xf6r)/i,
                wide: /^(s\xf6ndag|m\xe5ndag|tisdag|onsdag|torsdag|fredag|l\xf6rdag)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i] },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, u.A)({
            matchPatterns: {
                any: /^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(p\xe5) (morgonen|eftermiddagen|kv\xe4llen|natten))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
                any: {
                    am: /^f/i,
                    pm: /^e/i,
                    midnight: /^midn/i,
                    noon: /^midd/i,
                    morning: /morgon/i,
                    afternoon: /eftermiddag/i,
                    evening: /kv\xe4ll/i,
                    night: /natt/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
};
