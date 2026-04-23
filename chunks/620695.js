r.d(t, { A: () => i });
var n = r(322811),
    s = r(355418),
    a = r(658809);
class i extends s.c {
    innerPattern(e) {
        return /(diesen)?\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = t[2].toLowerCase(),
            s = e.createParsingComponents();
        return (0, a.A4)(s, r), i.extractTimeComponents(s, n);
    }
    static extractTimeComponents(e, t) {
        switch (t) {
            case "morgen":
                e.imply("hour", 6), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", n.FF.AM);
                break;
            case "vormittag":
                e.imply("hour", 9), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", n.FF.AM);
                break;
            case "mittag":
            case "mittags":
                e.imply("hour", 12), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", n.FF.AM);
                break;
            case "nachmittag":
                e.imply("hour", 15), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", n.FF.PM);
                break;
            case "abend":
                e.imply("hour", 18), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", n.FF.PM);
                break;
            case "nacht":
                e.imply("hour", 22), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", n.FF.PM);
                break;
            case "mitternacht":
                e.get("hour") > 1 && e.addDurationAsImplied({ day: 1 }),
                    e.imply("hour", 0),
                    e.imply("minute", 0),
                    e.imply("second", 0),
                    e.imply("meridiem", n.FF.AM);
        }
        return e;
    }
}
