n.d(t, { Z: () => u });
var r = n(745901),
    i = n(140081),
    a = n(800911),
    o = n(727916);
let s = RegExp(`(${(0, a.q3)(r._$)})\\s*(?:[,-]?\\s*(${r.H6})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i"),
    l = 1,
    c = 2;
class u extends o.Z {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let n = e.createParsingComponents();
        n.imply("day", 1);
        let a = t[l],
            o = r._$[a.toLowerCase()];
        if ((n.assign("month", o), t[c])) {
            let e = (0, r.SH)(t[c]);
            n.assign("year", e);
        } else {
            let t = (0, i.r)(e.refDate, 1, o);
            n.imply("year", t);
        }
        return n;
    }
}
