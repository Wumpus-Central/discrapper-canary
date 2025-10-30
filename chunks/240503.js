n.d(t, { Z: () => _ });
var r = n(727916),
    i = n(894186),
    a = n(654323);
let o = RegExp(
        "(?:(午前|午後|A.M.|P.M.|AM|PM))?(?:[\\s,\uFF0C\u3001]*)(?:([0-9０-９]+|[" +
            Object.keys(a.Wu).join("") +
            "]+)(?:\\s*)(?:時(?!間)|:|\uFF1A)(?:\\s*)([0-9０-９]+|半|[" +
            Object.keys(a.Wu).join("") +
            "]+)?(?:\\s*)(?:分|:|\uFF1A)?(?:\\s*)([0-9０-９]+|[" +
            Object.keys(a.Wu).join("") +
            "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    s = RegExp(
        "(?:^\\s*(?:から|\\-|\\\u2013|\\\uFF0D|\\~|\\\u301C)\\s*)(?:(午前|午後|A.M.|P.M.|AM|PM))?(?:[\\s,\uFF0C\u3001]*)(?:([0-9０-９]+|[" +
            Object.keys(a.Wu).join("") +
            "]+)(?:\\s*)(?:時|:|\uFF1A)(?:\\s*)([0-9０-９]+|半|[" +
            Object.keys(a.Wu).join("") +
            "]+)?(?:\\s*)(?:分|:|\uFF1A)?(?:\\s*)([0-9０-９]+|[" +
            Object.keys(a.Wu).join("") +
            "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    l = 1,
    c = 2,
    u = 3,
    d = 4,
    f = 5;
class _ extends r.Z {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        if (t.index > 0 && e.text[t.index - 1].match(/\w/)) return null;
        let n = e.createParsingResult(t.index, t[0]);
        return ((n.start = p(e, t[c], t[u], t[d], t[l] ?? t[f])), n.start)
            ? (t = s.exec(e.text.substring(n.index + n.text.length)))
                ? ((n.text = n.text + t[0]), (n.end = p(e, t[c], t[u], t[d], t[l] ?? t[f])), n.end)
                    ? (!n.end.isCertain("meridiem") &&
                          n.start.isCertain("meridiem") &&
                          (n.end.imply("meridiem", n.start.get("meridiem")),
                          n.start.get("meridiem") === i.GG.PM &&
                              (n.start.get("hour") - 12 > n.end.get("hour")
                                  ? n.end.imply("meridiem", i.GG.AM)
                                  : 12 > n.end.get("hour") && n.end.assign("hour", n.end.get("hour") + 12))),
                      n.end.date().getTime() < n.start.date().getTime() && n.end.imply("day", n.end.get("day") + 1),
                      n)
                    : null
                : n
            : ((t.index += t[0].length), null);
    }
}
function p(e, t, n, r, o) {
    let s = 0,
        l = -1,
        c = e.createParsingComponents();
    if ((isNaN((s = parseInt((0, a.dj)(t)))) && (s = (0, a.w9)(t)), s > 24)) return null;
    if (n) {
        let e;
        if (("半" === n ? (e = 30) : isNaN((e = parseInt((0, a.dj)(n)))) && (e = (0, a.w9)(n)), e >= 60)) return null;
        c.assign("minute", e);
    }
    if (r) {
        let e = parseInt((0, a.dj)(r));
        if ((isNaN(e) && (e = (0, a.w9)(r)), e >= 60)) return null;
        c.assign("second", e);
    }
    if (o) {
        if (s > 12) return null;
        let e = o;
        "午前" === e || "a" === e[0].toLowerCase()
            ? ((l = i.GG.AM), 12 === s && (s = 0))
            : ("午後" === e || "p" === e[0].toLowerCase()) && ((l = i.GG.PM), 12 != s && (s += 12));
    }
    return (
        c.assign("hour", s),
        l >= 0 ? c.assign("meridiem", l) : s < 12 ? c.imply("meridiem", i.GG.AM) : c.imply("meridiem", i.GG.PM),
        c
    );
}
