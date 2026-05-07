r.r(t),
    r.d(t, {
        parse: () => ey,
        GB: () => ep,
        casual: () => eh,
        parseDate: () => ex,
        createConfiguration: () => eD,
        strict: () => ef,
        createCasualConfiguration: () => ew,
    });
var n = r(476858),
    s = r(364242);
let a = {
        domenica: 0,
        dom: 0,
        "luned\xec": 1,
        lun: 1,
        "marted\xec": 2,
        mar: 2,
        "mercoled\xec": 3,
        merc: 3,
        "gioved\xec": 4,
        giov: 4,
        "venerd\xec": 5,
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
    m = {
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
    d = `(?:${(0, n.uJ)(l)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s{0,2}un?)?|un?\\b(?:\\s{0,2}qualcuno)?|qualcuno|molti|a?\\s{0,2}alcuni\\s{0,2}(?:of)?)`,
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
let p = `(${d})\\s{0,3}(${(0, n.uJ)(m)})`,
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
                if (t.match(/met\xe1/)) return 0.5;
                if (t.match(/paio/)) return 2;
                else if (t.match(/molti/)) return 7;
                return parseFloat(t);
            })(t[1]);
            e[m[t[2].toLowerCase()]] = r;
        })(t, n),
            (r = r.substring(n[0].length).trim()),
            (n = y.exec(r));
    return t;
}
var D = r(374372),
    P = r(355418);
let F = RegExp(
        `(?:within|in|for)\\s*(?:(?:pi\xf9 o meno|intorno|approssimativamente|verso|verso le)\\s*(?:~\\s*)?)?(${x})(?=\\W|$)`,
        "i",
    ),
    C = RegExp(`(?:(?:pi\xf9 o meno|intorno|approssimativamente|verso|verso le)\\s*(?:~\\s*)?)?(${x})(?=\\W|$)`, "i");
class T extends P.c {
    innerPattern(e) {
        return e.option.forwardDate ? C : F;
    }
    innerExtract(e, t) {
        let r = w(t[1]);
        return D.BP.createRelativeFromReference(e.reference, r);
    }
}
let v = RegExp(
    `(?:on\\s{0,3})?(${c})(?:\\s{0,3}(?:al|\\-|\\\u{2013}|fino|alle|allo)?\\s{0,3}(${c}))?(?:-|/|\\s{0,3}(?:dal)?\\s{0,3})(${(0, n.uJ)(o)})(?:(?:-|/|,?\\s{0,3})(${h}(?![^\\s]\\d)))?(?=\\W|$)`,
    "i",
);
class M extends P.c {
    innerPattern() {
        return v;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = o[t[3].toLowerCase()],
            a = g(t[1]);
        if (a > 31) return (t.index = t.index + t[1].length), null;
        if ((r.start.assign("month", n), r.start.assign("day", a), t[4])) {
            let e = f(t[4]);
            r.start.assign("year", e);
        } else {
            let t = (0, s.Y)(e.refDate, a, n);
            r.start.imply("year", t);
        }
        if (t[2]) {
            let e = g(t[2]);
            (r.end = r.start.clone()), r.end.assign("day", e);
        }
        return r;
    }
}
let $ = RegExp(
    `(${(0, n.uJ)(o)})(?:-|/|\\s*,?\\s*)(${c})(?!\\s*(?:am|pm))\\s*(?:(?:al|\\-|\\alle|\\del|\\s)\\s*(${c})\\s*)?(?:(?:-|/|\\s*,?\\s*)(${h}))?(?=\\W|$)(?!\\:\\d)`,
    "i",
);
class R extends P.c {
    innerPattern() {
        return $;
    }
    innerExtract(e, t) {
        let r = o[t[1].toLowerCase()],
            n = g(t[2]);
        if (n > 31) return null;
        let a = e.createParsingComponents({ day: n, month: r });
        if (t[4]) {
            let e = f(t[4]);
            a.assign("year", e);
        } else {
            let t = (0, s.Y)(e.refDate, n, r);
            a.imply("year", t);
        }
        if (!t[3]) return a;
        let i = g(t[3]),
            l = e.createParsingResult(t.index, t[0]);
        return (l.start = a), (l.end = a.clone()), l.end.assign("day", i), l;
    }
}
let E = RegExp(`((?:in)\\s*)?(${(0, n.uJ)(o)})\\s*(?:[,-]?\\s*(${h})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i");
class b extends P.c {
    innerPattern() {
        return E;
    }
    innerExtract(e, t) {
        let r = t[2].toLowerCase();
        if (t[0].length <= 3 && !i[r]) return null;
        let n = e.createParsingResult(t.index + (t[1] || "").length, t.index + t[0].length);
        n.start.imply("day", 1);
        let a = o[r];
        if ((n.start.assign("month", a), t[3])) {
            let e = f(t[3]);
            n.start.assign("year", e);
        } else {
            let t = (0, s.Y)(e.refDate, 1, a);
            n.start.imply("year", t);
        }
        return n;
    }
}
let A = RegExp(`([0-9]{4})[\\.\\/\\s](?:(${(0, n.uJ)(o)})|([0-9]{1,2}))[\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i");
class k extends P.c {
    innerPattern() {
        return A;
    }
    innerExtract(e, t) {
        let r = t[3] ? parseInt(t[3]) : o[t[2].toLowerCase()];
        if (r < 1 || r > 12) return null;
        let n = parseInt(t[1]);
        return { day: parseInt(t[4]), month: r, year: n };
    }
}
let j = RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i");
class B extends P.c {
    innerPattern() {
        return j;
    }
    innerExtract(e, t) {
        let r = parseInt(t[2]),
            n = parseInt(t[1]);
        return e.createParsingComponents().imply("day", 1).assign("month", n).assign("year", r);
    }
}
var W = r(322811),
    S = r(985971);
class I extends S.B {
    constructor(e) {
        super(e);
    }
    followingPhase() {
        return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|to|\\?)\\s*";
    }
    primaryPrefix() {
        return "(?:(?:alle|dalle)\\s*)??";
    }
    primarySuffix() {
        return "(?:\\s*(?:o\\W*in punto|alle\\s*sera|in\\s*del\\s*(?:mattina|pomeriggio)))?(?!/)(?=\\W|$)";
    }
    extractPrimaryTimeComponents(e, t) {
        let r = super.extractPrimaryTimeComponents(e, t);
        if (r) {
            if (t[0].endsWith("sera")) {
                let e = r.get("hour");
                e >= 6 && e < 12
                    ? (r.assign("hour", r.get("hour") + 12), r.assign("meridiem", W.FF.PM))
                    : e < 6 && r.assign("meridiem", W.FF.AM);
            }
            if (t[0].endsWith("pomeriggio")) {
                r.assign("meridiem", W.FF.PM);
                let e = r.get("hour");
                e >= 0 && e <= 6 && r.assign("hour", r.get("hour") + 12);
            }
            t[0].endsWith("mattina") &&
                (r.assign("meridiem", W.FF.AM), 12 > r.get("hour") && r.assign("hour", r.get("hour")));
        }
        return r;
    }
}
var Y = r(632434);
let z = RegExp(`(${x})\\s{0,5}(?:fa|prima|precedente)(?=(?:\\W|$))`, "i"),
    L = RegExp(`(${x})\\s{0,5}fa(?=(?:\\W|$))`, "i");
class N extends P.c {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? L : z;
    }
    innerExtract(e, t) {
        let r = w(t[1]),
            n = (0, Y.x4)(r);
        return D.BP.createRelativeFromReference(e.reference, n);
    }
}
let O = RegExp(`(${x})\\s{0,5}(?:dopo|pi\xf9 tardi|da adesso|avanti|oltre|a seguire)(?=(?:\\W|$))`, "i"),
    J = RegExp("(" + x + ")(dopo|pi\xf9 tardi)(?=(?:\\W|$))", "i");
