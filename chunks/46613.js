n.r(i), n.d(i, { default: () => g });
var o = {
    lessThanXSeconds: {
        one: { regular: "mniej niż sekunda", past: "mniej niż sekundę", future: "mniej niż sekundę" },
        twoFour: "mniej niż {{count}} sekundy",
        other: "mniej niż {{count}} sekund",
    },
    xSeconds: {
        one: { regular: "sekunda", past: "sekundę", future: "sekundę" },
        twoFour: "{{count}} sekundy",
        other: "{{count}} sekund",
    },
    halfAMinute: { one: "p\xf3ł minuty", twoFour: "p\xf3ł minuty", other: "p\xf3ł minuty" },
    lessThanXMinutes: {
        one: { regular: "mniej niż minuta", past: "mniej niż minutę", future: "mniej niż minutę" },
        twoFour: "mniej niż {{count}} minuty",
        other: "mniej niż {{count}} minut",
    },
    xMinutes: {
        one: { regular: "minuta", past: "minutę", future: "minutę" },
        twoFour: "{{count}} minuty",
        other: "{{count}} minut",
    },
    aboutXHours: {
        one: { regular: "około godziny", past: "około godziny", future: "około godzinę" },
        twoFour: "około {{count}} godziny",
        other: "około {{count}} godzin",
    },
    xHours: {
        one: { regular: "godzina", past: "godzinę", future: "godzinę" },
        twoFour: "{{count}} godziny",
        other: "{{count}} godzin",
    },
    xDays: {
        one: { regular: "dzień", past: "dzień", future: "1 dzień" },
        twoFour: "{{count}} dni",
        other: "{{count}} dni",
    },
    aboutXWeeks: { one: "około tygodnia", twoFour: "około {{count}} tygodni", other: "około {{count}} tygodni" },
    xWeeks: { one: "tydzień", twoFour: "{{count}} tygodnie", other: "{{count}} tygodni" },
    aboutXMonths: { one: "około miesiąc", twoFour: "około {{count}} miesiące", other: "około {{count}} miesięcy" },
    xMonths: { one: "miesiąc", twoFour: "{{count}} miesiące", other: "{{count}} miesięcy" },
    aboutXYears: { one: "około rok", twoFour: "około {{count}} lata", other: "około {{count}} lat" },
    xYears: { one: "rok", twoFour: "{{count}} lata", other: "{{count}} lat" },
    overXYears: { one: "ponad rok", twoFour: "ponad {{count}} lata", other: "ponad {{count}} lat" },
    almostXYears: { one: "prawie rok", twoFour: "prawie {{count}} lata", other: "prawie {{count}} lat" },
};
function t(e, i, n) {
    var o = (function (e, i) {
        if (1 === i) return e.one;
        var n = i % 100;
        if (n <= 20 && n > 10) return e.other;
        var o = n % 10;
        return o >= 2 && o <= 4 ? e.twoFour : e.other;
    })(e, i);
    return ("string" == typeof o ? o : o[n]).replace("{{count}}", String(i));
}
var a = n(385987),
    r = {
        date: (0, a.A)({
            formats: { full: "EEEE, do MMMM y", long: "do MMMM y", medium: "do MMM y", short: "dd.MM.y" },
            defaultWidth: "full",
        }),
        time: (0, a.A)({
            formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, a.A)({
            formats: {
                full: "{{date}} {{time}}",
                long: "{{date}} {{time}}",
                medium: "{{date}}, {{time}}",
                short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    u = n(204801),
    s = { masculine: "ostatni", feminine: "ostatnia" },
    d = { masculine: "ten", feminine: "ta" },
    p = { masculine: "następny", feminine: "następna" },
    c = { 0: "feminine", 1: "masculine", 2: "masculine", 3: "feminine", 4: "masculine", 5: "masculine", 6: "feminine" };
function m(e, i, n, o) {
    if ((0, u.A)(i, n, o)) t = d;
    else if ("lastWeek" === e) t = s;
    else if ("nextWeek" === e) t = p;
    else throw Error("Cannot determine adjectives for token ".concat(e));
    var t,
        a = t[c[i.getUTCDay()]];
    return "'".concat(a, "' eeee 'o' p");
}
var l = {
        lastWeek: m,
        yesterday: "'wczoraj o' p",
        today: "'dzisiaj o' p",
        tomorrow: "'jutro o' p",
        nextWeek: m,
        other: "P",
    },
    w = n(981737),
    h = {
        ordinalNumber: function (e, i) {
            return String(e);
        },
        era: (0, w.A)({
            values: {
                narrow: ["p.n.e.", "n.e."],
                abbreviated: ["p.n.e.", "n.e."],
                wide: ["przed naszą erą", "naszej ery"],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, w.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["I kw.", "II kw.", "III kw.", "IV kw."],
                wide: ["I kwartał", "II kwartał", "III kwartał", "IV kwartał"],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
                return e - 1;
            },
        }),
        month: (0, w.A)({
            values: {
                narrow: ["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"],
                abbreviated: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
                wide: [
                    "styczeń",
                    "luty",
                    "marzec",
                    "kwiecień",
                    "maj",
                    "czerwiec",
                    "lipiec",
                    "sierpień",
                    "wrzesień",
                    "październik",
                    "listopad",
                    "grudzień",
                ],
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"],
                abbreviated: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
                wide: [
                    "stycznia",
                    "lutego",
                    "marca",
                    "kwietnia",
                    "maja",
                    "czerwca",
                    "lipca",
                    "sierpnia",
                    "września",
                    "października",
                    "listopada",
                    "grudnia",
                ],
            },
            defaultFormattingWidth: "wide",
        }),
        day: (0, w.A)({
            values: {
                narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
                short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
                abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                wide: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"],
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: ["n", "p", "w", "ś", "c", "p", "s"],
                short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
                abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                wide: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"],
            },
            defaultFormattingWidth: "wide",
        }),
        dayPeriod: (0, w.A)({
            values: {
                narrow: {
                    am: "a",
                    pm: "p",
                    midnight: "p\xf3łn.",
                    noon: "poł",
                    morning: "rano",
                    afternoon: "popoł.",
                    evening: "wiecz.",
                    night: "noc",
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "p\xf3łnoc",
                    noon: "południe",
                    morning: "rano",
                    afternoon: "popołudnie",
                    evening: "wiecz\xf3r",
                    night: "noc",
                },
                wide: {
                    am: "AM",
                    pm: "PM",
                    midnight: "p\xf3łnoc",
                    noon: "południe",
                    morning: "rano",
                    afternoon: "popołudnie",
                    evening: "wiecz\xf3r",
                    night: "noc",
                },
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: {
                    am: "a",
                    pm: "p",
                    midnight: "o p\xf3łn.",
                    noon: "w poł.",
                    morning: "rano",
                    afternoon: "po poł.",
                    evening: "wiecz.",
                    night: "w nocy",
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "o p\xf3łnocy",
                    noon: "w południe",
                    morning: "rano",
                    afternoon: "po południu",
                    evening: "wieczorem",
                    night: "w nocy",
                },
                wide: {
                    am: "AM",
                    pm: "PM",
                    midnight: "o p\xf3łnocy",
                    noon: "w południe",
                    morning: "rano",
                    afternoon: "po południu",
                    evening: "wieczorem",
                    night: "w nocy",
                },
            },
            defaultFormattingWidth: "wide",
        }),
    },
    z = n(303527);
let g = {
    code: "pl",
    formatDistance: function (e, i, n) {
        var a = o[e];
        return null != n && n.addSuffix
            ? n.comparison && n.comparison > 0
                ? "za " + t(a, i, "future")
                : t(a, i, "past") + " temu"
            : t(a, i, "regular");
    },
    formatLong: r,
    formatRelative: function (e, i, n, o) {
        var t = l[e];
        return "function" == typeof t ? t(e, i, n, o) : t;
    },
    localize: h,
    match: {
        ordinalNumber: (0, n(722023).A)({
            matchPattern: /^(\d+)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
                return parseInt(e, 10);
            },
        }),
        era: (0, z.A)({
            matchPatterns: {
                narrow: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
                abbreviated: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
                wide: /^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^p/i, /^n/i] },
            defaultParseWidth: "any",
        }),
        quarter: (0, z.A)({
            matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^(I|II|III|IV)\s*kw\.?/i,
                wide: /^(I|II|III|IV)\s*kwarta(ł|l)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { narrow: [/1/i, /2/i, /3/i, /4/i], any: [/^I kw/i, /^II kw/i, /^III kw/i, /^IV kw/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
                return e + 1;
            },
        }),
        month: (0, z.A)({
            matchPatterns: {
                narrow: /^[slmkcwpg]/i,
                abbreviated: /^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,
                wide: /^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^s/i, /^l/i, /^m/i, /^k/i, /^m/i, /^c/i, /^l/i, /^s/i, /^w/i, /^p/i, /^l/i, /^g/i],
                any: [/^st/i, /^lu/i, /^mar/i, /^k/i, /^maj/i, /^c/i, /^lip/i, /^si/i, /^w/i, /^p/i, /^lis/i, /^g/i],
            },
            defaultParseWidth: "any",
        }),
        day: (0, z.A)({
            matchPatterns: {
                narrow: /^[npwścs]/i,
                short: /^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,
                abbreviated: /^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,
                wide: /^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^n/i, /^p/i, /^w/i, /^ś/i, /^c/i, /^p/i, /^s/i],
                abbreviated: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pt/i, /^so/i],
                any: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pi/i, /^so/i],
            },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, z.A)({
            matchPatterns: {
                narrow: /^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,
                any: /^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
                narrow: {
                    am: /^a$/i,
                    pm: /^p$/i,
                    midnight: /pó(ł|l)n/i,
                    noon: /po(ł|l)/i,
                    morning: /rano/i,
                    afternoon: /po\s*po(ł|l)/i,
                    evening: /wiecz/i,
                    night: /noc/i,
                },
                any: {
                    am: /^am/i,
                    pm: /^pm/i,
                    midnight: /pó(ł|l)n/i,
                    noon: /po(ł|l)/i,
                    morning: /rano/i,
                    afternoon: /po\s*po(ł|l)/i,
                    evening: /wiecz/i,
                    night: /noc/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
};
