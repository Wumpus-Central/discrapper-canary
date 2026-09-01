Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(167385);
class a extends n.AbstractParserWithWordBoundaryChecking {
    innerPattern(e) {
        return RegExp(
            "(\u73B0\u5728|\u7ACB(?:\u523B|\u5373)|\u5373\u523B)|(\u4ECA|\u660E|\u524D|\u5927\u524D|\u540E|\u5927\u540E|\u6628)(\u65E9|\u665A)|(\u4E0A(?:\u5348)|\u65E9(?:\u4E0A)|\u4E0B(?:\u5348)|\u665A(?:\u4E0A)|\u591C(?:\u665A)?|\u4E2D(?:\u5348)|\u51CC(?:\u6668))|(\u4ECA|\u660E|\u524D|\u5927\u524D|\u540E|\u5927\u540E|\u6628)(?:\u65E5|\u5929)(?:[\\s|,|\uFF0C]*)(?:(\u4E0A(?:\u5348)|\u65E9(?:\u4E0A)|\u4E0B(?:\u5348)|\u665A(?:\u4E0A)|\u591C(?:\u665A)?|\u4E2D(?:\u5348)|\u51CC(?:\u6668)))?",
            "i",
        );
    }
    innerExtract(e, t) {
        let r = t.index,
            n = e.createParsingResult(r, t[0]),
            a = e.refDate,
            i = new Date(a.getTime());
        if (t[1])
            n.start.imply("hour", a.getHours()),
                n.start.imply("minute", a.getMinutes()),
                n.start.imply("second", a.getSeconds()),
                n.start.imply("millisecond", a.getMilliseconds());
        else if (t[2]) {
            let e = t[2],
                r = t[3];
            "\u660E" == e
                ? a.getHours() > 1 && i.setDate(i.getDate() + 1)
                : "\u6628" == e
                  ? i.setDate(i.getDate() - 1)
                  : "\u524D" == e
                    ? i.setDate(i.getDate() - 2)
                    : "\u5927\u524D" == e
                      ? i.setDate(i.getDate() - 3)
                      : "\u540E" == e
                        ? i.setDate(i.getDate() + 2)
                        : "\u5927\u540E" == e && i.setDate(i.getDate() + 3),
                "\u65E9" == r
                    ? n.start.imply("hour", 6)
                    : "\u665A" == r && (n.start.imply("hour", 22), n.start.imply("meridiem", 1));
        } else if (t[4]) {
            let e = t[4][0];
            "\u65E9" == e || "\u4E0A" == e
                ? n.start.imply("hour", 6)
                : "\u4E0B" == e
                  ? (n.start.imply("hour", 15), n.start.imply("meridiem", 1))
                  : "\u4E2D" == e
                    ? (n.start.imply("hour", 12), n.start.imply("meridiem", 1))
                    : "\u591C" == e || "\u665A" == e
                      ? (n.start.imply("hour", 22), n.start.imply("meridiem", 1))
                      : "\u51CC" == e && n.start.imply("hour", 0);
        } else if (t[5]) {
            let e = t[5];
            "\u660E" == e
                ? a.getHours() > 1 && i.setDate(i.getDate() + 1)
                : "\u6628" == e
                  ? i.setDate(i.getDate() - 1)
                  : "\u524D" == e
                    ? i.setDate(i.getDate() - 2)
                    : "\u5927\u524D" == e
                      ? i.setDate(i.getDate() - 3)
                      : "\u540E" == e
                        ? i.setDate(i.getDate() + 2)
                        : "\u5927\u540E" == e && i.setDate(i.getDate() + 3);
            let r = t[6];
            if (r) {
                let e = r[0];
                "\u65E9" == e || "\u4E0A" == e
                    ? n.start.imply("hour", 6)
                    : "\u4E0B" == e
                      ? (n.start.imply("hour", 15), n.start.imply("meridiem", 1))
                      : "\u4E2D" == e
                        ? (n.start.imply("hour", 12), n.start.imply("meridiem", 1))
                        : "\u591C" == e || "\u665A" == e
                          ? (n.start.imply("hour", 22), n.start.imply("meridiem", 1))
                          : "\u51CC" == e && n.start.imply("hour", 0);
            }
        }
        return (
            n.start.assign("day", i.getDate()),
            n.start.assign("month", i.getMonth() + 1),
            n.start.assign("year", i.getFullYear()),
            n
        );
    }
}
t.default = a;
