"use strict";
n.d(t, { A: () => u });
var r = n(989479),
    i = n(374372),
    a = n(476858),
    s = n(241738);
let o = 1,
    l = 2;
class u extends s.w {
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
        let u = e.createParsingComponents(),
            c = new Date(e.reference.instant.getTime());
        return (
            s.match(/week/i)
                ? (c.setDate(c.getDate() - c.getDay()),
                  u.imply("day", c.getDate()),
                  u.imply("month", c.getMonth() + 1),
                  u.imply("year", c.getFullYear()))
                : s.match(/month/i)
                  ? (c.setDate(1),
                    u.imply("day", c.getDate()),
                    u.assign("year", c.getFullYear()),
                    u.assign("month", c.getMonth() + 1))
                  : s.match(/year/i) &&
                    (c.setDate(1),
                    c.setMonth(0),
                    u.imply("day", c.getDate()),
                    u.imply("month", c.getMonth() + 1),
                    u.assign("year", c.getFullYear())),
            u
        );
    }
}
