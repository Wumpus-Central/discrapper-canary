n.d(t, {
    H6: () => u,
    LN: () => i,
    RA: () => h,
    SH: () => d,
    _$: () => a,
    km: () => p,
});
var r = n(800911);
let i = {
        domingo: 0,
        dom: 0,
        lunes: 1,
        lun: 1,
        martes: 2,
        mar: 2,
        miércoles: 3,
        miercoles: 3,
        mié: 3,
        mie: 3,
        jueves: 4,
        jue: 4,
        viernes: 5,
        vie: 5,
        sábado: 6,
        sabado: 6,
        sáb: 6,
        sab: 6,
    },
    a = {
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
    },
    o = {
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
    },
    s = {
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
        día: "day",
        días: "day",
        semana: "week",
        semanas: "week",
        mes: "month",
        meses: "month",
        cuarto: "quarter",
        cuartos: "quarter",
        año: "year",
        años: "year",
    },
    l = `(?:${(0, r.q3)(o)}|[0-9]+|[0-9]+\\.[0-9]+|un?|uno?|una?|algunos?|unos?|demi-?)`;
function c(e) {
    let t = e.toLowerCase();
    if (void 0 !== o[t]) return o[t];
    if ("un" === t || "una" === t || "uno" === t) return 1;
    if (t.match(/algunos?/)) return 3;
    if (t.match(/unos?/)) return 3;
    if (t.match(/media?/)) return 0.5;
    return parseFloat(t);
}
let u = "[0-9]{1,4}(?![^\\s]\\d)(?:\\s*[a|d]\\.?\\s*c\\.?|\\s*a\\.?\\s*d\\.?)?";
function d(e) {
    if (e.match(/^[0-9]{1,4}$/)) {
        let t = parseInt(e);
        return t < 100 && (t > 50 ? (t += 1900) : (t += 2000)), t;
    }
    return e.match(/a\.?\s*c\.?/i) ? -parseInt((e = e.replace(/a\.?\s*c\.?/i, ""))) : parseInt(e);
}
let f = `(${l})\\s{0,5}(${(0, r.q3)(s)})\\s{0,5}`,
    _ = RegExp(f, "i"),
    p = (0, r.Xf)("", f);
function h(e) {
    let t = {},
        n = e,
        r = _.exec(n);
    for (; r; ) m(t, r), (n = n.substring(r[0].length)), (r = _.exec(n));
    return t;
}
function m(e, t) {
    let n = c(t[1]);
    e[s[t[2].toLowerCase()]] = n;
}
