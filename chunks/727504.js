"use strict";
r.d(t, { H: () => o }), r(632459);
var n = r(243399),
    a = r(206311),
    s = r(469322);
function i(e) {
    let t = (0, s.xC)(e);
    return (0, n.V1)(t.isInteger(), `${e} is not an integer`), t.toNumber();
}
function o(e) {
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
        (void 0 !== e.days && (t.days = i(e.days)),
        void 0 !== e.hours && (t.hours = i(e.hours)),
        void 0 !== e.microseconds && (t.microseconds = i(e.microseconds)),
        void 0 !== e.milliseconds && (t.milliseconds = i(e.milliseconds)),
        void 0 !== e.minutes && (t.minutes = i(e.minutes)),
        void 0 !== e.months && (t.months = i(e.months)),
        void 0 !== e.nanoseconds && (t.nanoseconds = i(e.nanoseconds)),
        void 0 !== e.seconds && (t.seconds = i(e.seconds)),
        void 0 !== e.weeks && (t.weeks = i(e.weeks)),
        void 0 !== e.years && (t.years = i(e.years)),
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
    if (
        !(function (e) {
            let t = (function (e) {
                for (let t of a.B) {
                    if (e[t] < 0) return -1;
                    if (e[t] > 0) return 1;
                }
                return 0;
            })(e);
            for (let r of a.B) {
                let a = e[r];
                if (((0, n.V1)(isFinite(Number(a)), `${r} is not finite`), (a < 0 && t > 0) || (a > 0 && t < 0)))
                    return !1;
            }
            return !0;
        })(t)
    )
        throw RangeError("Invalid duration format");
    return t;
}
