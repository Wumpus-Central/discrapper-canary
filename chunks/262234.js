r.r(t),
    r.d(t, {
        parseDate: () => G,
        casual: () => H,
        ReferenceWithTimezone: () => a.b5,
        ParsingResult: () => a.s4,
        createCasualConfiguration: () => Z,
        Weekday: () => i.Bw,
        strict: () => V,
        Chrono: () => s.u,
        Meridiem: () => i.FF,
        ParsingComponents: () => a.BP,
        createConfiguration: () => K,
        parse: () => U,
    });
var n = r(132588),
    s = r(880683),
    a = r(374372),
    i = r(322811),
    o = r(355418),
    l = r(881190),
    u = r(996483);
class m extends o.c {
    innerPattern(e) {
        return /(maintenant|aujourd'hui|demain|hier|cette\s*nuit|la\s*veille)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = t[0].toLowerCase(),
            s = e.createParsingComponents();
        switch (n) {
            case "maintenant":
                return u.tB(e.reference);
            case "aujourd'hui":
                return u.Ec(e.reference);
            case "hier":
                return u.jI(e.reference);
            case "demain":
                return u.uf(e.reference);
            default:
                if (n.match(/cette\s*nuit/)) (0, l.Pl)(s, r), s.imply("hour", 22), s.imply("meridiem", i.FF.PM);
                else if (n.match(/la\s*veille/)) {
                    let e = new Date(r.getTime());
                    e.setDate(e.getDate() - 1), (0, l.Pl)(s, e), s.imply("hour", 0);
                }
        }
        return s;
    }
}
class d extends o.c {
    innerPattern(e) {
        return /(cet?)?\s*(matin|soir|apr\xe8s-midi|aprem|a midi|\xe0 minuit)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = t[2].toLowerCase(),
            n = e.createParsingComponents();
        switch (r) {
            case "apr\xe8s-midi":
            case "aprem":
                n.imply("hour", 14), n.imply("minute", 0), n.imply("meridiem", i.FF.PM);
                break;
            case "soir":
                n.imply("hour", 18), n.imply("minute", 0), n.imply("meridiem", i.FF.PM);
                break;
            case "matin":
                n.imply("hour", 8), n.imply("minute", 0), n.imply("meridiem", i.FF.AM);
                break;
            case "a midi":
                n.imply("hour", 12), n.imply("minute", 0), n.imply("meridiem", i.FF.AM);
                break;
            case "\xe0 minuit":
                n.imply("hour", 0), n.imply("meridiem", i.FF.AM);
        }
        return n;
    }
}
var c = r(774188),
    g = r(985971);
class h extends g.B {
    primaryPrefix() {
        return "(?:(?:[\xe0a])\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|[\xe0a]|\\?)\\s*";
    }
    extractPrimaryTimeComponents(e, t) {
        return t[0].match(/^\s*\d{4}\s*$/) ? null : super.extractPrimaryTimeComponents(e, t);
    }
}
var f = r(230205);
class p extends f.A {
    patternBetween() {
        return RegExp("^\\s*(T|\xe0|a|au|vers|de|,|-)?\\s*$");
    }
}
var y = r(172609);
class x extends y.A {
    patternBetween() {
        return /^\s*(\xe0|a|au|-)\s*$/i;
    }
}
var w = r(476858);
let D = {
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
    P = {
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
    },
    F = {
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
    C = {
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
    },
    T = `(?:${(0, w.uJ)(F)}|[0-9]+|[0-9]+\\.[0-9]+|une?\\b|quelques?|demi-?)`;
function v(e) {
    let t = e.toLowerCase();
    return void 0 !== F[t]
        ? F[t]
        : "une" === t || "un" === t
          ? 1
          : t.match(/quelques?/)
            ? 3
            : t.match(/demi-?/)
              ? 0.5
              : parseFloat(t);
}
let M = "(?:[0-9]{1,2}(?:er)?)";
function $(e) {
    let t = e.toLowerCase();
    return parseInt((t = t.replace(/(?:er)$/i, "")));
}
let R = `(${T})\\s{0,5}(${(0, w.uJ)(C)})\\s{0,5}`,
    E = RegExp(R, "i"),
    b = (0, w.mb)("", R);
function A(e) {
    let t = {},
        r = e,
        n = E.exec(r);
    for (; n; )
        (function (e, t) {
            let r = v(t[1]);
            e[C[t[2].toLowerCase()]] = r;
        })(t, n),
            (r = r.substring(n[0].length)),
            (n = E.exec(r));
    return t;
}
var k = r(1673);
let j = RegExp(
    `(?:(?:\\,|\\(|\\\u{FF08})\\s*)?(?:(?:ce)\\s*)?(${(0, w.uJ)(D)})(?:\\s*(?:\\,|\\)|\\\u{FF09}))?(?:\\s*(dernier|prochain)\\s*)?(?=\\W|\\d|$)`,
    "i",
);
class B extends o.c {
    innerPattern() {
        return j;
    }
    innerExtract(e, t) {
        let r = D[t[1].toLowerCase()];
        if (void 0 === r) return null;
        let n = t[2];
        n = (n = n || "").toLowerCase();
        let s = null;
        return "dernier" == n ? (s = "last") : "prochain" == n && (s = "next"), (0, k.Y5)(e.reference, r, s);
    }
}
let W = RegExp(
        "(^|\\s|T)(?:(?:[\xe0a])\\s*)?(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s|:)?)?(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?(?=\\W|$)",
        "i",
    ),
    S = RegExp(
        "^\\s*(\\-|\\\u2013|\\~|\\\u301C|[\xe0a]|\\?)\\s*(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s|:)?)?(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?(?=\\W|$)",
        "i",
    );
class I {
    pattern(e) {
        return W;
    }
    extract(e, t) {
        let r = e.createParsingResult(t.index + t[1].length, t[0].substring(t[1].length));
        if (r.text.match(/^\d{4}$/) || ((r.start = I.extractTimeComponent(r.start.clone(), t)), !r.start))
            return (t.index += t[0].length), null;
        let n = e.text.substring(t.index + t[0].length),
            s = S.exec(n);
        return s && ((r.end = I.extractTimeComponent(r.start.clone(), s)), r.end && (r.text += s[0])), r;
    }
    static extractTimeComponent(e, t) {
        let r = 0,
            n = 0,
            s = null;
        if (((r = parseInt(t[2])), null != t[3] && (n = parseInt(t[3])), n >= 60 || r > 24)) return null;
        if ((r >= 12 && (s = i.FF.PM), null != t[5])) {
            if (r > 12) return null;
            let e = t[5][0].toLowerCase();
            "a" == e && ((s = i.FF.AM), 12 == r && (r = 0)), "p" == e && ((s = i.FF.PM), 12 != r && (r += 12));
        }
        if (
            (e.assign("hour", r),
            e.assign("minute", n),
            null !== s ? e.assign("meridiem", s) : r < 12 ? e.imply("meridiem", i.FF.AM) : e.imply("meridiem", i.FF.PM),
            null != t[4])
        ) {
            let r = parseInt(t[4]);
            if (r >= 60) return null;
            e.assign("second", r);
        }
        return e;
    }
}
var Y = r(364242);
let z = RegExp(
    `(?:on\\s*?)?(${M})(?:\\s*(?:au|\\-|\\\u{2013}|jusqu'au?|\\s)\\s*(${M}))?(?:-|/|\\s*(?:de)?\\s*)(${(0, w.uJ)(P)})(?:(?:-|/|,?\\s*)((?:[1-9][0-9]{0,3}\\s*(?:AC|AD|p\\.\\s*C(?:hr?)?\\.\\s*n\\.)|[1-2][0-9]{3}|[5-9][0-9])(?![^\\s]\\d)))?(?=\\W|$)`,
    "i",
);
class L extends o.c {
    innerPattern() {
        return z;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = P[t[3].toLowerCase()],
            s = $(t[1]);
        if (s > 31) return (t.index = t.index + t[1].length), null;
        if ((r.start.assign("month", n), r.start.assign("day", s), t[4])) {
            let e = (function (e) {
                if (/AC/i.test(e)) return -parseInt((e = e.replace(/BC/i, "")));
                if (/AD/i.test(e) || /C/i.test(e)) return parseInt((e = e.replace(/[^\d]+/i, "")));
                let t = parseInt(e);
                return t < 100 && (t > 50 ? (t += 1900) : (t += 2e3)), t;
            })(t[4]);
            r.start.assign("year", e);
        } else {
            let t = (0, Y.Y)(e.refDate, s, n);
            r.start.imply("year", t);
        }
        if (t[2]) {
            let e = $(t[2]);
            (r.end = r.start.clone()), r.end.assign("day", e);
        }
        return r;
    }
}
var N = r(632434);
class O extends o.c {
    constructor() {
        super();
    }
    innerPattern() {
        return RegExp(`il y a\\s*(${b})(?=(?:\\W|$))`, "i");
    }
    innerExtract(e, t) {
        let r = A(t[1]),
            n = (0, N.x4)(r);
        return a.BP.createRelativeFromReference(e.reference, n);
    }
}
class J extends o.c {
    innerPattern() {
        return RegExp(`(?:dans|en|pour|pendant|de)\\s*(${b})(?=\\W|$)`, "i");
    }
    innerExtract(e, t) {
        let r = A(t[1]);
        return a.BP.createRelativeFromReference(e.reference, r);
    }
}
class q extends o.c {
    constructor() {
        super();
    }
    innerPattern() {
        return RegExp(
            `(?:les?|la|l'|du|des?)\\s*(${T})?(?:\\s*(prochaine?s?|derni[e\xe8]re?s?|pass[\xe9e]e?s?|pr[\xe9e]c[\xe9e]dents?|suivante?s?))?\\s*(${(0, w.uJ)(C)})(?:\\s*(prochaine?s?|derni[e\xe8]re?s?|pass[\xe9e]e?s?|pr[\xe9e]c[\xe9e]dents?|suivante?s?))?`,
            "i",
        );
    }
    innerExtract(e, t) {
        let r = t[1] ? v(t[1]) : 1,
            n = C[t[3].toLowerCase()],
            s = {};
        s[n] = r;
        let i = t[2] || t[4] || "";
        if ((i = i.toLowerCase()))
            return (
                (/derni[e\xe8]re?s?/.test(i) || /pass[\xe9e]e?s?/.test(i) || /pr[\xe9e]c[\xe9e]dents?/.test(i)) &&
                    (s = (0, N.x4)(s)),
                a.BP.createRelativeFromReference(e.reference, s)
            );
    }
}
let H = new s.u(Z()),
    V = new s.u(K(!0));
function U(e, t, r) {
    return H.parse(e, t, r);
}
function G(e, t, r) {
    return H.parseDate(e, t, r);
}
function Z(e = !0) {
    let t = K(!1, e);
    return t.parsers.unshift(new m()), t.parsers.unshift(new d()), t.parsers.unshift(new q()), t;
}
function K(e = !0, t = !0) {
    return (0, n.i)(
        { parsers: [new c.A(t), new L(), new h(), new I(), new O(), new J(), new B()], refiners: [new p(), new x()] },
        e,
    );
}
