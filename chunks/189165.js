r.d(t, { A: () => l });
var n = r(360345),
    s = r(374372),
    a = r(355418);
let i = RegExp(`(${n.Pl})\\s{0,5}(?:later|after|from now|henceforth|forward|out)(?=(?:\\W|$))`, "i"),
    o = RegExp(`(${n.d2})\\s{0,5}(later|after|from now)(?=\\W|$)`, "i");
class l extends a.c {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? o : i;
    }
    innerExtract(e, t) {
        let r = (0, n.E9)(t[1]);
        return r ? s.BP.createRelativeFromReference(e.reference, r) : null;
    }
}
