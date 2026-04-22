r.d(t, { h: () => a });
var n = r(322811),
    s = r(881190);
function a(e, t) {
    let r = e.clone();
    if (((r.start = i(e.start, t.start)), null != e.end || null != t.end)) {
        let n = i(null == e.end ? e.start : e.end, null == t.end ? t.start : t.end);
        if (null == e.end && n.date().getTime() < r.start.date().getTime()) {
            let e = new Date(n.date().getTime());
            e.setDate(e.getDate() + 1), n.isCertain("day") ? (0, s.Pl)(n, e) : (0, s.Hq)(n, e);
        }
        r.end = n;
    }
    return r;
}
function i(e, t) {
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
        r.get("meridiem") == n.FF.PM &&
            12 > r.get("hour") &&
            (t.isCertain("hour") ? r.assign("hour", r.get("hour") + 12) : r.imply("hour", r.get("hour") + 12)),
        r.addTags(e.tags()),
        r.addTags(t.tags()),
        r
    );
}
