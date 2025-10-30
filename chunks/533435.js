n.d(t, { Z: () => s });
var r = n(727916),
    i = n(424046),
    a = n(715870);
let o = /(now|today|tonight|tomorrow|overmorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
class s extends r.Z {
    innerPattern(e) {
        return o;
    }
    innerExtract(e, t) {
        let n = e.refDate,
            r = t[0].toLowerCase(),
            o = e.createParsingComponents();
        switch (r) {
            case "now":
                o = a.zO(e.reference);
                break;
            case "today":
                o = a.Lg(e.reference);
                break;
            case "yesterday":
                o = a.Cv(e.reference);
                break;
            case "tomorrow":
            case "tmr":
            case "tmrw":
                o = a.Ro(e.reference);
                break;
            case "tonight":
                o = a._$(e.reference);
                break;
            case "overmorrow":
                o = a.o1(e.reference, 2);
                break;
            default:
                if (r.match(/last\s*night/)) {
                    if (n.getHours() > 6) {
                        let e = new Date(n.getTime());
                        e.setDate(e.getDate() - 1), (n = e);
                    }
                    (0, i.cz)(o, n), o.imply("hour", 0);
                }
        }
        return o.addTag("parser/ENCasualDateParser"), o;
    }
}
