n.d(t, {
    A: () => c,
});
var r = n(360345),
    i = n(374372),
    a = n(355418),
    s = n(632434);
let o = RegExp(`(this|last|past|next|after|\\+|-)\\s*(${r.Pl})(?=\\W|$)`, "i"),
    l = RegExp(`(this|last|past|next|after|\\+|-)\\s*(${r.d2})(?=\\W|$)`, "i");
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
            case "last":
            case "past":
            case "-":
                a = (0, s.x4)(a);
        }
        return i.BP.createRelativeFromReference(e.reference, a);
    }
}
