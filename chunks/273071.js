Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.TIME_UNITS_PATTERN =
        t.YEAR_PATTERN =
        t.NUMBER_PATTERN =
        t.TIME_UNIT_DICTIONARY =
        t.INTEGER_WORD_DICTIONARY =
        t.MONTH_DICTIONARY =
        t.WEEKDAY_DICTIONARY =
            void 0),
    (t.parseNumberPattern = a),
    (t.parseYear = function (e) {
        if (e.match(/^[0-9]{1,4}$/)) {
            let t = parseInt(e);
            return t < 100 && (t > 50 ? (t += 1900) : (t += 2e3)), t;
        }
        return e.match(/a\.?\s*c\.?/i) ? -parseInt((e = e.replace(/a\.?\s*c\.?/i, ""))) : parseInt(e);
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
    if (void 0 !== t.INTEGER_WORD_DICTIONARY[r]) return t.INTEGER_WORD_DICTIONARY[r];
    if ("un" === r || "una" === r || "uno" === r) return 1;
    if (r.match(/algunos?/)) return 3;
    if (r.match(/unos?/)) return 3;
    if (r.match(/media?/)) return 0.5;
    return parseFloat(r);
}
(t.WEEKDAY_DICTIONARY = {
    domingo: 0,
    dom: 0,
    lunes: 1,
    lun: 1,
    martes: 2,
    mar: 2,
    "mi\xe9rcoles": 3,
    miercoles: 3,
    "mi\xe9": 3,
    mie: 3,
    jueves: 4,
    jue: 4,
    viernes: 5,
    vie: 5,
    "s\xe1bado": 6,
    sabado: 6,
    "s\xe1b": 6,
    sab: 6,
}),
    (t.MONTH_DICTIONARY = {
        enero: 1,
        ene: 1,
        "ene.": 1,
        febrero: 2,
        feb: 2,
        "feb.": 2,
        marzo: 3,
        mar: 3,
        "mar.": 3,
        abril: 4,
        abr: 4,
        "abr.": 4,
        mayo: 5,
        may: 5,
        "may.": 5,
        junio: 6,
        jun: 6,
        "jun.": 6,
        julio: 7,
        jul: 7,
        "jul.": 7,
        agosto: 8,
        ago: 8,
        "ago.": 8,
        septiembre: 9,
        setiembre: 9,
        sep: 9,
        "sep.": 9,
        octubre: 10,
        oct: 10,
        "oct.": 10,
        noviembre: 11,
        nov: 11,
        "nov.": 11,
        diciembre: 12,
        dic: 12,
        "dic.": 12,
    }),
    (t.INTEGER_WORD_DICTIONARY = {
        uno: 1,
        dos: 2,
        tres: 3,
        cuatro: 4,
        cinco: 5,
        seis: 6,
        siete: 7,
        ocho: 8,
        nueve: 9,
        diez: 10,
        once: 11,
        doce: 12,
        trece: 13,
    }),
    (t.TIME_UNIT_DICTIONARY = {
        sec: "second",
        segundo: "second",
        segundos: "second",
        min: "minute",
        mins: "minute",
        minuto: "minute",
        minutos: "minute",
        h: "hour",
        hr: "hour",
        hrs: "hour",
        hora: "hour",
        horas: "hour",
        "d\xeda": "day",
        "d\xedas": "day",
        semana: "week",
        semanas: "week",
        mes: "month",
        meses: "month",
        cuarto: "quarter",
        cuartos: "quarter",
        "a\xf1o": "year",
        "a\xf1os": "year",
    }),
    (t.NUMBER_PATTERN = `(?:${(0, n.matchAnyPattern)(t.INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|un?|uno?|una?|algunos?|unos?|demi-?)`),
    (t.YEAR_PATTERN = "[0-9]{1,4}(?![^\\s]\\d)(?:\\s*[a|d]\\.?\\s*c\\.?|\\s*a\\.?\\s*d\\.?)?");
let i = `(${t.NUMBER_PATTERN})\\s{0,5}(${(0, n.matchAnyPattern)(t.TIME_UNIT_DICTIONARY)})\\s{0,5}`,
    s = RegExp(i, "i");
t.TIME_UNITS_PATTERN = (0, n.repeatedTimeunitPattern)("", i);
