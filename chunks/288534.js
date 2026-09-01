Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.TIME_UNITS_NO_ABBR_PATTERN =
        t.TIME_UNITS_PATTERN =
        t.TIME_UNIT_PATTERN =
        t.ORDINAL_NUMBER_PATTERN =
        t.NUMBER_PATTERN =
        t.TIME_UNIT_NO_ABBR_DICTIONARY =
        t.TIME_UNIT_DICTIONARY =
        t.INTEGER_WORD_DICTIONARY =
        t.ORDINAL_NUMBER_DICTIONARY =
        t.MONTH_DICTIONARY =
        t.WEEKDAY_DICTIONARY =
            void 0),
    (t.parseDuration = function (e) {
        let r = {},
            n = e,
            a = s.exec(n);
        for (; a; )
            (function (e, r) {
                let n = u(r[1]);
                e[t.TIME_UNIT_DICTIONARY[r[2].toLowerCase()]] = n;
            })(r, a),
                (n = n.substring(a[0].length)),
                (a = s.exec(n));
        return r;
    }),
    (t.parseNumberPattern = u),
    (t.parseOrdinalNumberPattern = function (e) {
        let r = e.toLowerCase();
        return void 0 !== t.ORDINAL_NUMBER_DICTIONARY[r] ? t.ORDINAL_NUMBER_DICTIONARY[r] : parseInt(r);
    }),
    (t.parseYear = function (e) {
        if (/\d+/.test(e)) {
            let t = parseInt(e);
            return t < 100 && (t = (0, a.findMostLikelyADYear)(t)), t;
        }
        let r = e.toLowerCase();
        return void 0 !== t.INTEGER_WORD_DICTIONARY[r] ? t.INTEGER_WORD_DICTIONARY[r] : parseInt(e);
    });
let n = r(798401),
    a = r(574253);
(t.WEEKDAY_DICTIONARY = {
    "s\xf6ndag": 0,
    "s\xf6n": 0,
    so: 0,
    "m\xe5ndag": 1,
    "m\xe5n": 1,
    "m\xe5": 1,
    tisdag: 2,
    tis: 2,
    ti: 2,
    onsdag: 3,
    ons: 3,
    on: 3,
    torsdag: 4,
    tors: 4,
    to: 4,
    fredag: 5,
    fre: 5,
    fr: 5,
    "l\xf6rdag": 6,
    "l\xf6r": 6,
    "l\xf6": 6,
}),
    (t.MONTH_DICTIONARY = {
        januari: 1,
        jan: 1,
        "jan.": 1,
        februari: 2,
        feb: 2,
        "feb.": 2,
        mars: 3,
        mar: 3,
        "mar.": 3,
        april: 4,
        apr: 4,
        "apr.": 4,
        maj: 5,
        juni: 6,
        jun: 6,
        "jun.": 6,
        juli: 7,
        jul: 7,
        "jul.": 7,
        augusti: 8,
        aug: 8,
        "aug.": 8,
        september: 9,
        sep: 9,
        "sep.": 9,
        sept: 9,
        oktober: 10,
        okt: 10,
        "okt.": 10,
        november: 11,
        nov: 11,
        "nov.": 11,
        december: 12,
        dec: 12,
        "dec.": 12,
    }),
    (t.ORDINAL_NUMBER_DICTIONARY = {
        "f\xf6rsta": 1,
        andra: 2,
        tredje: 3,
        "fj\xe4rde": 4,
        femte: 5,
        "sj\xe4tte": 6,
        sjunde: 7,
        "\xe5ttonde": 8,
        nionde: 9,
        tionde: 10,
        elfte: 11,
        tolfte: 12,
        trettonde: 13,
        fjortonde: 14,
        femtonde: 15,
        sextonde: 16,
        sjuttonde: 17,
        artonde: 18,
        nittonde: 19,
        tjugonde: 20,
        "tjugof\xf6rsta": 21,
        tjugoandra: 22,
        tjugotredje: 23,
        "tjugofj\xe4rde": 24,
        tjugofemte: 25,
        "tjugosj\xe4tte": 26,
        tjugosjunde: 27,
        "tjugo\xe5ttonde": 28,
        tjugonionde: 29,
        trettionde: 30,
        "trettiof\xf6rsta": 31,
    }),
    (t.INTEGER_WORD_DICTIONARY = {
        en: 1,
        ett: 1,
        "tv\xe5": 2,
        tre: 3,
        fyra: 4,
        fem: 5,
        sex: 6,
        sju: 7,
        "\xe5tta": 8,
        nio: 9,
        tio: 10,
        elva: 11,
        tolv: 12,
        tretton: 13,
        fjorton: 14,
        femton: 15,
        sexton: 16,
        sjutton: 17,
        arton: 18,
        nitton: 19,
        tjugo: 20,
        tretti\u043E: 30,
        fyrtio: 40,
        femtio: 50,
        sextio: 60,
        sjuttio: 70,
        "\xe5ttio": 80,
        nittio: 90,
        hundra: 100,
        tusen: 1e3,
    }),
    (t.TIME_UNIT_DICTIONARY = {
        sek: "second",
        sekund: "second",
        sekunder: "second",
        min: "minute",
        minut: "minute",
        minuter: "minute",
        tim: "hour",
        timme: "hour",
        timmar: "hour",
        dag: "day",
        dagar: "day",
        vecka: "week",
        veckor: "week",
        "m\xe5n": "month",
        "m\xe5nad": "month",
        "m\xe5nader": "month",
        "\xe5r": "year",
        kvart\u0430l: "quarter",
        kvartal: "quarter",
    }),
    (t.TIME_UNIT_NO_ABBR_DICTIONARY = {
        sekund: "second",
        sekunder: "second",
        minut: "minute",
        minuter: "minute",
        timme: "hour",
        timmar: "hour",
        dag: "day",
        dagar: "day",
        vecka: "week",
        veckor: "week",
        "m\xe5nad": "month",
        "m\xe5nader": "month",
        "\xe5r": "year",
        kvartal: "quarter",
    }),
    (t.NUMBER_PATTERN = `(?:${(0, n.matchAnyPattern)(t.INTEGER_WORD_DICTIONARY)}|\\d+)`),
    (t.ORDINAL_NUMBER_PATTERN = `(?:${(0, n.matchAnyPattern)(t.ORDINAL_NUMBER_DICTIONARY)}|\\d{1,2}(?:e|:e))`),
    (t.TIME_UNIT_PATTERN = `(?:${(0, n.matchAnyPattern)(t.TIME_UNIT_DICTIONARY)})`);
let i = `(${t.NUMBER_PATTERN})\\s{0,5}(${(0, n.matchAnyPattern)(t.TIME_UNIT_DICTIONARY)})\\s{0,5}`,
    s = RegExp(i, "i"),
    o = `(${t.NUMBER_PATTERN})\\s{0,5}(${(0, n.matchAnyPattern)(t.TIME_UNIT_NO_ABBR_DICTIONARY)})\\s{0,5}`;
function u(e) {
    let r = e.toLowerCase();
    return void 0 !== t.INTEGER_WORD_DICTIONARY[r] ? t.INTEGER_WORD_DICTIONARY[r] : parseInt(r);
}
(t.TIME_UNITS_PATTERN = (0, n.repeatedTimeunitPattern)("", i)),
    (t.TIME_UNITS_NO_ABBR_PATTERN = (0, n.repeatedTimeunitPattern)("", o));
