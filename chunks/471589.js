n.d(t, {
    A: () => l,
});
var r = n(322811),
    i = n(355418),
    a = n(658809);
let s = 1,
    o = 2;
class l extends i.c {
    innerPattern() {
        return /(deze)?\s*(namiddag|avond|middernacht|ochtend|middag|'s middags|'s avonds|'s ochtends)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let n = e.refDate,
            i = e.createParsingComponents();
        switch (
            ("deze" === t[s] &&
                (i.assign("day", e.refDate.getDate()),
                i.assign("month", e.refDate.getMonth() + 1),
                i.assign("year", e.refDate.getFullYear())),
            t[o].toLowerCase())
        ) {
            case "namiddag":
            case "'s namiddags":
                i.imply("meridiem", r.FF.PM), i.imply("hour", 15);
                break;
            case "avond":
            case "'s avonds'":
                i.imply("meridiem", r.FF.PM), i.imply("hour", 20);
                break;
            case "middernacht":
                let l = new Date(n.getTime());
                l.setDate(l.getDate() + 1),
                    (0, a.Pl)(i, l),
                    (0, a.A4)(i, l),
                    i.imply("hour", 0),
                    i.imply("minute", 0),
                    i.imply("second", 0);
                break;
            case "ochtend":
            case "'s ochtends":
                i.imply("meridiem", r.FF.AM), i.imply("hour", 6);
                break;
            case "middag":
            case "'s middags":
                i.imply("meridiem", r.FF.AM), i.imply("hour", 12);
        }
        return i;
    }
}
