a.r(i), a.d(i, { default: () => c });
var t = {
        lessThanXSeconds: { one: "meno di un secondo", other: "meno di {{count}} secondi" },
        xSeconds: { one: "un secondo", other: "{{count}} secondi" },
        halfAMinute: "alcuni secondi",
        lessThanXMinutes: { one: "meno di un minuto", other: "meno di {{count}} minuti" },
        xMinutes: { one: "un minuto", other: "{{count}} minuti" },
        aboutXHours: { one: "circa un'ora", other: "circa {{count}} ore" },
        xHours: { one: "un'ora", other: "{{count}} ore" },
        xDays: { one: "un giorno", other: "{{count}} giorni" },
        aboutXWeeks: { one: "circa una settimana", other: "circa {{count}} settimane" },
        xWeeks: { one: "una settimana", other: "{{count}} settimane" },
        aboutXMonths: { one: "circa un mese", other: "circa {{count}} mesi" },
        xMonths: { one: "un mese", other: "{{count}} mesi" },
        aboutXYears: { one: "circa un anno", other: "circa {{count}} anni" },
        xYears: { one: "un anno", other: "{{count}} anni" },
        overXYears: { one: "pi\xf9 di un anno", other: "pi\xf9 di {{count}} anni" },
        almostXYears: { one: "quasi un anno", other: "quasi {{count}} anni" },
    },
    n = a(385987),
    o = {
        date: (0, n.A)({
            formats: { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd/MM/y" },
            defaultWidth: "full",
        }),
        time: (0, n.A)({
            formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, n.A)({
            formats: {
                full: "{{date}} {{time}}",
                long: "{{date}} {{time}}",
                medium: "{{date}} {{time}}",
                short: "{{date}} {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    r = a(204801),
    m = ["domenica", "luned\xec", "marted\xec", "mercoled\xec", "gioved\xec", "venerd\xec", "sabato"];
function d(e) {
    return "'" + m[e] + " alle' p";
}
var s = {
        lastWeek: function (e, i, a) {
            var t = e.getUTCDay();
            return (0, r.A)(e, i, a) ? d(t) : 0 === t ? "'domenica scorsa alle' p" : "'" + m[t] + " scorso alle' p";
        },
        yesterday: "'ieri alle' p",
        today: "'oggi alle' p",
        tomorrow: "'domani alle' p",
        nextWeek: function (e, i, a) {
            var t = e.getUTCDay();
            return (0, r.A)(e, i, a) ? d(t) : 0 === t ? "'domenica prossima alle' p" : "'" + m[t] + " prossimo alle' p";
        },
        other: "P",
    },
    u = a(981737),
    g = {
        ordinalNumber: function (e, i) {
            return String(Number(e));
        },
        era: (0, u.A)({
            values: { narrow: ["aC", "dC"], abbreviated: ["a.C.", "d.C."], wide: ["avanti Cristo", "dopo Cristo"] },
            defaultWidth: "wide",
        }),
        quarter: (0, u.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["T1", "T2", "T3", "T4"],
                wide: ["1\xba trimestre", "2\xba trimestre", "3\xba trimestre", "4\xba trimestre"],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
                return e - 1;
            },
        }),
        month: (0, u.A)({
            values: {
                narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
                abbreviated: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
                wide: [
                    "gennaio",
                    "febbraio",
                    "marzo",
                    "aprile",
                    "maggio",
                    "giugno",
                    "luglio",
                    "agosto",
                    "settembre",
                    "ottobre",
                    "novembre",
                    "dicembre",
                ],
            },
            defaultWidth: "wide",
        }),
        day: (0, u.A)({
            values: {
                narrow: ["D", "L", "M", "M", "G", "V", "S"],
                short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                abbreviated: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                wide: ["domenica", "luned\xec", "marted\xec", "mercoled\xec", "gioved\xec", "venerd\xec", "sabato"],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, u.A)({
            values: {
                narrow: {
                    am: "m.",
                    pm: "p.",
                    midnight: "mezzanotte",
                    noon: "mezzogiorno",
                    morning: "mattina",
                    afternoon: "pomeriggio",
                    evening: "sera",
                    night: "notte",
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "mezzanotte",
                    noon: "mezzogiorno",
                    morning: "mattina",
                    afternoon: "pomeriggio",
                    evening: "sera",
                    night: "notte",
                },
                wide: {
                    am: "AM",
                    pm: "PM",
                    midnight: "mezzanotte",
                    noon: "mezzogiorno",
                    morning: "mattina",
                    afternoon: "pomeriggio",
                    evening: "sera",
                    night: "notte",
                },
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: {
                    am: "m.",
                    pm: "p.",
                    midnight: "mezzanotte",
                    noon: "mezzogiorno",
                    morning: "di mattina",
                    afternoon: "del pomeriggio",
                    evening: "di sera",
                    night: "di notte",
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "mezzanotte",
                    noon: "mezzogiorno",
                    morning: "di mattina",
                    afternoon: "del pomeriggio",
                    evening: "di sera",
                    night: "di notte",
                },
                wide: {
                    am: "AM",
                    pm: "PM",
                    midnight: "mezzanotte",
                    noon: "mezzogiorno",
                    morning: "di mattina",
                    afternoon: "del pomeriggio",
                    evening: "di sera",
                    night: "di notte",
                },
            },
            defaultFormattingWidth: "wide",
        }),
    },
    l = a(303527);
let c = {
    code: "it",
    formatDistance: function (e, i, a) {
        var n,
            o = t[e];
        if (
            ((n = "string" == typeof o ? o : 1 === i ? o.one : o.other.replace("{{count}}", i.toString())),
            null != a && a.addSuffix)
        )
            if (a.comparison && a.comparison > 0) return "tra " + n;
            else return n + " fa";
        return n;
    },
    formatLong: o,
    formatRelative: function (e, i, a, t) {
        var n = s[e];
        return "function" == typeof n ? n(i, a, t) : n;
    },
    localize: g,
    match: {
        ordinalNumber: (0, a(722023).A)({
            matchPattern: /^(\d+)(\xba)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
                return parseInt(e, 10);
            },
        }),
        era: (0, l.A)({
            matchPatterns: {
                narrow: /^(aC|dC)/i,
                abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
                wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^a/i, /^(d|e)/i] },
            defaultParseWidth: "any",
        }),
        quarter: (0, l.A)({
            matchPatterns: { narrow: /^[1234]/i, abbreviated: /^t[1234]/i, wide: /^[1234](\xba)? trimestre/i },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
                return e + 1;
            },
        }),
        month: (0, l.A)({
            matchPatterns: {
                narrow: /^[gfmalsond]/i,
                abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
                wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^g/i, /^f/i, /^m/i, /^a/i, /^m/i, /^g/i, /^l/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                any: [/^ge/i, /^f/i, /^mar/i, /^ap/i, /^mag/i, /^gi/i, /^l/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i],
            },
            defaultParseWidth: "any",
        }),
        day: (0, l.A)({
            matchPatterns: {
                narrow: /^[dlmgvs]/i,
                short: /^(do|lu|ma|me|gi|ve|sa)/i,
                abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
                wide: /^(domenica|luned[i|\xec]|marted[i|\xec]|mercoled[i|\xec]|gioved[i|\xec]|venerd[i|\xec]|sabato)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i],
                any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i],
            },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, l.A)({
            matchPatterns: {
                narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
                any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
                any: {
                    am: /^a/i,
                    pm: /^p/i,
                    midnight: /^mezza/i,
                    noon: /^mezzo/i,
                    morning: /mattina/i,
                    afternoon: /pomeriggio/i,
                    evening: /sera/i,
                    night: /notte/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
};
