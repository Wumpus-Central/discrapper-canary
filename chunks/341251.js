n.d(t, {
    A: () => f,
});
var r = n(364242),
    i = n(360345),
    a = n(476858),
    s = n(355418);
let o = RegExp(
        `(?:on\\s{0,3})?(${i.lT})(?:\\s{0,3}(?:to|\\-|\\–|until|through|till)?\\s{0,3}(${i.lT}))?(?:-|/|\\s{0,3}(?:of)?\\s{0,3})(${(0, a.uJ)(i.eB)})(?:(?:-|/|,?\\s{0,3})(${i.fp}(?!\\w)))?(?=\\W|$)`,
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
            s = (0, i.k8)(t[l]);
        if (s > 31) return (t.index = t.index + t[l].length), null;
        if ((n.start.assign("month", a), n.start.assign("day", s), t[d])) {
            let e = (0, i.zL)(t[d]);
            n.start.assign("year", e);
        } else {
            let t = (0, r.Y)(e.refDate, s, a);
            n.start.imply("year", t);
        }
        if (t[c]) {
            let e = (0, i.k8)(t[c]);
            (n.end = n.start.clone()), n.end.assign("day", e);
        }
        return n;
    }
}
