r.r(t),
    r.d(t, {
        hans: () => R,
        casual: () => E,
        ReferenceWithTimezone: () => i.b5,
        parseDate: () => k,
        ParsingResult: () => i.s4,
        createCasualConfiguration: () => j,
        Weekday: () => o.Bw,
        strict: () => b,
        Chrono: () => a.u,
        Meridiem: () => o.FF,
        ParsingComponents: () => i.BP,
        createConfiguration: () => B,
        parse: () => A,
    });
var n = r(321287),
    s = r(132588),
    a = r(880683),
    i = r(374372),
    o = r(322811),
    l = r(355418);
class u extends l.c {
    innerPattern(e) {
        return RegExp(
            "(\u73B0\u5728|\u7ACB(?:\u523B|\u5373)|\u5373\u523B)|(\u4ECA|\u660E|\u524D|\u5927\u524D|\u540E|\u5927\u540E|\u6628)(\u65E9|\u665A)|(\u4E0A(?:\u5348)|\u65E9(?:\u4E0A)|\u4E0B(?:\u5348)|\u665A(?:\u4E0A)|\u591C(?:\u665A)?|\u4E2D(?:\u5348)|\u51CC(?:\u6668))|(\u4ECA|\u660E|\u524D|\u5927\u524D|\u540E|\u5927\u540E|\u6628)(?:\u65E5|\u5929)(?:[\\s|,|\uFF0C]*)(?:(\u4E0A(?:\u5348)|\u65E9(?:\u4E0A)|\u4E0B(?:\u5348)|\u665A(?:\u4E0A)|\u591C(?:\u665A)?|\u4E2D(?:\u5348)|\u51CC(?:\u6668)))?",
            "i",
        );
    }
    innerExtract(e, t) {
        let r = t.index,
            n = e.createParsingResult(r, t[0]),
            s = e.refDate,
            a = new Date(s.getTime());
        if (t[1])
            n.start.imply("hour", s.getHours()),
                n.start.imply("minute", s.getMinutes()),
                n.start.imply("second", s.getSeconds()),
                n.start.imply("millisecond", s.getMilliseconds());
        else if (t[2]) {
            let e = t[2],
                r = t[3];
            "\u660E" == e
                ? s.getHours() > 1 && a.setDate(a.getDate() + 1)
                : "\u6628" == e
                  ? a.setDate(a.getDate() - 1)
                  : "\u524D" == e
                    ? a.setDate(a.getDate() - 2)
                    : "\u5927\u524D" == e
                      ? a.setDate(a.getDate() - 3)
                      : "\u540E" == e
                        ? a.setDate(a.getDate() + 2)
                        : "\u5927\u540E" == e && a.setDate(a.getDate() + 3),
                "\u65E9" == r
                    ? n.start.imply("hour", 6)
                    : "\u665A" == r && (n.start.imply("hour", 22), n.start.imply("meridiem", 1));
        } else if (t[4]) {
            let e = t[4][0];
            "\u65E9" == e || "\u4E0A" == e
                ? n.start.imply("hour", 6)
                : "\u4E0B" == e
                  ? (n.start.imply("hour", 15), n.start.imply("meridiem", 1))
                  : "\u4E2D" == e
                    ? (n.start.imply("hour", 12), n.start.imply("meridiem", 1))
                    : "\u591C" == e || "\u665A" == e
                      ? (n.start.imply("hour", 22), n.start.imply("meridiem", 1))
                      : "\u51CC" == e && n.start.imply("hour", 0);
        } else if (t[5]) {
            let e = t[5];
            "\u660E" == e
                ? s.getHours() > 1 && a.setDate(a.getDate() + 1)
                : "\u6628" == e
                  ? a.setDate(a.getDate() - 1)
                  : "\u524D" == e
                    ? a.setDate(a.getDate() - 2)
                    : "\u5927\u524D" == e
                      ? a.setDate(a.getDate() - 3)
                      : "\u540E" == e
                        ? a.setDate(a.getDate() + 2)
                        : "\u5927\u540E" == e && a.setDate(a.getDate() + 3);
            let r = t[6];
            if (r) {
                let e = r[0];
                "\u65E9" == e || "\u4E0A" == e
                    ? n.start.imply("hour", 6)
                    : "\u4E0B" == e
                      ? (n.start.imply("hour", 15), n.start.imply("meridiem", 1))
                      : "\u4E2D" == e
                        ? (n.start.imply("hour", 12), n.start.imply("meridiem", 1))
                        : "\u591C" == e || "\u665A" == e
                          ? (n.start.imply("hour", 22), n.start.imply("meridiem", 1))
                          : "\u51CC" == e && n.start.imply("hour", 0);
            }
        }
        return (
            n.start.assign("day", a.getDate()),
            n.start.assign("month", a.getMonth() + 1),
            n.start.assign("year", a.getFullYear()),
            n
        );
    }
}
let m = {
        \u96F6: 0,
        \u3007: 0,
        \u4E00: 1,
        \u4E8C: 2,
        \u4E24: 2,
        \u4E09: 3,
        \u56DB: 4,
        \u4E94: 5,
        \u516D: 6,
        \u4E03: 7,
        \u516B: 8,
        \u4E5D: 9,
        \u5341: 10,
    },
    d = { \u5929: 0, \u65E5: 0, \u4E00: 1, \u4E8C: 2, \u4E09: 3, \u56DB: 4, \u4E94: 5, \u516D: 6 };
