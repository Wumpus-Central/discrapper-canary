r.d(t, { A: () => u });
var n = r(615339),
    s = r(374372),
    a = r(355418),
    i = r(632434);
let o = RegExp(`(${n.Pl})\\s{0,5}(?:fa|prima|precedente)(?=(?:\\W|$))`, "i"),
    l = RegExp(`(${n.Pl})\\s{0,5}fa(?=(?:\\W|$))`, "i");
class u extends a.c {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? l : o;
    }
    innerExtract(e, t) {
        let r = (0, n.E9)(t[1]),
            a = (0, i.x4)(r);
        return s.BP.createRelativeFromReference(e.reference, a);
    }
}
