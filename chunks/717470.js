r.r(t),
    r.d(t, {
        parseDate: () => L,
        casual: () => I,
        ReferenceWithTimezone: () => b.b5,
        ParsingResult: () => b.s4,
        createCasualConfiguration: () => N,
        Weekday: () => g.Bw,
        strict: () => Y,
        Chrono: () => E.u,
        Meridiem: () => g.FF,
        ParsingComponents: () => b.BP,
        createConfiguration: () => O,
        parse: () => z,
    });
let n = {
        \u96F6: 0,
        \u3007: 0,
        \u4E00: 1,
        \u4E8C: 2,
        \u4E09: 3,
        \u56DB: 4,
        \u4E94: 5,
        \u516D: 6,
        \u4E03: 7,
        \u516B: 8,
        \u4E5D: 9,
        \u5341: 10,
    },
    s = { \u65E5: 0, \u6708: 1, \u706B: 2, \u6C34: 3, \u6728: 4, \u91D1: 5, \u571F: 6 };
function a(e) {
    return String(e)
        .replace(/\u2019/g, "'")
        .replace(/\u201D/g, '"')
        .replace(/\u3000/g, " ")
        .replace(/\uFFE5/g, "\xa5")
        .replace(
            /[\uFF01\uFF03-\uFF06\uFF08\uFF09\uFF0C-\uFF19\uFF1C-\uFF1F\uFF21-\uFF3B\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5E]/g,
            i,
        );
}
function i(e) {
    return String.fromCharCode(e.charCodeAt(0) - 65248);
}
function o(e) {
    let t = 0;
    for (let r = 0; r < e.length; r++) {
        let s = e[r];
        "\u5341" === s ? (t = 0 === t ? n[s] : t * n[s]) : (t += n[s]);
    }
    return t;
}
var l = r(364242);
let u =
    /(?:(?:([\u540c\u4eca\u672c])|((\u662d\u548c|\u5e73\u6210|\u4ee4\u548c)?([0-9\uff10-\uff19]{1,4}|\u5143)))\u5e74\s*)?([0-9\uff10-\uff19]{1,2})\u6708\s*([0-9\uff10-\uff19]{1,2})\u65e5/i;
class m {
    pattern() {
        return u;
    }
    extract(e, t) {
        let r = parseInt(a(t[5])),
            n = parseInt(a(t[6])),
            s = e.createParsingComponents({ day: n, month: r });
        if (
            (t[1] &&
                t[1].match("\u540C|\u4ECA|\u672C") &&
                s.assign("year", e.reference.getDateWithAdjustedTimezone().getFullYear()),
            t[2])
        ) {
            let e = t[4],
                r = "\u5143" == e ? 1 : parseInt(a(e));
            "\u4EE4\u548C" == t[3]
                ? (r += 2018)
                : "\u5E73\u6210" == t[3]
                  ? (r += 1988)
                  : "\u662D\u548C" == t[3] && (r += 1925),
                s.assign("year", r);
        } else {
            let t = (0, l.Y)(e.refDate, n, r);
            s.imply("year", t);
        }
        return s;
    }
}
var d = r(172609);
class c extends d.A {
    patternBetween() {
        return /^\s*(\u304b\u3089|\uff0d|\u30fc|-|\uff5e|~)\s*$/i;
    }
}
var g = r(322811),
    h = r(996483);
let f =
    /\u4eca\u65e5|\u304d\u3087\u3046|\u672c\u65e5|\u307b\u3093\u3058\u3064|\u6628\u65e5|\u304d\u306e\u3046|\u660e\u65e5|\u3042\u3057\u305f|\u4eca\u591c|\u3053\u3093\u3084|\u4eca\u5915|\u3053\u3093\u3086\u3046|\u4eca\u6669|\u3053\u3093\u3070\u3093|\u4eca\u671d|\u3051\u3055/i;
