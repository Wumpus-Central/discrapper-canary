n.d(t, {
    A: () => c,
});
var r = n(528352),
    i = n(374372),
    a = n(355418);
let s = RegExp("(" + r.Pl + ")(later|na|vanaf nu|voortaan|vooruit|uit)(?=(?:\\W|$))", "i"),
    o = RegExp("(" + r.Pl + ")(later|vanaf nu)(?=(?:\\W|$))", "i"),
    l = 1;
class c extends a.c {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? o : s;
    }
    innerExtract(e, t) {
        let n = (0, r.E9)(t[l]);
        return i.BP.createRelativeFromReference(e.reference, n);
    }
}
