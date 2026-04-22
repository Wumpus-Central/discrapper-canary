r.d(t, { A: () => l });
var n = r(615339),
    s = r(364242),
    a = r(476858),
    i = r(355418);
let o = RegExp(`((?:in)\\s*)?(${(0, a.uJ)(n.eB)})\\s*(?:[,-]?\\s*(${n.fp})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i");
class l extends i.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let r = t[2].toLowerCase();
        if (t[0].length <= 3 && !n.Wp[r]) return null;
        let a = e.createParsingResult(t.index + (t[1] || "").length, t.index + t[0].length);
        a.start.imply("day", 1);
        let i = n.eB[r];
        if ((a.start.assign("month", i), t[3])) {
            let e = (0, n.zL)(t[3]);
            a.start.assign("year", e);
        } else {
            let t = (0, s.Y)(e.refDate, 1, i);
            a.start.imply("year", t);
        }
        return a;
    }
}
