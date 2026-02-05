"use strict";
n.d(t, { A: () => d });
var r = n(528352),
    i = n(476858),
    a = n(355418),
    s = n(1673);
let o = RegExp(
        `(?:(?:\\,|\\(|\\（)\\s*)?(?:op\\s*?)?(?:(deze|vorige|volgende)\\s*(?:week\\s*)?)?(${(0, i.uJ)(r.CV)})(?=\\W|$)`,
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
            "vorige" == d ? (_ = "last") : "volgende" == d ? (_ = "next") : "deze" == d && (_ = "this"),
            (0, s.Y5)(e.reference, i, _)
        );
    }
}
