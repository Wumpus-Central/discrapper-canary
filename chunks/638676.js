r.d(t, { A: () => ev });
var n = r(476858),
    s = r(364242);
let a = {
        sunday: 0,
        sun: 0,
        "sun.": 0,
        monday: 1,
        mon: 1,
        "mon.": 1,
        tuesday: 2,
        tue: 2,
        "tue.": 2,
        wednesday: 3,
        wed: 3,
        "wed.": 3,
        thursday: 4,
        thurs: 4,
        "thurs.": 4,
        thur: 4,
        "thur.": 4,
        thu: 4,
        "thu.": 4,
        friday: 5,
        fri: 5,
        "fri.": 5,
        saturday: 6,
        sat: 6,
        "sat.": 6,
    },
    i = {
        january: 1,
        february: 2,
        march: 3,
        april: 4,
        may: 5,
        june: 6,
        july: 7,
        august: 8,
        september: 9,
        october: 10,
        november: 11,
        december: 12,
    },
    o = {
        ...i,
        jan: 1,
        "jan.": 1,
        feb: 2,
        "feb.": 2,
        mar: 3,
        "mar.": 3,
        apr: 4,
        "apr.": 4,
        jun: 6,
        "jun.": 6,
        jul: 7,
        "jul.": 7,
        aug: 8,
        "aug.": 8,
        sep: 9,
        "sep.": 9,
        sept: 9,
        "sept.": 9,
        oct: 10,
        "oct.": 10,
        nov: 11,
        "nov.": 11,
        dec: 12,
        "dec.": 12,
    },
    l = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
    },
    u = {
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
        fifth: 5,
        sixth: 6,
        seventh: 7,
        eighth: 8,
        ninth: 9,
        tenth: 10,
        eleventh: 11,
        twelfth: 12,
        thirteenth: 13,
        fourteenth: 14,
        fifteenth: 15,
        sixteenth: 16,
        seventeenth: 17,
        eighteenth: 18,
        nineteenth: 19,
        twentieth: 20,
        "twenty first": 21,
        "twenty-first": 21,
        "twenty second": 22,
        "twenty-second": 22,
        "twenty third": 23,
        "twenty-third": 23,
        "twenty fourth": 24,
        "twenty-fourth": 24,
        "twenty fifth": 25,
        "twenty-fifth": 25,
        "twenty sixth": 26,
        "twenty-sixth": 26,
        "twenty seventh": 27,
        "twenty-seventh": 27,
        "twenty eighth": 28,
        "twenty-eighth": 28,
        "twenty ninth": 29,
        "twenty-ninth": 29,
        thirtieth: 30,
        "thirty first": 31,
        "thirty-first": 31,
    },
    m = {
        second: "second",
        seconds: "second",
        minute: "minute",
        minutes: "minute",
        hour: "hour",
        hours: "hour",
        day: "day",
        days: "day",
        week: "week",
        weeks: "week",
        month: "month",
        months: "month",
        quarter: "quarter",
        quarters: "quarter",
        year: "year",
        years: "year",
    },
    d = {
        s: "second",
        sec: "second",
        second: "second",
        seconds: "second",
        m: "minute",
        min: "minute",
        mins: "minute",
        minute: "minute",
        minutes: "minute",
        h: "hour",
        hr: "hour",
        hrs: "hour",
        hour: "hour",
        hours: "hour",
        d: "day",
        day: "day",
        days: "day",
        w: "week",
        week: "week",
        weeks: "week",
        mo: "month",
        mon: "month",
        mos: "month",
        month: "month",
        months: "month",
        qtr: "quarter",
        quarter: "quarter",
        quarters: "quarter",
        y: "year",
        yr: "year",
        year: "year",
        years: "year",
        ...m,
    },
    c = `(?:${(0, n.uJ)(l)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s{0,2}an?)?|an?\\b(?:\\s{0,2}few)?|few|several|the|a?\\s{0,2}couple\\s{0,2}(?:of)?)`,
    g = `(?:${(0, n.uJ)(u)}|[0-9]{1,2}(?:st|nd|rd|th)?)`;
