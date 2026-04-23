r.d(t, { A: () => l });
var n = r(528352),
    s = r(374372),
    a = r(355418);
let i = RegExp("(" + n.Pl + ")(later|na|vanaf nu|voortaan|vooruit|uit)(?=(?:\\W|$))", "i"),
    o = RegExp("(" + n.Pl + ")(later|vanaf nu)(?=(?:\\W|$))", "i");
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
        return s.BP.createRelativeFromReference(e.reference, r);
    }
}
