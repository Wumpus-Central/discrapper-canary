t.d(e, { H: () => i }), t(854840);
var a = t(748578),
    r = t(996923);
function i(n) {
    if ("object" != typeof n) {
        if ("string" == typeof n) throw RangeError("Invalid duration format");
        throw TypeError("Invalid duration");
    }
    let e = {
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
        (void 0 !== n.days && (e.days = (0, r.D)(n.days)),
        void 0 !== n.hours && (e.hours = (0, r.D)(n.hours)),
        void 0 !== n.microseconds && (e.microseconds = (0, r.D)(n.microseconds)),
        void 0 !== n.milliseconds && (e.milliseconds = (0, r.D)(n.milliseconds)),
        void 0 !== n.minutes && (e.minutes = (0, r.D)(n.minutes)),
        void 0 !== n.months && (e.months = (0, r.D)(n.months)),
        void 0 !== n.nanoseconds && (e.nanoseconds = (0, r.D)(n.nanoseconds)),
        void 0 !== n.seconds && (e.seconds = (0, r.D)(n.seconds)),
        void 0 !== n.weeks && (e.weeks = (0, r.D)(n.weeks)),
        void 0 !== n.years && (e.years = (0, r.D)(n.years)),
        void 0 === n.years &&
            void 0 === n.months &&
            void 0 === n.weeks &&
            void 0 === n.days &&
            void 0 === n.hours &&
            void 0 === n.minutes &&
            void 0 === n.seconds &&
            void 0 === n.milliseconds &&
            void 0 === n.microseconds &&
            void 0 === n.nanoseconds)
    )
        throw TypeError("Invalid duration format");
    if (!(0, a.e)(e)) throw RangeError("Invalid duration format");
    return e;
}
