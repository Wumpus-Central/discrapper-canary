n.d(t, { Z: () => o });
var r = n(727916),
    i = n(627459);
let a = RegExp("(?:星期|礼拜|周)(?<weekday>" + Object.keys(i.GR).join("|") + ")");
class o extends r.Z {
    innerPattern() {
        return a;
    }
    innerExtract(e, t) {
        let n = e.createParsingResult(t.index, t[0]),
            r = t.groups.weekday,
            a = i.GR[r];
        if (void 0 === a) return null;
        let o = new Date(e.refDate.getTime()),
            s = !1,
            l = a - o.getDay();
        return (
            Math.abs(l - 7) < Math.abs(l) && (l -= 7),
            Math.abs(l + 7) < Math.abs(l) && (l += 7),
            o.setDate(o.getDate() + l),
            n.start.assign("weekday", a),
            s
                ? (n.start.assign("day", o.getDate()),
                  n.start.assign("month", o.getMonth() + 1),
                  n.start.assign("year", o.getFullYear()))
                : (n.start.imply("day", o.getDate()),
                  n.start.imply("month", o.getMonth() + 1),
                  n.start.imply("year", o.getFullYear())),
            n
        );
    }
}
