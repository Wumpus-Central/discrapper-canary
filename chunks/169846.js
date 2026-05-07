a.r(e), a.d(e, { default: () => g });
var t = {
        xseconds_other: "sekund\u0117_sekund\u017Ei\u0173_sekundes",
        xminutes_one: "minut\u0117_minut\u0117s_minut\u0119",
        xminutes_other: "minut\u0117s_minu\u010Di\u0173_minutes",
        xhours_one: "valanda_valandos_valand\u0105",
        xhours_other: "valandos_valand\u0173_valandas",
        xdays_one: "diena_dienos_dien\u0105",
        xdays_other: "dienos_dien\u0173_dienas",
        xweeks_one: "savait\u0117_savait\u0117s_savait\u0119",
        xweeks_other: "savait\u0117s_savai\u010Di\u0173_savaites",
        xmonths_one: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012F",
        xmonths_other: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",
        xyears_one: "metai_met\u0173_metus",
        xyears_other: "metai_met\u0173_metus",
        about: "apie",
        over: "daugiau nei",
        almost: "beveik",
        lessthan: "ma\u017Eiau nei",
    },
    r = function (i, e, a, t) {
        return e ? (t ? "keli\u0173 sekund\u017Ei\u0173" : "kelias sekundes") : "kelios sekund\u0117s";
    },
    n = function (i, e, a, t) {
        return e ? (t ? d(a)[1] : d(a)[2]) : d(a)[0];
    },
    s = function (i, e, a, t) {
        var r = i + " ";
        return 1 === i
            ? r + n(i, e, a, t)
            : e
              ? t
                  ? r + d(a)[1]
                  : r + (o(i) ? d(a)[1] : d(a)[2])
              : r + (o(i) ? d(a)[1] : d(a)[0]);
    };
