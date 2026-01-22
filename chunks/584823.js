n.d(t, {
    A: () => d,
});
var r = n(364242),
    i = n(989479),
    a = n(476858),
    s = n(241738);
let o = 1,
    l = 2,
    c = 3,
    u = 4;
class d extends s.w {
    innerPatternString(e) {
        return `(?:с)?\\s*(${i.lT})(?:\\s{0,3}(?:по|-|–|до)?\\s{0,3}(${i.lT}))?(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})(${(0, a.uJ)(i.eB)})(?:(?:-|\\/|,?\\s{0,3})(${i.fp}(?![^\\s]\\d)))?`;
    }
    innerExtract(e, t) {
        let n = e.createParsingResult(t.index, t[0]),
            a = i.eB[t[c].toLowerCase()],
            s = (0, i.k8)(t[o]);
        if (s > 31) return (t.index = t.index + t[o].length), null;
        if ((n.start.assign("month", a), n.start.assign("day", s), t[u])) {
            let e = (0, i.zL)(t[u]);
            n.start.assign("year", e);
        } else {
            let t = (0, r.Y)(e.refDate, s, a);
            n.start.imply("year", t);
        }
        if (t[l]) {
            let e = (0, i.k8)(t[l]);
            (n.end = n.start.clone()), n.end.assign("day", e);
        }
        return n;
    }
}
