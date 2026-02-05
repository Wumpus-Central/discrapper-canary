"use strict";
n.d(t, { A: () => o });
var r = n(322811),
    i = n(355418),
    a = n(658809),
    s = n(996483);
class o extends i.c {
    innerPattern(e) {
        return /(maintenant|aujourd'hui|demain|hier|cette\s*nuit|la\s*veille)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let n = e.refDate,
            i = t[0].toLowerCase(),
            o = e.createParsingComponents();
        switch (i) {
            case "maintenant":
                return s.tB(e.reference);
            case "aujourd'hui":
                return s.Ec(e.reference);
            case "hier":
                return s.jI(e.reference);
            case "demain":
                return s.uf(e.reference);
            default:
                if (i.match(/cette\s*nuit/)) (0, a.Pl)(o, n), o.imply("hour", 22), o.imply("meridiem", r.FF.PM);
                else if (i.match(/la\s*veille/)) {
                    let e = new Date(n.getTime());
                    e.setDate(e.getDate() - 1), (0, a.Pl)(o, e), o.imply("hour", 0);
                }
        }
        return o;
    }
}
