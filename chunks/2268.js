"use strict";
n.d(t, { A: () => c });
var r = n(360345),
    i = n(374372),
    a = n(355418),
    s = n(476858);
let o = RegExp(`(this|last|past|next|after\\s*this)\\s*(${(0, s.uJ)(r.EB)})(?=\\s*)(?=\\W|$)`, "i"),
    l = 1,
    u = 2;
class c extends a.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = t[l].toLowerCase(),
            a = t[u].toLowerCase(),
            s = r.EB[a];
        if ("next" == n || n.startsWith("after")) {
            let t = {};
            return (t[s] = 1), i.BP.createRelativeFromReference(e.reference, t);
        }
        if ("last" == n || "past" == n) {
            let t = {};
            return (t[s] = -1), i.BP.createRelativeFromReference(e.reference, t);
        }
        let o = e.createParsingComponents(),
            c = new Date(e.reference.instant.getTime());
        return (
            a.match(/week/i)
                ? (c.setDate(c.getDate() - c.getDay()),
                  o.imply("day", c.getDate()),
                  o.imply("month", c.getMonth() + 1),
                  o.imply("year", c.getFullYear()))
                : a.match(/month/i)
                  ? (c.setDate(1),
                    o.imply("day", c.getDate()),
                    o.assign("year", c.getFullYear()),
                    o.assign("month", c.getMonth() + 1))
                  : a.match(/year/i) &&
                    (c.setDate(1),
                    c.setMonth(0),
                    o.imply("day", c.getDate()),
                    o.imply("month", c.getMonth() + 1),
                    o.assign("year", c.getFullYear())),
            o
        );
    }
}
