n.d(t, { A: () => o });
var r = n(147426),
    i = n(374372),
    a = n(972409),
    s = n(632434);
class o extends a.d {
    innerPatternString(e) {
        return `(${r.Pl})\\s{0,5}тому(?=(?:\\W|$))`;
    }
    innerExtract(e, t) {
        let n = (0, r.E9)(t[1]),
            a = (0, s.x4)(n);
        return i.BP.createRelativeFromReference(e.reference, a);
    }
}
