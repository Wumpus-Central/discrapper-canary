n.d(t, { Z: () => l });
var r = n(894209),
    i = n(86465),
    a = n(727916),
    o = n(800911),
    s = n(89199);
class l extends a.Z {
    constructor() {
        super();
    }
    innerPattern() {
        return RegExp(
            `(?:\\s*((?:n\xe4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?(${r.zC})?(?:\\s*(n\xe4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?\\s*(${(0, o.q3)(r.pS)})`,
            "i",
        );
    }
    innerExtract(e, t) {
        let n = t[2] ? (0, r.IX)(t[2]) : 1,
            a = r.pS[t[4].toLowerCase()],
            o = {};
        o[a] = n;
        let l = t[1] || t[3] || "";
        if ((l = l.toLowerCase()))
            return (
                (/vor/.test(l) || /letzte/.test(l) || /vergangen/.test(l)) && (o = (0, s.de)(o)),
                i.L.createRelativeFromReference(e.reference, o)
            );
    }
}
