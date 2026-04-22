r.d(t, { A: () => o });
var n = r(355418),
    s = r(881190),
    a = r(996483);
let i = /(ora|oggi|stasera|questa sera|domani|dmn|ieri\s*sera)(?=\W|$)/i;
class o extends n.c {
    innerPattern(e) {
        return i;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = t[0].toLowerCase(),
            i = e.createParsingComponents();
        switch (n) {
            case "ora":
                return a.tB(e.reference);
            case "oggi":
                return a.Ec(e.reference);
            case "ieri":
                return a.jI(e.reference);
            case "domani":
            case "dmn":
                return a.uf(e.reference);
            case "stasera":
            case "questa sera":
                return a.A_(e.reference);
            default:
                if (n.match(/ieri\s*sera/)) {
                    if (r.getHours() > 6) {
                        let e = new Date(r.getTime());
                        e.setDate(e.getDate() - 1), (r = e);
                    }
                    (0, s.Pl)(i, r), i.imply("hour", 0);
                }
        }
        return i;
    }
}
