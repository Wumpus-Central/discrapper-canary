n.d(t, { Z: () => d });
var r = n(140081),
    i = n(150816),
    a = n(800911),
    o = n(522677);
let s = 1,
    l = 2,
    c = 3,
    u = 4;
class d extends o.F {
    innerPatternString(e) {
        return `(?:с)?\\s*(${i.aK})(?:\\s{0,3}(?:по|-|–|до)?\\s{0,3}(${i.aK}))?(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})(${(0, a.q3)(i._$)})(?:(?:-|\\/|,?\\s{0,3})(${i.H6}(?![^\\s]\\d)))?`;
    }
    innerExtract(e, t) {
        let n = e.createParsingResult(t.index, t[0]),
            a = i._$[t[c].toLowerCase()],
            o = (0, i.JF)(t[s]);
        if (o > 31) return (t.index = t.index + t[s].length), null;
        if ((n.start.assign("month", a), n.start.assign("day", o), t[u])) {
            let e = (0, i.SH)(t[u]);
            n.start.assign("year", e);
        } else {
            let t = (0, r.r)(e.refDate, o, a);
            n.start.imply("year", t);
        }
        if (t[l]) {
            let e = (0, i.JF)(t[l]);
            (n.end = n.start.clone()), n.end.assign("day", e);
        }
        return n;
    }
}
