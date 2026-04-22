r.d(t, { A: () => o });
var n = r(364242),
    s = r(147426),
    a = r(476858),
    i = r(972409);
class o extends i.w {
    innerPatternString(e) {
        return `(?:з|із)?\\s*(${s.lT})(?:\\s{0,3}(?:по|-|–|до)?\\s{0,3}(${s.lT}))?(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})(${(0, a.uJ)(s.eB)})(?:(?:-|\\/|,?\\s{0,3})(${s.fp}(?![^\\s]\\d)))?`;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            a = s.eB[t[3].toLowerCase()],
            i = (0, s.k8)(t[1]);
        if (i > 31) return (t.index = t.index + t[1].length), null;
        if ((r.start.assign("month", a), r.start.assign("day", i), t[4])) {
            let e = (0, s.jp)(t[4]);
            r.start.assign("year", e);
        } else {
            let t = (0, n.Y)(e.reference.instant, i, a);
            r.start.imply("year", t);
        }
        if (t[2]) {
            let e = (0, s.k8)(t[2]);
            (r.end = r.start.clone()), r.end.assign("day", e);
        }
        return r;
    }
}
