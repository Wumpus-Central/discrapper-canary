n.d(t, { A: () => u });
var r = n(528352),
    i = n(364242),
    a = n(476858),
    s = n(355418);
let o = RegExp(`(${(0, a.uJ)(r.eB)})\\s*(?:[,-]?\\s*(${r.fp})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i"),
    l = 1,
    c = 2;
class u extends s.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = e.createParsingComponents();
        n.imply("day", 1);
        let a = t[l],
            s = r.eB[a.toLowerCase()];
        if ((n.assign("month", s), t[c])) {
            let e = (0, r.zL)(t[c]);
            n.assign("year", e);
        } else {
            let t = (0, i.Y)(e.refDate, 1, s);
            n.imply("year", t);
        }
        return n;
    }
}
