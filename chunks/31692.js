n.d(t, { Z: () => l });
var r = n(727916),
    i = n(894186),
    a = n(424046);
let o = 1,
    s = 2;
class l extends r.Z {
    innerPattern(e) {
        return /(gisteren|morgen|van)(ochtend|middag|namiddag|avond|nacht)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let n = t[o].toLowerCase(),
            r = t[s].toLowerCase(),
            l = e.createParsingComponents(),
            c = e.refDate;
        switch (n) {
            case "gisteren":
                let u = new Date(c.getTime());
                u.setDate(u.getDate() - 1), (0, a.cz)(l, u);
                break;
            case "van":
                (0, a.cz)(l, c);
                break;
            case "morgen":
                let d = new Date(c.getTime());
                d.setDate(d.getDate() + 1), (0, a.cz)(l, d), (0, a.hO)(l, d);
        }
        switch (r) {
            case "ochtend":
                l.imply("meridiem", i.GG.AM), l.imply("hour", 6);
                break;
            case "middag":
                l.imply("meridiem", i.GG.AM), l.imply("hour", 12);
                break;
            case "namiddag":
                l.imply("meridiem", i.GG.PM), l.imply("hour", 15);
                break;
            case "avond":
                l.imply("meridiem", i.GG.PM), l.imply("hour", 20);
        }
        return l;
    }
}
