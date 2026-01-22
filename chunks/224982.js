n.d(t, { A: () => c });
var r = n(355418),
    i = n(658809),
    a = n(996483);
let s = RegExp(
        "(nu|idag|imorgon|övermorgon|igår|förrgår|i\\s*förrgår)(?:\\s*(?:på\\s*)?(morgonen?|förmiddagen?|middagen?|eftermiddagen?|kvällen?|natten?|midnatt))?(?=\\W|$)",
        "i",
    ),
    o = 1,
    l = 2;
class c extends r.c {
    innerPattern(e) {
        return s;
    }
    innerExtract(e, t) {
        let n = e.refDate,
            r = (t[o] || "").toLowerCase(),
            s = (t[l] || "").toLowerCase(),
            c = e.createParsingComponents();
        switch (r) {
            case "nu":
                c = a.tB(e.reference);
                break;
            case "idag":
                c = a.Ec(e.reference);
                break;
            case "imorgon":
            case "imorn":
                let u = new Date(n.getTime());
                u.setDate(u.getDate() + 1), (0, i.Pl)(c, u), (0, i.A4)(c, u);
                break;
            case "igår":
                let d = new Date(n.getTime());
                d.setDate(d.getDate() - 1), (0, i.Pl)(c, d), (0, i.A4)(c, d);
                break;
            case "förrgår":
            case "i förrgår":
                let f = new Date(n.getTime());
                f.setDate(f.getDate() - 2), (0, i.Pl)(c, f), (0, i.A4)(c, f);
        }
        switch (s) {
            case "morgon":
            case "morgonen":
                c.imply("hour", 6), c.imply("minute", 0), c.imply("second", 0), c.imply("millisecond", 0);
                break;
            case "förmiddag":
            case "förmiddagen":
                c.imply("hour", 9), c.imply("minute", 0), c.imply("second", 0), c.imply("millisecond", 0);
                break;
            case "middag":
            case "middagen":
                c.imply("hour", 12), c.imply("minute", 0), c.imply("second", 0), c.imply("millisecond", 0);
                break;
            case "eftermiddag":
            case "eftermiddagen":
                c.imply("hour", 15), c.imply("minute", 0), c.imply("second", 0), c.imply("millisecond", 0);
                break;
            case "kväll":
            case "kvällen":
                c.imply("hour", 20), c.imply("minute", 0), c.imply("second", 0), c.imply("millisecond", 0);
                break;
            case "natt":
            case "natten":
            case "midnatt":
                "midnatt" === s ? c.imply("hour", 0) : c.imply("hour", 2),
                    c.imply("minute", 0),
                    c.imply("second", 0),
                    c.imply("millisecond", 0);
        }
        return c;
    }
}
