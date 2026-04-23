r.d(t, { A: () => l });
var n = r(364242),
    s = r(6678),
    a = r(476858),
    i = r(355418);
let o = RegExp(
    `(?:on\\s*?)?(${s.lT})(?:\\s*(?:au|\\-|\\–|jusqu'au?|\\s)\\s*(${s.lT}))?(?:-|/|\\s*(?:de)?\\s*)(${(0, a.uJ)(s.eB)})(?:(?:-|/|,?\\s*)(${s.fp}(?![^\\s]\\d)))?(?=\\W|$)`,
    "i",
);
class l extends i.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            a = s.eB[t[3].toLowerCase()],
            i = (0, s.k8)(t[1]);
        if (i > 31) return (t.index = t.index + t[1].length), null;
        if ((r.start.assign("month", a), r.start.assign("day", i), t[4])) {
            let e = (0, s.zL)(t[4]);
            r.start.assign("year", e);
        } else {
            let t = (0, n.Y)(e.refDate, i, a);
            r.start.imply("year", t);
        }
        if (t[2]) {
            let e = (0, s.k8)(t[2]);
            (r.end = r.start.clone()), r.end.assign("day", e);
        }
        return r;
    }
}
