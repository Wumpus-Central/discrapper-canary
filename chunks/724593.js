Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(115004),
    a = r(389766);
class i extends a.AbstractParserWithWordBoundaryChecking {
    innerPattern(e) {
        return /(cet?)?\s*(matin|soir|apr\xe8s-midi|aprem|a midi|\xe0 minuit)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = t[2].toLowerCase(),
            a = e.createParsingComponents();
        switch (r) {
            case "apr\xe8s-midi":
            case "aprem":
                a.imply("hour", 14), a.imply("minute", 0), a.imply("meridiem", n.Meridiem.PM);
                break;
            case "soir":
                a.imply("hour", 18), a.imply("minute", 0), a.imply("meridiem", n.Meridiem.PM);
                break;
            case "matin":
                a.imply("hour", 8), a.imply("minute", 0), a.imply("meridiem", n.Meridiem.AM);
                break;
            case "a midi":
                a.imply("hour", 12), a.imply("minute", 0), a.imply("meridiem", n.Meridiem.AM);
                break;
            case "\xe0 minuit":
                a.imply("hour", 0), a.imply("meridiem", n.Meridiem.AM);
        }
        return a;
    }
}
t.default = i;
