"use strict";
n.d(t, { A: () => m });
var r = n(355418),
    i = n(725198);
let a = RegExp(
        "(?:由|從|自)?(?:(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s,，]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" +
            Object.keys(i.uk).join("") +
            "]+)(?:\\s*)(?:點|時|:|：)(?:\\s*)(\\d+|半|正|整|[" +
            Object.keys(i.uk).join("") +
            "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)(\\d+|[" +
            Object.keys(i.uk).join("") +
            "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    s = RegExp(
        "(?:^\\s*(?:到|至|\\-|\\–|\\~|\\〜)\\s*)(?:(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s,，]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" +
            Object.keys(i.uk).join("") +
            "]+)(?:\\s*)(?:點|時|:|：)(?:\\s*)(\\d+|半|正|整|[" +
            Object.keys(i.uk).join("") +
            "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)(\\d+|[" +
            Object.keys(i.uk).join("") +
            "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    o = 1,
    l = 2,
    u = 3,
    c = 4,
    d = 5,
    _ = 6,
    f = 7,
    p = 8,
    h = 9;
class m extends r.c {
    innerPattern() {
        return a;
    }
    innerExtract(e, t) {
        if (t.index > 0 && e.text[t.index - 1].match(/\w/)) return null;
        let n = e.createParsingResult(t.index, t[0]),
            r = new Date(e.refDate.getTime());
        if (t[o]) {
            let i = t[o];
            "明" == i || "聽" == i
                ? e.refDate.getHours() > 1 && r.setDate(r.getDate() + 1)
                : "昨" == i || "尋" == i || "琴" == i
                  ? r.setDate(r.getDate() - 1)
                  : "前" == i
                    ? r.setDate(r.getDate() - 2)
                    : "大前" == i
                      ? r.setDate(r.getDate() - 3)
                      : "後" == i
                        ? r.setDate(r.getDate() + 2)
                        : "大後" == i && r.setDate(r.getDate() + 3),
                n.start.assign("day", r.getDate()),
                n.start.assign("month", r.getMonth() + 1),
                n.start.assign("year", r.getFullYear());
        } else if (t[c]) {
            let e = t[c];
            "明" == e || "聽" == e
                ? r.setDate(r.getDate() + 1)
                : "昨" == e || "尋" == e || "琴" == e
                  ? r.setDate(r.getDate() - 1)
                  : "前" == e
                    ? r.setDate(r.getDate() - 2)
                    : "大前" == e
                      ? r.setDate(r.getDate() - 3)
                      : "後" == e
                        ? r.setDate(r.getDate() + 2)
                        : "大後" == e && r.setDate(r.getDate() + 3),
                n.start.assign("day", r.getDate()),
                n.start.assign("month", r.getMonth() + 1),
                n.start.assign("year", r.getFullYear());
        } else
            n.start.imply("day", r.getDate()),
                n.start.imply("month", r.getMonth() + 1),
                n.start.imply("year", r.getFullYear());
        let a = 0,
            m = 0,
            g = -1;
        if (t[p]) {
            var E = parseInt(t[p]);
            if ((isNaN(E) && (E = (0, i.CT)(t[p])), E >= 60)) return null;
            n.start.assign("second", E);
        }
        if (
            (isNaN((a = parseInt(t[_]))) && (a = (0, i.CT)(t[_])),
            t[f]
                ? "半" == t[f]
                    ? (m = 30)
                    : "正" == t[f] || "整" == t[f]
                      ? (m = 0)
                      : isNaN((m = parseInt(t[f]))) && (m = (0, i.CT)(t[f]))
                : a > 100 && ((m = a % 100), (a = Math.floor(a / 100))),
            m >= 60 || a > 24)
        )
            return null;
        if ((a >= 12 && (g = 1), t[h])) {
            if (a > 12) return null;
            var A = t[h][0].toLowerCase();
            "a" == A && ((g = 0), 12 == a && (a = 0)), "p" == A && ((g = 1), 12 != a && (a += 12));
        } else if (t[l]) {
            var I = t[l][0];
            "朝" == I || "早" == I ? ((g = 0), 12 == a && (a = 0)) : "晚" == I && ((g = 1), 12 != a && (a += 12));
        } else if (t[u]) {
            var T = t[u][0];
            "上" == T || "朝" == T || "早" == T || "凌" == T
                ? ((g = 0), 12 == a && (a = 0))
                : ("下" == T || "晏" == T || "晚" == T) && ((g = 1), 12 != a && (a += 12));
        } else if (t[d]) {
            var y = t[d][0];
            "上" == y || "朝" == y || "早" == y || "凌" == y
                ? ((g = 0), 12 == a && (a = 0))
                : ("下" == y || "晏" == y || "晚" == y) && ((g = 1), 12 != a && (a += 12));
        }
        n.start.assign("hour", a),
            n.start.assign("minute", m),
            g >= 0
                ? n.start.assign("meridiem", g)
                : a < 12
                  ? n.start.imply("meridiem", 0)
                  : n.start.imply("meridiem", 1);
        let S = s.exec(e.text.substring(n.index + n.text.length));
        if (!S) return n.text.match(/^\d+$/) ? null : n;
        let v = new Date(r.getTime());
        if (((n.end = e.createParsingComponents()), S[o])) {
            let t = S[o];
            "明" == t || "聽" == t
                ? e.refDate.getHours() > 1 && v.setDate(v.getDate() + 1)
                : "昨" == t || "尋" == t || "琴" == t
                  ? v.setDate(v.getDate() - 1)
                  : "前" == t
                    ? v.setDate(v.getDate() - 2)
                    : "大前" == t
                      ? v.setDate(v.getDate() - 3)
                      : "後" == t
                        ? v.setDate(v.getDate() + 2)
                        : "大後" == t && v.setDate(v.getDate() + 3),
                n.end.assign("day", v.getDate()),
                n.end.assign("month", v.getMonth() + 1),
                n.end.assign("year", v.getFullYear());
        } else if (S[c]) {
            let e = S[c];
            "明" == e || "聽" == e
                ? v.setDate(v.getDate() + 1)
                : "昨" == e || "尋" == e || "琴" == e
                  ? v.setDate(v.getDate() - 1)
                  : "前" == e
                    ? v.setDate(v.getDate() - 2)
                    : "大前" == e
                      ? v.setDate(v.getDate() - 3)
                      : "後" == e
                        ? v.setDate(v.getDate() + 2)
                        : "大後" == e && v.setDate(v.getDate() + 3),
                n.end.assign("day", v.getDate()),
                n.end.assign("month", v.getMonth() + 1),
                n.end.assign("year", v.getFullYear());
        } else
            n.end.imply("day", v.getDate()),
                n.end.imply("month", v.getMonth() + 1),
                n.end.imply("year", v.getFullYear());
        if (((a = 0), (m = 0), (g = -1), S[p])) {
            let e = parseInt(S[p]);
            if ((isNaN(e) && (e = (0, i.CT)(S[p])), e >= 60)) return null;
            n.end.assign("second", e);
        }
        if (
            (isNaN((a = parseInt(S[_]))) && (a = (0, i.CT)(S[_])),
            S[f]
                ? "半" == S[f]
                    ? (m = 30)
                    : "正" == S[f] || "整" == S[f]
                      ? (m = 0)
                      : isNaN((m = parseInt(S[f]))) && (m = (0, i.CT)(S[f]))
                : a > 100 && ((m = a % 100), (a = Math.floor(a / 100))),
            m >= 60 || a > 24)
        )
            return null;
        if ((a >= 12 && (g = 1), S[h])) {
            if (a > 12) return null;
            var A = S[h][0].toLowerCase();
            "a" == A && ((g = 0), 12 == a && (a = 0)),
                "p" == A && ((g = 1), 12 != a && (a += 12)),
                n.start.isCertain("meridiem") ||
                    (0 == g
                        ? (n.start.imply("meridiem", 0), 12 == n.start.get("hour") && n.start.assign("hour", 0))
                        : (n.start.imply("meridiem", 1),
                          12 != n.start.get("hour") && n.start.assign("hour", n.start.get("hour") + 12)));
        } else if (S[l]) {
            var I = S[l][0];
            "朝" == I || "早" == I ? ((g = 0), 12 == a && (a = 0)) : "晚" == I && ((g = 1), 12 != a && (a += 12));
        } else if (S[u]) {
            var T = S[u][0];
            "上" == T || "朝" == T || "早" == T || "凌" == T
                ? ((g = 0), 12 == a && (a = 0))
                : ("下" == T || "晏" == T || "晚" == T) && ((g = 1), 12 != a && (a += 12));
        } else if (S[d]) {
            var y = S[d][0];
            "上" == y || "朝" == y || "早" == y || "凌" == y
                ? ((g = 0), 12 == a && (a = 0))
                : ("下" == y || "晏" == y || "晚" == y) && ((g = 1), 12 != a && (a += 12));
        }
        return (
            (n.text = n.text + S[0]),
            n.end.assign("hour", a),
            n.end.assign("minute", m),
            g >= 0
                ? n.end.assign("meridiem", g)
                : n.start.isCertain("meridiem") && 1 == n.start.get("meridiem") && n.start.get("hour") > a
                  ? n.end.imply("meridiem", 0)
                  : a > 12 && n.end.imply("meridiem", 1),
            n.end.date().getTime() < n.start.date().getTime() && n.end.imply("day", n.end.get("day") + 1),
            n
        );
    }
}
