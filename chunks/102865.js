Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(389766),
    a = r(801092),
    i = RegExp("(?:\u661F\u671F|\u793C\u62DC|\u5468)(?<weekday>" + Object.keys(a.WEEKDAY_OFFSET).join("|") + ")");
class s extends n.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return i;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = t.groups.weekday,
            i = a.WEEKDAY_OFFSET[n];
        if (void 0 === i) return null;
        let s = new Date(e.refDate.getTime()),
            o = i - s.getDay();
        return (
            Math.abs(o - 7) < Math.abs(o) && (o -= 7),
            Math.abs(o + 7) < Math.abs(o) && (o += 7),
            s.setDate(s.getDate() + o),
            r.start.assign("weekday", i),
            r.start.imply("day", s.getDate()),
            r.start.imply("month", s.getMonth() + 1),
            r.start.imply("year", s.getFullYear()),
            r
        );
    }
}
t.default = s;
