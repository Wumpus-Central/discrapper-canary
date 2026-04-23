r.d(t, { A: () => u });
var n = r(360345),
    s = r(374372),
    a = r(355418),
    i = r(632434);
let o = RegExp(`(${n.Pl})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i"),
    l = RegExp(`(${n.d2})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
class u extends a.c {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? l : o;
    }
    innerExtract(e, t) {
        let r = (0, n.E9)(t[1]);
        return r ? s.BP.createRelativeFromReference(e.reference, (0, i.x4)(r)) : null;
    }
}
