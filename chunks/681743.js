Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.now = function (e) {
        let t = e.getDateWithAdjustedTimezone(),
            r = new n.ParsingComponents(e, {});
        return (
            (0, a.assignSimilarDate)(r, t),
            (0, a.assignSimilarTime)(r, t),
            r.assign("timezoneOffset", e.getTimezoneOffset()),
            r.addTag("casualReference/now"),
            r
        );
    }),
    (t.today = function (e) {
        let t = e.getDateWithAdjustedTimezone(),
            r = new n.ParsingComponents(e, {});
        return (
            (0, a.assignSimilarDate)(r, t),
            (0, a.implySimilarTime)(r, t),
            r.delete("meridiem"),
            r.addTag("casualReference/today"),
            r
        );
    }),
    (t.yesterday = function (e) {
        return s(e, 1).addTag("casualReference/yesterday");
    }),
    (t.tomorrow = function (e) {
        return o(e, 1).addTag("casualReference/tomorrow");
    }),
    (t.theDayBefore = s),
    (t.theDayAfter = o),
    (t.tonight = function (e, t = 22) {
        let r = e.getDateWithAdjustedTimezone(),
            s = new n.ParsingComponents(e, {});
        return (
            (0, a.assignSimilarDate)(s, r),
            s.imply("hour", t),
            s.imply("meridiem", i.Meridiem.PM),
            s.addTag("casualReference/tonight"),
            s
        );
    }),
    (t.lastNight = function (e, t = 0) {
        let r = e.getDateWithAdjustedTimezone(),
            i = new n.ParsingComponents(e, {});
        return (
            6 > r.getHours() && (r = new Date(r.getTime() - 864e5)),
            (0, a.assignSimilarDate)(i, r),
            i.imply("hour", t),
            i
        );
    }),
    (t.evening = function (e, t = 20) {
        let r = new n.ParsingComponents(e, {});
        return r.imply("meridiem", i.Meridiem.PM), r.imply("hour", t), r.addTag("casualReference/evening"), r;
    }),
    (t.yesterdayEvening = function (e, t = 20) {
        let r = e.getDateWithAdjustedTimezone(),
            s = new n.ParsingComponents(e, {});
        return (
            (r = new Date(r.getTime() - 864e5)),
            (0, a.assignSimilarDate)(s, r),
            s.imply("hour", t),
            s.imply("meridiem", i.Meridiem.PM),
            s.addTag("casualReference/yesterday"),
            s.addTag("casualReference/evening"),
            s
        );
    }),
    (t.midnight = function (e) {
        let t = new n.ParsingComponents(e, {});
        return (
            e.getDateWithAdjustedTimezone().getHours() > 2 && t.addDurationAsImplied({ day: 1 }),
            t.assign("hour", 0),
            t.imply("minute", 0),
            t.imply("second", 0),
            t.imply("millisecond", 0),
            t.addTag("casualReference/midnight"),
            t
        );
    }),
    (t.morning = function (e, t = 6) {
        let r = new n.ParsingComponents(e, {});
        return (
            r.imply("meridiem", i.Meridiem.AM),
            r.imply("hour", t),
            r.imply("minute", 0),
            r.imply("second", 0),
            r.imply("millisecond", 0),
            r.addTag("casualReference/morning"),
            r
        );
    }),
    (t.afternoon = function (e, t = 15) {
        let r = new n.ParsingComponents(e, {});
        return (
            r.imply("meridiem", i.Meridiem.PM),
            r.imply("hour", t),
            r.imply("minute", 0),
            r.imply("second", 0),
            r.imply("millisecond", 0),
            r.addTag("casualReference/afternoon"),
            r
        );
    }),
    (t.noon = function (e) {
        let t = new n.ParsingComponents(e, {});
        return (
            t.imply("meridiem", i.Meridiem.AM),
            t.assign("hour", 12),
            t.imply("minute", 0),
            t.imply("second", 0),
            t.imply("millisecond", 0),
            t.addTag("casualReference/noon"),
            t
        );
    });
let n = r(115835),
    a = r(767130),
    i = r(115004);
function s(e, t) {
    return o(e, -t);
}
function o(e, t) {
    let r = e.getDateWithAdjustedTimezone(),
        i = new n.ParsingComponents(e, {}),
        s = new Date(r.getTime());
    return (
        s.setDate(s.getDate() + t),
        (0, a.assignSimilarDate)(i, s),
        (0, a.implySimilarTime)(i, s),
        i.delete("meridiem"),
        i
    );
}
