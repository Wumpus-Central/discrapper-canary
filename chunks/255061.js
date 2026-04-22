r.d(t, { A: () => s });
var n = r(355418);
class s extends n.c {
    innerPattern(e) {
        return RegExp(
            "(现在|立(?:刻|即)|即刻)|(今|明|前|大前|后|大后|昨)(早|晚)|(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|后|大后|昨)(?:日|天)(?:[\\s|,|，]*)(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?",
            "i",
        );
    }
    innerExtract(e, t) {
        let r = t.index,
            n = e.createParsingResult(r, t[0]),
            s = e.refDate,
            a = new Date(s.getTime());
        if (t[1])
            n.start.imply("hour", s.getHours()),
                n.start.imply("minute", s.getMinutes()),
                n.start.imply("second", s.getSeconds()),
                n.start.imply("millisecond", s.getMilliseconds());
        else if (t[2]) {
            let e = t[2],
                r = t[3];
            "明" == e
                ? s.getHours() > 1 && a.setDate(a.getDate() + 1)
                : "昨" == e
                  ? a.setDate(a.getDate() - 1)
                  : "前" == e
                    ? a.setDate(a.getDate() - 2)
                    : "大前" == e
                      ? a.setDate(a.getDate() - 3)
                      : "后" == e
                        ? a.setDate(a.getDate() + 2)
                        : "大后" == e && a.setDate(a.getDate() + 3),
                "早" == r
                    ? n.start.imply("hour", 6)
                    : "晚" == r && (n.start.imply("hour", 22), n.start.imply("meridiem", 1));
        } else if (t[4]) {
            let e = t[4][0];
            "早" == e || "上" == e
                ? n.start.imply("hour", 6)
                : "下" == e
                  ? (n.start.imply("hour", 15), n.start.imply("meridiem", 1))
                  : "中" == e
                    ? (n.start.imply("hour", 12), n.start.imply("meridiem", 1))
                    : "夜" == e || "晚" == e
                      ? (n.start.imply("hour", 22), n.start.imply("meridiem", 1))
                      : "凌" == e && n.start.imply("hour", 0);
        } else if (t[5]) {
            let e = t[5];
            "明" == e
                ? s.getHours() > 1 && a.setDate(a.getDate() + 1)
                : "昨" == e
                  ? a.setDate(a.getDate() - 1)
                  : "前" == e
                    ? a.setDate(a.getDate() - 2)
                    : "大前" == e
                      ? a.setDate(a.getDate() - 3)
                      : "后" == e
                        ? a.setDate(a.getDate() + 2)
                        : "大后" == e && a.setDate(a.getDate() + 3);
            let r = t[6];
            if (r) {
                let e = r[0];
                "早" == e || "上" == e
                    ? n.start.imply("hour", 6)
                    : "下" == e
                      ? (n.start.imply("hour", 15), n.start.imply("meridiem", 1))
                      : "中" == e
                        ? (n.start.imply("hour", 12), n.start.imply("meridiem", 1))
                        : "夜" == e || "晚" == e
                          ? (n.start.imply("hour", 22), n.start.imply("meridiem", 1))
                          : "凌" == e && n.start.imply("hour", 0);
            }
        }
        return (
            n.start.assign("day", a.getDate()),
            n.start.assign("month", a.getMonth() + 1),
            n.start.assign("year", a.getFullYear()),
            n
        );
    }
}
