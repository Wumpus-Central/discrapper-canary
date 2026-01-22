n.d(t, { A: () => d });
var r = n(360345),
    i = n(364242),
    a = n(476858),
    s = n(355418);
let o = RegExp(
        `((?:in)\\s*)?(${(0, a.uJ)(r.eB)})\\s*(?:(?:,|-|of)?\\s*(${r.fp})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`,
        "i",
    ),
    l = 1,
    c = 2,
    u = 3;
class d extends s.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = t[c].toLowerCase();
        if (t[0].length <= 3 && !r.Wp[n]) return null;
        let a = e.createParsingResult(t.index + (t[l] || "").length, t.index + t[0].length);
        a.start.imply("day", 1), a.start.addTag("parser/ENMonthNameParser");
        let s = r.eB[n];
        if ((a.start.assign("month", s), t[u])) {
            let e = (0, r.zL)(t[u]);
            a.start.assign("year", e);
        } else {
            let t = (0, i.Y)(e.refDate, 1, s);
            a.start.imply("year", t);
        }
        return a;
    }
}
