r.d(t, { A: () => l });
var n = r(530560),
    s = r(322811),
    a = r(658809);
function i(e, t) {
    let r = e.clone();
    if (((r.start = o(e.start, t.start)), null != e.end || null != t.end)) {
        let n = o(null == e.end ? e.start : e.end, null == t.end ? t.start : t.end);
        if (null == e.end && n.date().getTime() < r.start.date().getTime()) {
            let e = new Date(n.date().getTime());
            e.setDate(e.getDate() + 1), n.isCertain("day") ? (0, a.Pl)(n, e) : (0, a.Hq)(n, e);
        }
        r.end = n;
    }
    return r;
}
function o(e, t) {
    let r = e.clone();
    return (
        t.isCertain("hour")
            ? (r.assign("hour", t.get("hour")),
              r.assign("minute", t.get("minute")),
              t.isCertain("second")
                  ? (r.assign("second", t.get("second")),
                    t.isCertain("millisecond")
                        ? r.assign("millisecond", t.get("millisecond"))
                        : r.imply("millisecond", t.get("millisecond")))
                  : (r.imply("second", t.get("second")), r.imply("millisecond", t.get("millisecond"))))
            : (r.imply("hour", t.get("hour")),
              r.imply("minute", t.get("minute")),
              r.imply("second", t.get("second")),
              r.imply("millisecond", t.get("millisecond"))),
        t.isCertain("timezoneOffset") && r.assign("timezoneOffset", t.get("timezoneOffset")),
        t.isCertain("meridiem")
            ? r.assign("meridiem", t.get("meridiem"))
            : null != t.get("meridiem") && null == r.get("meridiem") && r.imply("meridiem", t.get("meridiem")),
        r.get("meridiem") == s.FF.PM &&
            12 > r.get("hour") &&
            (t.isCertain("hour") ? r.assign("hour", r.get("hour") + 12) : r.imply("hour", r.get("hour") + 12)),
        r.addTags(e.tags()),
        r.addTags(t.tags()),
        r
    );
}
class l extends n.X {
    shouldMergeResults(e, t, r) {
        return (
            ((t.start.isOnlyDate() && r.start.isOnlyTime()) || (r.start.isOnlyDate() && t.start.isOnlyTime())) &&
            null != e.match(this.patternBetween())
        );
    }
    mergeResults(e, t, r) {
        let n = t.start.isOnlyDate() ? i(t, r) : i(r, t);
        return (n.index = t.index), (n.text = t.text + e + r.text), n;
    }
}
