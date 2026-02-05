"use strict";
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
    u = 2,
    c = 3;
class d extends a.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = t[u].toLowerCase(),
            i = r.CV[n],
            a = t[l],
            o = t[c],
            d = a || o;
        d = (d = d || "").toLowerCase();
        let _ = null;
        return (
            "ultima" == d || "scorsa" == d
                ? (_ = "ultima")
                : "prossima" == d
                  ? (_ = "prossima")
                  : "questa" == d && (_ = "questa"),
            (0, s.Y5)(e.reference, i, _)
        );
    }
}
