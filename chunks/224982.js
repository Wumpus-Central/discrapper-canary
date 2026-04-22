r.d(t, { A: () => o });
var n = r(355418),
    s = r(881190),
    a = r(996483);
let i = RegExp(
    "(nu|idag|imorgon|\xf6vermorgon|ig\xe5r|f\xf6rrg\xe5r|i\\s*f\xf6rrg\xe5r)(?:\\s*(?:p\xe5\\s*)?(morgonen?|f\xf6rmiddagen?|middagen?|eftermiddagen?|kv\xe4llen?|natten?|midnatt))?(?=\\W|$)",
    "i",
);
class o extends n.c {
    innerPattern(e) {
        return i;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = (t[1] || "").toLowerCase(),
            i = (t[2] || "").toLowerCase(),
            o = e.createParsingComponents();
        switch (n) {
            case "nu":
                o = a.tB(e.reference);
                break;
            case "idag":
                o = a.Ec(e.reference);
                break;
            case "imorgon":
            case "imorn":
                let l = new Date(r.getTime());
                l.setDate(l.getDate() + 1), (0, s.Pl)(o, l), (0, s.A4)(o, l);
                break;
            case "ig\xe5r":
                let u = new Date(r.getTime());
                u.setDate(u.getDate() - 1), (0, s.Pl)(o, u), (0, s.A4)(o, u);
                break;
            case "f\xf6rrg\xe5r":
            case "i f\xf6rrg\xe5r":
                let d = new Date(r.getTime());
                d.setDate(d.getDate() - 2), (0, s.Pl)(o, d), (0, s.A4)(o, d);
        }
        switch (i) {
            case "morgon":
            case "morgonen":
                o.imply("hour", 6), o.imply("minute", 0), o.imply("second", 0), o.imply("millisecond", 0);
                break;
            case "f\xf6rmiddag":
            case "f\xf6rmiddagen":
                o.imply("hour", 9), o.imply("minute", 0), o.imply("second", 0), o.imply("millisecond", 0);
                break;
            case "middag":
            case "middagen":
                o.imply("hour", 12), o.imply("minute", 0), o.imply("second", 0), o.imply("millisecond", 0);
                break;
            case "eftermiddag":
            case "eftermiddagen":
                o.imply("hour", 15), o.imply("minute", 0), o.imply("second", 0), o.imply("millisecond", 0);
                break;
            case "kv\xe4ll":
            case "kv\xe4llen":
                o.imply("hour", 20), o.imply("minute", 0), o.imply("second", 0), o.imply("millisecond", 0);
                break;
            case "natt":
            case "natten":
            case "midnatt":
                "midnatt" === i ? o.imply("hour", 0) : o.imply("hour", 2),
                    o.imply("minute", 0),
                    o.imply("second", 0),
                    o.imply("millisecond", 0);
        }
        return o;
    }
}