function c(e) {
    let t = 0;
    for (let r = 0; r < e.length; r++) {
        let n = e[r];
        "\u5341" === n ? (t = 0 === t ? m[n] : t * m[n]) : (t += m[n]);
    }
    return t;
}
class g extends l.c {
    innerPattern() {
        return RegExp(
            "(\\d{2,4}|[" +
                Object.keys(m).join("") +
                "]{4}|[" +
                Object.keys(m).join("") +
                "]{2})?(?:\\s*)(?:\u5E74)?(?:[\\s|,|\uFF0C]*)(\\d{1,2}|[" +
                Object.keys(m).join("") +
                "]{1,3})(?:\\s*)(?:\u6708)(?:\\s*)(\\d{1,2}|[" +
                Object.keys(m).join("") +
                "]{1,3})?(?:\\s*)(?:\u65E5|\u53F7)?",
        );
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = parseInt(t[2]);
        if ((isNaN(n) && (n = c(t[2])), r.start.assign("month", n), t[3])) {
            let e = parseInt(t[3]);
            isNaN(e) && (e = c(t[3])), r.start.assign("day", e);
        } else r.start.imply("day", e.refDate.getDate());
        if (t[1]) {
            let e = parseInt(t[1]);
            isNaN(e) &&
                (e = (function (e) {
                    let t = "";
                    for (let r = 0; r < e.length; r++) t += m[e[r]];
                    return parseInt(t);
                })(t[1])),
                r.start.assign("year", e);
        } else r.start.imply("year", e.refDate.getFullYear());
        return r;
    }
}
var h = r(632434);
let f = RegExp(
    "(\\d+|[" +
        Object.keys(m).join("") +
        "]+|\u534A|\u51E0)(?:\\s*)(?:\u4E2A)?(\u79D2(?:\u949F)?|\u5206\u949F|\u5C0F\u65F6|\u949F|\u65E5|\u5929|\u661F\u671F|\u793C\u62DC|\u6708|\u5E74)(?:(?:\u4E4B|\u8FC7)?\u540E|(?:\u4E4B)?\u5185)",
    "i",
);
class p extends l.c {
    innerPattern() {
        return f;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = parseInt(t[1]);
        if ((isNaN(n) && (n = c(t[1])), isNaN(n))) {
            let e = t[1];
            if ("\u51E0" === e) n = 3;
            else {
                if ("\u534A" !== e) return null;
                n = 0.5;
            }
        }
        let s = {},
            a = t[2][0];
        if (a.match(/[\u65e5\u5929\u661f\u793c\u6708\u5e74]/)) {
            "\u65E5" == a || "\u5929" == a
                ? (s.day = n)
                : "\u661F" == a || "\u793C" == a
                  ? (s.week = n)
                  : "\u6708" == a
                    ? (s.month = n)
                    : "\u5E74" == a && (s.year = n);
            let t = (0, h.Gw)(e.refDate, s);
            return (
                r.start.assign("year", t.getFullYear()),
                r.start.assign("month", t.getMonth() + 1),
                r.start.assign("day", t.getDate()),
                r
            );
        }
        "\u79D2" == a
            ? (s.second = n)
            : "\u5206" == a
              ? (s.minute = n)
              : ("\u5C0F" == a || "\u949F" == a) && (s.hour = n);
        let i = (0, h.Gw)(e.refDate, s);
        return (
            r.start.imply("year", i.getFullYear()),
            r.start.imply("month", i.getMonth() + 1),
            r.start.imply("day", i.getDate()),
            r.start.assign("hour", i.getHours()),
            r.start.assign("minute", i.getMinutes()),
            r.start.assign("second", i.getSeconds()),
            r
        );
    }
}
let y = RegExp(
    "(?<prefix>\u4E0A|\u4E0B|\u8FD9)(?:\u4E2A)?(?:\u661F\u671F|\u793C\u62DC|\u5468)(?<weekday>" +
        Object.keys(d).join("|") +
        ")",
);
class x extends l.c {
    innerPattern() {
        return y;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = d[t.groups.weekday];
        if (void 0 === n) return null;
        let s = null,
            a = t.groups.prefix;
        "\u4E0A" == a ? (s = "last") : "\u4E0B" == a ? (s = "next") : "\u8FD9" == a && (s = "this");
        let i = new Date(e.refDate.getTime()),
            o = !1,
            l = i.getDay();
        if ("last" == s || "past" == s) i.setDate(i.getDate() + (n - 7 - l)), (o = !0);
        else if ("next" == s) i.setDate(i.getDate() + (n + 7 - l)), (o = !0);
        else if ("this" == s) i.setDate(i.getDate() + (n - l));
        else {
            let e = n - l;
            Math.abs(e - 7) < Math.abs(e) && (e -= 7),
                Math.abs(e + 7) < Math.abs(e) && (e += 7),
                i.setDate(i.getDate() + e);
        }
        return (
            r.start.assign("weekday", n),
            o
                ? (r.start.assign("day", i.getDate()),
                  r.start.assign("month", i.getMonth() + 1),
                  r.start.assign("year", i.getFullYear()))
                : (r.start.imply("day", i.getDate()),
                  r.start.imply("month", i.getMonth() + 1),
                  r.start.imply("year", i.getFullYear())),
            r
        );
    }
}
let w = RegExp(
        "(?:\u4ECE|\u81EA)?(?:(\u4ECA|\u660E|\u524D|\u5927\u524D|\u540E|\u5927\u540E|\u6628)(\u65E9|\u671D|\u665A)|(\u4E0A(?:\u5348)|\u65E9(?:\u4E0A)|\u4E0B(?:\u5348)|\u665A(?:\u4E0A)|\u591C(?:\u665A)?|\u4E2D(?:\u5348)|\u51CC(?:\u6668))|(\u4ECA|\u660E|\u524D|\u5927\u524D|\u540E|\u5927\u540E|\u6628)(?:\u65E5|\u5929)(?:[\\s,\uFF0C]*)(?:(\u4E0A(?:\u5348)|\u65E9(?:\u4E0A)|\u4E0B(?:\u5348)|\u665A(?:\u4E0A)|\u591C(?:\u665A)?|\u4E2D(?:\u5348)|\u51CC(?:\u6668)))?)?(?:[\\s,\uFF0C]*)(?:(\\d+|[" +
            Object.keys(m).join("") +
            "]+)(?:\\s*)(?:\u70B9|\u65F6|:|\uFF1A)(?:\\s*)(\\d+|\u534A|\u6B63|\u6574|[" +
            Object.keys(m).join("") +
            "]+)?(?:\\s*)(?:\u5206|:|\uFF1A)?(?:\\s*)(\\d+|[" +
            Object.keys(m).join("") +
            "]+)?(?:\\s*)(?:\u79D2)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    D = RegExp(
        "(?:^\\s*(?:\u5230|\u81F3|\\-|\\\u2013|\\~|\\\u301C)\\s*)(?:(\u4ECA|\u660E|\u524D|\u5927\u524D|\u540E|\u5927\u540E|\u6628)(\u65E9|\u671D|\u665A)|(\u4E0A(?:\u5348)|\u65E9(?:\u4E0A)|\u4E0B(?:\u5348)|\u665A(?:\u4E0A)|\u591C(?:\u665A)?|\u4E2D(?:\u5348)|\u51CC(?:\u6668))|(\u4ECA|\u660E|\u524D|\u5927\u524D|\u540E|\u5927\u540E|\u6628)(?:\u65E5|\u5929)(?:[\\s,\uFF0C]*)(?:(\u4E0A(?:\u5348)|\u65E9(?:\u4E0A)|\u4E0B(?:\u5348)|\u665A(?:\u4E0A)|\u591C(?:\u665A)?|\u4E2D(?:\u5348)|\u51CC(?:\u6668)))?)?(?:[\\s,\uFF0C]*)(?:(\\d+|[" +
            Object.keys(m).join("") +
            "]+)(?:\\s*)(?:\u70B9|\u65F6|:|\uFF1A)(?:\\s*)(\\d+|\u534A|\u6B63|\u6574|[" +
            Object.keys(m).join("") +
            "]+)?(?:\\s*)(?:\u5206|:|\uFF1A)?(?:\\s*)(\\d+|[" +
            Object.keys(m).join("") +
            "]+)?(?:\\s*)(?:\u79D2)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    );
class P extends l.c {
    innerPattern() {
        return w;
    }
    innerExtract(e, t) {
        if (t.index > 0 && e.text[t.index - 1].match(/\w/)) return null;
        let r = e.createParsingResult(t.index, t[0]),
            n = new Date(e.refDate.getTime());
        if (t[1]) {
            let s = t[1];
            "\u660E" == s
                ? e.refDate.getHours() > 1 && n.setDate(n.getDate() + 1)
                : "\u6628" == s
                  ? n.setDate(n.getDate() - 1)
                  : "\u524D" == s
                    ? n.setDate(n.getDate() - 2)
                    : "\u5927\u524D" == s
                      ? n.setDate(n.getDate() - 3)
                      : "\u540E" == s
                        ? n.setDate(n.getDate() + 2)
                        : "\u5927\u540E" == s && n.setDate(n.getDate() + 3),
                r.start.assign("day", n.getDate()),
                r.start.assign("month", n.getMonth() + 1),
                r.start.assign("year", n.getFullYear());
        } else if (t[4]) {
            let e = t[4];
            "\u660E" == e
                ? n.setDate(n.getDate() + 1)
                : "\u6628" == e
                  ? n.setDate(n.getDate() - 1)
                  : "\u524D" == e
                    ? n.setDate(n.getDate() - 2)
                    : "\u5927\u524D" == e
                      ? n.setDate(n.getDate() - 3)
                      : "\u540E" == e
                        ? n.setDate(n.getDate() + 2)
                        : "\u5927\u540E" == e && n.setDate(n.getDate() + 3),
                r.start.assign("day", n.getDate()),
                r.start.assign("month", n.getMonth() + 1),
                r.start.assign("year", n.getFullYear());
        } else
            r.start.imply("day", n.getDate()),
                r.start.imply("month", n.getMonth() + 1),
                r.start.imply("year", n.getFullYear());
        let s = 0,
            a = 0,
            i = -1;
        if (t[8]) {
            let e = parseInt(t[8]);
            if ((isNaN(e) && (e = c(t[8])), e >= 60)) return null;
            r.start.assign("second", e);
        }
        if (
            (isNaN((s = parseInt(t[6]))) && (s = c(t[6])),
            t[7]
                ? "\u534A" == t[7]
                    ? (a = 30)
                    : "\u6B63" == t[7] || "\u6574" == t[7]
                      ? (a = 0)
                      : isNaN((a = parseInt(t[7]))) && (a = c(t[7]))
                : s > 100 && ((a = s % 100), (s = Math.floor(s / 100))),
            a >= 60 || s > 24)
        )
            return null;
        if ((s >= 12 && (i = 1), t[9])) {
            if (s > 12) return null;
            let e = t[9][0].toLowerCase();
            "a" == e && ((i = 0), 12 == s && (s = 0)), "p" == e && ((i = 1), 12 != s && (s += 12));
        } else if (t[2]) {
            let e = t[2][0];
            "\u65E9" == e ? ((i = 0), 12 == s && (s = 0)) : "\u665A" == e && ((i = 1), 12 != s && (s += 12));
        } else if (t[3]) {
            let e = t[3][0];
            "\u4E0A" == e || "\u65E9" == e || "\u51CC" == e
                ? ((i = 0), 12 == s && (s = 0))
                : ("\u4E0B" == e || "\u665A" == e) && ((i = 1), 12 != s && (s += 12));
        } else if (t[5]) {
            let e = t[5][0];
            "\u4E0A" == e || "\u65E9" == e || "\u51CC" == e
                ? ((i = 0), 12 == s && (s = 0))
                : ("\u4E0B" == e || "\u665A" == e) && ((i = 1), 12 != s && (s += 12));
        }
        r.start.assign("hour", s),
            r.start.assign("minute", a),
            i >= 0
                ? r.start.assign("meridiem", i)
                : s < 12
                  ? r.start.imply("meridiem", 0)
                  : r.start.imply("meridiem", 1);
        let o = D.exec(e.text.substring(r.index + r.text.length));
        if (!o) return r.text.match(/^\d+$/) ? null : r;
        let l = new Date(n.getTime());
        if (((r.end = e.createParsingComponents()), o[1])) {
            let t = o[1];
            "\u660E" == t
                ? e.refDate.getHours() > 1 && l.setDate(l.getDate() + 1)
                : "\u6628" == t
                  ? l.setDate(l.getDate() - 1)
                  : "\u524D" == t
                    ? l.setDate(l.getDate() - 2)
                    : "\u5927\u524D" == t
                      ? l.setDate(l.getDate() - 3)
                      : "\u540E" == t
                        ? l.setDate(l.getDate() + 2)
                        : "\u5927\u540E" == t && l.setDate(l.getDate() + 3),
                r.end.assign("day", l.getDate()),
                r.end.assign("month", l.getMonth() + 1),
                r.end.assign("year", l.getFullYear());
        } else if (o[4]) {
            let e = o[4];
            "\u660E" == e
                ? l.setDate(l.getDate() + 1)
                : "\u6628" == e
                  ? l.setDate(l.getDate() - 1)
                  : "\u524D" == e
                    ? l.setDate(l.getDate() - 2)
                    : "\u5927\u524D" == e
                      ? l.setDate(l.getDate() - 3)
                      : "\u540E" == e
                        ? l.setDate(l.getDate() + 2)
                        : "\u5927\u540E" == e && l.setDate(l.getDate() + 3),
                r.end.assign("day", l.getDate()),
                r.end.assign("month", l.getMonth() + 1),
                r.end.assign("year", l.getFullYear());
        } else
            r.end.imply("day", l.getDate()),
                r.end.imply("month", l.getMonth() + 1),
                r.end.imply("year", l.getFullYear());
        if (((s = 0), (a = 0), (i = -1), o[8])) {
            let e = parseInt(o[8]);
            if ((isNaN(e) && (e = c(o[8])), e >= 60)) return null;
            r.end.assign("second", e);
        }
        if (
            (isNaN((s = parseInt(o[6]))) && (s = c(o[6])),
            o[7]
                ? "\u534A" == o[7]
                    ? (a = 30)
                    : "\u6B63" == o[7] || "\u6574" == o[7]
                      ? (a = 0)
                      : isNaN((a = parseInt(o[7]))) && (a = c(o[7]))
                : s > 100 && ((a = s % 100), (s = Math.floor(s / 100))),
            a >= 60 || s > 24)
        )
            return null;
        if ((s >= 12 && (i = 1), o[9])) {
            if (s > 12) return null;
            let e = o[9][0].toLowerCase();
            "a" == e && ((i = 0), 12 == s && (s = 0)),
                "p" == e && ((i = 1), 12 != s && (s += 12)),
                r.start.isCertain("meridiem") ||
                    (0 == i
                        ? (r.start.imply("meridiem", 0), 12 == r.start.get("hour") && r.start.assign("hour", 0))
                        : (r.start.imply("meridiem", 1),
                          12 != r.start.get("hour") && r.start.assign("hour", r.start.get("hour") + 12)));
        } else if (o[2]) {
            let e = o[2][0];
            "\u65E9" == e ? ((i = 0), 12 == s && (s = 0)) : "\u665A" == e && ((i = 1), 12 != s && (s += 12));
        } else if (o[3]) {
            let e = o[3][0];
            "\u4E0A" == e || "\u65E9" == e || "\u51CC" == e
                ? ((i = 0), 12 == s && (s = 0))
                : ("\u4E0B" == e || "\u665A" == e) && ((i = 1), 12 != s && (s += 12));
        } else if (o[5]) {
            let e = o[5][0];
            "\u4E0A" == e || "\u65E9" == e || "\u51CC" == e
                ? ((i = 0), 12 == s && (s = 0))
                : ("\u4E0B" == e || "\u665A" == e) && ((i = 1), 12 != s && (s += 12));
        }
        return (
            (r.text = r.text + o[0]),
            r.end.assign("hour", s),
            r.end.assign("minute", a),
            i >= 0
                ? r.end.assign("meridiem", i)
                : r.start.isCertain("meridiem") && 1 == r.start.get("meridiem") && r.start.get("hour") > s
                  ? r.end.imply("meridiem", 0)
                  : s > 12 && r.end.imply("meridiem", 1),
            r.end.date().getTime() < r.start.date().getTime() && r.end.imply("day", r.end.get("day") + 1),
            r
        );
    }
}
let F = RegExp("(?:\u661F\u671F|\u793C\u62DC|\u5468)(?<weekday>" + Object.keys(d).join("|") + ")");
class C extends l.c {
    innerPattern() {
        return F;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = d[t.groups.weekday];
        if (void 0 === n) return null;
        let s = new Date(e.refDate.getTime()),
            a = n - s.getDay();
        return (
            Math.abs(a - 7) < Math.abs(a) && (a -= 7),
            Math.abs(a + 7) < Math.abs(a) && (a += 7),
            s.setDate(s.getDate() + a),
            r.start.assign("weekday", n),
            r.start.imply("day", s.getDate()),
            r.start.imply("month", s.getMonth() + 1),
            r.start.imply("year", s.getFullYear()),
            r
        );
    }
}
var T = r(172609);
class v extends T.A {
    patternBetween() {
        return /^\s*(\u81f3|\u5230|-|~|\uff5e|\uff0d|\u30fc)\s*$/i;
    }
}
var M = r(230205);
class $ extends M.A {
    patternBetween() {
        return /^\s*$/i;
    }
}
let R = new a.u(j()),
    E = new a.u(j()),
    b = new a.u(B());
function A(e, t, r) {
    return E.parse(e, t, r);
}
function k(e, t, r) {
    return E.parseDate(e, t, r);
}
function j() {
    let e = B();
    return e.parsers.unshift(new u()), e;
}
function B() {
    let e = (0, s.i)({ parsers: [new g(), new x(), new C(), new P(), new p()], refiners: [new v(), new $()] });
    return (e.refiners = e.refiners.filter((e) => !(e instanceof n.A))), e;
}
