r.d(t, { A: () => o });
var n = r(989479),
    s = r(364242),
    a = r(476858),
    i = r(241738);
class o extends i.d {
    innerPatternString(e) {
        return `((?:в)\\s*)?(${(0, a.uJ)(n.eB)})\\s*(?:[,-]?\\s*(${n.fp})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`;
    }
    innerExtract(e, t) {
        let r = t[2].toLowerCase();
        if (t[0].length <= 3 && !n.Wp[r]) return null;
        let a = e.createParsingResult(t.index, t.index + t[0].length);
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
