Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.assignSimilarDate = function (e, t) {
        e.assign("day", t.getDate()), e.assign("month", t.getMonth() + 1), e.assign("year", t.getFullYear());
    }),
    (t.assignSimilarTime = function (e, t) {
        e.assign("hour", t.getHours()),
            e.assign("minute", t.getMinutes()),
            e.assign("second", t.getSeconds()),
            e.assign("millisecond", t.getMilliseconds()),
            e.assign("meridiem", 12 > t.getHours() ? n.Meridiem.AM : n.Meridiem.PM);
    }),
    (t.implySimilarDate = function (e, t) {
        e.imply("day", t.getDate()), e.imply("month", t.getMonth() + 1), e.imply("year", t.getFullYear());
    }),
    (t.implySimilarTime = function (e, t) {
        e.imply("hour", t.getHours()),
            e.imply("minute", t.getMinutes()),
            e.imply("second", t.getSeconds()),
            e.imply("millisecond", t.getMilliseconds()),
            e.imply("meridiem", 12 > t.getHours() ? n.Meridiem.AM : n.Meridiem.PM);
    });
let n = r(115004);
