r.d(t, { A: () => o });
var n = r(989479),
    s = r(374372),
    a = r(476858),
    i = r(241738);
class o extends i.w {
    innerPatternString(e) {
        return `(в прошлом|на прошлой|на следующей|в следующем|на этой|в этом)\\s*(${(0, a.uJ)(n.EB)})`;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            a = t[2].toLowerCase(),
            i = n.EB[a];
        if ("на следующей" == r || "в следующем" == r) {
            let t = {};
            return (t[i] = 1), s.BP.createRelativeFromReference(e.reference, t);
        }
        if ("в прошлом" == r || "на прошлой" == r) {
            let t = {};
            return (t[i] = -1), s.BP.createRelativeFromReference(e.reference, t);
        }
        let o = e.createParsingComponents(),
            l = new Date(e.reference.instant.getTime());
        return (
            i.match(/week/i)
                ? (l.setDate(l.getDate() - l.getDay()),
                  o.imply("day", l.getDate()),
                  o.imply("month", l.getMonth() + 1),
                  o.imply("year", l.getFullYear()))
                : i.match(/month/i)
                  ? (l.setDate(1),
                    o.imply("day", l.getDate()),
                    o.assign("year", l.getFullYear()),
                    o.assign("month", l.getMonth() + 1))
                  : i.match(/year/i) &&
                    (l.setDate(1),
                    l.setMonth(0),
                    o.imply("day", l.getDate()),
                    o.imply("month", l.getMonth() + 1),
                    o.assign("year", l.getFullYear())),
            o
        );
    }
}
