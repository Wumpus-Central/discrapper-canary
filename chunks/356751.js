"use strict";
n.d(t, { A: () => m });
var r = n(355418),
    i = n(11947);
let a = RegExp(
        "(?:从|自)?(?:(今|明|前|大前|后|大后|昨)(早|朝|晚)|(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|后|大后|昨)(?:日|天)(?:[\\s,，]*)(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" +
            Object.keys(i.uk).join("") +
            "]+)(?:\\s*)(?:点|时|:|：)(?:\\s*)(\\d+|半|正|整|[" +
            Object.keys(i.uk).join("") +
            "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)(\\d+|[" +
            Object.keys(i.uk).join("") +
            "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    s = RegExp(
        "(?:^\\s*(?:到|至|\\-|\\–|\\~|\\〜)\\s*)(?:(今|明|前|大前|后|大后|昨)(早|朝|晚)|(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|后|大后|昨)(?:日|天)(?:[\\s,，]*)(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" +
            Object.keys(i.uk).join("") +
            "]+)(?:\\s*)(?:点|时|:|：)(?:\\s*)(\\d+|半|正|整|[" +
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
            "明" == i
                ? e.refDate.getHours() > 1 && r.setDate(r.getDate() + 1)
                : "昨" == i
                  ? r.setDate(r.getDate() - 1)
                  : "前" == i
                    ? r.setDate(r.getDate() - 2)
                    : "大前" == i
                      ? r.setDate(r.getDate() - 3)
                      : "后" == i
                        ? r.setDate(r.getDate() + 2)
                        : "大后" == i && r.setDate(r.getDate() + 3),
                n.start.assign("day", r.getDate()),
                n.start.assign("month", r.getMonth() + 1),
                n.start.assign("year", r.getFullYear());
        } else if (t[c]) {
            let e = t[c];
            "明" == e
                ? r.setDate(r.getDate() + 1)
                : "昨" == e
                  ? r.setDate(r.getDate() - 1)
                  : "前" == e
                    ? r.setDate(r.getDate() - 2)
                    : "大前" == e
                      ? r.setDate(r.getDate() - 3)
                      : "后" == e
                        ? r.setDate(r.getDate() + 2)
                        : "大后" == e && r.setDate(r.getDate() + 3),
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
            let e = parseInt(t[p]);
            if ((isNaN(e) && (e = (0, i.CT)(t[p])), e >= 60)) return null;
            n.start.assign("second", e);
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
            let e = t[h][0].toLowerCase();
            "a" == e && ((g = 0), 12 == a && (a = 0)), "p" == e && ((g = 1), 12 != a && (a += 12));
        } else if (t[l]) {
            let e = t[l][0];
            "早" == e ? ((g = 0), 12 == a && (a = 0)) : "晚" == e && ((g = 1), 12 != a && (a += 12));
        } else if (t[u]) {
            let e = t[u][0];
            "上" == e || "早" == e || "凌" == e
                ? ((g = 0), 12 == a && (a = 0))
                : ("下" == e || "晚" == e) && ((g = 1), 12 != a && (a += 12));
        } else if (t[d]) {
            let e = t[d][0];
            "上" == e || "早" == e || "凌" == e
                ? ((g = 0), 12 == a && (a = 0))
                : ("下" == e || "晚" == e) && ((g = 1), 12 != a && (a += 12));
        }
        n.start.assign("hour", a),
            n.start.assign("minute", m),
            g >= 0
                ? n.start.assign("meridiem", g)
                : a < 12
                  ? n.start.imply("meridiem", 0)
                  : n.start.imply("meridiem", 1);
        let E = s.exec(e.text.substring(n.index + n.text.length));
        if (!E) return n.text.match(/^\d+$/) ? null : n;
        let A = new Date(r.getTime());
        if (((n.end = e.createParsingComponents()), E[o])) {
            let t = E[o];
            "明" == t
                ? e.refDate.getHours() > 1 && A.setDate(A.getDate() + 1)
                : "昨" == t
                  ? A.setDate(A.getDate() - 1)
                  : "前" == t
                    ? A.setDate(A.getDate() - 2)
                    : "大前" == t
                      ? A.setDate(A.getDate() - 3)
                      : "后" == t
                        ? A.setDate(A.getDate() + 2)
                        : "大后" == t && A.setDate(A.getDate() + 3),
                n.end.assign("day", A.getDate()),
                n.end.assign("month", A.getMonth() + 1),
                n.end.assign("year", A.getFullYear());
        } else if (E[c]) {
            let e = E[c];
            "明" == e
                ? A.setDate(A.getDate() + 1)
                : "昨" == e
                  ? A.setDate(A.getDate() - 1)
                  : "前" == e
                    ? A.setDate(A.getDate() - 2)
                    : "大前" == e
                      ? A.setDate(A.getDate() - 3)
                      : "后" == e
                        ? A.setDate(A.getDate() + 2)
                        : "大后" == e && A.setDate(A.getDate() + 3),
                n.end.assign("day", A.getDate()),
                n.end.assign("month", A.getMonth() + 1),
                n.end.assign("year", A.getFullYear());
        } else
            n.end.imply("day", A.getDate()),
                n.end.imply("month", A.getMonth() + 1),
                n.end.imply("year", A.getFullYear());
        if (((a = 0), (m = 0), (g = -1), E[p])) {
            let e = parseInt(E[p]);
            if ((isNaN(e) && (e = (0, i.CT)(E[p])), e >= 60)) return null;
            n.end.assign("second", e);
        }
        if (
            (isNaN((a = parseInt(E[_]))) && (a = (0, i.CT)(E[_])),
            E[f]
                ? "半" == E[f]
                    ? (m = 30)
                    : "正" == E[f] || "整" == E[f]
                      ? (m = 0)
                      : isNaN((m = parseInt(E[f]))) && (m = (0, i.CT)(E[f]))
                : a > 100 && ((m = a % 100), (a = Math.floor(a / 100))),
            m >= 60 || a > 24)
        )
            return null;
        if ((a >= 12 && (g = 1), E[h])) {
            if (a > 12) return null;
            let e = E[h][0].toLowerCase();
            "a" == e && ((g = 0), 12 == a && (a = 0)),
                "p" == e && ((g = 1), 12 != a && (a += 12)),
                n.start.isCertain("meridiem") ||
                    (0 == g
                        ? (n.start.imply("meridiem", 0), 12 == n.start.get("hour") && n.start.assign("hour", 0))
                        : (n.start.imply("meridiem", 1),
                          12 != n.start.get("hour") && n.start.assign("hour", n.start.get("hour") + 12)));
        } else if (E[l]) {
            let e = E[l][0];
            "早" == e ? ((g = 0), 12 == a && (a = 0)) : "晚" == e && ((g = 1), 12 != a && (a += 12));
        } else if (E[u]) {
            let e = E[u][0];
            "上" == e || "早" == e || "凌" == e
                ? ((g = 0), 12 == a && (a = 0))
                : ("下" == e || "晚" == e) && ((g = 1), 12 != a && (a += 12));
        } else if (E[d]) {
            let e = E[d][0];
            "上" == e || "早" == e || "凌" == e
                ? ((g = 0), 12 == a && (a = 0))
                : ("下" == e || "晚" == e) && ((g = 1), 12 != a && (a += 12));
        }
        return (
            (n.text = n.text + E[0]),
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
