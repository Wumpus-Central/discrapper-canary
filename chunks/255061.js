n.d(t, { A: () => u });
var r = n(355418);
let i = 1,
    a = 2,
    s = 3,
    o = 4,
    l = 5,
    c = 6;
class u extends r.c {
    innerPattern(e) {
        return RegExp(
            "(现在|立(?:刻|即)|即刻)|(今|明|前|大前|后|大后|昨)(早|晚)|(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|后|大后|昨)(?:日|天)(?:[\\s|,|\uFF0C]*)(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?",
            "i",
        );
    }
    innerExtract(e, t) {
        let n = t.index,
            r = e.createParsingResult(n, t[0]),
            u = e.refDate,
            d = new Date(u.getTime());
        if (t[i])
            r.start.imply("hour", u.getHours()),
                r.start.imply("minute", u.getMinutes()),
                r.start.imply("second", u.getSeconds()),
                r.start.imply("millisecond", u.getMilliseconds());
        else if (t[a]) {
            let e = t[a],
                n = t[s];
            "明" == e
                ? u.getHours() > 1 && d.setDate(d.getDate() + 1)
                : "昨" == e
                  ? d.setDate(d.getDate() - 1)
                  : "前" == e
                    ? d.setDate(d.getDate() - 2)
                    : "大前" == e
                      ? d.setDate(d.getDate() - 3)
                      : "后" == e
                        ? d.setDate(d.getDate() + 2)
                        : "大后" == e && d.setDate(d.getDate() + 3),
                "早" == n
                    ? r.start.imply("hour", 6)
                    : "晚" == n && (r.start.imply("hour", 22), r.start.imply("meridiem", 1));
        } else if (t[o]) {
            let e = t[o][0];
            "早" == e || "上" == e
                ? r.start.imply("hour", 6)
                : "下" == e
                  ? (r.start.imply("hour", 15), r.start.imply("meridiem", 1))
                  : "中" == e
                    ? (r.start.imply("hour", 12), r.start.imply("meridiem", 1))
                    : "夜" == e || "晚" == e
                      ? (r.start.imply("hour", 22), r.start.imply("meridiem", 1))
                      : "凌" == e && r.start.imply("hour", 0);
        } else if (t[l]) {
            let e = t[l];
            "明" == e
                ? u.getHours() > 1 && d.setDate(d.getDate() + 1)
                : "昨" == e
                  ? d.setDate(d.getDate() - 1)
                  : "前" == e
                    ? d.setDate(d.getDate() - 2)
                    : "大前" == e
                      ? d.setDate(d.getDate() - 3)
                      : "后" == e
                        ? d.setDate(d.getDate() + 2)
                        : "大后" == e && d.setDate(d.getDate() + 3);
            let n = t[c];
            if (n) {
                let e = n[0];
                "早" == e || "上" == e
                    ? r.start.imply("hour", 6)
                    : "下" == e
                      ? (r.start.imply("hour", 15), r.start.imply("meridiem", 1))
                      : "中" == e
                        ? (r.start.imply("hour", 12), r.start.imply("meridiem", 1))
                        : "夜" == e || "晚" == e
                          ? (r.start.imply("hour", 22), r.start.imply("meridiem", 1))
                          : "凌" == e && r.start.imply("hour", 0);
            }
        }
        return (
            r.start.assign("day", d.getDate()),
            r.start.assign("month", d.getMonth() + 1),
            r.start.assign("year", d.getFullYear()),
            r
        );
    }
}