class q extends P.c {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? J : O;
    }
    innerExtract(e, t) {
        let r = w(t[1]);
        return D.BP.createRelativeFromReference(e.reference, r);
    }
}
var H = r(172609);
class V extends H.A {
    patternBetween() {
        return /^\s*(to|-)\s*$/i;
    }
}
var U = r(230205);
class G extends U.A {
    patternBetween() {
        return RegExp("^\\s*(T|alle|dopo|prima|il|di|del|delle|,|-)?\\s*$");
    }
}
var Z = r(132588),
    K = r(881190),
    _ = r(996483);
let X = /(ora|oggi|stasera|questa sera|domani|dmn|ieri\s*sera)(?=\W|$)/i;
class Q extends P.c {
    innerPattern(e) {
        return X;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = t[0].toLowerCase(),
            s = e.createParsingComponents();
        switch (n) {
            case "ora":
                return _.tB(e.reference);
            case "oggi":
                return _.Ec(e.reference);
            case "ieri":
                return _.jI(e.reference);
            case "domani":
            case "dmn":
                return _.uf(e.reference);
            case "stasera":
            case "questa sera":
                return _.A_(e.reference);
            default:
                if (n.match(/ieri\s*sera/)) {
                    if (r.getHours() > 6) {
                        let e = new Date(r.getTime());
                        e.setDate(e.getDate() - 1), (r = e);
                    }
                    (0, K.Pl)(s, r), s.imply("hour", 0);
                }
        }
        return s;
    }
}
let ee = /(?:questo|questa)?\s{0,3}(mattina|pomeriggio|sera|notte|mezzanotte|mezzogiorno)(?=\W|$)/i;
class et extends P.c {
    innerPattern() {
        return ee;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = e.createParsingComponents();
        switch (t[1].toLowerCase()) {
            case "pomeriggio":
                n.imply("meridiem", W.FF.PM), n.imply("hour", 15);
                break;
            case "sera":
            case "notte":
                n.imply("meridiem", W.FF.PM), n.imply("hour", 20);
                break;
            case "mezzanotte":
                let s = new Date(r.getTime());
                s.setDate(s.getDate() + 1),
                    (0, K.Pl)(n, s),
                    (0, K.A4)(n, s),
                    n.imply("hour", 0),
                    n.imply("minute", 0),
                    n.imply("second", 0);
                break;
            case "mattina":
                n.imply("meridiem", W.FF.AM), n.imply("hour", 6);
                break;
            case "mezzogiorno":
                n.imply("meridiem", W.FF.AM), n.imply("hour", 12);
        }
        return n;
    }
}
var er = r(1673);
let en = RegExp(
    `(?:(?:\\,|\\(|\\\u{FF08})\\s*)?(?:il\\s*?)?(?:(questa|l'ultima|scorsa|prossima)\\s*)?(${(0, n.uJ)(a)})(?:\\s*(?:\\,|\\)|\\\u{FF09}))?(?:\\s*(questa|l'ultima|scorsa|prossima)\\s*settimana)?(?=\\W|$)`,
    "i",
);
class es extends P.c {
    innerPattern() {
        return en;
    }
    innerExtract(e, t) {
        let r = a[t[2].toLowerCase()],
            n = t[1],
            s = t[3],
            i = n || s;
        i = (i = i || "").toLowerCase();
        let o = null;
        return (
            "ultima" == i || "scorsa" == i
                ? (o = "ultima")
                : "prossima" == i
                  ? (o = "prossima")
                  : "questa" == i && (o = "questa"),
            (0, er.Y5)(e.reference, r, o)
        );
    }
}
let ea = RegExp(
    `(questo|ultimo|scorso|prossimo|dopo\\s*questo|questa|ultima|scorsa|prossima\\s*questa)\\s*(${(0, n.uJ)(m)})(?=\\s*)(?=\\W|$)`,
    "i",
);
class ei extends P.c {
    innerPattern() {
        return ea;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = t[2].toLowerCase(),
            s = m[n];
        if ("prossimo" == r || r.startsWith("dopo")) {
            let t = {};
            return (t[s] = 1), D.BP.createRelativeFromReference(e.reference, t);
        }
        if ("prima" == r || "precedente" == r) {
            let t = {};
            return (t[s] = -1), D.BP.createRelativeFromReference(e.reference, t);
        }
        let a = e.createParsingComponents(),
            i = new Date(e.reference.instant.getTime());
        return (
            n.match(/settimana/i)
                ? (i.setDate(i.getDate() - i.getDay()),
                  a.imply("day", i.getDate()),
                  a.imply("month", i.getMonth() + 1),
                  a.imply("year", i.getFullYear()))
                : n.match(/mese/i)
                  ? (i.setDate(1),
                    a.imply("day", i.getDate()),
                    a.assign("year", i.getFullYear()),
                    a.assign("month", i.getMonth() + 1))
                  : n.match(/anno/i) &&
                    (i.setDate(1),
                    i.setMonth(0),
                    a.imply("day", i.getDate()),
                    a.imply("month", i.getMonth() + 1),
                    a.assign("year", i.getFullYear())),
            a
        );
    }
}
var eo = r(880683),
    el = r(774188);
