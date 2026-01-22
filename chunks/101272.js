n.d(t, { A: () => u });
var r = n(528352),
    i = n(374372),
    a = n(355418),
    s = n(632434);
let o = RegExp(`(dit|deze|vorig|afgelopen|(?:aan)?komend|over|\\+|-)e?\\s*(${r.Pl})(?=\\W|$)`, "i"),
    l = 1,
    c = 2;
class u extends a.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = t[l].toLowerCase(),
            a = (0, r.E9)(t[c]);
        switch (n) {
            case "vorig":
            case "afgelopen":
            case "-":
                a = (0, s.x4)(a);
        }
        return i.BP.createRelativeFromReference(e.reference, a);
    }
}
