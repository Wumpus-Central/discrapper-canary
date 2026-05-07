function t(a) {
    return a.replace(/sekuntia?/, "sekunnin");
}
function u(a) {
    return a.replace(/minuuttia?/, "minuutin");
}
function n(a) {
    return a.replace(/tuntia?/, "tunnin");
}
function r(a) {
    return a.replace(/(viikko|viikkoa)/, "viikon");
}
function o(a) {
    return a.replace(/(kuukausi|kuukautta)/, "kuukauden");
}
function l(a) {
    return a.replace(/(vuosi|vuotta)/, "vuoden");
}
i.r(e), i.d(e, { default: () => b });
var s = {
        lessThanXSeconds: { one: "alle sekunti", other: "alle {{count}} sekuntia", futureTense: t },
        xSeconds: { one: "sekunti", other: "{{count}} sekuntia", futureTense: t },
        halfAMinute: {
            one: "puoli minuuttia",
            other: "puoli minuuttia",
            futureTense: function (a) {
                return "puolen minuutin";
            },
        },
        lessThanXMinutes: { one: "alle minuutti", other: "alle {{count}} minuuttia", futureTense: u },
        xMinutes: { one: "minuutti", other: "{{count}} minuuttia", futureTense: u },
        aboutXHours: { one: "noin tunti", other: "noin {{count}} tuntia", futureTense: n },
        xHours: { one: "tunti", other: "{{count}} tuntia", futureTense: n },
        xDays: {
            one: "p\xe4iv\xe4",
            other: "{{count}} p\xe4iv\xe4\xe4",
            futureTense: function (a) {
                return a.replace(/p\xe4iv\xe4\xe4?/, "p\xe4iv\xe4n");
            },
        },
        aboutXWeeks: { one: "noin viikko", other: "noin {{count}} viikkoa", futureTense: r },
        xWeeks: { one: "viikko", other: "{{count}} viikkoa", futureTense: r },
        aboutXMonths: { one: "noin kuukausi", other: "noin {{count}} kuukautta", futureTense: o },
        xMonths: { one: "kuukausi", other: "{{count}} kuukautta", futureTense: o },
        aboutXYears: { one: "noin vuosi", other: "noin {{count}} vuotta", futureTense: l },
        xYears: { one: "vuosi", other: "{{count}} vuotta", futureTense: l },
        overXYears: { one: "yli vuosi", other: "yli {{count}} vuotta", futureTense: l },
        almostXYears: { one: "l\xe4hes vuosi", other: "l\xe4hes {{count}} vuotta", futureTense: l },
    },
    k = i(385987),
    m = {
        date: (0, k.A)({
            formats: { full: "eeee d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "d.M.y" },
            defaultWidth: "full",
        }),
        time: (0, k.A)({
            formats: { full: "HH.mm.ss zzzz", long: "HH.mm.ss z", medium: "HH.mm.ss", short: "HH.mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, k.A)({
            formats: {
                full: "{{date}} 'klo' {{time}}",
                long: "{{date}} 'klo' {{time}}",
                medium: "{{date}} {{time}}",
                short: "{{date}} {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    d = {
        lastWeek: "'viime' eeee 'klo' p",
        yesterday: "'eilen klo' p",
        today: "'t\xe4n\xe4\xe4n klo' p",
        tomorrow: "'huomenna klo' p",
        nextWeek: "'ensi' eeee 'klo' p",
        other: "P",
    },
    h = i(981737),
    p = {
        narrow: ["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"],
        abbreviated: [
            "tammi",
            "helmi",
            "maalis",
            "huhti",
            "touko",
            "kes\xe4",
            "hein\xe4",
            "elo",
            "syys",
            "loka",
            "marras",
            "joulu",
        ],
        wide: [
            "tammikuu",
            "helmikuu",
            "maaliskuu",
            "huhtikuu",
            "toukokuu",
            "kes\xe4kuu",
            "hein\xe4kuu",
            "elokuu",
            "syyskuu",
            "lokakuu",
            "marraskuu",
            "joulukuu",
        ],
    },
    f = {
        narrow: p.narrow,
        abbreviated: p.abbreviated,
        wide: [
            "tammikuuta",
            "helmikuuta",
            "maaliskuuta",
            "huhtikuuta",
            "toukokuuta",
            "kes\xe4kuuta",
            "hein\xe4kuuta",
            "elokuuta",
            "syyskuuta",
            "lokakuuta",
            "marraskuuta",
            "joulukuuta",
        ],
    },
    v = {
        narrow: ["S", "M", "T", "K", "T", "P", "L"],
        short: ["su", "ma", "ti", "ke", "to", "pe", "la"],
        abbreviated: ["sunn.", "maan.", "tiis.", "kesk.", "torst.", "perj.", "la"],
        wide: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
    },
    c = {
        narrow: v.narrow,
        short: v.short,
        abbreviated: v.abbreviated,
        wide: ["sunnuntaina", "maanantaina", "tiistaina", "keskiviikkona", "torstaina", "perjantaina", "lauantaina"],
    },
    y = {
        ordinalNumber: function (a, e) {
            return Number(a) + ".";
        },
        era: (0, h.A)({
            values: {
                narrow: ["eaa.", "jaa."],
                abbreviated: ["eaa.", "jaa."],
                wide: ["ennen ajanlaskun alkua", "j\xe4lkeen ajanlaskun alun"],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, h.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                wide: ["1. kvartaali", "2. kvartaali", "3. kvartaali", "4. kvartaali"],
            },
            defaultWidth: "wide",
            argumentCallback: function (a) {
                return a - 1;
            },
        }),
        month: (0, h.A)({ values: p, defaultWidth: "wide", formattingValues: f, defaultFormattingWidth: "wide" }),
        day: (0, h.A)({ values: v, defaultWidth: "wide", formattingValues: c, defaultFormattingWidth: "wide" }),
        dayPeriod: (0, h.A)({
            values: {
                narrow: {
                    am: "ap",
                    pm: "ip",
                    midnight: "keskiy\xf6",
                    noon: "keskip\xe4iv\xe4",
                    morning: "ap",
                    afternoon: "ip",
                    evening: "illalla",
                    night: "y\xf6ll\xe4",
                },
                abbreviated: {
                    am: "ap",
                    pm: "ip",
                    midnight: "keskiy\xf6",
                    noon: "keskip\xe4iv\xe4",
                    morning: "ap",
                    afternoon: "ip",
                    evening: "illalla",
                    night: "y\xf6ll\xe4",
                },
                wide: {
                    am: "ap",
                    pm: "ip",
                    midnight: "keskiy\xf6ll\xe4",
                    noon: "keskip\xe4iv\xe4ll\xe4",
                    morning: "aamup\xe4iv\xe4ll\xe4",
                    afternoon: "iltap\xe4iv\xe4ll\xe4",
                    evening: "illalla",
                    night: "y\xf6ll\xe4",
                },
            },
            defaultWidth: "wide",
        }),
    },
    w = i(303527);
let b = {
    code: "fi",
    formatDistance: function (a, e, i) {
        var t = s[a],
            u = 1 === e ? t.one : t.other.replace("{{count}}", String(e));
        if (null != i && i.addSuffix)
            if (i.comparison && i.comparison > 0) return t.futureTense(u) + " kuluttua";
            else return u + " sitten";
        return u;
    },
    formatLong: m,
    formatRelative: function (a, e, i, t) {
        return d[a];
    },
    localize: y,
    match: {
        ordinalNumber: (0, i(722023).A)({
            matchPattern: /^(\d+)(\.)/i,
            parsePattern: /\d+/i,
            valueCallback: function (a) {
                return parseInt(a, 10);
            },
        }),
        era: (0, w.A)({
            matchPatterns: {
                narrow: /^(e|j)/i,
                abbreviated: /^(eaa.|jaa.)/i,
                wide: /^(ennen ajanlaskun alkua|j\xe4lkeen ajanlaskun alun)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^e/i, /^j/i] },
            defaultParseWidth: "any",
        }),
        quarter: (0, w.A)({
            matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234]\.? kvartaali/i },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (a) {
                return a + 1;
            },
        }),
        month: (0, w.A)({
            matchPatterns: {
                narrow: /^[thmkeslj]/i,
                abbreviated: /^(tammi|helmi|maalis|huhti|touko|kes\xe4|hein\xe4|elo|syys|loka|marras|joulu)/i,
                wide: /^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kes\xe4kuu|hein\xe4kuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^t/i, /^h/i, /^m/i, /^h/i, /^t/i, /^k/i, /^h/i, /^e/i, /^s/i, /^l/i, /^m/i, /^j/i],
                any: [/^ta/i, /^hel/i, /^maa/i, /^hu/i, /^to/i, /^k/i, /^hei/i, /^e/i, /^s/i, /^l/i, /^mar/i, /^j/i],
            },
            defaultParseWidth: "any",
        }),
        day: (0, w.A)({
            matchPatterns: {
                narrow: /^[smtkpl]/i,
                short: /^(su|ma|ti|ke|to|pe|la)/i,
                abbreviated: /^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,
                wide: /^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^s/i, /^m/i, /^t/i, /^k/i, /^t/i, /^p/i, /^l/i],
                any: [/^s/i, /^m/i, /^ti/i, /^k/i, /^to/i, /^p/i, /^l/i],
            },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, w.A)({
            matchPatterns: {
                narrow: /^(ap|ip|keskiy\xf6|keskip\xe4iv\xe4|aamup\xe4iv\xe4ll\xe4|iltap\xe4iv\xe4ll\xe4|illalla|y\xf6ll\xe4)/i,
                any: /^(ap|ip|keskiy\xf6ll\xe4|keskip\xe4iv\xe4ll\xe4|aamup\xe4iv\xe4ll\xe4|iltap\xe4iv\xe4ll\xe4|illalla|y\xf6ll\xe4)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
                any: {
                    am: /^ap/i,
                    pm: /^ip/i,
                    midnight: /^keskiy\xf6/i,
                    noon: /^keskip\xe4iv\xe4/i,
                    morning: /aamup\xe4iv\xe4ll\xe4/i,
                    afternoon: /iltap\xe4iv\xe4ll\xe4/i,
                    evening: /illalla/i,
                    night: /y\xf6ll\xe4/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
};
