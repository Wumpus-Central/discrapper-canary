"use strict";
n.d(t, { H: () => o }), n(632459);
var r = n(243399),
    i = n(206311),
    a = n(469322);
function u(e) {
    let t = (0, a.xC)(e);
    return (0, r.V1)(t.isInteger(), `${e} is not an integer`), t.toNumber();
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
        (void 0 !== e.days && (t.days = u(e.days)),
        void 0 !== e.hours && (t.hours = u(e.hours)),
        void 0 !== e.microseconds && (t.microseconds = u(e.microseconds)),
        void 0 !== e.milliseconds && (t.milliseconds = u(e.milliseconds)),
        void 0 !== e.minutes && (t.minutes = u(e.minutes)),
        void 0 !== e.months && (t.months = u(e.months)),
        void 0 !== e.nanoseconds && (t.nanoseconds = u(e.nanoseconds)),
        void 0 !== e.seconds && (t.seconds = u(e.seconds)),
        void 0 !== e.weeks && (t.weeks = u(e.weeks)),
        void 0 !== e.years && (t.years = u(e.years)),
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
            for (let n of i.B) {
                let i = e[n];
                if (((0, r.V1)(isFinite(Number(i)), `${n} is not finite`), (i < 0 && t > 0) || (i > 0 && t < 0)))
                    return !1;
            }
            return !0;
        })(t)
    )
        throw RangeError("Invalid duration format");
    return t;
}