function o(i) {
    return i % 10 == 0 || (i > 10 && i < 20);
}
function d(i) {
    return t[i].split("_");
}
var u = {
        lessThanXSeconds: { one: r, other: s },
        xSeconds: { one: r, other: s },
        halfAMinute: "pus\u0117 minut\u0117s",
        lessThanXMinutes: { one: n, other: s },
        xMinutes: { one: n, other: s },
        aboutXHours: { one: n, other: s },
        xHours: { one: n, other: s },
        xDays: { one: n, other: s },
        aboutXWeeks: { one: n, other: s },
        xWeeks: { one: n, other: s },
        aboutXMonths: { one: n, other: s },
        xMonths: { one: n, other: s },
        aboutXYears: { one: n, other: s },
        xYears: { one: n, other: s },
        overXYears: { one: n, other: s },
        almostXYears: { one: n, other: s },
    },
    p = a(385987),
    m = {
        date: (0, p.A)({
            formats: {
                full: "y 'm'. MMMM d 'd'., EEEE",
                long: "y 'm'. MMMM d 'd'.",
                medium: "y-MM-dd",
                short: "y-MM-dd",
            },
            defaultWidth: "full",
        }),
        time: (0, p.A)({
            formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, p.A)({
            formats: {
                full: "{{date}} {{time}}",
                long: "{{date}} {{time}}",
                medium: "{{date}} {{time}}",
                short: "{{date}} {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    l = {
        lastWeek: "'Pra\u0117jus\u012F' eeee p",
        yesterday: "'Vakar' p",
        today: "'\u0160iandien' p",
        tomorrow: "'Rytoj' p",
        nextWeek: "eeee p",
        other: "P",
    },
    k = a(981737),
    v = {
        ordinalNumber: function (i, e) {
            return Number(i) + "-oji";
        },
        era: (0, k.A)({
            values: {
                narrow: ["pr. Kr.", "po Kr."],
                abbreviated: ["pr. Kr.", "po Kr."],
                wide: ["prie\u0161 Krist\u0173", "po Kristaus"],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, k.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["I ketv.", "II ketv.", "III ketv.", "IV ketv."],
                wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"],
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["I k.", "II k.", "III k.", "IV k."],
                wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"],
            },
            defaultFormattingWidth: "wide",
            argumentCallback: function (i) {
                return i - 1;
            },
        }),
        month: (0, k.A)({
            values: {
                narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"],
                abbreviated: [
                    "saus.",
                    "vas.",
                    "kov.",
                    "bal.",
                    "geg.",
                    "bir\u017E.",
                    "liep.",
                    "rugp.",
                    "rugs.",
                    "spal.",
                    "lapkr.",
                    "gruod.",
                ],
                wide: [
                    "sausis",
                    "vasaris",
                    "kovas",
                    "balandis",
                    "gegu\u017E\u0117",
                    "bir\u017Eelis",
                    "liepa",
                    "rugpj\u016Btis",
                    "rugs\u0117jis",
                    "spalis",
                    "lapkritis",
                    "gruodis",
                ],
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"],
                abbreviated: [
                    "saus.",
                    "vas.",
                    "kov.",
                    "bal.",
                    "geg.",
                    "bir\u017E.",
                    "liep.",
                    "rugp.",
                    "rugs.",
                    "spal.",
                    "lapkr.",
                    "gruod.",
                ],
                wide: [
                    "sausio",
                    "vasario",
                    "kovo",
                    "baland\u017Eio",
                    "gegu\u017E\u0117s",
                    "bir\u017Eelio",
                    "liepos",
                    "rugpj\u016B\u010Dio",
                    "rugs\u0117jo",
                    "spalio",
                    "lapkri\u010Dio",
                    "gruod\u017Eio",
                ],
            },
            defaultFormattingWidth: "wide",
        }),
        day: (0, k.A)({
            values: {
                narrow: ["S", "P", "A", "T", "K", "P", "\u0160"],
                short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "\u0160t"],
                abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "\u0161t"],
                wide: [
                    "sekmadienis",
                    "pirmadienis",
                    "antradienis",
                    "tre\u010Diadienis",
                    "ketvirtadienis",
                    "penktadienis",
                    "\u0161e\u0161tadienis",
                ],
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: ["S", "P", "A", "T", "K", "P", "\u0160"],
                short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "\u0160t"],
                abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "\u0161t"],
                wide: [
                    "sekmadien\u012F",
                    "pirmadien\u012F",
                    "antradien\u012F",
                    "tre\u010Diadien\u012F",
                    "ketvirtadien\u012F",
                    "penktadien\u012F",
                    "\u0161e\u0161tadien\u012F",
                ],
            },
            defaultFormattingWidth: "wide",
        }),
        dayPeriod: (0, k.A)({
            values: {
                narrow: {
                    am: "pr. p.",
                    pm: "pop.",
                    midnight: "vidurnaktis",
                    noon: "vidurdienis",
                    morning: "rytas",
                    afternoon: "diena",
                    evening: "vakaras",
                    night: "naktis",
                },
                abbreviated: {
                    am: "prie\u0161piet",
                    pm: "popiet",
                    midnight: "vidurnaktis",
                    noon: "vidurdienis",
                    morning: "rytas",
                    afternoon: "diena",
                    evening: "vakaras",
                    night: "naktis",
                },
                wide: {
                    am: "prie\u0161piet",
                    pm: "popiet",
                    midnight: "vidurnaktis",
                    noon: "vidurdienis",
                    morning: "rytas",
                    afternoon: "diena",
                    evening: "vakaras",
                    night: "naktis",
                },
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: {
                    am: "pr. p.",
                    pm: "pop.",
                    midnight: "vidurnaktis",
                    noon: "perpiet",
                    morning: "rytas",
                    afternoon: "popiet\u0117",
                    evening: "vakaras",
                    night: "naktis",
                },
                abbreviated: {
                    am: "prie\u0161piet",
                    pm: "popiet",
                    midnight: "vidurnaktis",
                    noon: "perpiet",
                    morning: "rytas",
                    afternoon: "popiet\u0117",
                    evening: "vakaras",
                    night: "naktis",
                },
                wide: {
                    am: "prie\u0161piet",
                    pm: "popiet",
                    midnight: "vidurnaktis",
                    noon: "perpiet",
                    morning: "rytas",
                    afternoon: "popiet\u0117",
                    evening: "vakaras",
                    night: "naktis",
                },
            },
            defaultFormattingWidth: "wide",
        }),
    },
    h = a(303527);
