n.d(t, {
    A: () => f,
});
var r = n(364242),
    i = n(360345),
    a = n(476858),
    s = n(355418);
let o = RegExp(
        `(${(0, a.uJ)(i.eB)})(?:-|/|\\s*,?\\s*)(${i.lT})(?!\\s*(?:am|pm))\\s*(?:(?:to|\\-)\\s*(${i.lT})\\s*)?(?:(?:-|/|\\s*,\\s*|\\s+)(${i.fp}))?(?=\\W|$)(?!\\:\\d)`,
        "i",
    ),
    l = 1,
    c = 2,
    u = 3,
    d = 4;
class f extends s.c {
    shouldSkipYearLikeDate;
    constructor(e) {
        super(), (this.shouldSkipYearLikeDate = e);
    }
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = i.eB[t[l].toLowerCase()],
            a = (0, i.k8)(t[c]);
        if (a > 31 || (this.shouldSkipYearLikeDate && !t[u] && !t[d] && t[c].match(/^2[0-5]$/))) return null;
        let s = e
            .createParsingComponents({
                day: a,
                month: n,
            })
            .addTag("parser/ENMonthNameMiddleEndianParser");
        if (t[d]) {
            let e = (0, i.zL)(t[d]);
            s.assign("year", e);
        } else {
            let t = (0, r.Y)(e.refDate, a, n);
            s.imply("year", t);
        }
        if (!t[u]) return s;
        let o = (0, i.k8)(t[u]),
            f = e.createParsingResult(t.index, t[0]);
        return (f.start = s), (f.end = s.clone()), f.end.assign("day", o), f;
    }
}
