Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(167385),
    a = r(628403),
    i = r(249869),
    s = RegExp(
        "(\\d+|[" +
            Object.keys(i.NUMBER).join("") +
            "]+|\u534A|\u5E7E)(?:\\s*)(?:\u500B)?(\u79D2(?:\u9418)?|\u5206\u9418|\u5C0F\u6642|\u9418|\u65E5|\u5929|\u661F\u671F|\u79AE\u62DC|\u6708|\u5E74)(?:(?:\u4E4B|\u904E)?\u5F8C|(?:\u4E4B)?\u5167)",
        "i",
    );
class o extends n.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = parseInt(t[1]);
        if ((isNaN(n) && (n = (0, i.zhStringToNumber)(t[1])), isNaN(n))) {
            let e = t[1];
            if ("\u5E7E" === e) n = 3;
            else {
                if ("\u534A" !== e) return null;
                n = 0.5;
            }
        }
        let s = {},
            o = t[2][0];
        if (o.match(/[\u65e5\u5929\u661f\u79ae\u6708\u5e74]/)) {
            "\u65E5" == o || "\u5929" == o
                ? (s.day = n)
                : "\u661F" == o || "\u79AE" == o
                  ? (s.week = n)
                  : "\u6708" == o
                    ? (s.month = n)
                    : "\u5E74" == o && (s.year = n);
            let t = (0, a.addDuration)(e.refDate, s);
            return (
                r.start.assign("year", t.getFullYear()),
                r.start.assign("month", t.getMonth() + 1),
                r.start.assign("day", t.getDate()),
                r
            );
        }
        "\u79D2" == o
            ? (s.second = n)
            : "\u5206" == o
              ? (s.minute = n)
              : ("\u5C0F" == o || "\u9418" == o) && (s.hour = n);
        let u = (0, a.addDuration)(e.refDate, s);
        return (
            r.start.imply("year", u.getFullYear()),
            r.start.imply("month", u.getMonth() + 1),
            r.start.imply("day", u.getDate()),
            r.start.assign("hour", u.getHours()),
            r.start.assign("minute", u.getMinutes()),
            r.start.assign("second", u.getSeconds()),
            r
        );
    }
}
t.default = o;
