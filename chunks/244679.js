n.r(a), n.d(a, { default: () => h });
var t = {
        lessThanXSeconds: { one: "menos de un segundo", other: "menos de {{count}} segundos" },
        xSeconds: { one: "1 segundo", other: "{{count}} segundos" },
        halfAMinute: "medio minuto",
        lessThanXMinutes: { one: "menos de un minuto", other: "menos de {{count}} minutos" },
        xMinutes: { one: "1 minuto", other: "{{count}} minutos" },
        aboutXHours: { one: "alrededor de 1 hora", other: "alrededor de {{count}} horas" },
        xHours: { one: "1 hora", other: "{{count}} horas" },
        xDays: { one: "1 d\xeda", other: "{{count}} d\xedas" },
        aboutXWeeks: { one: "alrededor de 1 semana", other: "alrededor de {{count}} semanas" },
        xWeeks: { one: "1 semana", other: "{{count}} semanas" },
        aboutXMonths: { one: "alrededor de 1 mes", other: "alrededor de {{count}} meses" },
        xMonths: { one: "1 mes", other: "{{count}} meses" },
        aboutXYears: { one: "alrededor de 1 a\xf1o", other: "alrededor de {{count}} a\xf1os" },
        xYears: { one: "1 a\xf1o", other: "{{count}} a\xf1os" },
        overXYears: { one: "m\xe1s de 1 a\xf1o", other: "m\xe1s de {{count}} a\xf1os" },
        almostXYears: { one: "casi 1 a\xf1o", other: "casi {{count}} a\xf1os" },
    },
    o = n(385987),
    i = {
        date: (0, o.A)({
            formats: {
                full: "EEEE, d 'de' MMMM 'de' y",
                long: "d 'de' MMMM 'de' y",
                medium: "d MMM y",
                short: "dd/MM/y",
            },
            defaultWidth: "full",
        }),
        time: (0, o.A)({
            formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, o.A)({
            formats: {
                full: "{{date}} 'a las' {{time}}",
                long: "{{date}} 'a las' {{time}}",
                medium: "{{date}}, {{time}}",
                short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    r = {
        lastWeek: "'el' eeee 'pasado a la' p",
        yesterday: "'ayer a la' p",
        today: "'hoy a la' p",
        tomorrow: "'ma\xf1ana a la' p",
        nextWeek: "eeee 'a la' p",
        other: "P",
    },
    d = {
        lastWeek: "'el' eeee 'pasado a las' p",
        yesterday: "'ayer a las' p",
        today: "'hoy a las' p",
        tomorrow: "'ma\xf1ana a las' p",
        nextWeek: "eeee 'a las' p",
        other: "P",
    },
    s = n(981737),
    m = {
        ordinalNumber: function (e, a) {
            return Number(e) + "\xba";
        },
        era: (0, s.A)({
            values: {
                narrow: ["AC", "DC"],
                abbreviated: ["AC", "DC"],
                wide: ["antes de cristo", "despu\xe9s de cristo"],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, s.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["T1", "T2", "T3", "T4"],
                wide: ["1\xba trimestre", "2\xba trimestre", "3\xba trimestre", "4\xba trimestre"],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
                return Number(e) - 1;
            },
        }),
        month: (0, s.A)({
            values: {
                narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
                abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
                wide: [
                    "enero",
                    "febrero",
                    "marzo",
                    "abril",
                    "mayo",
                    "junio",
                    "julio",
                    "agosto",
                    "septiembre",
                    "octubre",
                    "noviembre",
                    "diciembre",
                ],
            },
            defaultWidth: "wide",
        }),
        day: (0, s.A)({
            values: {
                narrow: ["d", "l", "m", "m", "j", "v", "s"],
                short: ["do", "lu", "ma", "mi", "ju", "vi", "s\xe1"],
                abbreviated: ["dom", "lun", "mar", "mi\xe9", "jue", "vie", "s\xe1b"],
                wide: ["domingo", "lunes", "martes", "mi\xe9rcoles", "jueves", "viernes", "s\xe1bado"],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, s.A)({
            values: {
                narrow: {
                    am: "a",
                    pm: "p",
                    midnight: "mn",
                    noon: "md",
                    morning: "ma\xf1ana",
                    afternoon: "tarde",
                    evening: "tarde",
                    night: "noche",
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "medianoche",
                    noon: "mediodia",
                    morning: "ma\xf1ana",
                    afternoon: "tarde",
                    evening: "tarde",
                    night: "noche",
                },
                wide: {
                    am: "a.m.",
                    pm: "p.m.",
                    midnight: "medianoche",
                    noon: "mediodia",
                    morning: "ma\xf1ana",
                    afternoon: "tarde",
                    evening: "tarde",
                    night: "noche",
                },
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: {
                    am: "a",
                    pm: "p",
                    midnight: "mn",
                    noon: "md",
                    morning: "de la ma\xf1ana",
                    afternoon: "de la tarde",
                    evening: "de la tarde",
                    night: "de la noche",
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "medianoche",
                    noon: "mediodia",
                    morning: "de la ma\xf1ana",
                    afternoon: "de la tarde",
                    evening: "de la tarde",
                    night: "de la noche",
                },
                wide: {
                    am: "a.m.",
                    pm: "p.m.",
                    midnight: "medianoche",
                    noon: "mediodia",
                    morning: "de la ma\xf1ana",
                    afternoon: "de la tarde",
                    evening: "de la tarde",
                    night: "de la noche",
                },
            },
            defaultFormattingWidth: "wide",
        }),
    },
    u = n(722023),
    l = n(303527);
let h = {
    code: "es",
    formatDistance: function (e, a, n) {
        var o,
            i = t[e];
        if (
            ((o = "string" == typeof i ? i : 1 === a ? i.one : i.other.replace("{{count}}", a.toString())),
            null != n && n.addSuffix)
        )
            if (n.comparison && n.comparison > 0) return "en " + o;
            else return "hace " + o;
        return o;
    },
    formatLong: i,
    formatRelative: function (e, a, n, t) {
        return 1 !== a.getUTCHours() ? d[e] : r[e];
    },
    localize: m,
    match: {
        ordinalNumber: (0, u.A)({
            matchPattern: /^(\d+)(\xba)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
                return parseInt(e, 10);
            },
        }),
        era: (0, l.A)({
            matchPatterns: {
                narrow: /^(ac|dc|a|d)/i,
                abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
                wide: /^(antes de cristo|antes de la era com[u\xfa]n|despu[e\xe9]s de cristo|era com[u\xfa]n)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                any: [/^ac/i, /^dc/i],
                wide: [
                    /^(antes de cristo|antes de la era com[u\xfa]n)/i,
                    /^(despu[e\xe9]s de cristo|era com[u\xfa]n)/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        quarter: (0, l.A)({
            matchPatterns: { narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^[1234](\xba)? trimestre/i },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
                return e + 1;
            },
        }),
        month: (0, l.A)({
            matchPatterns: {
                narrow: /^[efmajsond]/i,
                abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
                wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                any: [
                    /^en/i,
                    /^feb/i,
                    /^mar/i,
                    /^abr/i,
                    /^may/i,
                    /^jun/i,
                    /^jul/i,
                    /^ago/i,
                    /^sep/i,
                    /^oct/i,
                    /^nov/i,
                    /^dic/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        day: (0, l.A)({
            matchPatterns: {
                narrow: /^[dlmjvs]/i,
                short: /^(do|lu|ma|mi|ju|vi|s[\xe1a])/i,
                abbreviated: /^(dom|lun|mar|mi[\xe9e]|jue|vie|s[\xe1a]b)/i,
                wide: /^(domingo|lunes|martes|mi[\xe9e]rcoles|jueves|viernes|s[\xe1a]bado)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
                any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i],
            },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, l.A)({
            matchPatterns: {
                narrow: /^(a|p|mn|md|(de la|a las) (ma\xf1ana|tarde|noche))/i,
                any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (ma\xf1ana|tarde|noche))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
                any: {
                    am: /^a/i,
                    pm: /^p/i,
                    midnight: /^mn/i,
                    noon: /^md/i,
                    morning: /ma\xf1ana/i,
                    afternoon: /tarde/i,
                    evening: /tarde/i,
                    night: /noche/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 1 },
};
