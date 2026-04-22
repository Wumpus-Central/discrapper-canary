r.d(t, { A: () => l });
var n = r(528352),
    s = r(364242),
    a = r(476858),
    i = r(355418);
let o = RegExp(`(${(0, a.uJ)(n.eB)})\\s*(?:[,-]?\\s*(${n.fp})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i");
class l extends i.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let r = e.createParsingComponents();
        r.imply("day", 1);
        let a = t[1],
            i = n.eB[a.toLowerCase()];
        if ((r.assign("month", i), t[2])) {
            let e = (0, n.zL)(t[2]);
            r.assign("year", e);
        } else {
            let t = (0, s.Y)(e.refDate, 1, i);
            r.imply("year", t);
        }
        return r;
    }
}
