n.d(t, {
    A: () => f,
});
var r = n(364242),
    i = n(998493),
    a = n(476858),
    s = n(355418);
let o = RegExp(
        `(?:am\\s*?)?(?:den\\s*?)?([0-9]{1,2})\\.(?:\\s*(?:bis(?:\\s*(?:am|zum))?|\\-|\\–|\\s)\\s*([0-9]{1,2})\\.?)?\\s*(${(0, a.uJ)(i.eB)})(?:(?:-|/|,?\\s*)(${i.fp}(?![^\\s]\\d)))?(?=\\W|$)`,
        "i",
    ),
    l = 1,
    c = 2,
    u = 3,
    d = 4;
class f extends s.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = e.createParsingResult(t.index, t[0]),
            a = i.eB[t[u].toLowerCase()],
            s = parseInt(t[l]);
        if (s > 31) return (t.index = t.index + t[l].length), null;
        if ((n.start.assign("month", a), n.start.assign("day", s), t[d])) {
            let e = (0, i.zL)(t[d]);
            n.start.assign("year", e);
        } else {
            let t = (0, r.Y)(e.refDate, s, a);
            n.start.imply("year", t);
        }
        if (t[c]) {
            let e = parseInt(t[c]);
            (n.end = n.start.clone()), n.end.assign("day", e);
        }
        return n;
    }
}
