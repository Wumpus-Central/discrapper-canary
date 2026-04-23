n.r(a), n.d(a, { default: () => m });
var t = {
        lessThanXSeconds: { one: "minder dan een seconde", other: "minder dan {{count}} seconden" },
        xSeconds: { one: "1 seconde", other: "{{count}} seconden" },
        halfAMinute: "een halve minuut",
        lessThanXMinutes: { one: "minder dan een minuut", other: "minder dan {{count}} minuten" },
        xMinutes: { one: "een minuut", other: "{{count}} minuten" },
        aboutXHours: { one: "ongeveer 1 uur", other: "ongeveer {{count}} uur" },
        xHours: { one: "1 uur", other: "{{count}} uur" },
        xDays: { one: "1 dag", other: "{{count}} dagen" },
        aboutXWeeks: { one: "ongeveer 1 week", other: "ongeveer {{count}} weken" },
        xWeeks: { one: "1 week", other: "{{count}} weken" },
        aboutXMonths: { one: "ongeveer 1 maand", other: "ongeveer {{count}} maanden" },
        xMonths: { one: "1 maand", other: "{{count}} maanden" },
        aboutXYears: { one: "ongeveer 1 jaar", other: "ongeveer {{count}} jaar" },
        xYears: { one: "1 jaar", other: "{{count}} jaar" },
        overXYears: { one: "meer dan 1 jaar", other: "meer dan {{count}} jaar" },
        almostXYears: { one: "bijna 1 jaar", other: "bijna {{count}} jaar" },
    },
    r = n(385987),
    i = {
        date: (0, r.A)({
            formats: { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd-MM-y" },
            defaultWidth: "full",
        }),
        time: (0, r.A)({
            formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, r.A)({
            formats: {
                full: "{{date}} 'om' {{time}}",
                long: "{{date}} 'om' {{time}}",
                medium: "{{date}}, {{time}}",
                short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    d = {
        lastWeek: "'afgelopen' eeee 'om' p",
        yesterday: "'gisteren om' p",
        today: "'vandaag om' p",
        tomorrow: "'morgen om' p",
        nextWeek: "eeee 'om' p",
        other: "P",
    },
    o = n(981737),
    u = {
        ordinalNumber: function (e, a) {
            return Number(e) + "e";
        },
        era: (0, o.A)({
            values: {
                narrow: ["v.C.", "n.C."],
                abbreviated: ["v.Chr.", "n.Chr."],
                wide: ["voor Christus", "na Christus"],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, o.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["K1", "K2", "K3", "K4"],
                wide: ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
                return e - 1;
            },
        }),
        month: (0, o.A)({
            values: {
                narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                abbreviated: [
                    "jan.",
                    "feb.",
                    "mrt.",
                    "apr.",
                    "mei",
                    "jun.",
                    "jul.",
                    "aug.",
                    "sep.",
                    "okt.",
                    "nov.",
                    "dec.",
                ],
                wide: [
                    "januari",
                    "februari",
                    "maart",
                    "april",
                    "mei",
                    "juni",
                    "juli",
                    "augustus",
                    "september",
                    "oktober",
                    "november",
                    "december",
                ],
            },
            defaultWidth: "wide",
        }),
        day: (0, o.A)({
            values: {
                narrow: ["Z", "M", "D", "W", "D", "V", "Z"],
                short: ["zo", "ma", "di", "wo", "do", "vr", "za"],
                abbreviated: ["zon", "maa", "din", "woe", "don", "vri", "zat"],
                wide: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, o.A)({
            values: {
                narrow: {
                    am: "AM",
                    pm: "PM",
                    midnight: "middernacht",
                    noon: "het middaguur",
                    morning: "'s ochtends",
                    afternoon: "'s middags",
                    evening: "'s avonds",
                    night: "'s nachts",
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "middernacht",
                    noon: "het middaguur",
                    morning: "'s ochtends",
                    afternoon: "'s middags",
                    evening: "'s avonds",
                    night: "'s nachts",
                },
                wide: {
                    am: "AM",
                    pm: "PM",
                    midnight: "middernacht",
                    noon: "het middaguur",
                    morning: "'s ochtends",
                    afternoon: "'s middags",
                    evening: "'s avonds",
                    night: "'s nachts",
                },
            },
            defaultWidth: "wide",
        }),
    },
    s = n(303527);
let m = {
    code: "nl",
    formatDistance: function (e, a, n) {
        var r,
            i = t[e];
        if (
            ((r = "string" == typeof i ? i : 1 === a ? i.one : i.other.replace("{{count}}", String(a))),
            null != n && n.addSuffix)
        )
            if (n.comparison && n.comparison > 0) return "over " + r;
            else return r + " geleden";
        return r;
    },
    formatLong: i,
    formatRelative: function (e, a, n, t) {
        return d[e];
    },
    localize: u,
    match: {
        ordinalNumber: (0, n(722023).A)({
            matchPattern: /^(\d+)e?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
                return parseInt(e, 10);
            },
        }),
        era: (0, s.A)({
            matchPatterns: {
                narrow: /^([vn]\.? ?C\.?)/,
                abbreviated: /^([vn]\. ?Chr\.?)/,
                wide: /^((voor|na) Christus)/,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^v/, /^n/] },
            defaultParseWidth: "any",
        }),
        quarter: (0, s.A)({
            matchPatterns: { narrow: /^[1234]/i, abbreviated: /^K[1234]/i, wide: /^[1234]e kwartaal/i },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
                return e + 1;
            },
        }),
        month: (0, s.A)({
            matchPatterns: {
                narrow: /^[jfmasond]/i,
                abbreviated: /^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,
                wide: /^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                any: [
                    /^jan/i,
                    /^feb/i,
                    /^m(r|a)/i,
                    /^apr/i,
                    /^mei/i,
                    /^jun/i,
                    /^jul/i,
                    /^aug/i,
                    /^sep/i,
                    /^okt/i,
                    /^nov/i,
                    /^dec/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        day: (0, s.A)({
            matchPatterns: {
                narrow: /^[zmdwv]/i,
                short: /^(zo|ma|di|wo|do|vr|za)/i,
                abbreviated: /^(zon|maa|din|woe|don|vri|zat)/i,
                wide: /^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^z/i, /^m/i, /^d/i, /^w/i, /^d/i, /^v/i, /^z/i],
                any: [/^zo/i, /^ma/i, /^di/i, /^wo/i, /^do/i, /^vr/i, /^za/i],
            },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, s.A)({
            matchPatterns: { any: /^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i },
            defaultMatchWidth: "any",
            parsePatterns: {
                any: {
                    am: /^am/i,
                    pm: /^pm/i,
                    midnight: /^middernacht/i,
                    noon: /^het middaguur/i,
                    morning: /ochtend/i,
                    afternoon: /middag/i,
                    evening: /avond/i,
                    night: /nacht/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
};
