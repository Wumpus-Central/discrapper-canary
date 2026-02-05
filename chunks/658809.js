"use strict";
n.d(t, { A4: () => o, Hq: () => s, Pl: () => i, i2: () => a });
var r = n(322811);
function i(e, t) {
    e.assign("day", t.getDate()), e.assign("month", t.getMonth() + 1), e.assign("year", t.getFullYear());
}
function a(e, t) {
    e.assign("hour", t.getHours()),
        e.assign("minute", t.getMinutes()),
        e.assign("second", t.getSeconds()),
        e.assign("millisecond", t.getMilliseconds()),
        e.assign("meridiem", 12 > t.getHours() ? r.FF.AM : r.FF.PM);
}
function s(e, t) {
    e.imply("day", t.getDate()), e.imply("month", t.getMonth() + 1), e.imply("year", t.getFullYear());
}
function o(e, t) {
    e.imply("hour", t.getHours()),
        e.imply("minute", t.getMinutes()),
        e.imply("second", t.getSeconds()),
        e.imply("millisecond", t.getMilliseconds()),
        e.imply("meridiem", 12 > t.getHours() ? r.FF.AM : r.FF.PM);
}
