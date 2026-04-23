r.d(t, {
    CV: () => a,
    E9: () => w,
    EB: () => d,
    Pl: () => x,
    Wp: () => i,
    eB: () => o,
    fp: () => h,
    k8: () => g,
    lT: () => c,
    zL: () => f,
});
var n = r(476858),
    s = r(364242);
let a = {
        domenica: 0,
        dom: 0,
        lunedì: 1,
        lun: 1,
        martedì: 2,
        mar: 2,
        mercoledì: 3,
        merc: 3,
        giovedì: 4,
        giov: 4,
        venerdì: 5,
        ven: 5,
        sabato: 6,
        sab: 6,
    },
    i = {},
    o = {
        ...i,
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
    },
    l = {
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
    },
    u = {
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
    },
    d = {
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
    },
    m = `(?:${(0, n.uJ)(l)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s{0,2}un?)?|un?\\b(?:\\s{0,2}qualcuno)?|qualcuno|molti|a?\\s{0,2}alcuni\\s{0,2}(?:of)?)`,
    c = `(?:${(0, n.uJ)(u)}|[0-9]{1,2}(?:mo|ndo|rzo|simo|esimo)?)`;
function g(e) {
    let t = e.toLowerCase();
    return void 0 !== u[t]
        ? u[t]
        : parseInt((t = t.replace(/(?:imo|ndo|rzo|rto|nto|sto|tavo|nono|cimo|timo|esimo)$/i, "")));
}
let h = "(?:[1-9][0-9]{0,3}\\s{0,2}(?:BE|AD|BC|BCE|CE)|[1-2][0-9]{3}|[5-9][0-9])";
function f(e) {
    if (/BE/i.test(e)) return parseInt((e = e.replace(/BE/i, ""))) - 543;
    if (/BCE?/i.test(e)) return -parseInt((e = e.replace(/BCE?/i, "")));
    if (/(AD|CE)/i.test(e)) return parseInt((e = e.replace(/(AD|CE)/i, "")));
    let t = parseInt(e);
    return (0, s.D)(t);
}
let p = `(${m})\\s{0,3}(${(0, n.uJ)(d)})`,
    y = RegExp(p, "i"),
    x = (0, n.mb)("(?:(?:about|around)\\s{0,3})?", p);
function w(e) {
    let t = {},
        r = e,
        n = y.exec(r);
    for (; n; )
        (function (e, t) {
            let r = (function (e) {
                let t = e.toLowerCase();
                if (void 0 !== l[t]) return l[t];
                if ("un" === t || "una" === t) return 1;
                if (t.match(/alcuni/)) return 3;
                if (t.match(/metá/)) return 0.5;
                if (t.match(/paio/)) return 2;
                else if (t.match(/molti/)) return 7;
                return parseFloat(t);
            })(t[1]);
            e[d[t[2].toLowerCase()]] = r;
        })(t, n),
            (r = r.substring(n[0].length).trim()),
            (n = y.exec(r));
    return t;
}
