n.d(t, {
    A: () => m,
});
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
    c = 3,
    u = 4,
    d = 5,
    f = 6,
    p = 7,
    _ = 8,
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
        } else if (t[u]) {
            let e = t[u];
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
        if (t[_]) {
            var E = parseInt(t[_]);
            if ((isNaN(E) && (E = (0, i.CT)(t[_])), E >= 60)) return null;
            n.start.assign("second", E);
        }
        if (
            (isNaN((a = parseInt(t[f]))) && (a = (0, i.CT)(t[f])),
            t[p]
                ? "半" == t[p]
                    ? (m = 30)
                    : "正" == t[p] || "整" == t[p]
                      ? (m = 0)
                      : isNaN((m = parseInt(t[p]))) && (m = (0, i.CT)(t[p]))
                : a > 100 && ((m = a % 100), (a = Math.floor(a / 100))),
            m >= 60 || a > 24)
        )
            return null;
        if ((a >= 12 && (g = 1), t[h])) {
            if (a > 12) return null;
            var b = t[h][0].toLowerCase();
            "a" == b && ((g = 0), 12 == a && (a = 0)), "p" == b && ((g = 1), 12 != a && (a += 12));
        } else if (t[l]) {
            var y = t[l][0];
            "朝" == y || "早" == y ? ((g = 0), 12 == a && (a = 0)) : "晚" == y && ((g = 1), 12 != a && (a += 12));
        } else if (t[c]) {
            var O = t[c][0];
            "上" == O || "朝" == O || "早" == O || "凌" == O
                ? ((g = 0), 12 == a && (a = 0))
                : ("下" == O || "晏" == O || "晚" == O) && ((g = 1), 12 != a && (a += 12));
        } else if (t[d]) {
            var A = t[d][0];
            "上" == A || "朝" == A || "早" == A || "凌" == A
                ? ((g = 0), 12 == a && (a = 0))
                : ("下" == A || "晏" == A || "晚" == A) && ((g = 1), 12 != a && (a += 12));
        }
        n.start.assign("hour", a),
            n.start.assign("minute", m),
            g >= 0
                ? n.start.assign("meridiem", g)
                : a < 12
                  ? n.start.imply("meridiem", 0)
                  : n.start.imply("meridiem", 1);
        let v = s.exec(e.text.substring(n.index + n.text.length));
        if (!v) return n.text.match(/^\d+$/) ? null : n;
        let S = new Date(r.getTime());
        if (((n.end = e.createParsingComponents()), v[o])) {
            let t = v[o];
            "明" == t || "聽" == t
                ? e.refDate.getHours() > 1 && S.setDate(S.getDate() + 1)
                : "昨" == t || "尋" == t || "琴" == t
                  ? S.setDate(S.getDate() - 1)
                  : "前" == t
                    ? S.setDate(S.getDate() - 2)
                    : "大前" == t
                      ? S.setDate(S.getDate() - 3)
                      : "後" == t
                        ? S.setDate(S.getDate() + 2)
                        : "大後" == t && S.setDate(S.getDate() + 3),
                n.end.assign("day", S.getDate()),
                n.end.assign("month", S.getMonth() + 1),
                n.end.assign("year", S.getFullYear());
        } else if (v[u]) {
            let e = v[u];
            "明" == e || "聽" == e
                ? S.setDate(S.getDate() + 1)
                : "昨" == e || "尋" == e || "琴" == e
                  ? S.setDate(S.getDate() - 1)
                  : "前" == e
                    ? S.setDate(S.getDate() - 2)
                    : "大前" == e
                      ? S.setDate(S.getDate() - 3)
                      : "後" == e
                        ? S.setDate(S.getDate() + 2)
                        : "大後" == e && S.setDate(S.getDate() + 3),
                n.end.assign("day", S.getDate()),
                n.end.assign("month", S.getMonth() + 1),
                n.end.assign("year", S.getFullYear());
        } else
            n.end.imply("day", S.getDate()),
                n.end.imply("month", S.getMonth() + 1),
                n.end.imply("year", S.getFullYear());
        if (((a = 0), (m = 0), (g = -1), v[_])) {
            let e = parseInt(v[_]);
            if ((isNaN(e) && (e = (0, i.CT)(v[_])), e >= 60)) return null;
            n.end.assign("second", e);
        }
        if (
            (isNaN((a = parseInt(v[f]))) && (a = (0, i.CT)(v[f])),
            v[p]
                ? "半" == v[p]
                    ? (m = 30)
                    : "正" == v[p] || "整" == v[p]
                      ? (m = 0)
                      : isNaN((m = parseInt(v[p]))) && (m = (0, i.CT)(v[p]))
                : a > 100 && ((m = a % 100), (a = Math.floor(a / 100))),
            m >= 60 || a > 24)
        )
            return null;
        if ((a >= 12 && (g = 1), v[h])) {
            if (a > 12) return null;
            var b = v[h][0].toLowerCase();
            "a" == b && ((g = 0), 12 == a && (a = 0)),
                "p" == b && ((g = 1), 12 != a && (a += 12)),
                n.start.isCertain("meridiem") ||
                    (0 == g
                        ? (n.start.imply("meridiem", 0), 12 == n.start.get("hour") && n.start.assign("hour", 0))
                        : (n.start.imply("meridiem", 1),
                          12 != n.start.get("hour") && n.start.assign("hour", n.start.get("hour") + 12)));
        } else if (v[l]) {
            var y = v[l][0];
            "朝" == y || "早" == y ? ((g = 0), 12 == a && (a = 0)) : "晚" == y && ((g = 1), 12 != a && (a += 12));
        } else if (v[c]) {
            var O = v[c][0];
            "上" == O || "朝" == O || "早" == O || "凌" == O
                ? ((g = 0), 12 == a && (a = 0))
                : ("下" == O || "晏" == O || "晚" == O) && ((g = 1), 12 != a && (a += 12));
        } else if (v[d]) {
            var A = v[d][0];
            "上" == A || "朝" == A || "早" == A || "凌" == A
                ? ((g = 0), 12 == a && (a = 0))
                : ("下" == A || "晏" == A || "晚" == A) && ((g = 1), 12 != a && (a += 12));
        }
        return (
            (n.text = n.text + v[0]),
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
