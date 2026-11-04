((t.TIME_UNITS_PATTERN = t.YEAR_PATTERN = t.nj = t.EB = t.Vr = t.MONTH_DICTIONARY = t.WEEKDAY_DICTIONARY = void 0),
    (t.parseYear = function (e) {
        if (e.match(/^[0-9]{1,4}$/)) {
            let t = parseInt(e);
            return (t < 100 && (t > 50 ? (t += 1900) : (t += 2e3)), t);
        }
        return e.match(/a\.?\s*c\.?/i) ? -parseInt((e = e.replace(/a\.?\s*c\.?/i, ""))) : parseInt(e);
    }),
    (t.parseDuration = function (e) {
        let r = {},
            n = e,
            a = i.exec(n);
        for (; a;)
            ((function (e, r) {
                let n = (function (e) {
                    let r = e.toLowerCase();
                    if (void 0 !== t.Vr[r]) return t.Vr[r];
                    if ("un" === r || "una" === r || "uno" === r) return 1;
                    if (r.match(/algunos?/)) return 3;
                    if (r.match(/unos?/)) return 3;
                    if (r.match(/media?/)) return 0.5;
                    return parseFloat(r);
                })(r[1]);
                e[t.EB[r[2].toLowerCase()]] = n;
            })(r, a),
                (n = n.substring(a[0].length)),
                (a = i.exec(n)));
        return r;
    }));
let n = r(798401);
((t.WEEKDAY_DICTIONARY = {
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
    (t.Vr = {
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
    (t.EB = {
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
    (t.nj = `(?:${(0, n.matchAnyPattern)(t.Vr)}|[0-9]+|[0-9]+\\.[0-9]+|un?|uno?|una?|algunos?|unos?|demi-?)`),
    (t.YEAR_PATTERN = "[0-9]{1,4}(?![^\\s]\\d)(?:\\s*[a|d]\\.?\\s*c\\.?|\\s*a\\.?\\s*d\\.?)?"));
let a = `(${t.nj})\\s{0,5}(${(0, n.matchAnyPattern)(t.EB)})\\s{0,5}`,
    i = RegExp(a, "i");
t.TIME_UNITS_PATTERN = (0, n.repeatedTimeunitPattern)("", a);
