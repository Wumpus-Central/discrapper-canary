r.d(t, { A: () => l });
var n = r(6678),
    s = r(476858),
    a = r(355418),
    i = r(1673);
let o = RegExp(
    `(?:(?:\\,|\\(|\\（)\\s*)?(?:(?:ce)\\s*)?(${(0, s.uJ)(n.CV)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(dernier|prochain)\\s*)?(?=\\W|\\d|$)`,
    "i",
);
class l extends a.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            s = n.CV[r];
        if (void 0 === s) return null;
        let a = t[2];
        a = (a = a || "").toLowerCase();
        let o = null;
        return "dernier" == a ? (o = "last") : "prochain" == a && (o = "next"), (0, i.Y5)(e.reference, s, o);
    }
}
