r.d(t, { Gw: () => s, ks: () => n, x4: () => a });
let n = { day: 0, second: 0, millisecond: 0 };
function s(e, t) {
    let r = new Date(e);
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
        r.setFullYear(r.getFullYear() + e);
        let n = t.year - e;
        n > 0 && ((t.month = t?.month ?? 0), (t.month += 12 * n));
    }
    if ("quarter" in t) {
        let e = Math.floor(t.quarter);
        r.setMonth(r.getMonth() + 3 * e);
    }
    if ("month" in t) {
        let e = Math.floor(t.month);
        r.setMonth(r.getMonth() + e);
        let n = t.month - e;
        n > 0 && ((t.week = t?.week ?? 0), (t.week += 4 * n));
    }
    if ("week" in t) {
        let e = Math.floor(t.week);
        r.setDate(r.getDate() + 7 * e);
        let n = t.week - e;
        n > 0 && ((t.day = t?.day ?? 0), (t.day += Math.round(7 * n)));
    }
    if ("day" in t) {
        let e = Math.floor(t.day);
        r.setDate(r.getDate() + e);
        let n = t.day - e;
        n > 0 && ((t.hour = t?.hour ?? 0), (t.hour += Math.round(24 * n)));
    }
    if ("hour" in t) {
        let e = Math.floor(t.hour);
        r.setHours(r.getHours() + e);
        let n = t.hour - e;
        n > 0 && ((t.minute = t?.minute ?? 0), (t.minute += Math.round(60 * n)));
    }
    if ("minute" in t) {
        let e = Math.floor(t.minute);
        r.setMinutes(r.getMinutes() + e);
        let n = t.minute - e;
        n > 0 && ((t.second = t?.second ?? 0), (t.second += Math.round(60 * n)));
    }
    if ("second" in t) {
        let e = Math.floor(t.second);
        r.setSeconds(r.getSeconds() + e);
        let n = t.second - e;
        n > 0 && ((t.millisecond = t?.millisecond ?? 0), (t.millisecond += Math.round(1e3 * n)));
    }
    if ("millisecond" in t) {
        let e = Math.floor(t.millisecond);
        r.setMilliseconds(r.getMilliseconds() + e);
    }
    return r;
}
function a(e) {
    let t = {};
    for (let r in e) t[r] = -e[r];
    return t;
}
