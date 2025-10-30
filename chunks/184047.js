n.d(t, { Z: () => s });
var r = n(325854),
    i = n(86465),
    a = n(344368),
    o = n(89199);
class s extends a.M {
    innerPatternString(e) {
        return `(${r.km})\\s{0,5}тому(?=(?:\\W|$))`;
    }
    innerExtract(e, t) {
        let n = (0, r.RA)(t[1]),
            a = (0, o.de)(n);
        return i.L.createRelativeFromReference(e.reference, a);
    }
}
