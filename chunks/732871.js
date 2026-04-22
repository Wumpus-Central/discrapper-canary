r.d(t, { A: () => l });
var n = r(615339),
    s = r(476858),
    a = r(355418),
    i = r(1673);
let o = RegExp(
    `(?:(?:\\,|\\(|\\（)\\s*)?(?:il\\s*?)?(?:(questa|l'ultima|scorsa|prossima)\\s*)?(${(0, s.uJ)(n.CV)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(questa|l'ultima|scorsa|prossima)\\s*settimana)?(?=\\W|$)`,
    "i",
);
class l extends a.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let r = t[2].toLowerCase(),
            s = n.CV[r],
            a = t[1],
            o = t[3],
            l = a || o;
        l = (l = l || "").toLowerCase();
        let u = null;
        return (
            "ultima" == l || "scorsa" == l
                ? (u = "ultima")
                : "prossima" == l
                  ? (u = "prossima")
                  : "questa" == l && (u = "questa"),
            (0, i.Y5)(e.reference, s, u)
        );
    }
}
