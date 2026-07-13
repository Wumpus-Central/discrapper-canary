"use strict";
r.d(t, { H: () => s }), r(632459);
var n = r(243399),
    i = r(206311),
    o = r(120330);
function a(e) {
    let t = (0, o.xC)(e);
    return (0, n.V1)(t.isInteger(), `${e} is not an integer`), t.toNumber();
}
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
        (void 0 !== e.days && (t.days = a(e.days)),
        void 0 !== e.hours && (t.hours = a(e.hours)),
        void 0 !== e.microseconds && (t.microseconds = a(e.microseconds)),
        void 0 !== e.milliseconds && (t.milliseconds = a(e.milliseconds)),
        void 0 !== e.minutes && (t.minutes = a(e.minutes)),
        void 0 !== e.months && (t.months = a(e.months)),
        void 0 !== e.nanoseconds && (t.nanoseconds = a(e.nanoseconds)),
        void 0 !== e.seconds && (t.seconds = a(e.seconds)),
        void 0 !== e.weeks && (t.weeks = a(e.weeks)),
        void 0 !== e.years && (t.years = a(e.years)),
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
                for (let t of i.B) {
                    if (e[t] < 0) return -1;
                    if (e[t] > 0) return 1;
                }
                return 0;
            })(e);
            for (let r of i.B) {
                let i = e[r];
                if (((0, n.V1)(isFinite(Number(i)), `${r} is not finite`), (i < 0 && t > 0) || (i > 0 && t < 0)))
                    return !1;
            }
            return !0;
        })(t)
    )
        throw RangeError("Invalid duration format");
    return t;
}
