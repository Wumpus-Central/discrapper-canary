n.d(t, { Z: () => c });
var r = n(150816),
    i = n(140081),
    a = n(800911),
    o = n(522677);
let s = 2,
    l = 3;
class c extends o.M {
    innerPatternString(e) {
        return `((?:в)\\s*)?(${(0, a.q3)(r._$)})\\s*(?:[,-]?\\s*(${r.H6})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`;
    }
    innerExtract(e, t) {
        let n = t[s].toLowerCase();
        if (t[0].length <= 3 && !r.Ge[n]) return null;
        let a = e.createParsingResult(t.index, t.index + t[0].length);
        a.start.imply("day", 1);
        let o = r._$[n];
        if ((a.start.assign("month", o), t[l])) {
            let e = (0, r.SH)(t[l]);
            a.start.assign("year", e);
        } else {
            let t = (0, i.r)(e.refDate, 1, o);
            a.start.imply("year", t);
        }
        return a;
    }
}
