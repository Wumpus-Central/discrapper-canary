n.d(t, {
    A: () => o,
});
var r = n(6678),
    i = n(374372),
    a = n(355418),
    s = n(632434);
class o extends a.c {
    constructor() {
        super();
    }
    innerPattern() {
        return RegExp(`il y a\\s*(${r.Pl})(?=(?:\\W|$))`, "i");
    }
    innerExtract(e, t) {
        let n = (0, r.E9)(t[1]),
            a = (0, s.x4)(n);
        return i.BP.createRelativeFromReference(e.reference, a);
    }
}
