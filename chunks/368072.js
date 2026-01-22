n.d(t, {
    A: () => c,
});
var r = n(989479),
    i = n(374372),
    a = n(476858),
    s = n(241738);
let o = 1,
    l = 2;
class c extends s.w {
    innerPatternString(e) {
        return `(в прошлом|на прошлой|на следующей|в следующем|на этой|в этом)\\s*(${(0, a.uJ)(r.EB)})`;
    }
    innerExtract(e, t) {
        let n = t[o].toLowerCase(),
            a = t[l].toLowerCase(),
            s = r.EB[a];
        if ("на следующей" == n || "в следующем" == n) {
            let t = {};
            return (t[s] = 1), i.BP.createRelativeFromReference(e.reference, t);
        }
        if ("в прошлом" == n || "на прошлой" == n) {
            let t = {};
            return (t[s] = -1), i.BP.createRelativeFromReference(e.reference, t);
        }
        let c = e.createParsingComponents(),
            u = new Date(e.reference.instant.getTime());
        return (
            s.match(/week/i)
                ? (u.setDate(u.getDate() - u.getDay()),
                  c.imply("day", u.getDate()),
                  c.imply("month", u.getMonth() + 1),
                  c.imply("year", u.getFullYear()))
                : s.match(/month/i)
                  ? (u.setDate(1),
                    c.imply("day", u.getDate()),
                    c.assign("year", u.getFullYear()),
                    c.assign("month", u.getMonth() + 1))
                  : s.match(/year/i) &&
                    (u.setDate(1),
                    u.setMonth(0),
                    c.imply("day", u.getDate()),
                    c.imply("month", u.getMonth() + 1),
                    c.assign("year", u.getFullYear())),
            c
        );
    }
}
