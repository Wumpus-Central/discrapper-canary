r.d(t, { A: () => o });
var n = r(355418),
    s = r(725198);
let a = RegExp(
        "(?:由|從|自)?(?:(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s,，]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" +
            Object.keys(s.uk).join("") +
            "]+)(?:\\s*)(?:點|時|:|：)(?:\\s*)(\\d+|半|正|整|[" +
            Object.keys(s.uk).join("") +
            "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)(\\d+|[" +
            Object.keys(s.uk).join("") +
            "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    i = RegExp(
        "(?:^\\s*(?:到|至|\\-|\\–|\\~|\\〜)\\s*)(?:(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s,，]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" +
            Object.keys(s.uk).join("") +
            "]+)(?:\\s*)(?:點|時|:|：)(?:\\s*)(\\d+|半|正|整|[" +
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
            "明" == s || "聽" == s
                ? e.refDate.getHours() > 1 && n.setDate(n.getDate() + 1)
                : "昨" == s || "尋" == s || "琴" == s
                  ? n.setDate(n.getDate() - 1)
                  : "前" == s
                    ? n.setDate(n.getDate() - 2)
                    : "大前" == s
                      ? n.setDate(n.getDate() - 3)
                      : "後" == s
                        ? n.setDate(n.getDate() + 2)
                        : "大後" == s && n.setDate(n.getDate() + 3),
                r.start.assign("day", n.getDate()),
                r.start.assign("month", n.getMonth() + 1),
                r.start.assign("year", n.getFullYear());
        } else if (t[4]) {
            let e = t[4];
            "明" == e || "聽" == e
                ? n.setDate(n.getDate() + 1)
                : "昨" == e || "尋" == e || "琴" == e
                  ? n.setDate(n.getDate() - 1)
                  : "前" == e
                    ? n.setDate(n.getDate() - 2)
                    : "大前" == e
                      ? n.setDate(n.getDate() - 3)
                      : "後" == e
                        ? n.setDate(n.getDate() + 2)
                        : "大後" == e && n.setDate(n.getDate() + 3),
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
            var u = parseInt(t[8]);
            if ((isNaN(u) && (u = (0, s.CT)(t[8])), u >= 60)) return null;
            r.start.assign("second", u);
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
            var d = t[9][0].toLowerCase();
            "a" == d && ((l = 0), 12 == a && (a = 0)), "p" == d && ((l = 1), 12 != a && (a += 12));
        } else if (t[2]) {
            var m = t[2][0];
            "朝" == m || "早" == m ? ((l = 0), 12 == a && (a = 0)) : "晚" == m && ((l = 1), 12 != a && (a += 12));
        } else if (t[3]) {
            var c = t[3][0];
            "上" == c || "朝" == c || "早" == c || "凌" == c
                ? ((l = 0), 12 == a && (a = 0))
                : ("下" == c || "晏" == c || "晚" == c) && ((l = 1), 12 != a && (a += 12));
        } else if (t[5]) {
            var g = t[5][0];
            "上" == g || "朝" == g || "早" == g || "凌" == g
                ? ((l = 0), 12 == a && (a = 0))
                : ("下" == g || "晏" == g || "晚" == g) && ((l = 1), 12 != a && (a += 12));
        }
        r.start.assign("hour", a),
            r.start.assign("minute", o),
            l >= 0
                ? r.start.assign("meridiem", l)
                : a < 12
                  ? r.start.imply("meridiem", 0)
                  : r.start.imply("meridiem", 1);
        let h = i.exec(e.text.substring(r.index + r.text.length));
        if (!h) return r.text.match(/^\d+$/) ? null : r;
        let f = new Date(n.getTime());
        if (((r.end = e.createParsingComponents()), h[1])) {
            let t = h[1];
            "明" == t || "聽" == t
                ? e.refDate.getHours() > 1 && f.setDate(f.getDate() + 1)
                : "昨" == t || "尋" == t || "琴" == t
                  ? f.setDate(f.getDate() - 1)
                  : "前" == t
                    ? f.setDate(f.getDate() - 2)
                    : "大前" == t
                      ? f.setDate(f.getDate() - 3)
                      : "後" == t
                        ? f.setDate(f.getDate() + 2)
                        : "大後" == t && f.setDate(f.getDate() + 3),
                r.end.assign("day", f.getDate()),
                r.end.assign("month", f.getMonth() + 1),
                r.end.assign("year", f.getFullYear());
        } else if (h[4]) {
            let e = h[4];
            "明" == e || "聽" == e
                ? f.setDate(f.getDate() + 1)
                : "昨" == e || "尋" == e || "琴" == e
                  ? f.setDate(f.getDate() - 1)
                  : "前" == e
                    ? f.setDate(f.getDate() - 2)
                    : "大前" == e
                      ? f.setDate(f.getDate() - 3)
                      : "後" == e
                        ? f.setDate(f.getDate() + 2)
                        : "大後" == e && f.setDate(f.getDate() + 3),
                r.end.assign("day", f.getDate()),
                r.end.assign("month", f.getMonth() + 1),
                r.end.assign("year", f.getFullYear());
        } else
            r.end.imply("day", f.getDate()),
                r.end.imply("month", f.getMonth() + 1),
                r.end.imply("year", f.getFullYear());
        if (((a = 0), (o = 0), (l = -1), h[8])) {
            let e = parseInt(h[8]);
            if ((isNaN(e) && (e = (0, s.CT)(h[8])), e >= 60)) return null;
            r.end.assign("second", e);
        }
        if (
            (isNaN((a = parseInt(h[6]))) && (a = (0, s.CT)(h[6])),
            h[7]
                ? "半" == h[7]
                    ? (o = 30)
                    : "正" == h[7] || "整" == h[7]
                      ? (o = 0)
                      : isNaN((o = parseInt(h[7]))) && (o = (0, s.CT)(h[7]))
                : a > 100 && ((o = a % 100), (a = Math.floor(a / 100))),
            o >= 60 || a > 24)
        )
            return null;
        if ((a >= 12 && (l = 1), h[9])) {
            if (a > 12) return null;
            var d = h[9][0].toLowerCase();
            "a" == d && ((l = 0), 12 == a && (a = 0)),
                "p" == d && ((l = 1), 12 != a && (a += 12)),
                r.start.isCertain("meridiem") ||
                    (0 == l
                        ? (r.start.imply("meridiem", 0), 12 == r.start.get("hour") && r.start.assign("hour", 0))
                        : (r.start.imply("meridiem", 1),
                          12 != r.start.get("hour") && r.start.assign("hour", r.start.get("hour") + 12)));
        } else if (h[2]) {
            var m = h[2][0];
            "朝" == m || "早" == m ? ((l = 0), 12 == a && (a = 0)) : "晚" == m && ((l = 1), 12 != a && (a += 12));
        } else if (h[3]) {
            var c = h[3][0];
            "上" == c || "朝" == c || "早" == c || "凌" == c
                ? ((l = 0), 12 == a && (a = 0))
                : ("下" == c || "晏" == c || "晚" == c) && ((l = 1), 12 != a && (a += 12));
        } else if (h[5]) {
            var g = h[5][0];
            "上" == g || "朝" == g || "早" == g || "凌" == g
                ? ((l = 0), 12 == a && (a = 0))
                : ("下" == g || "晏" == g || "晚" == g) && ((l = 1), 12 != a && (a += 12));
        }
        return (
            (r.text = r.text + h[0]),
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
