n.d(t, { Z: () => u });
var r = n(765682),
    i = n(800911),
    a = n(727916),
    o = n(334633);
let s = RegExp(
        `(?:(?:\\,|\\(|\\（)\\s*)?(?:(?:ce)\\s*)?(${(0, i.q3)(r.LN)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(dernier|prochain)\\s*)?(?=\\W|\\d|$)`,
        "i",
    ),
    l = 1,
    c = 2;
class u extends a.Z {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let n = t[l].toLowerCase(),
            i = r.LN[n];
        if (void 0 === i) return null;
        let a = t[c];
        a = (a = a || "").toLowerCase();
        let s = null;
        return "dernier" == a ? (s = "last") : "prochain" == a && (s = "next"), (0, o.Rv)(e.reference, i, s);
    }
}