function h(e) {
    let t = e.toLowerCase();
    return void 0 !== u[t] ? u[t] : parseInt((t = t.replace(/(?:st|nd|rd|th)$/i, "")));
}
let f = "(?:[1-9][0-9]{0,3}\\s{0,2}(?:BE|AD|BC|BCE|CE)|[1-2][0-9]{3}|[5-9][0-9]|2[0-5])";
function p(e) {
    if (/BE/i.test(e)) return parseInt((e = e.replace(/BE/i, ""))) - 543;
    if (/BCE?/i.test(e)) return -parseInt((e = e.replace(/BCE?/i, "")));
    if (/(AD|CE)/i.test(e)) return parseInt((e = e.replace(/(AD|CE)/i, "")));
    let t = parseInt(e);
    return (0, s.D)(t);
}
let y = `(${c})\\s{0,3}(${(0, n.uJ)(d)})`,
    x = RegExp(y, "i"),
    w = `(${c})\\s{0,3}(${(0, n.uJ)(m)})`,
    D = "\\s{0,5},?(?:\\s*and)?\\s{0,5}",
    P = (0, n.mb)("(?:(?:about|around)\\s{0,3})?", y, D),
    F = (0, n.mb)("(?:(?:about|around)\\s{0,3})?", w, D);
function C(e) {
    let t = {},
        r = e,
        n = x.exec(r);
    for (; n; )
        (function (e, t) {
            if (t[0].match(/^[a-zA-Z]+$/)) return;
            let r = (function (e) {
                let t = e.toLowerCase();
                if (void 0 !== l[t]) return l[t];
                if ("a" === t || "an" === t || "the" == t) return 1;
                if (t.match(/few/)) return 3;
                if (t.match(/half/)) return 0.5;
                if (t.match(/couple/)) return 2;
                else if (t.match(/several/)) return 7;
                return parseFloat(t);
            })(t[1]);
            e[d[t[2].toLowerCase()]] = r;
        })(t, n),
            (r = r.substring(n[0].length).trim()),
            (n = x.exec(r));
    return 0 == Object.keys(t).length ? null : t;
}
var T = r(374372),
    v = r(355418);
let M = RegExp(
        `(?:(?:within|in|for)\\s*)?(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${P})(?=\\W|$)`,
        "i",
    ),
    $ = RegExp(
        `(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${P})(?=\\W|$)`,
        "i",
    ),
    R = RegExp(
        `(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${F})(?=\\W|$)`,
        "i",
    );
