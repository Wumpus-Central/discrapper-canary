Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(115004),
    a = r(167385),
    i = r(767130);
class s extends a.AbstractParserWithWordBoundaryChecking {
    innerPattern(e) {
        return /(diesen)?\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = t[2].toLowerCase(),
            a = e.createParsingComponents();
        return (0, i.implySimilarTime)(a, r), s.extractTimeComponents(a, n);
    }
    static extractTimeComponents(e, t) {
        switch (t) {
            case "morgen":
                e.imply("hour", 6), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", n.Meridiem.AM);
                break;
            case "vormittag":
                e.imply("hour", 9), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", n.Meridiem.AM);
                break;
            case "mittag":
            case "mittags":
                e.imply("hour", 12), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", n.Meridiem.AM);
                break;
            case "nachmittag":
                e.imply("hour", 15), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", n.Meridiem.PM);
                break;
            case "abend":
                e.imply("hour", 18), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", n.Meridiem.PM);
                break;
            case "nacht":
                e.imply("hour", 22), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", n.Meridiem.PM);
                break;
            case "mitternacht":
                e.get("hour") > 1 && e.addDurationAsImplied({ day: 1 }),
                    e.imply("hour", 0),
                    e.imply("minute", 0),
                    e.imply("second", 0),
                    e.imply("meridiem", n.Meridiem.AM);
        }
        return e;
    }
}
t.default = s;
