Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.TIME_UNITS_PATTERN =
        t.YEAR_PATTERN =
        t.ORDINAL_NUMBER_PATTERN =
        t.NUMBER_PATTERN =
        t.TIME_UNIT_DICTIONARY =
        t.INTEGER_WORD_DICTIONARY =
        t.MONTH_DICTIONARY =
        t.WEEKDAY_DICTIONARY =
            void 0),
    (t.parseNumberPattern = a),
    (t.parseOrdinalNumberPattern = function (e) {
        let t = e.toLowerCase();
        return parseInt((t = t.replace(/(?:er)$/i, "")));
    }),
    (t.parseYear = function (e) {
        if (/AC/i.test(e)) return -parseInt((e = e.replace(/BC/i, "")));
        if (/AD/i.test(e) || /C/i.test(e)) return parseInt((e = e.replace(/[^\d]+/i, "")));
        let t = parseInt(e);
        return t < 100 && (t > 50 ? (t += 1900) : (t += 2e3)), t;
    }),
    (t.parseDuration = function (e) {
        let r = {},
            n = e,
            i = s.exec(n);
        for (; i; )
            (function (e, r) {
                let n = a(r[1]);
                e[t.TIME_UNIT_DICTIONARY[r[2].toLowerCase()]] = n;
            })(r, i),
                (n = n.substring(i[0].length)),
                (i = s.exec(n));
        return r;
    });
let n = r(798401);
function a(e) {
    let r = e.toLowerCase();
    return void 0 !== t.INTEGER_WORD_DICTIONARY[r]
        ? t.INTEGER_WORD_DICTIONARY[r]
        : "une" === r || "un" === r
          ? 1
          : r.match(/quelques?/)
            ? 3
            : r.match(/demi-?/)
              ? 0.5
              : parseFloat(r);
}
(t.WEEKDAY_DICTIONARY = {
    dimanche: 0,
    dim: 0,
    lundi: 1,
    lun: 1,
    mardi: 2,
    mar: 2,
    mercredi: 3,
    mer: 3,
    jeudi: 4,
    jeu: 4,
    vendredi: 5,
    ven: 5,
    samedi: 6,
    sam: 6,
}),
    (t.MONTH_DICTIONARY = {
        janvier: 1,
        jan: 1,
        "jan.": 1,
        "f\xe9vrier": 2,
        "f\xe9v": 2,
        "f\xe9v.": 2,
        fevrier: 2,
        fev: 2,
        "fev.": 2,
        mars: 3,
        mar: 3,
        "mar.": 3,
        avril: 4,
        avr: 4,
        "avr.": 4,
        mai: 5,
        juin: 6,
        jun: 6,
        juillet: 7,
        juil: 7,
        jul: 7,
        "jul.": 7,
        "ao\xfbt": 8,
        aout: 8,
        septembre: 9,
        sep: 9,
        "sep.": 9,
        sept: 9,
        "sept.": 9,
        octobre: 10,
        oct: 10,
        "oct.": 10,
        novembre: 11,
        nov: 11,
        "nov.": 11,
        "d\xe9cembre": 12,
        decembre: 12,
        dec: 12,
        "dec.": 12,
    }),
    (t.INTEGER_WORD_DICTIONARY = {
        un: 1,
        deux: 2,
        trois: 3,
        quatre: 4,
        cinq: 5,
        six: 6,
        sept: 7,
        huit: 8,
        neuf: 9,
        dix: 10,
        onze: 11,
        douze: 12,
        treize: 13,
    }),
    (t.TIME_UNIT_DICTIONARY = {
        sec: "second",
        seconde: "second",
        secondes: "second",
        min: "minute",
        mins: "minute",
        minute: "minute",
        minutes: "minute",
        h: "hour",
        hr: "hour",
        hrs: "hour",
        heure: "hour",
        heures: "hour",
        jour: "day",
        jours: "day",
        semaine: "week",
        semaines: "week",
        mois: "month",
        trimestre: "quarter",
        trimestres: "quarter",
        ans: "year",
        "ann\xe9e": "year",
        "ann\xe9es": "year",
    }),
    (t.NUMBER_PATTERN = `(?:${(0, n.matchAnyPattern)(t.INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|une?\\b|quelques?|demi-?)`),
    (t.ORDINAL_NUMBER_PATTERN = "(?:[0-9]{1,2}(?:er)?)"),
    (t.YEAR_PATTERN = "(?:[1-9][0-9]{0,3}\\s*(?:AC|AD|p\\.\\s*C(?:hr?)?\\.\\s*n\\.)|[1-2][0-9]{3}|[5-9][0-9])");
let i = `(${t.NUMBER_PATTERN})\\s{0,5}(${(0, n.matchAnyPattern)(t.TIME_UNIT_DICTIONARY)})\\s{0,5}`,
    s = RegExp(i, "i");
t.TIME_UNITS_PATTERN = (0, n.repeatedTimeunitPattern)("", i);