class p {
    pattern() {
        return f;
    }
    extract(e, t) {
        let r = (function (e) {
                switch (e) {
                    case "\u304D\u3087\u3046":
                        return "\u4ECA\u65E5";
                    case "\u307B\u3093\u3058\u3064":
                        return "\u672C\u65E5";
                    case "\u304D\u306E\u3046":
                        return "\u6628\u65E5";
                    case "\u3042\u3057\u305F":
                        return "\u660E\u65E5";
                    case "\u3053\u3093\u3084":
                        return "\u4ECA\u591C";
                    case "\u3053\u3093\u3086\u3046":
                        return "\u4ECA\u5915";
                    case "\u3053\u3093\u3070\u3093":
                        return "\u4ECA\u6669";
                    case "\u3051\u3055":
                        return "\u4ECA\u671D";
                    default:
                        return e;
                }
            })(t[0]),
            n = e.createParsingComponents();
        switch (r) {
            case "\u6628\u65E5":
                return h.jI(e.reference);
            case "\u660E\u65E5":
                return h.uf(e.reference);
            case "\u672C\u65E5":
            case "\u4ECA\u65E5":
                return h.Ec(e.reference);
        }
        "\u4ECA\u591C" == r || "\u4ECA\u5915" == r || "\u4ECA\u6669" == r
            ? (n.imply("hour", 22), n.assign("meridiem", g.FF.PM))
            : r.match("\u4ECA\u671D") && (n.imply("hour", 6), n.assign("meridiem", g.FF.AM));
        let s = e.refDate;
        return n.assign("day", s.getDate()), n.assign("month", s.getMonth() + 1), n.assign("year", s.getFullYear()), n;
    }
}
var y = r(1673);
let x = RegExp(
    "((?<prefix>\u524D\u306E|\u6B21\u306E|\u4ECA\u9031))?(?<weekday>" +
        Object.keys(s).join("|") +
        ")(?:\u66DC\u65E5|\u66DC)",
    "i",
);
class w {
    pattern() {
        return x;
    }
    extract(e, t) {
        let r = s[t.groups.weekday];
        if (void 0 === r) return null;
        let n = t.groups.prefix || "",
            a = null;
        return (
            n.match(/\u524d\u306e/)
                ? (a = "last")
                : n.match(/\u6b21\u306e/)
                  ? (a = "next")
                  : n.match(/\u4eca\u9031/) && (a = "this"),
            (0, y.Y5)(e.reference, r, a)
        );
    }
}
let D = RegExp(
    "([0-9\uFF10-\uFF19]{4}[\\/|\\\uFF0F])?([0-1\uFF10-\uFF11]{0,1}[0-9\uFF10-\uFF19]{1})(?:[\\/|\\\uFF0F]([0-3\uFF10-\uFF13]{0,1}[0-9\uFF10-\uFF19]{1}))",
    "i",
);
class P {
    pattern() {
        return D;
    }
    extract(e, t) {
        let r = e.createParsingComponents(),
            n = parseInt(a(t[2])),
            s = parseInt(a(t[3]));
        if (n < 1 || n > 12 || s < 1 || s > 31) return null;
        if ((r.assign("day", s), r.assign("month", n), t[1])) {
            let e = parseInt(a(t[1])),
                n = (0, l.D)(e);
            r.assign("year", n);
        } else {
            let t = (0, l.Y)(e.reference.instant, s, n);
            r.imply("year", t);
        }
        return r;
    }
}
var F = r(355418);
let C = RegExp(
        "(?:(\u5348\u524D|\u5348\u5F8C|A.M.|P.M.|AM|PM))?(?:[\\s,\uFF0C\u3001]*)(?:([0-9\uFF10-\uFF19]+|[" +
            Object.keys(n).join("") +
            "]+)(?:\\s*)(?:\u6642(?!\u9593)|:|\uFF1A)(?:\\s*)([0-9\uFF10-\uFF19]+|\u534A|[" +
            Object.keys(n).join("") +
            "]+)?(?:\\s*)(?:\u5206|:|\uFF1A)?(?:\\s*)([0-9\uFF10-\uFF19]+|[" +
            Object.keys(n).join("") +
            "]+)?(?:\\s*)(?:\u79D2)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    T = RegExp(
        "(?:^\\s*(?:\u304B\u3089|\\-|\\\u2013|\\\uFF0D|\\~|\\\u301C)\\s*)(?:(\u5348\u524D|\u5348\u5F8C|A.M.|P.M.|AM|PM))?(?:[\\s,\uFF0C\u3001]*)(?:([0-9\uFF10-\uFF19]+|[" +
            Object.keys(n).join("") +
            "]+)(?:\\s*)(?:\u6642|:|\uFF1A)(?:\\s*)([0-9\uFF10-\uFF19]+|\u534A|[" +
            Object.keys(n).join("") +
            "]+)?(?:\\s*)(?:\u5206|:|\uFF1A)?(?:\\s*)([0-9\uFF10-\uFF19]+|[" +
            Object.keys(n).join("") +
            "]+)?(?:\\s*)(?:\u79D2)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    );
class v extends F.c {
    innerPattern() {
        return C;
    }
    innerExtract(e, t) {
        if (t.index > 0 && e.text[t.index - 1].match(/\w/)) return null;
        let r = e.createParsingResult(t.index, t[0]);
        return ((r.start = M(e, t[2], t[3], t[4], t[1] ?? t[5])), r.start)
            ? (t = T.exec(e.text.substring(r.index + r.text.length)))
                ? ((r.text = r.text + t[0]), (r.end = M(e, t[2], t[3], t[4], t[1] ?? t[5])), r.end)
                    ? (!r.end.isCertain("meridiem") &&
                          r.start.isCertain("meridiem") &&
                          (r.end.imply("meridiem", r.start.get("meridiem")),
                          r.start.get("meridiem") === g.FF.PM &&
                              (r.start.get("hour") - 12 > r.end.get("hour")
                                  ? r.end.imply("meridiem", g.FF.AM)
                                  : 12 > r.end.get("hour") && r.end.assign("hour", r.end.get("hour") + 12))),
                      r.end.date().getTime() < r.start.date().getTime() && r.end.imply("day", r.end.get("day") + 1),
                      r)
                    : null
                : r
            : ((t.index += t[0].length), null);
    }
}
function M(e, t, r, n, s) {
    let i = 0,
        l = -1,
        u = e.createParsingComponents();
    if ((isNaN((i = parseInt(a(t)))) && (i = o(t)), i > 24)) return null;
    if (r) {
        let e;
        if (("\u534A" === r ? (e = 30) : isNaN((e = parseInt(a(r)))) && (e = o(r)), e >= 60)) return null;
        u.assign("minute", e);
    }
    if (n) {
        let e = parseInt(a(n));
        if ((isNaN(e) && (e = o(n)), e >= 60)) return null;
        u.assign("second", e);
    }
    if (s) {
        if (i > 12) return null;
        "\u5348\u524D" === s || "a" === s[0].toLowerCase()
            ? ((l = g.FF.AM), 12 === i && (i = 0))
            : ("\u5348\u5F8C" === s || "p" === s[0].toLowerCase()) && ((l = g.FF.PM), 12 != i && (i += 12));
    }
    return (
        u.assign("hour", i),
        l >= 0 ? u.assign("meridiem", l) : i < 12 ? u.imply("meridiem", g.FF.AM) : u.imply("meridiem", g.FF.PM),
        u
    );
}
var $ = r(230205);
class R extends $.A {
    patternBetween() {
        return /^\s*(\u306e)?\s*$/i;
    }
}
var E = r(880683),
    b = r(374372),
    A = r(530560);
class k extends A.X {
    mergeResults(e, t, r) {
        let n = t.clone();
        return (
            (n.text = t.text + e + r.text),
            n.start.assign("weekday", r.start.get("weekday")),
            n.end && n.end.assign("weekday", r.start.get("weekday")),
            n
        );
    }
    shouldMergeResults(e, t, r) {
        return (
            t.start.isCertain("day") &&
            r.start.isOnlyWeekdayComponent() &&
            !r.start.isCertain("hour") &&
            null !== e.match(/^[,\u3001\u306e]?\s*$/)
        );
    }
}
let j = RegExp("(?:\\(|\\\uFF08)(?<weekday>" + Object.keys(s).join("|") + ")(?:\\)|\\\uFF09)", "i");
class B {
    pattern() {
        return j;
    }
    extract(e, t) {
        let r = s[t.groups.weekday];
        return void 0 === r ? null : (0, y.Y5)(e.reference, r);
    }
}
var W = r(132588),
    S = r(483655);
let I = new E.u(N()),
    Y = new E.u(O(!0));
function z(e, t, r) {
    return I.parse(e, t, r);
}
function L(e, t, r) {
    return I.parseDate(e, t, r);
}
function N() {
    let e = O(!1);
    return e.parsers.unshift(new p()), e;
}
function O(e = !0) {
    let t = (0, W.i)(
        { parsers: [new m(), new w(), new B(), new P(), new v()], refiners: [new k(), new R(), new c()] },
        e,
    );
    return (t.refiners = t.refiners.filter((e) => !(e instanceof S.A))), t;
}