let g = {
    code: "lt",
    formatDistance: function (i, e, a) {
        var r,
            n = i.match(/about|over|almost|lessthan/i),
            s = n ? i.replace(n[0], "") : i,
            o = (null == a ? void 0 : a.comparison) !== void 0 && a.comparison > 0,
            d = u[i];
        if (
            ((r =
                "string" == typeof d
                    ? d
                    : 1 === e
                      ? d.one(e, (null == a ? void 0 : a.addSuffix) === !0, s.toLowerCase() + "_one", o)
                      : d.other(e, (null == a ? void 0 : a.addSuffix) === !0, s.toLowerCase() + "_other", o)),
            n && (r = t[n[0].toLowerCase()] + " " + r),
            null != a && a.addSuffix)
        )
            if (a.comparison && a.comparison > 0) return "po " + r;
            else return "prie\u0161 " + r;
        return r;
    },
    formatLong: m,
    formatRelative: function (i, e, a, t) {
        return l[i];
    },
    localize: v,
    match: {
        ordinalNumber: (0, a(722023).A)({
            matchPattern: /^(\d+)(-oji)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (i) {
                return parseInt(i, 10);
            },
        }),
        era: (0, h.A)({
            matchPatterns: {
                narrow: /^p(r|o)\.?\s?(kr\.?|me)/i,
                abbreviated: /^(pr\.\s?(kr\.|m\.\s?e\.)|po\s?kr\.|m\u016bs\u0173 eroje)/i,
                wide: /^(prie\u0161 Krist\u0173|prie\u0161 m\u016bs\u0173 er\u0105|po Kristaus|m\u016bs\u0173 eroje)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { wide: [/prie\u0161/i, /(po|m\u016bs\u0173)/i], any: [/^pr/i, /^(po|m)/i] },
            defaultParseWidth: "any",
        }),
        quarter: (0, h.A)({
            matchPatterns: {
                narrow: /^([1234])/i,
                abbreviated: /^(I|II|III|IV)\s?ketv?\.?/i,
                wide: /^(I|II|III|IV)\s?ketvirtis/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { narrow: [/1/i, /2/i, /3/i, /4/i], any: [/I$/i, /II$/i, /III/i, /IV/i] },
            defaultParseWidth: "any",
            valueCallback: function (i) {
                return i + 1;
            },
        }),
        month: (0, h.A)({
            matchPatterns: {
                narrow: /^[svkbglr]/i,
                abbreviated:
                    /^(saus\.|vas\.|kov\.|bal\.|geg\.|bir\u017e\.|liep\.|rugp\.|rugs\.|spal\.|lapkr\.|gruod\.)/i,
                wide: /^(sausi(s|o)|vasari(s|o)|kov(a|o)s|baland\u017e?i(s|o)|gegu\u017e\u0117s?|bir\u017eeli(s|o)|liep(a|os)|rugpj\u016b(t|\u010d)i(s|o)|rugs\u0117j(is|o)|spali(s|o)|lapkri(t|\u010d)i(s|o)|gruod\u017e?i(s|o))/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^s/i, /^v/i, /^k/i, /^b/i, /^g/i, /^b/i, /^l/i, /^r/i, /^r/i, /^s/i, /^l/i, /^g/i],
                any: [
                    /^saus/i,
                    /^vas/i,
                    /^kov/i,
                    /^bal/i,
                    /^geg/i,
                    /^bir\u017e/i,
                    /^liep/i,
                    /^rugp/i,
                    /^rugs/i,
                    /^spal/i,
                    /^lapkr/i,
                    /^gruod/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        day: (0, h.A)({
            matchPatterns: {
                narrow: /^[spatk\u0161]/i,
                short: /^(sk|pr|an|tr|kt|pn|\u0161t)/i,
                abbreviated: /^(sk|pr|an|tr|kt|pn|\u0161t)/i,
                wide: /^(sekmadien(is|\u012f)|pirmadien(is|\u012f)|antradien(is|\u012f)|tre\u010diadien(is|\u012f)|ketvirtadien(is|\u012f)|penktadien(is|\u012f)|\u0161e\u0161tadien(is|\u012f))/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^s/i, /^p/i, /^a/i, /^t/i, /^k/i, /^p/i, /^\u0161/i],
                wide: [/^se/i, /^pi/i, /^an/i, /^tr/i, /^ke/i, /^pe/i, /^\u0161e/i],
                any: [/^sk/i, /^pr/i, /^an/i, /^tr/i, /^kt/i, /^pn/i, /^\u0161t/i],
            },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, h.A)({
            matchPatterns: {
                narrow: /^(pr.\s?p.|pop.|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popiet\u0117)|vakaras|naktis)/i,
                any: /^(prie\u0161piet|popiet$|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popiet\u0117)|vakaras|naktis)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
                narrow: {
                    am: /^pr/i,
                    pm: /^pop./i,
                    midnight: /^vidurnaktis/i,
                    noon: /^(vidurdienis|perp)/i,
                    morning: /rytas/i,
                    afternoon: /(die|popiet\u0117)/i,
                    evening: /vakaras/i,
                    night: /naktis/i,
                },
                any: {
                    am: /^pr/i,
                    pm: /^popiet$/i,
                    midnight: /^vidurnaktis/i,
                    noon: /^(vidurdienis|perp)/i,
                    morning: /rytas/i,
                    afternoon: /(die|popiet\u0117)/i,
                    evening: /vakaras/i,
                    night: /naktis/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
};
