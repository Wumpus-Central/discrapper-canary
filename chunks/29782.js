n.d(t, {
    A: () => c,
});
var r = n(360345),
    i = n(374372),
    a = n(355418),
    s = n(632434);
let o = RegExp(`(${r.Pl})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i"),
    l = RegExp(`(${r.d2})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
class c extends a.c {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? l : o;
    }
    innerExtract(e, t) {
        let n = (0, r.E9)(t[1]);
        return n ? i.BP.createRelativeFromReference(e.reference, (0, s.x4)(n)) : null;
    }
}
