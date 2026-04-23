"use strict";
n.d(t, { Ay: () => c, Vb: () => u, yE: () => l });
var r,
    i = n(496431),
    s = n(405269),
    a = n(728458),
    o = n(985018),
    l =
        (((r = {})[(r.SHORT_TIME_LEFT = 0)] = "SHORT_TIME_LEFT"),
        (r[(r.LONG_TIME_LEFT = 1)] = "LONG_TIME_LEFT"),
        (r[(r.ENDS_IN = 2)] = "ENDS_IN"),
        (r[(r.SHORT_TIME = 3)] = "SHORT_TIME"),
        (r[(r.CREDITS_ENDS_IN = 4)] = "CREDITS_ENDS_IN"),
        r);
function u(e) {
    let t = { ...e };
    if (
        (t.seconds > 0 && ((t.minutes = t.minutes + 1), (t.seconds = 0)),
        60 === t.minutes && ((t.hours = t.hours + 1), (t.minutes = 0)),
        24 === t.hours && ((t.days = t.days + 1), (t.hours = 0)),
        t.days > 0)
    )
        return { days: t.hours > 0 ? t.days + 1 : t.days, hours: 0, minutes: 0, seconds: 0 };
    if (t.hours > 0) {
        let e = t.minutes > 45 ? t.hours + 1 : t.hours;
        return e > 11 ? { days: 1, hours: 0, minutes: 0, seconds: 0 } : { days: 0, hours: e, minutes: 0, seconds: 0 };
    }
    if (t.minutes > 0) {
        let e = +(t.minutes > 45),
            n = 1 === e ? 0 : t.minutes;
        return { days: 0, hours: e, minutes: n, seconds: 0 };
    }
    return t.seconds > 0 ? { days: 0, hours: 0, minutes: 1, seconds: 0 } : t;
}
function c(e, t) {
    let n;
    switch (t) {
        case 0:
            n = { days: o.t["/wnvqA"], hours: o.t.Jsq0XN, minutes: o.t["SBd+Bs"] };
            break;
        case 1:
            n = { days: o.t.UD5nn5, hours: o.t.Hg8Fee, minutes: o.t.XSbQZZ };
            break;
        case 2:
            n = { days: o.t.rLqNad, hours: o.t.d1LvCA, minutes: o.t.Z2LX7K };
            break;
        case 4:
            n = { days: o.t.xQ3zuN, hours: o.t.SFU7QN, minutes: o.t.Y4FNdL };
            break;
        case 3:
            n = { days: o.t.fYmirx, hours: o.t["C3RO+g"], minutes: o.t.r77oHc };
            break;
        default:
            throw Error(`Unknown messageType (${t}) when rendering time left`);
    }
    let r = u((0, i.A)(e.toDate(), 6e4)),
        l = "";
    try {
        l = (0, s.uN)(r, n);
    } catch {
        a.A.captureMessage("Error trying to format string for fractional nitro duration pill");
    }
    return l;
}
