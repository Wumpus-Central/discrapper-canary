"use strict";
n.d(t, { A: () => s });
var r = n(355418),
    i = n(725198);
let a = RegExp("(?<prefix>上|今|下|這|呢)(?:個)?(?:星期|禮拜|週)(?<weekday>" + Object.keys(i.tS).join("|") + ")");
class s extends r.c {
    innerPattern() {
        return a;
    }
    innerExtract(e, t) {
        let n = e.createParsingResult(t.index, t[0]),
            r = t.groups.weekday,
            a = i.tS[r];
        if (void 0 === a) return null;
        let s = null,
            o = t.groups.prefix;
        "上" == o ? (s = "last") : "下" == o ? (s = "next") : ("今" == o || "這" == o || "呢" == o) && (s = "this");
        let l = new Date(e.refDate.getTime()),
            u = !1,
            c = l.getDay();
        if ("last" == s || "past" == s) l.setDate(l.getDate() + (a - 7 - c)), (u = !0);
        else if ("next" == s) l.setDate(l.getDate() + (a + 7 - c)), (u = !0);
        else if ("this" == s) l.setDate(l.getDate() + (a - c));
        else {
            let e = a - c;
            Math.abs(e - 7) < Math.abs(e) && (e -= 7),
                Math.abs(e + 7) < Math.abs(e) && (e += 7),
                l.setDate(l.getDate() + e);
        }
        return (
            n.start.assign("weekday", a),
            u
                ? (n.start.assign("day", l.getDate()),
                  n.start.assign("month", l.getMonth() + 1),
                  n.start.assign("year", l.getFullYear()))
                : (n.start.imply("day", l.getDate()),
                  n.start.imply("month", l.getMonth() + 1),
                  n.start.imply("year", l.getFullYear())),
            n
        );
    }
}
