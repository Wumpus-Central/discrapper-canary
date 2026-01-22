n.d(t, {
    A: () => u,
});
var r = n(6678),
    i = n(476858),
    a = n(355418),
    s = n(1673);
let o = RegExp(
        `(?:(?:\\,|\\(|\\（)\\s*)?(?:(?:ce)\\s*)?(${(0, i.uJ)(r.CV)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(dernier|prochain)\\s*)?(?=\\W|\\d|$)`,
        "i",
    ),
    l = 1,
    c = 2;
class u extends a.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = t[l].toLowerCase(),
            i = r.CV[n];
        if (void 0 === i) return null;
        let a = t[c];
        a = (a = a || "").toLowerCase();
        let o = null;
        return "dernier" == a ? (o = "last") : "prochain" == a && (o = "next"), (0, s.Y5)(e.reference, i, o);
    }
}
