r.r(t),
    r.d(t, {
        parseDate: () => V,
        casual: () => J,
        ReferenceWithTimezone: () => a.b5,
        ParsingResult: () => a.s4,
        createCasualConfiguration: () => U,
        Weekday: () => i.Bw,
        strict: () => q,
        Chrono: () => s.u,
        Meridiem: () => i.FF,
        ParsingComponents: () => a.BP,
        createConfiguration: () => G,
        parse: () => H,
    });
var n = r(132588),
    s = r(880683),
    a = r(374372),
    i = r(322811),
    o = r(774188),
    l = r(368324),
    u = r(985971);
class m extends u.B {
    primaryPrefix() {
        return "(?:(?:um|von)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|bis)\\s*";
    }
    extractPrimaryTimeComponents(e, t) {
        return t[0].match(/^\s*\d{4}\s*$/) ? null : super.extractPrimaryTimeComponents(e, t);
    }
}
var d = r(476858),
    c = r(364242);
let g = {
        sonntag: 0,
        so: 0,
        montag: 1,
        mo: 1,
        dienstag: 2,
        di: 2,
        mittwoch: 3,
        mi: 3,
        donnerstag: 4,
        do: 4,
        freitag: 5,
        fr: 5,
        samstag: 6,
        sa: 6,
    },
    h = {
        januar: 1,
        "j\xe4nner": 1,
        janner: 1,
        jan: 1,
        "jan.": 1,
        februar: 2,
        feber: 2,
        feb: 2,
        "feb.": 2,
        "m\xe4rz": 3,
        maerz: 3,
        "m\xe4r": 3,
        "m\xe4r.": 3,
        mrz: 3,
        "mrz.": 3,
        april: 4,
        apr: 4,
        "apr.": 4,
        mai: 5,
        juni: 6,
        jun: 6,
        "jun.": 6,
        juli: 7,
        jul: 7,
        "jul.": 7,
        august: 8,
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
        dezember: 12,
        dez: 12,
        "dez.": 12,
    },
    f = {
        eins: 1,
        eine: 1,
        einem: 1,
        einen: 1,
        einer: 1,
        zwei: 2,
        drei: 3,
        vier: 4,
        "f\xfcnf": 5,
        fuenf: 5,
        sechs: 6,
        sieben: 7,
        acht: 8,
        neun: 9,
        zehn: 10,
        elf: 11,
        "zw\xf6lf": 12,
        zwoelf: 12,
    },
    p = {
        sek: "second",
        sekunde: "second",
        sekunden: "second",
        min: "minute",
        minute: "minute",
        minuten: "minute",
        h: "hour",
        std: "hour",
        stunde: "hour",
        stunden: "hour",
        tag: "day",
        tage: "day",
        tagen: "day",
        woche: "week",
        wochen: "week",
        monat: "month",
        monate: "month",
        monaten: "month",
        monats: "month",
        quartal: "quarter",
        quartals: "quarter",
        quartale: "quarter",
        quartalen: "quarter",
        a: "year",
        j: "year",
        jr: "year",
        jahr: "year",
        jahre: "year",
        jahren: "year",
        jahres: "year",
    },
    y = `(?:${(0, d.uJ)(f)}|[0-9]+|[0-9]+\\.[0-9]+|halb?|halbe?|einigen?|wenigen?|mehreren?)`;
function x(e) {
    let t = e.toLowerCase();
    if (void 0 !== f[t]) return f[t];
    if ("ein" === t || "einer" === t || "einem" === t || "einen" === t || "eine" === t) return 1;
    if (t.match(/wenigen/)) return 2;
    if (t.match(/halb/) || t.match(/halben/)) return 0.5;
    if (t.match(/einigen/)) return 3;
    else if (t.match(/mehreren/)) return 7;
    return parseFloat(t);
}
let w = `(${y})\\s{0,5}(${(0, d.uJ)(p)})\\s{0,5}`,
    D = RegExp(w, "i"),
    P = (0, d.mb)("", w);
var F = r(355418),
    C = r(1673);
