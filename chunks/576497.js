r.r(t),
    r.d(t, {
        parseDate: () => Y,
        casual: () => W,
        ReferenceWithTimezone: () => a.b5,
        ParsingResult: () => a.s4,
        createCasualConfiguration: () => z,
        Weekday: () => i.Bw,
        strict: () => S,
        Chrono: () => s.u,
        Meridiem: () => i.FF,
        ParsingComponents: () => a.BP,
        createConfiguration: () => L,
        parse: () => I,
    });
var n = r(132588),
    s = r(880683),
    a = r(374372),
    i = r(322811),
    o = r(774188),
    l = r(476858);
let u = {
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
    },
    m = {
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
    d = {
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
    c = {
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
    },
    g = `(?:${(0, l.uJ)(d)}|[0-9]+|[0-9]+\\.[0-9]+|un?|uno?|una?|algunos?|unos?|demi-?)`,
    h = `(${g})\\s{0,5}(${(0, l.uJ)(c)})\\s{0,5}`,
    f = RegExp(h, "i"),
    p = (0, l.mb)("", h);
var y = r(355418),
    x = r(1673);
let w = RegExp(
    `(?:(?:\\,|\\(|\\\u{FF08})\\s*)?(?:(este|esta|pasado|pr[o\xf3]ximo)\\s*)?(${(0, l.uJ)(u)})(?:\\s*(?:\\,|\\)|\\\u{FF09}))?(?:\\s*(este|esta|pasado|pr[\xf3o]ximo)\\s*semana)?(?=\\W|\\d|$)`,
    "i",
);
class D extends y.c {
    innerPattern() {
        return w;
    }
    innerExtract(e, t) {
        let r = u[t[2].toLowerCase()];
        if (void 0 === r) return null;
        let n = t[1],
            s = t[3],
            a = n || s || "";
        a = a.toLowerCase();
        let i = null;
        return (
            "pasado" == a
                ? (i = "this")
                : "pr\xf3ximo" == a || "proximo" == a
                  ? (i = "next")
                  : "este" == a && (i = "this"),
            (0, x.Y5)(e.reference, r, i)
        );
    }
}
var P = r(985971);
class F extends P.B {
    primaryPrefix() {
        return "(?:(?:aslas|deslas|las?|al?|de|del)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|a(?:l)?|\\?)\\s*";
    }
}
var C = r(230205);
class T extends C.A {
    patternBetween() {
        return RegExp("^\\s*(?:,|de|aslas|a)?\\s*$");
    }
}
var v = r(172609);
class M extends v.A {
    patternBetween() {
        return /^\s*(?:-)\s*$/i;
    }
}
var $ = r(364242);
let R = RegExp(
    `([0-9]{1,2})(?:\xba|\xaa|\xb0)?(?:\\s*(?:desde|de|\\-|\\\u{2013}|ao?|\\s)\\s*([0-9]{1,2})(?:\xba|\xaa|\xb0)?)?\\s*(?:de)?\\s*(?:-|/|\\s*(?:de|,)?\\s*)(${(0, l.uJ)(m)})(?:\\s*(?:de|,)?\\s*([0-9]{1,4}(?![^\\s]\\d)(?:\\s*[a|d]\\.?\\s*c\\.?|\\s*a\\.?\\s*d\\.?)?))?(?=\\W|$)`,
    "i",
);
class E extends y.c {
    innerPattern() {
        return R;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = m[t[3].toLowerCase()],
            s = parseInt(t[1]);
        if (s > 31) return (t.index = t.index + t[1].length), null;
        if ((r.start.assign("month", n), r.start.assign("day", s), t[4])) {
            let e = (function (e) {
                if (e.match(/^[0-9]{1,4}$/)) {
                    let t = parseInt(e);
                    return t < 100 && (t > 50 ? (t += 1900) : (t += 2e3)), t;
                }
                return e.match(/a\.?\s*c\.?/i) ? -parseInt((e = e.replace(/a\.?\s*c\.?/i, ""))) : parseInt(e);
            })(t[4]);
            r.start.assign("year", e);
        } else {
            let t = (0, $.Y)(e.refDate, s, n);
            r.start.imply("year", t);
        }
        if (t[2]) {
            let e = parseInt(t[2]);
            (r.end = r.start.clone()), r.end.assign("day", e);
        }
        return r;
    }
}
var b = r(996483);
class A extends y.c {
    innerPattern(e) {
        return /(ahora|hoy|ma\xf1ana|ayer)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = t[0].toLowerCase(),
            n = e.createParsingComponents();
        switch (r) {
            case "ahora":
                return b.tB(e.reference);
            case "hoy":
                return b.Ec(e.reference);
            case "ma\xf1ana":
                return b.uf(e.reference);
            case "ayer":
                return b.jI(e.reference);
        }
        return n;
    }
}
var k = r(881190);
class j extends y.c {
    innerPattern() {
        return /(?:esta\s*)?(ma\xf1ana|tarde|medianoche|mediodia|mediod\xeda|noche)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = e.createParsingComponents();
        switch (t[1].toLowerCase()) {
            case "tarde":
                n.imply("meridiem", i.FF.PM), n.imply("hour", 15);
                break;
            case "noche":
                n.imply("meridiem", i.FF.PM), n.imply("hour", 22);
                break;
            case "ma\xf1ana":
                n.imply("meridiem", i.FF.AM), n.imply("hour", 6);
                break;
            case "medianoche":
                let s = new Date(r.getTime());
                s.setDate(s.getDate() + 1),
                    (0, k.Pl)(n, s),
                    (0, k.A4)(n, s),
                    n.imply("hour", 0),
                    n.imply("minute", 0),
                    n.imply("second", 0);
                break;
            case "mediodia":
            case "mediod\xeda":
                n.imply("meridiem", i.FF.AM), n.imply("hour", 12);
        }
        return n;
    }
}
class B extends y.c {
    innerPattern() {
        return RegExp(`(?:en|por|durante|de|dentro de)\\s*(${p})(?=\\W|$)`, "i");
    }
    innerExtract(e, t) {
        let r = (function (e) {
            let t = {},
                r = e,
                n = f.exec(r);
            for (; n; )
                (function (e, t) {
                    let r = (function (e) {
                        let t = e.toLowerCase();
                        if (void 0 !== d[t]) return d[t];
                        if ("un" === t || "una" === t || "uno" === t) return 1;
                        if (t.match(/algunos?/)) return 3;
                        if (t.match(/unos?/)) return 3;
                        if (t.match(/media?/)) return 0.5;
                        return parseFloat(t);
                    })(t[1]);
                    e[c[t[2].toLowerCase()]] = r;
                })(t, n),
                    (r = r.substring(n[0].length)),
                    (n = f.exec(r));
            return t;
        })(t[1]);
        return a.BP.createRelativeFromReference(e.reference, r);
    }
}
let W = new s.u(z()),
    S = new s.u(L(!0));
function I(e, t, r) {
    return W.parse(e, t, r);
}
function Y(e, t, r) {
    return W.parseDate(e, t, r);
}
function z(e = !0) {
    let t = L(!1, e);
    return t.parsers.push(new A()), t.parsers.push(new j()), t;
}
function L(e = !0, t = !0) {
    return (0, n.i)({ parsers: [new o.A(t), new D(), new F(), new E(), new B()], refiners: [new T(), new M()] }, e);
}
