n.d(t, {
    A: () => p,
});
var r = n(355418),
    i = n(322811),
    a = n(501459);
let s = RegExp(
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
    ),
    l = 1,
    c = 2,
    u = 3,
    d = 4,
    f = 5;
class p extends r.c {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        if (t.index > 0 && e.text[t.index - 1].match(/\w/)) return null;
        let n = e.createParsingResult(t.index, t[0]);
        return ((n.start = _(e, t[c], t[u], t[d], t[l] ?? t[f])), n.start)
            ? (t = o.exec(e.text.substring(n.index + n.text.length)))
                ? ((n.text = n.text + t[0]), (n.end = _(e, t[c], t[u], t[d], t[l] ?? t[f])), n.end)
                    ? (!n.end.isCertain("meridiem") &&
                          n.start.isCertain("meridiem") &&
                          (n.end.imply("meridiem", n.start.get("meridiem")),
                          n.start.get("meridiem") === i.FF.PM &&
                              (n.start.get("hour") - 12 > n.end.get("hour")
                                  ? n.end.imply("meridiem", i.FF.AM)
                                  : 12 > n.end.get("hour") && n.end.assign("hour", n.end.get("hour") + 12))),
                      n.end.date().getTime() < n.start.date().getTime() && n.end.imply("day", n.end.get("day") + 1),
                      n)
                    : null
                : n
            : ((t.index += t[0].length), null);
    }
}

function _(e, t, n, r, s) {
    let o = 0,
        l = -1,
        c = e.createParsingComponents();
    if ((isNaN((o = parseInt((0, a.Zp)(t)))) && (o = (0, a.zX)(t)), o > 24)) return null;
    if (n) {
        let e;
        if (("半" === n ? (e = 30) : isNaN((e = parseInt((0, a.Zp)(n)))) && (e = (0, a.zX)(n)), e >= 60)) return null;
        c.assign("minute", e);
    }
    if (r) {
        let e = parseInt((0, a.Zp)(r));
        if ((isNaN(e) && (e = (0, a.zX)(r)), e >= 60)) return null;
        c.assign("second", e);
    }
    if (s) {
        if (o > 12) return null;
        let e = s;
        "午前" === e || "a" === e[0].toLowerCase()
            ? ((l = i.FF.AM), 12 === o && (o = 0))
            : ("午後" === e || "p" === e[0].toLowerCase()) && ((l = i.FF.PM), 12 != o && (o += 12));
    }
    return (
        c.assign("hour", o),
        l >= 0 ? c.assign("meridiem", l) : o < 12 ? c.imply("meridiem", i.FF.AM) : c.imply("meridiem", i.FF.PM),
        c
    );
}