let eu = RegExp(`(questo|ultimo|passato|prossimo|dopo|questa|ultima|passata|prossima|\\+|-)\\s*(${x})(?=\\W|$)`, "i");
class em extends P.c {
    innerPattern() {
        return eu;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = w(t[2]);
        switch (r) {
            case "last":
            case "past":
            case "-":
                n = (0, Y.x4)(n);
        }
        return D.BP.createRelativeFromReference(e.reference, n);
    }
}
var ed = r(530560);
function ec(e) {
    return null != e.text.match(/\s+(prima|dal)$/i);
}
class eg extends ed.X {
    patternBetween() {
        return /^\s*$/i;
    }
    shouldMergeResults(e, t, r) {
        return (
            !!e.match(this.patternBetween()) &&
            (!!ec(t) || null != t.text.match(/\s+(dopo|dal|fino)$/i)) &&
            !!r.start.get("day") &&
            !!r.start.get("month") &&
            !!r.start.get("year")
        );
    }
    mergeResults(e, t, r) {
        let n = w(t.text);
        ec(t) && (n = (0, Y.x4)(n));
        let s = D.BP.createRelativeFromReference(D.b5.fromDate(r.start.date()), n);
        return new D.s4(r.reference, t.index, `${t.text}${e}${r.text}`, s);
    }
}
let eh = new eo.u(ew(!1)),
    ef = new eo.u(eD(!0, !1)),
    ep = new eo.u(eD(!1, !0));
function ey(e, t, r) {
    return eh.parse(e, t, r);
}
function ex(e, t, r) {
    return eh.parseDate(e, t, r);
}
function ew(e = !1) {
    let t = eD(!1, e);
    return (
        t.parsers.unshift(new Q()),
        t.parsers.unshift(new et()),
        t.parsers.unshift(new b()),
        t.parsers.unshift(new ei()),
        t.parsers.unshift(new em()),
        t
    );
}
function eD(e = !0, t = !1) {
    return (0, Z.i)(
        {
            parsers: [new el.A(t), new T(), new M(), new R(), new es(), new k(), new B(), new I(e), new N(e), new q(e)],
            refiners: [new eg(), new G(), new V()],
        },
        e,
    );
}
