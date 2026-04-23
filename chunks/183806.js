r.d(t, { A: () => u });
var n = r(360345),
    s = r(374372),
    a = r(355418),
    i = r(632434);
let o = RegExp(`(this|last|past|next|after|\\+|-)\\s*(${n.Pl})(?=\\W|$)`, "i"),
    l = RegExp(`(this|last|past|next|after|\\+|-)\\s*(${n.d2})(?=\\W|$)`, "i");
class u extends a.c {
    allowAbbreviations;
    constructor(e = !0) {
        super(), (this.allowAbbreviations = e);
    }
    innerPattern() {
        return this.allowAbbreviations ? o : l;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            a = (0, n.E9)(t[2]);
        if (!a) return null;
        switch (r) {
            case "last":
            case "past":
            case "-":
                a = (0, i.x4)(a);
        }
        return s.BP.createRelativeFromReference(e.reference, a);
    }
}
