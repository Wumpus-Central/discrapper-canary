r.d(t, { A: () => i });
var n = r(355418),
    s = r(322811),
    a = r(881190);
class i extends n.c {
    innerPattern(e) {
        return /(gisteren|morgen|van)(ochtend|middag|namiddag|avond|nacht)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = t[2].toLowerCase(),
            i = e.createParsingComponents(),
            o = e.refDate;
        switch (r) {
            case "gisteren":
                let l = new Date(o.getTime());
                l.setDate(l.getDate() - 1), (0, a.Pl)(i, l);
                break;
            case "van":
                (0, a.Pl)(i, o);
                break;
            case "morgen":
                let u = new Date(o.getTime());
                u.setDate(u.getDate() + 1), (0, a.Pl)(i, u), (0, a.A4)(i, u);
        }
        switch (n) {
            case "ochtend":
                i.imply("meridiem", s.FF.AM), i.imply("hour", 6);
                break;
            case "middag":
                i.imply("meridiem", s.FF.AM), i.imply("hour", 12);
                break;
            case "namiddag":
                i.imply("meridiem", s.FF.PM), i.imply("hour", 15);
                break;
            case "avond":
                i.imply("meridiem", s.FF.PM), i.imply("hour", 20);
        }
        return i;
    }
}
