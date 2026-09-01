Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.TIME_UNITS_PATTERN =
        t.YEAR_PATTERN =
        t.ORDINAL_NUMBER_PATTERN =
        t.NUMBER_PATTERN =
        t.TIME_UNIT_DICTIONARY =
        t.ORDINAL_WORD_DICTIONARY =
        t.INTEGER_WORD_DICTIONARY =
        t.MONTH_DICTIONARY =
        t.FULL_MONTH_NAME_DICTIONARY =
        t.WEEKDAY_DICTIONARY =
            void 0),
    (t.parseNumberPattern = i),
    (t.parseOrdinalNumberPattern = function (e) {
        let r = e.toLowerCase();
        return void 0 !== t.ORDINAL_WORD_DICTIONARY[r]
            ? t.ORDINAL_WORD_DICTIONARY[r]
            : parseInt((r = r.replace(/(?:imo|ndo|rzo|rto|nto|sto|tavo|nono|cimo|timo|esimo)$/i, "")));
    }),
    (t.parseYear = function (e) {
        if (/BE/i.test(e)) return parseInt((e = e.replace(/BE/i, ""))) - 543;
        if (/BCE?/i.test(e)) return -parseInt((e = e.replace(/BCE?/i, "")));
        if (/(AD|CE)/i.test(e)) return parseInt((e = e.replace(/(AD|CE)/i, "")));
        let t = parseInt(e);
        return (0, a.findMostLikelyADYear)(t);
    }),
    (t.parseDuration = function (e) {
        let r = {},
            n = e,
            a = o.exec(n);
        for (; a; )
            (function (e, r) {
                let n = i(r[1]);
                e[t.TIME_UNIT_DICTIONARY[r[2].toLowerCase()]] = n;
            })(r, a),
                (n = n.substring(a[0].length).trim()),
                (a = o.exec(n));
        return r;
    });
let n = r(798401),
    a = r(574253);
function i(e) {
    let r = e.toLowerCase();
    if (void 0 !== t.INTEGER_WORD_DICTIONARY[r]) return t.INTEGER_WORD_DICTIONARY[r];
    if ("un" === r || "una" === r) return 1;
    if (r.match(/alcuni/)) return 3;
    if (r.match(/met\xe1/)) return 0.5;
    if (r.match(/paio/)) return 2;
    else if (r.match(/molti/)) return 7;
    return parseFloat(r);
}
(t.WEEKDAY_DICTIONARY = {
    domenica: 0,
    dom: 0,
    "luned\xec": 1,
    lun: 1,
    "marted\xec": 2,
    mar: 2,
    "mercoled\xec": 3,
    merc: 3,
    "gioved\xec": 4,
    giov: 4,
    "venerd\xec": 5,
    ven: 5,
    sabato: 6,
    sab: 6,
}),
    (t.FULL_MONTH_NAME_DICTIONARY = {}),
    (t.MONTH_DICTIONARY = Object.assign(Object.assign({}, t.FULL_MONTH_NAME_DICTIONARY), {
        gennaio: 1,
        gen: 1,
        "gen.": 1,
        febbraio: 2,
        feb: 2,
        "feb.": 2,
        febraio: 2,
        febb: 2,
        "febb.": 2,
        marzo: 3,
        mar: 3,
        "mar.": 3,
        aprile: 4,
        apr: 4,
        "apr.": 4,
        maggio: 5,
        mag: 5,
        giugno: 6,
        giu: 6,
        luglio: 7,
        lug: 7,
        lugl: 7,
        "lug.": 7,
        agosto: 8,
        ago: 8,
        settembre: 9,
        set: 9,
        "set.": 9,
        sett: 9,
        "sett.": 9,
        ottobre: 10,
        ott: 10,
        "ott.": 10,
        novembre: 11,
        nov: 11,
        "nov.": 11,
        dicembre: 12,
        dic: 12,
        dice: 12,
        "dic.": 12,
    })),
    (t.INTEGER_WORD_DICTIONARY = {
        uno: 1,
        due: 2,
        tre: 3,
        quattro: 4,
        cinque: 5,
        sei: 6,
        sette: 7,
        otto: 8,
        nove: 9,
        dieci: 10,
        undici: 11,
        dodici: 12,
    }),
    (t.ORDINAL_WORD_DICTIONARY = {
        primo: 1,
        secondo: 2,
        terzo: 3,
        quarto: 4,
        quinto: 5,
        sesto: 6,
        settimo: 7,
        ottavo: 8,
        nono: 9,
        decimo: 10,
        undicesimo: 11,
        dodicesimo: 12,
        tredicesimo: 13,
        quattordicesimo: 14,
        quindicesimo: 15,
        sedicesimo: 16,
        diciassettesimo: 17,
        diciottesimo: 18,
        diciannovesimo: 19,
        ventesimo: 20,
        ventunesimo: 21,
        ventiduesimo: 22,
        ventitreesimo: 23,
        ventiquattresimo: 24,
        venticinquesimo: 25,
        ventiseiesimo: 26,
        ventisettesimo: 27,
        ventottesimo: 28,
        ventinovesimo: 29,
        trentesimo: 30,
        trentunesimo: 31,
    }),
    (t.TIME_UNIT_DICTIONARY = {
        sec: "second",
        secondo: "second",
        secondi: "second",
        min: "minute",
        mins: "minute",
        minuti: "minute",
        h: "hour",
        hr: "hour",
        o: "hour",
        ora: "hour",
        ore: "hour",
        giorno: "day",
        giorni: "day",
        settimana: "week",
        settimane: "week",
        mese: "month",
        trimestre: "quarter",
        trimestri: "quarter",
        anni: "year",
        anno: "year",
    }),
    (t.NUMBER_PATTERN = `(?:${(0, n.matchAnyPattern)(t.INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s{0,2}un?)?|un?\\b(?:\\s{0,2}qualcuno)?|qualcuno|molti|a?\\s{0,2}alcuni\\s{0,2}(?:of)?)`),
    (t.ORDINAL_NUMBER_PATTERN = `(?:${(0, n.matchAnyPattern)(t.ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:mo|ndo|rzo|simo|esimo)?)`),
    (t.YEAR_PATTERN = "(?:[1-9][0-9]{0,3}\\s{0,2}(?:BE|AD|BC|BCE|CE)|[1-2][0-9]{3}|[5-9][0-9])");
let s = `(${t.NUMBER_PATTERN})\\s{0,3}(${(0, n.matchAnyPattern)(t.TIME_UNIT_DICTIONARY)})`,
    o = RegExp(s, "i");
t.TIME_UNITS_PATTERN = (0, n.repeatedTimeunitPattern)("(?:(?:about|around)\\s{0,3})?", s);
