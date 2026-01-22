n.d(t, { A: () => d });
var r = n(615339),
    i = n(476858),
    a = n(355418),
    s = n(1673);
let o = RegExp(
        `(?:(?:\\,|\\(|\\（)\\s*)?(?:il\\s*?)?(?:(questa|l'ultima|scorsa|prossima)\\s*)?(${(0, i.uJ)(r.CV)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(questa|l'ultima|scorsa|prossima)\\s*settimana)?(?=\\W|$)`,
        "i",
    ),
    l = 1,
    c = 2,
    u = 3;
class d extends a.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = t[c].toLowerCase(),
            i = r.CV[n],
            a = t[l],
            o = t[u],
            d = a || o;
        d = (d = d || "").toLowerCase();
        let f = null;
        return (
            "ultima" == d || "scorsa" == d
                ? (f = "ultima")
                : "prossima" == d
                  ? (f = "prossima")
                  : "questa" == d && (f = "questa"),
            (0, s.Y5)(e.reference, i, f)
        );
    }
}
