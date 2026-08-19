"use strict";
n.d(t, { Ay: () => c, Vb: () => d, yE: () => o });
var i,
    r = n(496431),
    a = n(58703),
    s = n(38405),
    l = n(375708),
    o =
        (((i = {})[(i.SHORT_TIME_LEFT = 0)] = "SHORT_TIME_LEFT"),
        (i[(i.LONG_TIME_LEFT = 1)] = "LONG_TIME_LEFT"),
        (i[(i.ENDS_IN = 2)] = "ENDS_IN"),
        (i[(i.SHORT_TIME = 3)] = "SHORT_TIME"),
        (i[(i.CREDITS_ENDS_IN = 4)] = "CREDITS_ENDS_IN"),
        i);
function d(e) {
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
            n = { days: l.t["/wnvqA"], hours: l.t.Jsq0XN, minutes: l.t["SBd+Bs"] };
            break;
        case 1:
            n = { days: l.t.UD5nn5, hours: l.t.Hg8Fee, minutes: l.t.XSbQZZ };
            break;
        case 2:
            n = { days: l.t.rLqNad, hours: l.t.d1LvCA, minutes: l.t.Z2LX7K };
            break;
        case 4:
            n = { days: l.t.xQ3zuN, hours: l.t.SFU7QN, minutes: l.t.Y4FNdL };
            break;
        case 3:
            n = { days: l.t.fYmirx, hours: l.t["C3RO+g"], minutes: l.t.r77oHc };
            break;
        default:
            throw Error(`Unknown messageType (${t}) when rendering time left`);
    }
    let i = d((0, r.A)(e.toDate(), 6e4)),
        o = "";
    try {
        o = (0, a.uN)(i, n);
    } catch {
        s.A.captureMessage("Error trying to format string for fractional nitro duration pill");
    }
    return o;
}
