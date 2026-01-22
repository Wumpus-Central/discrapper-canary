n.d(t, {
    A: () => c,
});
var r = n(829143),
    i = n(374372),
    a = n(355418),
    s = n(632434);
let o = RegExp(`(denna|den h\xe4r|f\xf6rra|passerade|n\xe4sta|kommande|efter|\\+|-)\\s*(${r.Pl})(?=\\W|$)`, "i"),
    l = RegExp(`(denna|den h\xe4r|f\xf6rra|passerade|n\xe4sta|kommande|efter|\\+|-)\\s*(${r.d2})(?=\\W|$)`, "i");
class c extends a.c {
    allowAbbreviations;
    constructor(e = !0) {
        super(), (this.allowAbbreviations = e);
    }
    innerPattern() {
        return this.allowAbbreviations ? o : l;
    }
    innerExtract(e, t) {
        let n = t[1].toLowerCase(),
            a = (0, r.E9)(t[2]);
        if (!a) return null;
        switch (n) {
            case "f\xf6rra":
            case "passerade":
            case "-":
                a = (0, s.x4)(a);
        }
        return i.BP.createRelativeFromReference(e.reference, a);
    }
}
