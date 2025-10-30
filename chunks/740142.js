n.d(t, { Z: () => o });
var r = n(894186),
    i = n(727916),
    a = n(424046);
class o extends i.Z {
    innerPattern(e) {
        return /(diesen)?\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let n = e.refDate,
            r = t[2].toLowerCase(),
            i = e.createParsingComponents();
        return (0, a.hO)(i, n), o.extractTimeComponents(i, r);
    }
    static extractTimeComponents(e, t) {
        switch (t) {
            case "morgen":
                e.imply("hour", 6), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.GG.AM);
                break;
            case "vormittag":
                e.imply("hour", 9), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.GG.AM);
                break;
            case "mittag":
            case "mittags":
                e.imply("hour", 12), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.GG.AM);
                break;
            case "nachmittag":
                e.imply("hour", 15), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.GG.PM);
                break;
            case "abend":
                e.imply("hour", 18), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.GG.PM);
                break;
            case "nacht":
                e.imply("hour", 22), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.GG.PM);
                break;
            case "mitternacht":
                e.get("hour") > 1 && e.addDurationAsImplied({ day: 1 }),
                    e.imply("hour", 0),
                    e.imply("minute", 0),
                    e.imply("second", 0),
                    e.imply("meridiem", r.GG.AM);
        }
        return e;
    }
}