class E extends v.c {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern(e) {
        return this.strictMode ? R : e.option.forwardDate ? M : $;
    }
    innerExtract(e, t) {
        if (t[0].match(/^for\s*the\s*\w+/)) return null;
        let r = C(t[1]);
        return r ? T.BP.createRelativeFromReference(e.reference, r) : null;
    }
}
let b = RegExp(
    `(?:on\\s{0,3})?(${g})(?:\\s{0,3}(?:to|\\-|\\\u{2013}|until|through|till)?\\s{0,3}(${g}))?(?:-|/|\\s{0,3}(?:of)?\\s{0,3})(${(0, n.uJ)(o)})(?:(?:-|/|,?\\s{0,3})(${f}(?!\\w)))?(?=\\W|$)`,
    "i",
);
class A extends v.c {
    innerPattern() {
        return b;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = o[t[3].toLowerCase()],
            a = h(t[1]);
        if (a > 31) return (t.index = t.index + t[1].length), null;
        if ((r.start.assign("month", n), r.start.assign("day", a), t[4])) {
            let e = p(t[4]);
            r.start.assign("year", e);
        } else {
            let t = (0, s.Y)(e.refDate, a, n);
            r.start.imply("year", t);
        }
        if (t[2]) {
            let e = h(t[2]);
            (r.end = r.start.clone()), r.end.assign("day", e);
        }
        return r;
    }
}
let k = RegExp(
    `(${(0, n.uJ)(o)})(?:-|/|\\s*,?\\s*)(${g})(?!\\s*(?:am|pm))\\s*(?:(?:to|\\-)\\s*(${g})\\s*)?(?:(?:-|/|\\s*,\\s*|\\s+)(${f}))?(?=\\W|$)(?!\\:\\d)`,
    "i",
);
class j extends v.c {
    shouldSkipYearLikeDate;
    constructor(e) {
        super(), (this.shouldSkipYearLikeDate = e);
    }
    innerPattern() {
        return k;
    }
    innerExtract(e, t) {
        let r = o[t[1].toLowerCase()],
            n = h(t[2]);
        if (n > 31 || (this.shouldSkipYearLikeDate && !t[3] && !t[4] && t[2].match(/^2[0-5]$/))) return null;
        let a = e.createParsingComponents({ day: n, month: r }).addTag("parser/ENMonthNameMiddleEndianParser");
        if (t[4]) {
            let e = p(t[4]);
            a.assign("year", e);
        } else {
            let t = (0, s.Y)(e.refDate, n, r);
            a.imply("year", t);
        }
        if (!t[3]) return a;
        let i = h(t[3]),
            l = e.createParsingResult(t.index, t[0]);
        return (l.start = a), (l.end = a.clone()), l.end.assign("day", i), l;
    }
}
let B = RegExp(`((?:in)\\s*)?(${(0, n.uJ)(o)})\\s*(?:(?:,|-|of)?\\s*(${f})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i");
class W extends v.c {
    innerPattern() {
        return B;
    }
    innerExtract(e, t) {
        let r = t[2].toLowerCase();
        if (t[0].length <= 3 && !i[r]) return null;
        let n = e.createParsingResult(t.index + (t[1] || "").length, t.index + t[0].length);
        n.start.imply("day", 1), n.start.addTag("parser/ENMonthNameParser");
        let a = o[r];
        if ((n.start.assign("month", a), t[3])) {
            let e = p(t[3]);
            n.start.assign("year", e);
        } else {
            let t = (0, s.Y)(e.refDate, 1, a);
            n.start.imply("year", t);
        }
        return n;
    }
}
let S = RegExp(`([0-9]{4})[-\\.\\/\\s](?:(${(0, n.uJ)(o)})|([0-9]{1,2}))[-\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i");
class I extends v.c {
    strictMonthDateOrder;
    constructor(e) {
        super(), (this.strictMonthDateOrder = e);
    }
    innerPattern() {
        return S;
    }
    innerExtract(e, t) {
        let r = parseInt(t[1]),
            n = parseInt(t[4]),
            s = t[3] ? parseInt(t[3]) : o[t[2].toLowerCase()];
        if (s < 1 || s > 12) {
            if (this.strictMonthDateOrder) return null;
            n >= 1 && n <= 12 && ([s, n] = [n, s]);
        }
        return n < 1 || n > 31 ? null : { day: n, month: s, year: r };
    }
}
let Y = RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i");
class z extends v.c {
    innerPattern() {
        return Y;
    }
    innerExtract(e, t) {
        let r = parseInt(t[2]),
            n = parseInt(t[1]);
        return e.createParsingComponents().imply("day", 1).assign("month", n).assign("year", r);
    }
}
var L = r(322811),
    N = r(985971);
class O extends N.B {
    constructor(e) {
        super(e);
    }
    followingPhase() {
        return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|to|until|through|till|\\?)\\s*";
    }
    primaryPrefix() {
        return "(?:(?:at|from)\\s*)??";
    }
    primarySuffix() {
        return "(?:\\s*(?:o\\W*clock|at\\s*night|in\\s*the\\s*(?:morning|afternoon)))?(?!/)(?=\\W|$)";
    }
    extractPrimaryTimeComponents(e, t) {
        let r = super.extractPrimaryTimeComponents(e, t);
        if (!r) return r;
        if (t[0].endsWith("night")) {
            let e = r.get("hour");
            e >= 6 && e < 12
                ? (r.assign("hour", r.get("hour") + 12), r.assign("meridiem", L.FF.PM))
                : e < 6 && r.assign("meridiem", L.FF.AM);
        }
        if (t[0].endsWith("afternoon")) {
            r.assign("meridiem", L.FF.PM);
            let e = r.get("hour");
            e >= 0 && e <= 6 && r.assign("hour", r.get("hour") + 12);
        }
        return (
            t[0].endsWith("morning") &&
                (r.assign("meridiem", L.FF.AM), 12 > r.get("hour") && r.assign("hour", r.get("hour"))),
            r.addTag("parser/ENTimeExpressionParser")
        );
    }
    extractFollowingTimeComponents(e, t, r) {
        let n = super.extractFollowingTimeComponents(e, t, r);
        return n && n.addTag("parser/ENTimeExpressionParser"), n;
    }
}
var J = r(632434);
let q = RegExp(`(${P})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i"),
    H = RegExp(`(${F})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
class V extends v.c {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? H : q;
    }
    innerExtract(e, t) {
        let r = C(t[1]);
        return r ? T.BP.createRelativeFromReference(e.reference, (0, J.x4)(r)) : null;
    }
}
let U = RegExp(`(${P})\\s{0,5}(?:later|after|from now|henceforth|forward|out)(?=(?:\\W|$))`, "i"),
    G = RegExp(`(${F})\\s{0,5}(later|after|from now)(?=\\W|$)`, "i");
class Z extends v.c {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? G : U;
    }
    innerExtract(e, t) {
        let r = C(t[1]);
        return r ? T.BP.createRelativeFromReference(e.reference, r) : null;
    }
}
var K = r(172609);
class _ extends K.A {
    patternBetween() {
        return /^\s*(to|-|\u2013|until|through|till)\s*$/i;
    }
}
var X = r(230205);
class Q extends X.A {
    patternBetween() {
        return RegExp("^\\s*(T|at|after|before|on|of|,|-|\\.|\u2219|:)?\\s*$");
    }
}
var ee = r(132588),
    et = r(881190),
    er = r(996483);
