r.d(t, { A: () => l });
var n = r(364242),
    s = r(615339),
    a = r(476858),
    i = r(355418);
let o = RegExp(
    `(${(0, a.uJ)(s.eB)})(?:-|/|\\s*,?\\s*)(${s.lT})(?!\\s*(?:am|pm))\\s*(?:(?:al|\\-|\\alle|\\del|\\s)\\s*(${s.lT})\\s*)?(?:(?:-|/|\\s*,?\\s*)(${s.fp}))?(?=\\W|$)(?!\\:\\d)`,
    "i",
);
class l extends i.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let r = s.eB[t[1].toLowerCase()],
            a = (0, s.k8)(t[2]);
        if (a > 31) return null;
        let i = e.createParsingComponents({ day: a, month: r });
        if (t[4]) {
            let e = (0, s.zL)(t[4]);
            i.assign("year", e);
        } else {
            let t = (0, n.Y)(e.refDate, a, r);
            i.imply("year", t);
        }
        if (!t[3]) return i;
        let o = (0, s.k8)(t[3]),
            l = e.createParsingResult(t.index, t[0]);
        return (l.start = i), (l.end = i.clone()), l.end.assign("day", o), l;
    }
}
