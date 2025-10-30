n.d(t, { Z: () => d });
var r = n(745901),
    i = n(800911),
    a = n(727916),
    o = n(334633);
let s = RegExp(
        `(?:(?:\\,|\\(|\\（)\\s*)?(?:op\\s*?)?(?:(deze|vorige|volgende)\\s*(?:week\\s*)?)?(${(0, i.q3)(r.LN)})(?=\\W|$)`,
        "i",
    ),
    l = 1,
    c = 2,
    u = 3;
class d extends a.Z {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let n = t[c].toLowerCase(),
            i = r.LN[n],
            a = t[l],
            s = t[u],
            d = a || s;
        d = (d = d || "").toLowerCase();
        let f = null;
        return (
            "vorige" == d ? (f = "last") : "volgende" == d ? (f = "next") : "deze" == d && (f = "this"),
            (0, o.Rv)(e.reference, i, f)
        );
    }
}
