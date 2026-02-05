"use strict";
n.d(t, { A: () => _ });
var r = n(364242),
    i = n(360345),
    a = n(476858),
    s = n(355418);
let o = RegExp(
        `(${(0, a.uJ)(i.eB)})(?:-|/|\\s*,?\\s*)(${i.lT})(?!\\s*(?:am|pm))\\s*(?:(?:to|\\-)\\s*(${i.lT})\\s*)?(?:(?:-|/|\\s*,\\s*|\\s+)(${i.fp}))?(?=\\W|$)(?!\\:\\d)`,
        "i",
    ),
    l = 1,
    u = 2,
    c = 3,
    d = 4;
class _ extends s.c {
    shouldSkipYearLikeDate;
    constructor(e) {
        super(), (this.shouldSkipYearLikeDate = e);
    }
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = i.eB[t[l].toLowerCase()],
            a = (0, i.k8)(t[u]);
        if (a > 31 || (this.shouldSkipYearLikeDate && !t[c] && !t[d] && t[u].match(/^2[0-5]$/))) return null;
        let s = e.createParsingComponents({ day: a, month: n }).addTag("parser/ENMonthNameMiddleEndianParser");
        if (t[d]) {
            let e = (0, i.zL)(t[d]);
            s.assign("year", e);
        } else {
            let t = (0, r.Y)(e.refDate, a, n);
            s.imply("year", t);
        }
        if (!t[c]) return s;
        let o = (0, i.k8)(t[c]),
            _ = e.createParsingResult(t.index, t[0]);
        return (_.start = s), (_.end = s.clone()), _.end.assign("day", o), _;
    }
}
