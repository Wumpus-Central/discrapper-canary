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
let n = { 零: 0, 〇: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10 },
    s = { 日: 0, 月: 1, 火: 2, 水: 3, 木: 4, 金: 5, 土: 6 };
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
        "十" === s ? (t = 0 === t ? n[s] : t * n[s]) : (t += n[s]);
    }
    return t;
}
var l = r(364242);
let u = /(?:(?:([同今本])|((昭和|平成|令和)?([0-9０-９]{1,4}|元)))年\s*)?([0-9０-９]{1,2})月\s*([0-9０-９]{1,2})日/i;
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
                t[1].match("同|今|本") &&
                s.assign("year", e.reference.getDateWithAdjustedTimezone().getFullYear()),
            t[2])
        ) {
            let e = t[4],
                r = "元" == e ? 1 : parseInt(a(e));
            "令和" == t[3] ? (r += 2018) : "平成" == t[3] ? (r += 1988) : "昭和" == t[3] && (r += 1925),
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
        return /^\s*(から|－|ー|-|～|~)\s*$/i;
    }
}
var g = r(322811),
    h = r(996483);
let f = /今日|きょう|本日|ほんじつ|昨日|きのう|明日|あした|今夜|こんや|今夕|こんゆう|今晩|こんばん|今朝|けさ/i;
class p {
    pattern() {
        return f;
    }
    extract(e, t) {
        let r = (function (e) {
                switch (e) {
                    case "きょう":
                        return "今日";
                    case "ほんじつ":
                        return "本日";
                    case "きのう":
                        return "昨日";
                    case "あした":
                        return "明日";
                    case "こんや":
                        return "今夜";
                    case "こんゆう":
                        return "今夕";
                    case "こんばん":
                        return "今晩";
                    case "けさ":
                        return "今朝";
                    default:
                        return e;
                }
            })(t[0]),
            n = e.createParsingComponents();
        switch (r) {
            case "昨日":
                return h.jI(e.reference);
            case "明日":
                return h.uf(e.reference);
            case "本日":
            case "今日":
                return h.Ec(e.reference);
        }
        "今夜" == r || "今夕" == r || "今晩" == r
            ? (n.imply("hour", 22), n.assign("meridiem", g.FF.PM))
            : r.match("今朝") && (n.imply("hour", 6), n.assign("meridiem", g.FF.AM));
        let s = e.refDate;
        return n.assign("day", s.getDate()), n.assign("month", s.getMonth() + 1), n.assign("year", s.getFullYear()), n;
    }
}
var y = r(1673);
let x = RegExp("((?<prefix>前の|次の|今週))?(?<weekday>" + Object.keys(s).join("|") + ")(?:曜日|曜)", "i");
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
            n.match(/前の/) ? (a = "last") : n.match(/次の/) ? (a = "next") : n.match(/今週/) && (a = "this"),
            (0, y.Y5)(e.reference, r, a)
        );
    }
}
let D = RegExp(
    "([0-9０-９]{4}[\\/|\\／])?([0-1０-１]{0,1}[0-9０-９]{1})(?:[\\/|\\／]([0-3０-３]{0,1}[0-9０-９]{1}))",
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
        "(?:(午前|午後|A.M.|P.M.|AM|PM))?(?:[\\s,，、]*)(?:([0-9０-９]+|[" +
            Object.keys(n).join("") +
            "]+)(?:\\s*)(?:時(?!間)|:|：)(?:\\s*)([0-9０-９]+|半|[" +
            Object.keys(n).join("") +
            "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)([0-9０-９]+|[" +
            Object.keys(n).join("") +
            "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    T = RegExp(
        "(?:^\\s*(?:から|\\-|\\–|\\－|\\~|\\〜)\\s*)(?:(午前|午後|A.M.|P.M.|AM|PM))?(?:[\\s,，、]*)(?:([0-9０-９]+|[" +
            Object.keys(n).join("") +
            "]+)(?:\\s*)(?:時|:|：)(?:\\s*)([0-9０-９]+|半|[" +
            Object.keys(n).join("") +
            "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)([0-9０-９]+|[" +
            Object.keys(n).join("") +
            "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
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
        if (("半" === r ? (e = 30) : isNaN((e = parseInt(a(r)))) && (e = o(r)), e >= 60)) return null;
        u.assign("minute", e);
    }
    if (n) {
        let e = parseInt(a(n));
        if ((isNaN(e) && (e = o(n)), e >= 60)) return null;
        u.assign("second", e);
    }
    if (s) {
        if (i > 12) return null;
        "午前" === s || "a" === s[0].toLowerCase()
            ? ((l = g.FF.AM), 12 === i && (i = 0))
            : ("午後" === s || "p" === s[0].toLowerCase()) && ((l = g.FF.PM), 12 != i && (i += 12));
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
        return /^\s*(の)?\s*$/i;
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
            null !== e.match(/^[,、の]?\s*$/)
        );
    }
}
let j = RegExp("(?:\\(|\\（)(?<weekday>" + Object.keys(s).join("|") + ")(?:\\)|\\）)", "i");
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
