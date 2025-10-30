n.d(t, { Z: () => f });
var r = n(140081),
    i = n(745901),
    a = n(800911),
    o = n(727916);
let s = RegExp(
        `(?:on\\s*?)?(${i.aK})(?:\\s*(?:tot|\\-|\\–|until|through|till|\\s)\\s*(${i.aK}))?(?:-|/|\\s*(?:of)?\\s*)(` +
            (0, a.q3)(i._$) +
            ")(?:(?:-|/|,?\\s*)" +
            `(${i.H6}(?![^\\s]\\d))` +
            ")?(?=\\W|$)",
        "i",
    ),
    l = 3,
    c = 1,
    u = 2,
    d = 4;
class f extends o.Z {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let n = i._$[t[l].toLowerCase()],
            a = (0, i.JF)(t[c]);
        if (a > 31) return (t.index = t.index + t[c].length), null;
        let o = e.createParsingComponents({
            day: a,
            month: n,
        });
        if (t[d]) {
            let e = (0, i.SH)(t[d]);
            o.assign("year", e);
        } else {
            let t = (0, r.r)(e.refDate, a, n);
            o.imply("year", t);
        }
        if (!t[u]) return o;
        let s = (0, i.JF)(t[u]),
            f = e.createParsingResult(t.index, t[0]);
        return (f.start = o), (f.end = o.clone()), f.end.assign("day", s), f;
    }
}
