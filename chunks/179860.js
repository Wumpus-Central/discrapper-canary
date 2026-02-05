"use strict";
n.d(t, { A: () => u });
var r = n(989479),
    i = n(364242),
    a = n(476858),
    s = n(241738);
let o = 2,
    l = 3;
class u extends s.d {
    innerPatternString(e) {
        return `((?:в)\\s*)?(${(0, a.uJ)(r.eB)})\\s*(?:[,-]?\\s*(${r.fp})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`;
    }
    innerExtract(e, t) {
        let n = t[o].toLowerCase();
        if (t[0].length <= 3 && !r.Wp[n]) return null;
        let a = e.createParsingResult(t.index, t.index + t[0].length);
        a.start.imply("day", 1);
        let s = r.eB[n];
        if ((a.start.assign("month", s), t[l])) {
            let e = (0, r.zL)(t[l]);
            a.start.assign("year", e);
        } else {
            let t = (0, i.Y)(e.refDate, 1, s);
            a.start.imply("year", t);
        }
        return a;
    }
}
