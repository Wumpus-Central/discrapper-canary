n.d(t, { Z: () => s });
var r = n(150816),
    i = n(86465),
    a = n(522677),
    o = n(89199);
class s extends a.F {
    innerPatternString(e) {
        return `(эти|последние|прошлые|следующие|после|спустя|через|\\+|-)\\s*(${r.km})`;
    }
    innerExtract(e, t) {
        let n = t[1].toLowerCase(),
            a = (0, r.RA)(t[2]);
        switch (n) {
            case "последние":
            case "прошлые":
            case "-":
                a = (0, o.de)(a);
        }
        return i.L.createRelativeFromReference(e.reference, a);
    }
}
