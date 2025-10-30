n.d(t, { Z: () => s });
var r = n(765682),
    i = n(86465),
    a = n(727916),
    o = n(89199);
class s extends a.Z {
    constructor() {
        super();
    }
    innerPattern() {
        return RegExp(`il y a\\s*(${r.km})(?=(?:\\W|$))`, "i");
    }
    innerExtract(e, t) {
        let n = (0, r.RA)(t[1]),
            a = (0, o.de)(n);
        return i.L.createRelativeFromReference(e.reference, a);
    }
}
