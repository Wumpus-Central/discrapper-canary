Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(858197),
    a = r(167385),
    i = r(767130),
    s = /(?:questo|questa)?\s{0,3}(mattina|pomeriggio|sera|notte|mezzanotte|mezzogiorno)(?=\W|$)/i;
class o extends a.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            a = e.createParsingComponents();
        switch (t[1].toLowerCase()) {
            case "pomeriggio":
                a.imply("meridiem", n.Meridiem.PM), a.imply("hour", 15);
                break;
            case "sera":
            case "notte":
                a.imply("meridiem", n.Meridiem.PM), a.imply("hour", 20);
                break;
            case "mezzanotte":
                let s = new Date(r.getTime());
                s.setDate(s.getDate() + 1),
                    (0, i.assignSimilarDate)(a, s),
                    (0, i.implySimilarTime)(a, s),
                    a.imply("hour", 0),
                    a.imply("minute", 0),
                    a.imply("second", 0);
                break;
            case "mattina":
                a.imply("meridiem", n.Meridiem.AM), a.imply("hour", 6);
                break;
            case "mezzogiorno":
                a.imply("meridiem", n.Meridiem.AM), a.imply("hour", 12);
        }
        return a;
    }
}
t.default = o;
