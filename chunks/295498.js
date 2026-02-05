"use strict";
n.d(t, { A: () => s });
var r = n(355418),
    i = n(11947);
let a = RegExp("(?:星期|礼拜|周)(?<weekday>" + Object.keys(i.tS).join("|") + ")");
class s extends r.c {
    innerPattern() {
        return a;
    }
    innerExtract(e, t) {
        let n = e.createParsingResult(t.index, t[0]),
            r = t.groups.weekday,
            a = i.tS[r];
        if (void 0 === a) return null;
        let s = new Date(e.refDate.getTime()),
            o = !1,
            l = a - s.getDay();
        return (
            Math.abs(l - 7) < Math.abs(l) && (l -= 7),
            Math.abs(l + 7) < Math.abs(l) && (l += 7),
            s.setDate(s.getDate() + l),
            n.start.assign("weekday", a),
            o
                ? (n.start.assign("day", s.getDate()),
                  n.start.assign("month", s.getMonth() + 1),
                  n.start.assign("year", s.getFullYear()))
                : (n.start.imply("day", s.getDate()),
                  n.start.imply("month", s.getMonth() + 1),
                  n.start.imply("year", s.getFullYear())),
            n
        );
    }
}
