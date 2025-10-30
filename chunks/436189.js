n.d(t, { Z: () => d });
var r = n(727916),
    i = n(424046),
    a = n(740142),
    o = n(715870),
    s = n(89199);
let l = RegExp(
        `(jetzt|heute|morgen|\xfcbermorgen|uebermorgen|gestern|vorgestern|letzte\\s*nacht)(?:\\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht))?(?=\\W|$)`,
        "i",
    ),
    c = 1,
    u = 2;
class d extends r.Z {
    innerPattern(e) {
        return l;
    }
    innerExtract(e, t) {
        let n = e.reference.getDateWithAdjustedTimezone(),
            r = (t[c] || "").toLowerCase(),
            l = (t[u] || "").toLowerCase(),
            d = e.createParsingComponents();
        switch (r) {
            case "jetzt":
                d = o.zO(e.reference);
                break;
            case "heute":
                d = o.Lg(e.reference);
                break;
            case "morgen":
                (n = (0, s.WK)(n, { day: 1 })), (0, i.cz)(d, n), (0, i.hO)(d, n);
                break;
            case "übermorgen":
            case "uebermorgen":
                (n = (0, s.WK)(n, { day: 2 })), (0, i.cz)(d, n), (0, i.hO)(d, n);
                break;
            case "gestern":
                (n = (0, s.WK)(n, { day: -1 })), (0, i.cz)(d, n), (0, i.hO)(d, n);
                break;
            case "vorgestern":
                (n = (0, s.WK)(n, { day: -2 })), (0, i.cz)(d, n), (0, i.hO)(d, n);
                break;
            default:
                r.match(/letzte\s*nacht/) &&
                    (n.getHours() > 6 && (n = (0, s.WK)(n, { day: -1 })), (0, i.cz)(d, n), d.imply("hour", 0));
        }
        return l && (d = a.Z.extractTimeComponents(d, l)), d;
    }
}
