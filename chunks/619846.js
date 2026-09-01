Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(167385),
    a = r(115004),
    i = r(767130);
class s extends n.AbstractParserWithWordBoundaryChecking {
    innerPattern(e) {
        return /(gisteren|morgen|van)(ochtend|middag|namiddag|avond|nacht)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = t[2].toLowerCase(),
            s = e.createParsingComponents(),
            o = e.refDate;
        switch (r) {
            case "gisteren":
                let u = new Date(o.getTime());
                u.setDate(u.getDate() - 1), (0, i.assignSimilarDate)(s, u);
                break;
            case "van":
                (0, i.assignSimilarDate)(s, o);
                break;
            case "morgen":
                let l = new Date(o.getTime());
                l.setDate(l.getDate() + 1), (0, i.assignSimilarDate)(s, l), (0, i.implySimilarTime)(s, l);
        }
        switch (n) {
            case "ochtend":
                s.imply("meridiem", a.Meridiem.AM), s.imply("hour", 6);
                break;
            case "middag":
                s.imply("meridiem", a.Meridiem.AM), s.imply("hour", 12);
                break;
            case "namiddag":
                s.imply("meridiem", a.Meridiem.PM), s.imply("hour", 15);
                break;
            case "avond":
                s.imply("meridiem", a.Meridiem.PM), s.imply("hour", 20);
        }
        return s;
    }
}
t.default = s;
