Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(389766),
    a = r(628403),
    i = r(801092),
    s = RegExp(
        "(\\d+|[" +
            Object.keys(i.NUMBER).join("") +
            "]+|\u534A|\u51E0)(?:\\s*)(?:\u4E2A)?(\u79D2(?:\u949F)?|\u5206\u949F|\u5C0F\u65F6|\u949F|\u65E5|\u5929|\u661F\u671F|\u793C\u62DC|\u6708|\u5E74)(?:(?:\u4E4B|\u8FC7)?\u540E|(?:\u4E4B)?\u5185)",
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
            if ("\u51E0" === e) n = 3;
            else {
                if ("\u534A" !== e) return null;
                n = 0.5;
            }
        }
        let s = {},
            o = t[2][0];
        if (o.match(/[\u65e5\u5929\u661f\u793c\u6708\u5e74]/)) {
            "\u65E5" == o || "\u5929" == o
                ? (s.day = n)
                : "\u661F" == o || "\u793C" == o
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
              : ("\u5C0F" == o || "\u949F" == o) && (s.hour = n);
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
