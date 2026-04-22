r.d(t, {
    CV: () => a,
    E9: () => x,
    EB: () => u,
    Pl: () => y,
    eB: () => i,
    fp: () => g,
    k8: () => c,
    lT: () => m,
    zL: () => h,
});
var n = r(476858),
    s = r(364242);
let a = {
        zondag: 0,
        zon: 0,
        "zon.": 0,
        zo: 0,
        "zo.": 0,
        maandag: 1,
        ma: 1,
        "ma.": 1,
        dinsdag: 2,
        din: 2,
        "din.": 2,
        di: 2,
        "di.": 2,
        woensdag: 3,
        woe: 3,
        "woe.": 3,
        wo: 3,
        "wo.": 3,
        donderdag: 4,
        dond: 4,
        "dond.": 4,
        do: 4,
        "do.": 4,
        vrijdag: 5,
        vrij: 5,
        "vrij.": 5,
        vr: 5,
        "vr.": 5,
        zaterdag: 6,
        zat: 6,
        "zat.": 6,
        za: 6,
        "za.": 6,
    },
    i = {
        januari: 1,
        jan: 1,
        "jan.": 1,
        februari: 2,
        feb: 2,
        "feb.": 2,
        maart: 3,
        mar: 3,
        "mar.": 3,
        mrt: 3,
        "mrt.": 3,
        april: 4,
        apr: 4,
        "apr.": 4,
        mei: 5,
        juni: 6,
        jun: 6,
        "jun.": 6,
        juli: 7,
        jul: 7,
        "jul.": 7,
        augustus: 8,
        aug: 8,
        "aug.": 8,
        september: 9,
        sep: 9,
        "sep.": 9,
        sept: 9,
        "sept.": 9,
        oktober: 10,
        okt: 10,
        "okt.": 10,
        november: 11,
        nov: 11,
        "nov.": 11,
        december: 12,
        dec: 12,
        "dec.": 12,
    },
    o = {
        een: 1,
        twee: 2,
        drie: 3,
        vier: 4,
        vijf: 5,
        zes: 6,
        zeven: 7,
        acht: 8,
        negen: 9,
        tien: 10,
        elf: 11,
        twaalf: 12,
    },
    l = {
        eerste: 1,
        tweede: 2,
        derde: 3,
        vierde: 4,
        vijfde: 5,
        zesde: 6,
        zevende: 7,
        achtste: 8,
        negende: 9,
        tiende: 10,
        elfde: 11,
        twaalfde: 12,
        dertiende: 13,
        veertiende: 14,
        vijftiende: 15,
        zestiende: 16,
        zeventiende: 17,
        achttiende: 18,
        negentiende: 19,
        twintigste: 20,
        eenentwintigste: 21,
        tweeëntwintigste: 22,
        drieentwintigste: 23,
        vierentwintigste: 24,
        vijfentwintigste: 25,
        zesentwintigste: 26,
        zevenentwintigste: 27,
        achtentwintig: 28,
        negenentwintig: 29,
        dertigste: 30,
        eenendertigste: 31,
    },
    u = {
        sec: "second",
        second: "second",
        seconden: "second",
        min: "minute",
        mins: "minute",
        minute: "minute",
        minuut: "minute",
        minuten: "minute",
        minuutje: "minute",
        h: "hour",
        hr: "hour",
        hrs: "hour",
        uur: "hour",
        u: "hour",
        uren: "hour",
        dag: "day",
        dagen: "day",
        week: "week",
        weken: "week",
        maand: "month",
        maanden: "month",
        jaar: "year",
        jr: "year",
        jaren: "year",
    },
    d = `(?:${(0, n.uJ)(o)}|[0-9]+|[0-9]+[\\.,][0-9]+|halve?|half|paar)`,
    m = `(?:${(0, n.uJ)(l)}|[0-9]{1,2}(?:ste|de)?)`;
function c(e) {
    let t = e.toLowerCase();
    return void 0 !== l[t] ? l[t] : parseInt((t = t.replace(/(?:ste|de)$/i, "")));
}
let g = "(?:[1-9][0-9]{0,3}\\s*(?:voor Christus|na Christus)|[1-2][0-9]{3}|[5-9][0-9])";
function h(e) {
    if (/voor Christus/i.test(e)) return -parseInt((e = e.replace(/voor Christus/i, "")));
    if (/na Christus/i.test(e)) return parseInt((e = e.replace(/na Christus/i, "")));
    let t = parseInt(e);
    return (0, s.D)(t);
}
let f = `(${d})\\s{0,5}(${(0, n.uJ)(u)})\\s{0,5}`,
    p = RegExp(f, "i"),
    y = (0, n.mb)("(?:(?:binnen|in)\\s*)?", f);
function x(e) {
    let t = {},
        r = e,
        n = p.exec(r);
    for (; n; )
        (function (e, t) {
            let r = (function (e) {
                let t = e.toLowerCase();
                return void 0 !== o[t]
                    ? o[t]
                    : "paar" === t
                      ? 2
                      : "half" === t || t.match(/halve?/)
                        ? 0.5
                        : parseFloat(t.replace(",", "."));
            })(t[1]);
            e[u[t[2].toLowerCase()]] = r;
        })(t, n),
            (r = r.substring(n[0].length)),
            (n = p.exec(r));
    return t;
}