let T = RegExp(
    `(?:(?:\\,|\\(|\\\u{FF08})\\s*)?(?:a[mn]\\s*?)?(?:(diese[mn]|letzte[mn]|n(?:\xe4|ae)chste[mn])\\s*)?(${(0, d.uJ)(g)})(?:\\s*(?:\\,|\\)|\\\u{FF09}))?(?:\\s*(diese|letzte|n(?:\xe4|ae)chste)\\s*woche)?(?=\\W|$)`,
    "i",
);
class v extends F.c {
    innerPattern() {
        return T;
    }
    innerExtract(e, t) {
        let r = g[t[2].toLowerCase()],
            n = t[1],
            s = t[3],
            a = n || s;
        a = (a = a || "").toLowerCase();
        let i = null;
        return (
            a.match(/letzte/) ? (i = "last") : a.match(/chste/) ? (i = "next") : a.match(/diese/) && (i = "this"),
            (0, C.Y5)(e.reference, r, i)
        );
    }
}
let M = RegExp(
        "(^|\\s|T)(?:(?:um|von)\\s*)?(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)",
        "i",
    ),
    $ = RegExp(
        "^\\s*(\\-|\\\u2013|\\~|\\\u301C|bis(?:\\s+um)?|\\?)\\s*(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)",
        "i",
    );
