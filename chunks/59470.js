n.d(t, { Z: () => l });
var r = n(894186),
    i = n(727916),
    a = n(424046);
let o = 1,
    s = 2;
class l extends i.Z {
    innerPattern() {
        return /(deze)?\s*(namiddag|avond|middernacht|ochtend|middag|'s middags|'s avonds|'s ochtends)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let n = e.refDate,
            i = e.createParsingComponents();
        switch (
            ("deze" === t[o] &&
                (i.assign("day", e.refDate.getDate()),
                i.assign("month", e.refDate.getMonth() + 1),
                i.assign("year", e.refDate.getFullYear())),
            t[s].toLowerCase())
        ) {
            case "namiddag":
            case "'s namiddags":
                i.imply("meridiem", r.GG.PM), i.imply("hour", 15);
                break;
            case "avond":
            case "'s avonds'":
                i.imply("meridiem", r.GG.PM), i.imply("hour", 20);
                break;
            case "middernacht":
                let l = new Date(n.getTime());
                l.setDate(l.getDate() + 1),
                    (0, a.cz)(i, l),
                    (0, a.hO)(i, l),
                    i.imply("hour", 0),
                    i.imply("minute", 0),
                    i.imply("second", 0);
                break;
            case "ochtend":
            case "'s ochtends":
                i.imply("meridiem", r.GG.AM), i.imply("hour", 6);
                break;
            case "middag":
            case "'s middags":
                i.imply("meridiem", r.GG.AM), i.imply("hour", 12);
        }
        return i;
    }
}
