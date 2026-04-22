r.d(t, { A: () => l });
var n = r(355418),
    s = r(322811),
    a = r(501459);
let i = RegExp(
        "(?:(午前|午後|A.M.|P.M.|AM|PM))?(?:[\\s,，、]*)(?:([0-9０-９]+|[" +
            Object.keys(a.uk).join("") +
            "]+)(?:\\s*)(?:時(?!間)|:|：)(?:\\s*)([0-9０-９]+|半|[" +
            Object.keys(a.uk).join("") +
            "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)([0-9０-９]+|[" +
            Object.keys(a.uk).join("") +
            "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    o = RegExp(
        "(?:^\\s*(?:から|\\-|\\–|\\－|\\~|\\〜)\\s*)(?:(午前|午後|A.M.|P.M.|AM|PM))?(?:[\\s,，、]*)(?:([0-9０-９]+|[" +
            Object.keys(a.uk).join("") +
            "]+)(?:\\s*)(?:時|:|：)(?:\\s*)([0-9０-９]+|半|[" +
            Object.keys(a.uk).join("") +
            "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)([0-9０-９]+|[" +
            Object.keys(a.uk).join("") +
            "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    );
class l extends n.c {
    innerPattern() {
        return i;
    }
    innerExtract(e, t) {
        if (t.index > 0 && e.text[t.index - 1].match(/\w/)) return null;
        let r = e.createParsingResult(t.index, t[0]);
        return ((r.start = u(e, t[2], t[3], t[4], t[1] ?? t[5])), r.start)
            ? (t = o.exec(e.text.substring(r.index + r.text.length)))
                ? ((r.text = r.text + t[0]), (r.end = u(e, t[2], t[3], t[4], t[1] ?? t[5])), r.end)
                    ? (!r.end.isCertain("meridiem") &&
                          r.start.isCertain("meridiem") &&
                          (r.end.imply("meridiem", r.start.get("meridiem")),
                          r.start.get("meridiem") === s.FF.PM &&
                              (r.start.get("hour") - 12 > r.end.get("hour")
                                  ? r.end.imply("meridiem", s.FF.AM)
                                  : 12 > r.end.get("hour") && r.end.assign("hour", r.end.get("hour") + 12))),
                      r.end.date().getTime() < r.start.date().getTime() && r.end.imply("day", r.end.get("day") + 1),
                      r)
                    : null
                : r
            : ((t.index += t[0].length), null);
    }
}
function u(e, t, r, n, i) {
    let o = 0,
        l = -1,
        u = e.createParsingComponents();
    if ((isNaN((o = parseInt((0, a.Zp)(t)))) && (o = (0, a.zX)(t)), o > 24)) return null;
    if (r) {
        let e;
        if (("半" === r ? (e = 30) : isNaN((e = parseInt((0, a.Zp)(r)))) && (e = (0, a.zX)(r)), e >= 60)) return null;
        u.assign("minute", e);
    }
    if (n) {
        let e = parseInt((0, a.Zp)(n));
        if ((isNaN(e) && (e = (0, a.zX)(n)), e >= 60)) return null;
        u.assign("second", e);
    }
    if (i) {
        if (o > 12) return null;
        "午前" === i || "a" === i[0].toLowerCase()
            ? ((l = s.FF.AM), 12 === o && (o = 0))
            : ("午後" === i || "p" === i[0].toLowerCase()) && ((l = s.FF.PM), 12 != o && (o += 12));
    }
    return (
        u.assign("hour", o),
        l >= 0 ? u.assign("meridiem", l) : o < 12 ? u.imply("meridiem", s.FF.AM) : u.imply("meridiem", s.FF.PM),
        u
    );
}
