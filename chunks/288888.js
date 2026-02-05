"use strict";
n.d(t, { A: () => d });
var r = n(615339),
    i = n(364242),
    a = n(476858),
    s = n(355418);
let o = RegExp(`((?:in)\\s*)?(${(0, a.uJ)(r.eB)})\\s*(?:[,-]?\\s*(${r.fp})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i"),
    l = 1,
    u = 2,
    c = 3;
class d extends s.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = t[u].toLowerCase();
        if (t[0].length <= 3 && !r.Wp[n]) return null;
        let a = e.createParsingResult(t.index + (t[l] || "").length, t.index + t[0].length);
        a.start.imply("day", 1);
        let s = r.eB[n];
        if ((a.start.assign("month", s), t[c])) {
            let e = (0, r.zL)(t[c]);
            a.start.assign("year", e);
        } else {
            let t = (0, i.Y)(e.refDate, 1, s);
            a.start.imply("year", t);
        }
        return a;
    }
}
