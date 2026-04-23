"use strict";
n.d(t, { H: () => s }), n(632459);
var r = n(748578),
    i = n(996923);
function s(e) {
    if ("object" != typeof e) {
        if ("string" == typeof e) throw RangeError("Invalid duration format");
        throw TypeError("Invalid duration");
    }
    let t = {
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        microseconds: 0,
        nanoseconds: 0,
    };
    if (
        (void 0 !== e.days && (t.days = (0, i.D)(e.days)),
        void 0 !== e.hours && (t.hours = (0, i.D)(e.hours)),
        void 0 !== e.microseconds && (t.microseconds = (0, i.D)(e.microseconds)),
        void 0 !== e.milliseconds && (t.milliseconds = (0, i.D)(e.milliseconds)),
        void 0 !== e.minutes && (t.minutes = (0, i.D)(e.minutes)),
        void 0 !== e.months && (t.months = (0, i.D)(e.months)),
        void 0 !== e.nanoseconds && (t.nanoseconds = (0, i.D)(e.nanoseconds)),
        void 0 !== e.seconds && (t.seconds = (0, i.D)(e.seconds)),
        void 0 !== e.weeks && (t.weeks = (0, i.D)(e.weeks)),
        void 0 !== e.years && (t.years = (0, i.D)(e.years)),
        void 0 === e.years &&
            void 0 === e.months &&
            void 0 === e.weeks &&
            void 0 === e.days &&
            void 0 === e.hours &&
            void 0 === e.minutes &&
            void 0 === e.seconds &&
            void 0 === e.milliseconds &&
            void 0 === e.microseconds &&
            void 0 === e.nanoseconds)
    )
        throw TypeError("Invalid duration format");
    if (!(0, r.e)(t)) throw RangeError("Invalid duration format");
    return t;
}