let en = /(now|today|tonight|tomorrow|overmorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
class es extends v.c {
    innerPattern(e) {
        return en;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = t[0].toLowerCase(),
            s = e.createParsingComponents();
        switch (n) {
            case "now":
                s = er.tB(e.reference);
                break;
            case "today":
                s = er.Ec(e.reference);
                break;
            case "yesterday":
                s = er.jI(e.reference);
                break;
            case "tomorrow":
            case "tmr":
            case "tmrw":
                s = er.uf(e.reference);
                break;
            case "tonight":
                s = er.A_(e.reference);
                break;
            case "overmorrow":
                s = er.AV(e.reference, 2);
                break;
            default:
                if (n.match(/last\s*night/)) {
                    if (r.getHours() > 6) {
                        let e = new Date(r.getTime());
                        e.setDate(e.getDate() - 1), (r = e);
                    }
                    (0, et.Pl)(s, r), s.imply("hour", 0);
                }
        }
        return s.addTag("parser/ENCasualDateParser"), s;
    }
}
let ea = /(?:this)?\s{0,3}(morning|afternoon|evening|night|midnight|midday|noon)(?=\W|$)/i;
class ei extends v.c {
    innerPattern() {
        return ea;
    }
    innerExtract(e, t) {
        let r = null;
        switch (t[1].toLowerCase()) {
            case "afternoon":
                r = er.ZB(e.reference);
                break;
            case "evening":
            case "night":
                r = er.Jp(e.reference);
                break;
            case "midnight":
                r = er.Bm(e.reference);
                break;
            case "morning":
                r = er.F1(e.reference);
                break;
            case "noon":
            case "midday":
                r = er.zW(e.reference);
        }
        return r && r.addTag("parser/ENCasualTimeParser"), r;
    }
}
var eo = r(1673);
let el = RegExp(
    `(?:(?:\\,|\\(|\\\u{FF08})\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(${(0, n.uJ)(a)}|weekend|weekday)(?:\\s*(?:\\,|\\)|\\\u{FF09}))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)`,
    "i",
);
class eu extends v.c {
    innerPattern() {
        return el;
    }
    innerExtract(e, t) {
        let r,
            n = t[1],
            s = t[3],
            i = n || s;
        i = (i = i || "").toLowerCase();
        let o = null;
        "last" == i || "past" == i ? (o = "last") : "next" == i ? (o = "next") : "this" == i && (o = "this");
        let l = t[2].toLowerCase();
        if (void 0 !== a[l]) r = a[l];
        else if ("weekend" == l) r = "last" == o ? L.Bw.SUNDAY : L.Bw.SATURDAY;
        else {
            if ("weekday" != l) return null;
            let t = e.reference.getDateWithAdjustedTimezone().getDay();
            t == L.Bw.SUNDAY || t == L.Bw.SATURDAY
                ? (r = "last" == o ? L.Bw.FRIDAY : L.Bw.MONDAY)
                : ((r = t - 1), (r = ((r = "last" == o ? r - 1 : r + 1) % 5) + 1));
        }
        return (0, eo.Y5)(e.reference, r, o);
    }
}
let em = RegExp(`(this|last|past|next|after\\s*this)\\s*(${(0, n.uJ)(d)})(?=\\s*)(?=\\W|$)`, "i");
class ed extends v.c {
    innerPattern() {
        return em;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = t[2].toLowerCase(),
            s = d[n];
        if ("next" == r || r.startsWith("after")) {
            let t = {};
            return (t[s] = 1), T.BP.createRelativeFromReference(e.reference, t);
        }
        if ("last" == r || "past" == r) {
            let t = {};
            return (t[s] = -1), T.BP.createRelativeFromReference(e.reference, t);
        }
        let a = e.createParsingComponents(),
            i = new Date(e.reference.instant.getTime());
        return (
            n.match(/week/i)
                ? (i.setDate(i.getDate() - i.getDay()),
                  a.imply("day", i.getDate()),
                  a.imply("month", i.getMonth() + 1),
                  a.imply("year", i.getFullYear()))
                : n.match(/month/i)
                  ? (i.setDate(1),
                    a.imply("day", i.getDate()),
                    a.assign("year", i.getFullYear()),
                    a.assign("month", i.getMonth() + 1))
                  : n.match(/year/i) &&
                    (i.setDate(1),
                    i.setMonth(0),
                    a.imply("day", i.getDate()),
                    a.imply("month", i.getMonth() + 1),
                    a.assign("year", i.getFullYear())),
            a
        );
    }
}
var ec = r(774188);
let eg = RegExp(`(this|last|past|next|after|\\+|-)\\s*(${P})(?=\\W|$)`, "i"),
    eh = RegExp(`(this|last|past|next|after|\\+|-)\\s*(${F})(?=\\W|$)`, "i");
class ef extends v.c {
    allowAbbreviations;
    constructor(e = !0) {
        super(), (this.allowAbbreviations = e);
    }
    innerPattern() {
        return this.allowAbbreviations ? eg : eh;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = C(t[2]);
        if (!n) return null;
        switch (r) {
            case "last":
            case "past":
            case "-":
                n = (0, J.x4)(n);
        }
        return T.BP.createRelativeFromReference(e.reference, n);
    }
}
var ep = r(530560);
function ey(e) {
    return null != e.text.match(/^-/i);
}
class ex extends ep.X {
    shouldMergeResults(e, t, r) {
        return !!e.match(/^\s*$/i) && (null != r.text.match(/^[+-]/i) || ey(r));
    }
    mergeResults(e, t, r, n) {
        let s = C(r.text);
        ey(r) && (s = (0, J.x4)(s));
        let a = T.BP.createRelativeFromReference(T.b5.fromDate(t.start.date()), s);
        return new T.s4(t.reference, t.index, `${t.text}${e}${r.text}`, a);
    }
}
function ew(e) {
    return null != e.text.match(/\s+(before|from)$/i);
}
class eD extends ep.X {
    patternBetween() {
        return /^\s*$/i;
    }
    shouldMergeResults(e, t, r) {
        return (
            !!e.match(this.patternBetween()) &&
            (!!ew(t) || null != t.text.match(/\s+(after|since)$/i)) &&
            !!r.start.get("day") &&
            !!r.start.get("month") &&
            !!r.start.get("year")
        );
    }
    mergeResults(e, t, r) {
        let n = C(t.text);
        ew(t) && (n = (0, J.x4)(n));
        let s = T.BP.createRelativeFromReference(T.b5.fromDate(r.start.date()), n);
        return new T.s4(r.reference, t.index, `${t.text}${e}${r.text}`, s);
    }
}
var eP = r(83707);
let eF = RegExp(`^\\s*(${f})`, "i");
class eC {
    refine(e, t) {
        return (
            t.forEach(function (t) {
                if (!t.start.isDateWithUnknownYear()) return;
                let r = e.text.substring(t.index + t.text.length),
                    n = eF.exec(r);
                if (!n || n[0].trim().length <= 3) return;
                e.debug(() => {
                    console.log(`Extracting year: '${n[0]}' into : ${t}`);
                });
                let s = p(n[1]);
                null != t.end && t.end.assign("year", s), t.start.assign("year", s), (t.text += n[0]);
            }),
            t
        );
    }
}
class eT extends ep.d {
    constructor() {
        super();
    }
    isValid(e, t) {
        let r = t.text.trim();
        return (
            r === e.text.trim() ||
            ("may" !== r.toLowerCase() ||
            e.text
                .substring(0, t.index)
                .trim()
                .match(/\b(in)$/i)
                ? !r.toLowerCase().endsWith("the second") ||
                  (e.text.substring(t.index + t.text.length).trim().length > 0 &&
                      e.debug(() => {
                          console.log(`Removing unlikely result: ${t}`);
                      }),
                  !1)
                : (e.debug(() => {
                      console.log(`Removing unlikely result: ${t}`);
                  }),
                  !1))
        );
    }
}
class ev {
    createCasualConfiguration(e = !1) {
        let t = this.createConfiguration(!1, e);
        return (
            t.parsers.push(new es()),
            t.parsers.push(new ei()),
            t.parsers.push(new W()),
            t.parsers.push(new ed()),
            t.parsers.push(new ef()),
            t.refiners.push(new eT()),
            t
        );
    }
    createConfiguration(e = !0, t = !1) {
        let r = (0, ee.i)(
            {
                parsers: [new ec.A(t), new E(e), new A(), new j(t), new eu(), new z(), new O(e), new V(e), new Z(e)],
                refiners: [new Q()],
            },
            e,
        );
        return (
            r.parsers.unshift(new I(e)),
            r.refiners.unshift(new eD()),
            r.refiners.unshift(new ex()),
            r.refiners.unshift(new eP.A()),
            r.refiners.push(new Q()),
            r.refiners.push(new eC()),
            r.refiners.push(new _()),
            r
        );
    }
}
