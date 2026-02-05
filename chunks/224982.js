"use strict";
n.d(t, { A: () => u });
var r = n(355418),
    i = n(658809),
    a = n(996483);
let s = RegExp(
        "(nu|idag|imorgon|\xf6vermorgon|ig\xe5r|f\xf6rrg\xe5r|i\\s*f\xf6rrg\xe5r)(?:\\s*(?:p\xe5\\s*)?(morgonen?|f\xf6rmiddagen?|middagen?|eftermiddagen?|kv\xe4llen?|natten?|midnatt))?(?=\\W|$)",
        "i",
    ),
    o = 1,
    l = 2;
class u extends r.c {
    innerPattern(e) {
        return s;
    }
    innerExtract(e, t) {
        let n = e.refDate,
            r = (t[o] || "").toLowerCase(),
            s = (t[l] || "").toLowerCase(),
            u = e.createParsingComponents();
        switch (r) {
            case "nu":
                u = a.tB(e.reference);
                break;
            case "idag":
                u = a.Ec(e.reference);
                break;
            case "imorgon":
            case "imorn":
                let c = new Date(n.getTime());
                c.setDate(c.getDate() + 1), (0, i.Pl)(u, c), (0, i.A4)(u, c);
                break;
            case "ig\xe5r":
                let d = new Date(n.getTime());
                d.setDate(d.getDate() - 1), (0, i.Pl)(u, d), (0, i.A4)(u, d);
                break;
            case "f\xf6rrg\xe5r":
            case "i f\xf6rrg\xe5r":
                let _ = new Date(n.getTime());
                _.setDate(_.getDate() - 2), (0, i.Pl)(u, _), (0, i.A4)(u, _);
        }
        switch (s) {
            case "morgon":
            case "morgonen":
                u.imply("hour", 6), u.imply("minute", 0), u.imply("second", 0), u.imply("millisecond", 0);
                break;
            case "f\xf6rmiddag":
            case "f\xf6rmiddagen":
                u.imply("hour", 9), u.imply("minute", 0), u.imply("second", 0), u.imply("millisecond", 0);
                break;
            case "middag":
            case "middagen":
                u.imply("hour", 12), u.imply("minute", 0), u.imply("second", 0), u.imply("millisecond", 0);
                break;
            case "eftermiddag":
            case "eftermiddagen":
                u.imply("hour", 15), u.imply("minute", 0), u.imply("second", 0), u.imply("millisecond", 0);
                break;
            case "kv\xe4ll":
            case "kv\xe4llen":
                u.imply("hour", 20), u.imply("minute", 0), u.imply("second", 0), u.imply("millisecond", 0);
                break;
            case "natt":
            case "natten":
            case "midnatt":
                "midnatt" === s ? u.imply("hour", 0) : u.imply("hour", 2),
                    u.imply("minute", 0),
                    u.imply("second", 0),
                    u.imply("millisecond", 0);
        }
        return u;
    }
}
