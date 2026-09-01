Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.EmptyDuration = void 0),
    (t.addDuration = function (e, t) {
        var r, n, a, i, s, o, u;
        let l = new Date(e);
        if (
            (t.y && ((t.year = t.y), delete t.y),
            t.mo && ((t.month = t.mo), delete t.mo),
            t.M && ((t.month = t.M), delete t.M),
            t.w && ((t.week = t.w), delete t.w),
            t.d && ((t.day = t.d), delete t.d),
            t.h && ((t.hour = t.h), delete t.h),
            t.m && ((t.minute = t.m), delete t.m),
            t.s && ((t.second = t.s), delete t.s),
            t.ms && ((t.millisecond = t.ms), delete t.ms),
            "year" in t)
        ) {
            let e = Math.floor(t.year);
            l.setFullYear(l.getFullYear() + e);
            let n = t.year - e;
            n > 0 && ((t.month = null != (r = null == t ? void 0 : t.month) ? r : 0), (t.month += 12 * n));
        }
        if ("quarter" in t) {
            let e = Math.floor(t.quarter);
            l.setMonth(l.getMonth() + 3 * e);
        }
        if ("month" in t) {
            let e = Math.floor(t.month);
            l.setMonth(l.getMonth() + e);
            let r = t.month - e;
            r > 0 && ((t.week = null != (n = null == t ? void 0 : t.week) ? n : 0), (t.week += 4 * r));
        }
        if ("week" in t) {
            let e = Math.floor(t.week);
            l.setDate(l.getDate() + 7 * e);
            let r = t.week - e;
            r > 0 && ((t.day = null != (a = null == t ? void 0 : t.day) ? a : 0), (t.day += Math.round(7 * r)));
        }
        if ("day" in t) {
            let e = Math.floor(t.day);
            l.setDate(l.getDate() + e);
            let r = t.day - e;
            r > 0 && ((t.hour = null != (i = null == t ? void 0 : t.hour) ? i : 0), (t.hour += Math.round(24 * r)));
        }
        if ("hour" in t) {
            let e = Math.floor(t.hour);
            l.setHours(l.getHours() + e);
            let r = t.hour - e;
            r > 0 &&
                ((t.minute = null != (s = null == t ? void 0 : t.minute) ? s : 0), (t.minute += Math.round(60 * r)));
        }
        if ("minute" in t) {
            let e = Math.floor(t.minute);
            l.setMinutes(l.getMinutes() + e);
            let r = t.minute - e;
            r > 0 &&
                ((t.second = null != (o = null == t ? void 0 : t.second) ? o : 0), (t.second += Math.round(60 * r)));
        }
        if ("second" in t) {
            let e = Math.floor(t.second);
            l.setSeconds(l.getSeconds() + e);
            let r = t.second - e;
            r > 0 &&
                ((t.millisecond = null != (u = null == t ? void 0 : t.millisecond) ? u : 0),
                (t.millisecond += Math.round(1e3 * r)));
        }
        if ("millisecond" in t) {
            let e = Math.floor(t.millisecond);
            l.setMilliseconds(l.getMilliseconds() + e);
        }
        return l;
    }),
    (t.reverseDuration = function (e) {
        let t = {};
        for (let r in e) t[r] = -e[r];
        return t;
    }),
    (t.EmptyDuration = { day: 0, second: 0, millisecond: 0 });
