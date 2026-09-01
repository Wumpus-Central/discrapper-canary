Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(115004),
    a = r(167385),
    i = r(767130);
class s extends a.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return /(?:esta\s*)?(manha|manh\xe3|tarde|meia-noite|meio-dia|noite)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            a = e.createParsingComponents();
        switch (t[1].toLowerCase()) {
            case "tarde":
                a.imply("meridiem", n.Meridiem.PM), a.imply("hour", 15);
                break;
            case "noite":
                a.imply("meridiem", n.Meridiem.PM), a.imply("hour", 22);
                break;
            case "manha":
            case "manh\xe3":
                a.imply("meridiem", n.Meridiem.AM), a.imply("hour", 6);
                break;
            case "meia-noite":
                let s = new Date(r.getTime());
                s.setDate(s.getDate() + 1),
                    (0, i.assignSimilarDate)(a, s),
                    (0, i.implySimilarTime)(a, s),
                    a.imply("hour", 0),
                    a.imply("minute", 0),
                    a.imply("second", 0);
                break;
            case "meio-dia":
                a.imply("meridiem", n.Meridiem.AM), a.imply("hour", 12);
        }
        return a;
    }
}
t.default = s;
