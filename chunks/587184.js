Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(389766),
    a = r(115004),
    i = r(535490),
    s = RegExp(
        "(?:(\u5348\u524D|\u5348\u5F8C|A.M.|P.M.|AM|PM))?(?:[\\s,\uFF0C\u3001]*)(?:([0-9\uFF10-\uFF19]+|[" +
            Object.keys(i.NUMBER).join("") +
            "]+)(?:\\s*)(?:\u6642(?!\u9593)|:|\uFF1A)(?:\\s*)([0-9\uFF10-\uFF19]+|\u534A|[" +
            Object.keys(i.NUMBER).join("") +
            "]+)?(?:\\s*)(?:\u5206|:|\uFF1A)?(?:\\s*)([0-9\uFF10-\uFF19]+|[" +
            Object.keys(i.NUMBER).join("") +
            "]+)?(?:\\s*)(?:\u79D2)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    o = RegExp(
        "(?:^\\s*(?:\u304B\u3089|\\-|\\\u2013|\\\uFF0D|\\~|\\\u301C)\\s*)(?:(\u5348\u524D|\u5348\u5F8C|A.M.|P.M.|AM|PM))?(?:[\\s,\uFF0C\u3001]*)(?:([0-9\uFF10-\uFF19]+|[" +
            Object.keys(i.NUMBER).join("") +
            "]+)(?:\\s*)(?:\u6642|:|\uFF1A)(?:\\s*)([0-9\uFF10-\uFF19]+|\u534A|[" +
            Object.keys(i.NUMBER).join("") +
            "]+)?(?:\\s*)(?:\u5206|:|\uFF1A)?(?:\\s*)([0-9\uFF10-\uFF19]+|[" +
            Object.keys(i.NUMBER).join("") +
            "]+)?(?:\\s*)(?:\u79D2)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    );
class u extends n.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        var r, n;
        if (t.index > 0 && e.text[t.index - 1].match(/\w/)) return null;
        let i = e.createParsingResult(t.index, t[0]);
        return ((i.start = l(e, t[2], t[3], t[4], null != (r = t[1]) ? r : t[5])), i.start)
            ? (t = o.exec(e.text.substring(i.index + i.text.length)))
                ? ((i.text = i.text + t[0]), (i.end = l(e, t[2], t[3], t[4], null != (n = t[1]) ? n : t[5])), i.end)
                    ? (!i.end.isCertain("meridiem") &&
                          i.start.isCertain("meridiem") &&
                          (i.end.imply("meridiem", i.start.get("meridiem")),
                          i.start.get("meridiem") === a.Meridiem.PM &&
                              (i.start.get("hour") - 12 > i.end.get("hour")
                                  ? i.end.imply("meridiem", a.Meridiem.AM)
                                  : 12 > i.end.get("hour") && i.end.assign("hour", i.end.get("hour") + 12))),
                      i.end.date().getTime() < i.start.date().getTime() && i.end.imply("day", i.end.get("day") + 1),
                      i)
                    : null
                : i
            : ((t.index += t[0].length), null);
    }
}
function l(e, t, r, n, s) {
    let o = 0,
        u = -1,
        l = e.createParsingComponents();
    if ((isNaN((o = parseInt((0, i.toHankaku)(t)))) && (o = (0, i.jaStringToNumber)(t)), o > 24)) return null;
    if (r) {
        let e;
        if (
            ("\u534A" === r ? (e = 30) : isNaN((e = parseInt((0, i.toHankaku)(r)))) && (e = (0, i.jaStringToNumber)(r)),
            e >= 60)
        )
            return null;
        l.assign("minute", e);
    }
    if (n) {
        let e = parseInt((0, i.toHankaku)(n));
        if ((isNaN(e) && (e = (0, i.jaStringToNumber)(n)), e >= 60)) return null;
        l.assign("second", e);
    }
    if (s) {
        if (o > 12) return null;
        "\u5348\u524D" === s || "a" === s[0].toLowerCase()
            ? ((u = a.Meridiem.AM), 12 === o && (o = 0))
            : ("\u5348\u5F8C" === s || "p" === s[0].toLowerCase()) && ((u = a.Meridiem.PM), 12 != o && (o += 12));
    }
    return (
        l.assign("hour", o),
        u >= 0
            ? l.assign("meridiem", u)
            : o < 12
              ? l.imply("meridiem", a.Meridiem.AM)
              : l.imply("meridiem", a.Meridiem.PM),
        l
    );
}
t.default = u;
