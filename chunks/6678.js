r.d(t, {
    CV: () => s,
    E9: () => y,
    EB: () => o,
    Pl: () => p,
    eB: () => a,
    fp: () => c,
    k8: () => m,
    lT: () => d,
    nj: () => l,
    zL: () => g,
    zp: () => u,
});
var n = r(476858);
let s = {
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
    },
    a = {
        janvier: 1,
        jan: 1,
        "jan.": 1,
        février: 2,
        fév: 2,
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
        août: 8,
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
        décembre: 12,
        decembre: 12,
        dec: 12,
        "dec.": 12,
    },
    i = {
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
    },
    o = {
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
        année: "year",
        années: "year",
    },
    l = `(?:${(0, n.uJ)(i)}|[0-9]+|[0-9]+\\.[0-9]+|une?\\b|quelques?|demi-?)`;
function u(e) {
    let t = e.toLowerCase();
    return void 0 !== i[t]
        ? i[t]
        : "une" === t || "un" === t
          ? 1
          : t.match(/quelques?/)
            ? 3
            : t.match(/demi-?/)
              ? 0.5
              : parseFloat(t);
}
let d = "(?:[0-9]{1,2}(?:er)?)";
function m(e) {
    let t = e.toLowerCase();
    return parseInt((t = t.replace(/(?:er)$/i, "")));
}
let c = "(?:[1-9][0-9]{0,3}\\s*(?:AC|AD|p\\.\\s*C(?:hr?)?\\.\\s*n\\.)|[1-2][0-9]{3}|[5-9][0-9])";
function g(e) {
    if (/AC/i.test(e)) return -parseInt((e = e.replace(/BC/i, "")));
    if (/AD/i.test(e) || /C/i.test(e)) return parseInt((e = e.replace(/[^\d]+/i, "")));
    let t = parseInt(e);
    return t < 100 && (t > 50 ? (t += 1900) : (t += 2e3)), t;
}
let h = `(${l})\\s{0,5}(${(0, n.uJ)(o)})\\s{0,5}`,
    f = RegExp(h, "i"),
    p = (0, n.mb)("", h);
function y(e) {
    let t = {},
        r = e,
        n = f.exec(r);
    for (; n; )
        (function (e, t) {
            let r = u(t[1]);
            e[o[t[2].toLowerCase()]] = r;
        })(t, n),
            (r = r.substring(n[0].length)),
            (n = f.exec(r));
    return t;
}
