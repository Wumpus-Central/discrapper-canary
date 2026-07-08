t.d(n, { H: () => s }), t(632459);
var a = t(243399),
    r = t(206311),
    i = t(120330);
function u(e) {
    let n = (0, i.xC)(e);
    return (0, a.V1)(n.isInteger(), `${e} is not an integer`), n.toNumber();
}
function s(e) {
    if ("object" != typeof e) {
        if ("string" == typeof e) throw RangeError("Invalid duration format");
        throw TypeError("Invalid duration");
    }
    let n = {
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
        (void 0 !== e.days && (n.days = u(e.days)),
        void 0 !== e.hours && (n.hours = u(e.hours)),
        void 0 !== e.microseconds && (n.microseconds = u(e.microseconds)),
        void 0 !== e.milliseconds && (n.milliseconds = u(e.milliseconds)),
        void 0 !== e.minutes && (n.minutes = u(e.minutes)),
        void 0 !== e.months && (n.months = u(e.months)),
        void 0 !== e.nanoseconds && (n.nanoseconds = u(e.nanoseconds)),
        void 0 !== e.seconds && (n.seconds = u(e.seconds)),
        void 0 !== e.weeks && (n.weeks = u(e.weeks)),
        void 0 !== e.years && (n.years = u(e.years)),
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
            let n = (function (e) {
                for (let n of r.B) {
                    if (e[n] < 0) return -1;
                    if (e[n] > 0) return 1;
                }
                return 0;
            })(e);
            for (let t of r.B) {
                let r = e[t];
                if (((0, a.V1)(isFinite(Number(r)), `${t} is not finite`), (r < 0 && n > 0) || (r > 0 && n < 0)))
                    return !1;
            }
            return !0;
        })(n)
    )
        throw RangeError("Invalid duration format");
    return n;
}