class R {
    pattern(e) {
        return M;
    }
    extract(e, t) {
        let r = e.createParsingResult(t.index + t[1].length, t[0].substring(t[1].length));
        if (r.text.match(/^\d{4}$/) || ((r.start = R.extractTimeComponent(r.start.clone(), t)), !r.start))
            return (t.index += t[0].length), null;
        let n = e.text.substring(t.index + t[0].length),
            s = $.exec(n);
        return s && ((r.end = R.extractTimeComponent(r.start.clone(), s)), r.end && (r.text += s[0])), r;
    }
    static extractTimeComponent(e, t) {
        let r = 0,
            n = 0,
            s = null;
        if (((r = parseInt(t[2])), null != t[3] && (n = parseInt(t[3])), n >= 60 || r > 24)) return null;
        if ((r >= 12 && (s = i.FF.PM), null != t[5])) {
            if (r > 12) return null;
            let e = t[5].toLowerCase();
            e.match(/morgen|vormittag/) && ((s = i.FF.AM), 12 == r && (r = 0)),
                e.match(/nachmittag|abend/) && ((s = i.FF.PM), 12 != r && (r += 12)),
                e.match(/nacht/) &&
                    (12 == r ? ((s = i.FF.AM), (r = 0)) : r < 6 ? (s = i.FF.AM) : ((s = i.FF.PM), (r += 12)));
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
var E = r(172609);
class b extends E.A {
    patternBetween() {
        return /^\s*(bis(?:\s*(?:am|zum))?|-)\s*$/i;
    }
}
var A = r(230205);
class k extends A.A {
    patternBetween() {
        return RegExp("^\\s*(T|um|am|,|-)?\\s*$");
    }
}
var j = r(881190);
class B extends F.c {
    innerPattern(e) {
        return /(diesen)?\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = t[2].toLowerCase(),
            s = e.createParsingComponents();
        return (0, j.A4)(s, r), B.extractTimeComponents(s, n);
    }
    static extractTimeComponents(e, t) {
        switch (t) {
            case "morgen":
                e.imply("hour", 6), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", i.FF.AM);
                break;
            case "vormittag":
                e.imply("hour", 9), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", i.FF.AM);
                break;
            case "mittag":
            case "mittags":
                e.imply("hour", 12), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", i.FF.AM);
                break;
            case "nachmittag":
                e.imply("hour", 15), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", i.FF.PM);
                break;
            case "abend":
                e.imply("hour", 18), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", i.FF.PM);
                break;
            case "nacht":
                e.imply("hour", 22), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", i.FF.PM);
                break;
            case "mitternacht":
                e.get("hour") > 1 && e.addDurationAsImplied({ day: 1 }),
                    e.imply("hour", 0),
                    e.imply("minute", 0),
                    e.imply("second", 0),
                    e.imply("meridiem", i.FF.AM);
        }
        return e;
    }
}
var W = r(996483),
    S = r(632434);
let I = RegExp(
    "(jetzt|heute|morgen|\xfcbermorgen|uebermorgen|gestern|vorgestern|letzte\\s*nacht)(?:\\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht))?(?=\\W|$)",
    "i",
);
class Y extends F.c {
    innerPattern(e) {
        return I;
    }
    innerExtract(e, t) {
        let r = e.reference.getDateWithAdjustedTimezone(),
            n = (t[1] || "").toLowerCase(),
            s = (t[2] || "").toLowerCase(),
            a = e.createParsingComponents();
        switch (n) {
            case "jetzt":
                a = W.tB(e.reference);
                break;
            case "heute":
                a = W.Ec(e.reference);
                break;
            case "morgen":
                (r = (0, S.Gw)(r, { day: 1 })), (0, j.Pl)(a, r), (0, j.A4)(a, r);
                break;
            case "\xfcbermorgen":
            case "uebermorgen":
                (r = (0, S.Gw)(r, { day: 2 })), (0, j.Pl)(a, r), (0, j.A4)(a, r);
                break;
            case "gestern":
                (r = (0, S.Gw)(r, { day: -1 })), (0, j.Pl)(a, r), (0, j.A4)(a, r);
                break;
            case "vorgestern":
                (r = (0, S.Gw)(r, { day: -2 })), (0, j.Pl)(a, r), (0, j.A4)(a, r);
                break;
            default:
                n.match(/letzte\s*nacht/) &&
                    (r.getHours() > 6 && (r = (0, S.Gw)(r, { day: -1 })), (0, j.Pl)(a, r), a.imply("hour", 0));
        }
        return s && (a = B.extractTimeComponents(a, s)), a;
    }
}
let z = RegExp(
    `(?:am\\s*?)?(?:den\\s*?)?([0-9]{1,2})\\.(?:\\s*(?:bis(?:\\s*(?:am|zum))?|\\-|\\\u{2013}|\\s)\\s*([0-9]{1,2})\\.?)?\\s*(${(0, d.uJ)(h)})(?:(?:-|/|,?\\s*)((?:[0-9]{1,4}(?:\\s*[vn]\\.?\\s*(?:C(?:hr)?|(?:u\\.?|d\\.?(?:\\s*g\\.?)?)?\\s*Z)\\.?|\\s*(?:u\\.?|d\\.?(?:\\s*g\\.)?)\\s*Z\\.?)?)(?![^\\s]\\d)))?(?=\\W|$)`,
    "i",
);
class L extends F.c {
    innerPattern() {
        return z;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = h[t[3].toLowerCase()],
            s = parseInt(t[1]);
        if (s > 31) return (t.index = t.index + t[1].length), null;
        if ((r.start.assign("month", n), r.start.assign("day", s), t[4])) {
            let e = (function (e) {
                if (/v/i.test(e)) return -parseInt(e.replace(/[^0-9]+/gi, ""));
                if (/n/i.test(e) || /z/i.test(e)) return parseInt(e.replace(/[^0-9]+/gi, ""));
                let t = parseInt(e);
                return (0, c.D)(t);
            })(t[4]);
            r.start.assign("year", e);
        } else {
            let t = (0, c.Y)(e.refDate, s, n);
            r.start.imply("year", t);
        }
        if (t[2]) {
            let e = parseInt(t[2]);
            (r.end = r.start.clone()), r.end.assign("day", e);
        }
        return r;
    }
}
class N extends F.c {
    constructor() {
        super();
    }
    innerPattern() {
        return RegExp(
            `(?:\\s*((?:n\xe4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?(${y})?(?:\\s*(n\xe4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?\\s*(${(0, d.uJ)(p)})`,
            "i",
        );
    }
    innerExtract(e, t) {
        let r = t[2] ? x(t[2]) : 1,
            n = p[t[4].toLowerCase()],
            s = {};
        s[n] = r;
        let i = t[1] || t[3] || "";
        if ((i = i.toLowerCase()))
            return (
                (/vor/.test(i) || /letzte/.test(i) || /vergangen/.test(i)) && (s = (0, S.x4)(s)),
                a.BP.createRelativeFromReference(e.reference, s)
            );
    }
}
class O extends F.c {
    innerPattern() {
        return RegExp(`(?:in|f\xfcr|w\xe4hrend)\\s*(${P})(?=\\W|$)`, "i");
    }
    innerExtract(e, t) {
        let r = (function (e) {
            let t = {},
                r = e,
                n = D.exec(r);
            for (; n; )
                (function (e, t) {
                    let r = x(t[1]);
                    e[p[t[2].toLowerCase()]] = r;
                })(t, n),
                    (r = r.substring(n[0].length)),
                    (n = D.exec(r));
            return t;
        })(t[1]);
        return a.BP.createRelativeFromReference(e.reference, r);
    }
}
let J = new s.u(U()),
    q = new s.u(G(!0));
function H(e, t, r) {
    return J.parse(e, t, r);
}
function V(e, t, r) {
    return J.parseDate(e, t, r);
}
function U(e = !0) {
    let t = G(!1, e);
    return t.parsers.unshift(new B()), t.parsers.unshift(new Y()), t.parsers.unshift(new N()), t;
}
function G(e = !0, t = !0) {
    return (0, n.i)(
        { parsers: [new l.A(), new o.A(t), new m(), new R(), new L(), new v(), new O()], refiners: [new b(), new k()] },
        e,
    );
}
