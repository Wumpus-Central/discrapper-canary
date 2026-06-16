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
    l = r(368324),
    u = r(476858),
    m = r(364242);
let d = {
        "s\xf6ndag": 0,
        "s\xf6n": 0,
        so: 0,
        "m\xe5ndag": 1,
        "m\xe5n": 1,
        "m\xe5": 1,
        tisdag: 2,
        tis: 2,
        ti: 2,
        onsdag: 3,
        ons: 3,
        on: 3,
        torsdag: 4,
        tors: 4,
        to: 4,
        fredag: 5,
        fre: 5,
        fr: 5,
        "l\xf6rdag": 6,
        "l\xf6r": 6,
        "l\xf6": 6,
    },
    c = {
        januari: 1,
        jan: 1,
        "jan.": 1,
        februari: 2,
        feb: 2,
        "feb.": 2,
        mars: 3,
        mar: 3,
        "mar.": 3,
        april: 4,
        apr: 4,
        "apr.": 4,
        maj: 5,
        juni: 6,
        jun: 6,
        "jun.": 6,
        juli: 7,
        jul: 7,
        "jul.": 7,
        augusti: 8,
        aug: 8,
        "aug.": 8,
        september: 9,
        sep: 9,
        "sep.": 9,
        sept: 9,
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
    g = {
        en: 1,
        ett: 1,
        "tv\xe5": 2,
        tre: 3,
        fyra: 4,
        fem: 5,
        sex: 6,
        sju: 7,
        "\xe5tta": 8,
        nio: 9,
        tio: 10,
        elva: 11,
        tolv: 12,
        tretton: 13,
        fjorton: 14,
        femton: 15,
        sexton: 16,
        sjutton: 17,
        arton: 18,
        nitton: 19,
        tjugo: 20,
        tretti\u043E: 30,
        fyrtio: 40,
        femtio: 50,
        sextio: 60,
        sjuttio: 70,
        "\xe5ttio": 80,
        nittio: 90,
        hundra: 100,
        tusen: 1e3,
    },
    h = {
        sek: "second",
        sekund: "second",
        sekunder: "second",
        min: "minute",
        minut: "minute",
        minuter: "minute",
        tim: "hour",
        timme: "hour",
        timmar: "hour",
        dag: "day",
        dagar: "day",
        vecka: "week",
        veckor: "week",
        "m\xe5n": "month",
        "m\xe5nad": "month",
        "m\xe5nader": "month",
        "\xe5r": "year",
        kvart\u0430l: "quarter",
        kvartal: "quarter",
    },
    f = `(?:${(0, u.uJ)(g)}|\\d+)`;
(0, u.uJ)({
    "f\xf6rsta": 1,
    andra: 2,
    tredje: 3,
    "fj\xe4rde": 4,
    femte: 5,
    "sj\xe4tte": 6,
    sjunde: 7,
    "\xe5ttonde": 8,
    nionde: 9,
    tionde: 10,
    elfte: 11,
    tolfte: 12,
    trettonde: 13,
    fjortonde: 14,
    femtonde: 15,
    sextonde: 16,
    sjuttonde: 17,
    artonde: 18,
    nittonde: 19,
    tjugonde: 20,
    "tjugof\xf6rsta": 21,
    tjugoandra: 22,
    tjugotredje: 23,
    "tjugofj\xe4rde": 24,
    tjugofemte: 25,
    "tjugosj\xe4tte": 26,
    tjugosjunde: 27,
    "tjugo\xe5ttonde": 28,
    tjugonionde: 29,
    trettionde: 30,
    "trettiof\xf6rsta": 31,
}),
    (0, u.uJ)(h);
let p = `(${f})\\s{0,5}(${(0, u.uJ)(h)})\\s{0,5}`,
    y = RegExp(p, "i"),
    x = `(${f})\\s{0,5}(${(0, u.uJ)({ sekund: "second", sekunder: "second", minut: "minute", minuter: "minute", timme: "hour", timmar: "hour", dag: "day", dagar: "day", vecka: "week", veckor: "week", "m\xe5nad": "month", "m\xe5nader": "month", "\xe5r": "year", kvartal: "quarter" })})\\s{0,5}`,
    w = (0, u.mb)("", p),
    D = (0, u.mb)("", x);
var P = r(355418),
    F = r(1673);
let C = RegExp(
    `(?:(?:\\,|\\(|\\\u{FF08})\\s*)?(?:p\xe5\\s*?)?(?:(f\xf6rra|senaste|n\xe4sta|kommande)\\s*)?(${(0, u.uJ)(d)})(?:\\s*(?:\\,|\\)|\\\u{FF09}))?(?:\\s*(f\xf6rra|senaste|n\xe4sta|kommande)\\s*vecka)?(?=\\W|$)`,
    "i",
);
class T extends P.c {
    innerPattern() {
        return C;
    }
    innerExtract(e, t) {
        let r = d[t[2].toLowerCase()],
            n = t[1],
            s = t[3],
            a = n || s;
        a = (a = a || "").toLowerCase();
        let i = null;
        return (
            a.match(/f\xf6rra|senaste/) ? (i = "last") : a.match(/n\xe4sta|kommande/) && (i = "next"),
            (0, F.Y5)(e.reference, r, i)
        );
    }
}
let v = RegExp(
    `(?:den\\s*?)?([0-9]{1,2})(?:\\s*(?:till|\\-|\\\u{2013}|\\s)\\s*([0-9]{1,2}))?\\s*(${(0, u.uJ)(c)})(?:(?:-|/|,?\\s*)([0-9]{4}(?![^\\s]\\d)))?(?=\\W|$)`,
    "i",
);
class M extends P.c {
    innerPattern() {
        return v;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = c[t[3].toLowerCase()],
            s = parseInt(t[1]);
        if (s > 31) return (t.index = t.index + t[1].length), null;
        if ((r.start.assign("month", n), r.start.assign("day", s), t[4])) {
            let e = (function (e) {
                if (/\d+/.test(e)) {
                    let t = parseInt(e);
                    return t < 100 && (t = (0, m.D)(t)), t;
                }
                let t = e.toLowerCase();
                return void 0 !== g[t] ? g[t] : parseInt(e);
            })(t[4]);
            r.start.assign("year", e);
        } else {
            let t = (0, m.Y)(e.refDate, s, n);
            r.start.imply("year", t);
        }
        if (t[2]) {
            let e = parseInt(t[2]);
            (r.end = r.start.clone()), r.end.assign("day", e);
        }
        return r;
    }
}
var $ = r(632434);
let R = RegExp(`(denna|den h\xe4r|f\xf6rra|passerade|n\xe4sta|kommande|efter|\\+|-)\\s*(${w})(?=\\W|$)`, "i"),
    E = RegExp(`(denna|den h\xe4r|f\xf6rra|passerade|n\xe4sta|kommande|efter|\\+|-)\\s*(${D})(?=\\W|$)`, "i");
class b extends P.c {
    allowAbbreviations;
    constructor(e = !0) {
        super(), (this.allowAbbreviations = e);
    }
    innerPattern() {
        return this.allowAbbreviations ? R : E;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = (function (e) {
                let t = {},
                    r = e,
                    n = y.exec(r);
                for (; n; )
                    (function (e, t) {
                        let r = (function (e) {
                            let t = e.toLowerCase();
                            return void 0 !== g[t] ? g[t] : parseInt(t);
                        })(t[1]);
                        e[h[t[2].toLowerCase()]] = r;
                    })(t, n),
                        (r = r.substring(n[0].length)),
                        (n = y.exec(r));
                return t;
            })(t[2]);
        if (!n) return null;
        switch (r) {
            case "f\xf6rra":
            case "passerade":
            case "-":
                n = (0, $.x4)(n);
        }
        return a.BP.createRelativeFromReference(e.reference, n);
    }
}
var A = r(881190),
    k = r(996483);
let j = RegExp(
    "(nu|idag|imorgon|\xf6vermorgon|ig\xe5r|f\xf6rrg\xe5r|i\\s*f\xf6rrg\xe5r)(?:\\s*(?:p\xe5\\s*)?(morgonen?|f\xf6rmiddagen?|middagen?|eftermiddagen?|kv\xe4llen?|natten?|midnatt))?(?=\\W|$)",
    "i",
);
class B extends P.c {
    innerPattern(e) {
        return j;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = (t[1] || "").toLowerCase(),
            s = (t[2] || "").toLowerCase(),
            a = e.createParsingComponents();
        switch (n) {
            case "nu":
                a = k.tB(e.reference);
                break;
            case "idag":
                a = k.Ec(e.reference);
                break;
            case "imorgon":
            case "imorn":
                let i = new Date(r.getTime());
                i.setDate(i.getDate() + 1), (0, A.Pl)(a, i), (0, A.A4)(a, i);
                break;
            case "ig\xe5r":
                let o = new Date(r.getTime());
                o.setDate(o.getDate() - 1), (0, A.Pl)(a, o), (0, A.A4)(a, o);
                break;
            case "f\xf6rrg\xe5r":
            case "i f\xf6rrg\xe5r":
                let l = new Date(r.getTime());
                l.setDate(l.getDate() - 2), (0, A.Pl)(a, l), (0, A.A4)(a, l);
        }
        switch (s) {
            case "morgon":
            case "morgonen":
                a.imply("hour", 6), a.imply("minute", 0), a.imply("second", 0), a.imply("millisecond", 0);
                break;
            case "f\xf6rmiddag":
            case "f\xf6rmiddagen":
                a.imply("hour", 9), a.imply("minute", 0), a.imply("second", 0), a.imply("millisecond", 0);
                break;
            case "middag":
            case "middagen":
                a.imply("hour", 12), a.imply("minute", 0), a.imply("second", 0), a.imply("millisecond", 0);
                break;
            case "eftermiddag":
            case "eftermiddagen":
                a.imply("hour", 15), a.imply("minute", 0), a.imply("second", 0), a.imply("millisecond", 0);
                break;
            case "kv\xe4ll":
            case "kv\xe4llen":
                a.imply("hour", 20), a.imply("minute", 0), a.imply("second", 0), a.imply("millisecond", 0);
                break;
            case "natt":
            case "natten":
            case "midnatt":
                "midnatt" === s ? a.imply("hour", 0) : a.imply("hour", 2),
                    a.imply("minute", 0),
                    a.imply("second", 0),
                    a.imply("millisecond", 0);
        }
        return a;
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
    return t.parsers.unshift(new B()), t;
}
function L(e = !0, t = !0) {
    return (0, n.i)({ parsers: [new l.A(), new o.A(t), new M(), new T(), new b()], refiners: [] }, e);
}
