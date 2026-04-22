r.d(t, { A: () => o });
var n = r(6678),
    s = r(374372),
    a = r(355418),
    i = r(632434);
class o extends a.c {
    constructor() {
        super();
    }
    innerPattern() {
        return RegExp(`il y a\\s*(${n.Pl})(?=(?:\\W|$))`, "i");
    }
    innerExtract(e, t) {
        let r = (0, n.E9)(t[1]),
            a = (0, i.x4)(r);
        return s.BP.createRelativeFromReference(e.reference, a);
    }
}
