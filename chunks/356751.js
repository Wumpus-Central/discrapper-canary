r.d(t, { A: () => o });
var n = r(355418),
    s = r(11947);
let a = RegExp(
        "(?:从|自)?(?:(今|明|前|大前|后|大后|昨)(早|朝|晚)|(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|后|大后|昨)(?:日|天)(?:[\\s,，]*)(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" +
            Object.keys(s.uk).join("") +
            "]+)(?:\\s*)(?:点|时|:|：)(?:\\s*)(\\d+|半|正|整|[" +
            Object.keys(s.uk).join("") +
            "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)(\\d+|[" +
            Object.keys(s.uk).join("") +
            "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    i = RegExp(
        "(?:^\\s*(?:到|至|\\-|\\–|\\~|\\〜)\\s*)(?:(今|明|前|大前|后|大后|昨)(早|朝|晚)|(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|后|大后|昨)(?:日|天)(?:[\\s,，]*)(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" +
            Object.keys(s.uk).join("") +
            "]+)(?:\\s*)(?:点|时|:|：)(?:\\s*)(\\d+|半|正|整|[" +
            Object.keys(s.uk).join("") +
            "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)(\\d+|[" +
            Object.keys(s.uk).join("") +
            "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    );
class o extends n.c {
    innerPattern() {
        return a;
    }
    innerExtract(e, t) {
        if (t.index > 0 && e.text[t.index - 1].match(/\w/)) return null;
        let r = e.createParsingResult(t.index, t[0]),
            n = new Date(e.refDate.getTime());
        if (t[1]) {
            let s = t[1];
            "明" == s
                ? e.refDate.getHours() > 1 && n.setDate(n.getDate() + 1)
                : "昨" == s
                  ? n.setDate(n.getDate() - 1)
                  : "前" == s
                    ? n.setDate(n.getDate() - 2)
                    : "大前" == s
                      ? n.setDate(n.getDate() - 3)
                      : "后" == s
                        ? n.setDate(n.getDate() + 2)
                        : "大后" == s && n.setDate(n.getDate() + 3),
                r.start.assign("day", n.getDate()),
                r.start.assign("month", n.getMonth() + 1),
                r.start.assign("year", n.getFullYear());
        } else if (t[4]) {
            let e = t[4];
            "明" == e
                ? n.setDate(n.getDate() + 1)
                : "昨" == e
                  ? n.setDate(n.getDate() - 1)
                  : "前" == e
                    ? n.setDate(n.getDate() - 2)
                    : "大前" == e
                      ? n.setDate(n.getDate() - 3)
                      : "后" == e
                        ? n.setDate(n.getDate() + 2)
                        : "大后" == e && n.setDate(n.getDate() + 3),
                r.start.assign("day", n.getDate()),
                r.start.assign("month", n.getMonth() + 1),
                r.start.assign("year", n.getFullYear());
        } else
            r.start.imply("day", n.getDate()),
                r.start.imply("month", n.getMonth() + 1),
                r.start.imply("year", n.getFullYear());
        let a = 0,
            o = 0,
            l = -1;
        if (t[8]) {
            let e = parseInt(t[8]);
            if ((isNaN(e) && (e = (0, s.CT)(t[8])), e >= 60)) return null;
            r.start.assign("second", e);
        }
        if (
            (isNaN((a = parseInt(t[6]))) && (a = (0, s.CT)(t[6])),
            t[7]
                ? "半" == t[7]
                    ? (o = 30)
                    : "正" == t[7] || "整" == t[7]
                      ? (o = 0)
                      : isNaN((o = parseInt(t[7]))) && (o = (0, s.CT)(t[7]))
                : a > 100 && ((o = a % 100), (a = Math.floor(a / 100))),
            o >= 60 || a > 24)
        )
            return null;
        if ((a >= 12 && (l = 1), t[9])) {
            if (a > 12) return null;
            let e = t[9][0].toLowerCase();
            "a" == e && ((l = 0), 12 == a && (a = 0)), "p" == e && ((l = 1), 12 != a && (a += 12));
        } else if (t[2]) {
            let e = t[2][0];
            "早" == e ? ((l = 0), 12 == a && (a = 0)) : "晚" == e && ((l = 1), 12 != a && (a += 12));
        } else if (t[3]) {
            let e = t[3][0];
            "上" == e || "早" == e || "凌" == e
                ? ((l = 0), 12 == a && (a = 0))
                : ("下" == e || "晚" == e) && ((l = 1), 12 != a && (a += 12));
        } else if (t[5]) {
            let e = t[5][0];
            "上" == e || "早" == e || "凌" == e
                ? ((l = 0), 12 == a && (a = 0))
                : ("下" == e || "晚" == e) && ((l = 1), 12 != a && (a += 12));
        }
        r.start.assign("hour", a),
            r.start.assign("minute", o),
            l >= 0
                ? r.start.assign("meridiem", l)
                : a < 12
                  ? r.start.imply("meridiem", 0)
                  : r.start.imply("meridiem", 1);
        let u = i.exec(e.text.substring(r.index + r.text.length));
        if (!u) return r.text.match(/^\d+$/) ? null : r;
        let d = new Date(n.getTime());
        if (((r.end = e.createParsingComponents()), u[1])) {
            let t = u[1];
            "明" == t
                ? e.refDate.getHours() > 1 && d.setDate(d.getDate() + 1)
                : "昨" == t
                  ? d.setDate(d.getDate() - 1)
                  : "前" == t
                    ? d.setDate(d.getDate() - 2)
                    : "大前" == t
                      ? d.setDate(d.getDate() - 3)
                      : "后" == t
                        ? d.setDate(d.getDate() + 2)
                        : "大后" == t && d.setDate(d.getDate() + 3),
                r.end.assign("day", d.getDate()),
                r.end.assign("month", d.getMonth() + 1),
                r.end.assign("year", d.getFullYear());
        } else if (u[4]) {
            let e = u[4];
            "明" == e
                ? d.setDate(d.getDate() + 1)
                : "昨" == e
                  ? d.setDate(d.getDate() - 1)
                  : "前" == e
                    ? d.setDate(d.getDate() - 2)
                    : "大前" == e
                      ? d.setDate(d.getDate() - 3)
                      : "后" == e
                        ? d.setDate(d.getDate() + 2)
                        : "大后" == e && d.setDate(d.getDate() + 3),
                r.end.assign("day", d.getDate()),
                r.end.assign("month", d.getMonth() + 1),
                r.end.assign("year", d.getFullYear());
        } else
            r.end.imply("day", d.getDate()),
                r.end.imply("month", d.getMonth() + 1),
                r.end.imply("year", d.getFullYear());
        if (((a = 0), (o = 0), (l = -1), u[8])) {
            let e = parseInt(u[8]);
            if ((isNaN(e) && (e = (0, s.CT)(u[8])), e >= 60)) return null;
            r.end.assign("second", e);
        }
        if (
            (isNaN((a = parseInt(u[6]))) && (a = (0, s.CT)(u[6])),
            u[7]
                ? "半" == u[7]
                    ? (o = 30)
                    : "正" == u[7] || "整" == u[7]
                      ? (o = 0)
                      : isNaN((o = parseInt(u[7]))) && (o = (0, s.CT)(u[7]))
                : a > 100 && ((o = a % 100), (a = Math.floor(a / 100))),
            o >= 60 || a > 24)
        )
            return null;
        if ((a >= 12 && (l = 1), u[9])) {
            if (a > 12) return null;
            let e = u[9][0].toLowerCase();
            "a" == e && ((l = 0), 12 == a && (a = 0)),
                "p" == e && ((l = 1), 12 != a && (a += 12)),
                r.start.isCertain("meridiem") ||
                    (0 == l
                        ? (r.start.imply("meridiem", 0), 12 == r.start.get("hour") && r.start.assign("hour", 0))
                        : (r.start.imply("meridiem", 1),
                          12 != r.start.get("hour") && r.start.assign("hour", r.start.get("hour") + 12)));
        } else if (u[2]) {
            let e = u[2][0];
            "早" == e ? ((l = 0), 12 == a && (a = 0)) : "晚" == e && ((l = 1), 12 != a && (a += 12));
        } else if (u[3]) {
            let e = u[3][0];
            "上" == e || "早" == e || "凌" == e
                ? ((l = 0), 12 == a && (a = 0))
                : ("下" == e || "晚" == e) && ((l = 1), 12 != a && (a += 12));
        } else if (u[5]) {
            let e = u[5][0];
            "上" == e || "早" == e || "凌" == e
                ? ((l = 0), 12 == a && (a = 0))
                : ("下" == e || "晚" == e) && ((l = 1), 12 != a && (a += 12));
        }
        return (
            (r.text = r.text + u[0]),
            r.end.assign("hour", a),
            r.end.assign("minute", o),
            l >= 0
                ? r.end.assign("meridiem", l)
                : r.start.isCertain("meridiem") && 1 == r.start.get("meridiem") && r.start.get("hour") > a
                  ? r.end.imply("meridiem", 0)
                  : a > 12 && r.end.imply("meridiem", 1),
            r.end.date().getTime() < r.start.date().getTime() && r.end.imply("day", r.end.get("day") + 1),
            r
        );
    }
}
