"use strict";
n.d(t, { A: () => d });
var r = n(683958),
    i = n(476858),
    a = n(355418),
    s = n(1673);
let o = RegExp(
        `(?:(?:\\,|\\(|\\（)\\s*)?(?:(este|esta|passado|pr[o\xf3]ximo)\\s*)?(${(0, i.uJ)(r.CV)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(este|esta|passado|pr[\xf3o]ximo)\\s*semana)?(?=\\W|\\d|$)`,
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
            i = r.CV[n];
        if (void 0 === i) return null;
        let a = t[l],
            o = t[c],
            d = a || o || "";
        d = d.toLowerCase();
        let _ = null;
        return (
            "passado" == d
                ? (_ = "this")
                : "pr\xf3ximo" == d || "proximo" == d
                  ? (_ = "next")
                  : "este" == d && (_ = "this"),
            (0, s.Y5)(e.reference, i, _)
        );
    }
}
