n.d(t, { Z: () => h });
var r = n(727916),
    i = n(627459);
let a = RegExp(
        "(?:从|自)?(?:(今|明|前|大前|后|大后|昨)(早|朝|晚)|(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|后|大后|昨)(?:日|天)(?:[\\s,\uFF0C]*)(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,\uFF0C]*)(?:(\\d+|[" +
            Object.keys(i.Wu).join("") +
            "]+)(?:\\s*)(?:点|时|:|\uFF1A)(?:\\s*)(\\d+|半|正|整|[" +
            Object.keys(i.Wu).join("") +
            "]+)?(?:\\s*)(?:分|:|\uFF1A)?(?:\\s*)(\\d+|[" +
            Object.keys(i.Wu).join("") +
            "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    o = RegExp(
        "(?:^\\s*(?:到|至|\\-|\\\u2013|\\~|\\\u301C)\\s*)(?:(今|明|前|大前|后|大后|昨)(早|朝|晚)|(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|后|大后|昨)(?:日|天)(?:[\\s,\uFF0C]*)(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,\uFF0C]*)(?:(\\d+|[" +
            Object.keys(i.Wu).join("") +
            "]+)(?:\\s*)(?:点|时|:|\uFF1A)(?:\\s*)(\\d+|半|正|整|[" +
            Object.keys(i.Wu).join("") +
            "]+)?(?:\\s*)(?:分|:|\uFF1A)?(?:\\s*)(\\d+|[" +
            Object.keys(i.Wu).join("") +
            "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    s = 1,
    l = 2,
    c = 3,
    u = 4,
    d = 5,
    f = 6,
    p = 7,
    _ = 8,
    m = 9;
class h extends r.Z {
    innerPattern() {
        return a;
    }
    innerExtract(e, t) {
        if (t.index > 0 && e.text[t.index - 1].match(/\w/)) return null;
        let n = e.createParsingResult(t.index, t[0]),
            r = new Date(e.refDate.getTime());
        if (t[s]) {
            let i = t[s];
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
        } else if (t[u]) {
            let e = t[u];
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
            h = 0,
            g = -1;
        if (t[_]) {
            let e = parseInt(t[_]);
            if ((isNaN(e) && (e = (0, i.zU)(t[_])), e >= 60)) return null;
            n.start.assign("second", e);
        }
        if (
            (isNaN((a = parseInt(t[f]))) && (a = (0, i.zU)(t[f])),
            t[p]
                ? "半" == t[p]
                    ? (h = 30)
                    : "正" == t[p] || "整" == t[p]
                      ? (h = 0)
                      : isNaN((h = parseInt(t[p]))) && (h = (0, i.zU)(t[p]))
                : a > 100 && ((h = a % 100), (a = Math.floor(a / 100))),
            h >= 60 || a > 24)
        )
            return null;
        if ((a >= 12 && (g = 1), t[m])) {
            if (a > 12) return null;
            let e = t[m][0].toLowerCase();
            "a" == e && ((g = 0), 12 == a && (a = 0)), "p" == e && ((g = 1), 12 != a && (a += 12));
        } else if (t[l]) {
            let e = t[l][0];
            "早" == e ? ((g = 0), 12 == a && (a = 0)) : "晚" == e && ((g = 1), 12 != a && (a += 12));
        } else if (t[c]) {
            let e = t[c][0];
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
            n.start.assign("minute", h),
            g >= 0
                ? n.start.assign("meridiem", g)
                : a < 12
                  ? n.start.imply("meridiem", 0)
                  : n.start.imply("meridiem", 1);
        let E = o.exec(e.text.substring(n.index + n.text.length));
        if (!E) return n.text.match(/^\d+$/) ? null : n;
        let b = new Date(r.getTime());
        if (((n.end = e.createParsingComponents()), E[s])) {
            let t = E[s];
            "明" == t
                ? e.refDate.getHours() > 1 && b.setDate(b.getDate() + 1)
                : "昨" == t
                  ? b.setDate(b.getDate() - 1)
                  : "前" == t
                    ? b.setDate(b.getDate() - 2)
                    : "大前" == t
                      ? b.setDate(b.getDate() - 3)
                      : "后" == t
                        ? b.setDate(b.getDate() + 2)
                        : "大后" == t && b.setDate(b.getDate() + 3),
                n.end.assign("day", b.getDate()),
                n.end.assign("month", b.getMonth() + 1),
                n.end.assign("year", b.getFullYear());
        } else if (E[u]) {
            let e = E[u];
            "明" == e
                ? b.setDate(b.getDate() + 1)
                : "昨" == e
                  ? b.setDate(b.getDate() - 1)
                  : "前" == e
                    ? b.setDate(b.getDate() - 2)
                    : "大前" == e
                      ? b.setDate(b.getDate() - 3)
                      : "后" == e
                        ? b.setDate(b.getDate() + 2)
                        : "大后" == e && b.setDate(b.getDate() + 3),
                n.end.assign("day", b.getDate()),
                n.end.assign("month", b.getMonth() + 1),
                n.end.assign("year", b.getFullYear());
        } else
            n.end.imply("day", b.getDate()),
                n.end.imply("month", b.getMonth() + 1),
                n.end.imply("year", b.getFullYear());
        if (((a = 0), (h = 0), (g = -1), E[_])) {
            let e = parseInt(E[_]);
            if ((isNaN(e) && (e = (0, i.zU)(E[_])), e >= 60)) return null;
            n.end.assign("second", e);
        }
        if (
            (isNaN((a = parseInt(E[f]))) && (a = (0, i.zU)(E[f])),
            E[p]
                ? "半" == E[p]
                    ? (h = 30)
                    : "正" == E[p] || "整" == E[p]
                      ? (h = 0)
                      : isNaN((h = parseInt(E[p]))) && (h = (0, i.zU)(E[p]))
                : a > 100 && ((h = a % 100), (a = Math.floor(a / 100))),
            h >= 60 || a > 24)
        )
            return null;
        if ((a >= 12 && (g = 1), E[m])) {
            if (a > 12) return null;
            let e = E[m][0].toLowerCase();
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
        } else if (E[c]) {
            let e = E[c][0];
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
            n.end.assign("minute", h),
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
