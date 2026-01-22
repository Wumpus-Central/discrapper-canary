n.d(t, {
    A: () => c,
});
var r = n(528352),
    i = n(374372),
    a = n(355418),
    s = n(632434);
let o = RegExp("(" + r.Pl + ")(?:geleden|voor|eerder)(?=(?:\\W|$))", "i"),
    l = RegExp("(" + r.Pl + ")geleden(?=(?:\\W|$))", "i");
class c extends a.c {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? l : o;
    }
    innerExtract(e, t) {
        let n = (0, r.E9)(t[1]),
            a = (0, s.x4)(n);
        return i.BP.createRelativeFromReference(e.reference, a);
    }
}
