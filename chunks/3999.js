n.d(t, { Z: () => u });
var r = n(745901),
    i = n(86465),
    a = n(727916),
    o = n(89199);
let s = RegExp(`(dit|deze|vorig|afgelopen|(?:aan)?komend|over|\\+|-)e?\\s*(${r.km})(?=\\W|$)`, "i"),
    l = 1,
    c = 2;
class u extends a.Z {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let n = t[l].toLowerCase(),
            a = (0, r.RA)(t[c]);
        switch (n) {
            case "vorig":
            case "afgelopen":
            case "-":
                a = (0, o.de)(a);
        }
        return i.L.createRelativeFromReference(e.reference, a);
    }
}
