n.d(t, {
    H6: () => _,
    JF: () => p,
    LN: () => a,
    RA: () => b,
    SH: () => m,
    _$: () => o,
    aK: () => f,
    km: () => E,
    pS: () => c,
});
var r = n(800911),
    i = n(140081);
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
    o = {
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
    s = {
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
    c = {
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
    u = `(?:${(0, r.q3)(s)}|[0-9]+|[0-9]+[\\.,][0-9]+|halve?|half|paar)`;
function d(e) {
    let t = e.toLowerCase();
    return void 0 !== s[t]
        ? s[t]
        : "paar" === t
          ? 2
          : "half" === t || t.match(/halve?/)
            ? 0.5
            : parseFloat(t.replace(",", "."));
}
let f = `(?:${(0, r.q3)(l)}|[0-9]{1,2}(?:ste|de)?)`;
function p(e) {
    let t = e.toLowerCase();
    return void 0 !== l[t] ? l[t] : parseInt((t = t.replace(/(?:ste|de)$/i, "")));
}
let _ = "(?:[1-9][0-9]{0,3}\\s*(?:voor Christus|na Christus)|[1-2][0-9]{3}|[5-9][0-9])";
function m(e) {
    if (/voor Christus/i.test(e)) return -parseInt((e = e.replace(/voor Christus/i, "")));
    if (/na Christus/i.test(e)) return parseInt((e = e.replace(/na Christus/i, "")));
    let t = parseInt(e);
    return (0, i.y)(t);
}
let h = `(${u})\\s{0,5}(${(0, r.q3)(c)})\\s{0,5}`,
    g = RegExp(h, "i"),
    E = (0, r.Xf)("(?:(?:binnen|in)\\s*)?", h);
function b(e) {
    let t = {},
        n = e,
        r = g.exec(n);
    for (; r; ) y(t, r), (n = n.substring(r[0].length)), (r = g.exec(n));
    return t;
}
function y(e, t) {
    let n = d(t[1]);
    e[c[t[2].toLowerCase()]] = n;
}
