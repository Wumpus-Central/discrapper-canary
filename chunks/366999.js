"use strict";
n.d(t, { Ay: () => c, Vb: () => u, yE: () => l });
var r = n(496431),
    i = n(405269),
    a = n(728458),
    s = n(985018);
let o = 6e4;
var l = (function (e) {
    return (
        (e[(e.SHORT_TIME_LEFT = 0)] = "SHORT_TIME_LEFT"),
        (e[(e.LONG_TIME_LEFT = 1)] = "LONG_TIME_LEFT"),
        (e[(e.ENDS_IN = 2)] = "ENDS_IN"),
        (e[(e.SHORT_TIME = 3)] = "SHORT_TIME"),
        (e[(e.CREDITS_ENDS_IN = 4)] = "CREDITS_ENDS_IN"),
        e
    );
})({});
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
            n = { days: s.t["/wnvqA"], hours: s.t.Jsq0XN, minutes: s.t["SBd+Bs"] };
            break;
        case 1:
            n = { days: s.t.UD5nn5, hours: s.t.Hg8Fee, minutes: s.t.XSbQZZ };
            break;
        case 2:
            n = { days: s.t.rLqNad, hours: s.t.d1LvCA, minutes: s.t.Z2LX7K };
            break;
        case 4:
            n = { days: s.t.xQ3zuN, hours: s.t.SFU7QN, minutes: s.t.Y4FNdL };
            break;
        case 3:
            n = { days: s.t.fYmirx, hours: s.t["C3RO+g"], minutes: s.t.r77oHc };
            break;
        default:
            throw Error(`Unknown messageType (${t}) when rendering time left`);
    }
    let l = u((0, r.A)(e.toDate(), o)),
        c = "";
    try {
        c = (0, i.uN)(l, n);
    } catch {
        a.A.captureMessage("Error trying to format string for fractional nitro duration pill");
    }
    return c;
}
