n.d(t, {
    Ay: () => f,
    Vb: () => d,
    yE: () => u,
}),
    n(65821);
var r = n(496431),
    i = n(405269),
    a = n(728458),
    s = n(985018);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
let c = 6e4;
var u = (function (e) {
    return (
        (e[(e.SHORT_TIME_LEFT = 0)] = "SHORT_TIME_LEFT"),
        (e[(e.LONG_TIME_LEFT = 1)] = "LONG_TIME_LEFT"),
        (e[(e.ENDS_IN = 2)] = "ENDS_IN"),
        (e[(e.SHORT_TIME = 3)] = "SHORT_TIME"),
        (e[(e.CREDITS_ENDS_IN = 4)] = "CREDITS_ENDS_IN"),
        e
    );
})({});

function d(e) {
    let t = l({}, e);
    if (
        (t.seconds > 0 && ((t.minutes = t.minutes + 1), (t.seconds = 0)),
        60 === t.minutes && ((t.hours = t.hours + 1), (t.minutes = 0)),
        24 === t.hours && ((t.days = t.days + 1), (t.hours = 0)),
        t.days > 0)
    )
        return {
            days: t.hours > 0 ? t.days + 1 : t.days,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    if (t.hours > 0) {
        let e = t.minutes > 45 ? t.hours + 1 : t.hours;
        return e > 11
            ? {
                  days: 1,
                  hours: 0,
                  minutes: 0,
                  seconds: 0,
              }
            : {
                  days: 0,
                  hours: e,
                  minutes: 0,
                  seconds: 0,
              };
    }
    if (t.minutes > 0) {
        let e = +(t.minutes > 45),
            n = 1 === e ? 0 : t.minutes;
        return {
            days: 0,
            hours: e,
            minutes: n,
            seconds: 0,
        };
    }
    return t.seconds > 0
        ? {
              days: 0,
              hours: 0,
              minutes: 1,
              seconds: 0,
          }
        : t;
}

function f(e, t) {
    let n;
    switch (t) {
        case 0:
            n = {
                days: s.t["/wnvqA"],
                hours: s.t.Jsq0XN,
                minutes: s.t["SBd+Bs"],
            };
            break;
        case 1:
            n = {
                days: s.t.UD5nn5,
                hours: s.t.Hg8Fee,
                minutes: s.t.XSbQZZ,
            };
            break;
        case 2:
            n = {
                days: s.t.rLqNad,
                hours: s.t.d1LvCA,
                minutes: s.t.Z2LX7K,
            };
            break;
        case 4:
            n = {
                days: s.t.xQ3zuN,
                hours: s.t.SFU7QN,
                minutes: s.t.Y4FNdL,
            };
            break;
        case 3:
            n = {
                days: s.t.fYmirx,
                hours: s.t["C3RO+g"],
                minutes: s.t.r77oHc,
            };
            break;
        default:
            throw Error("Unknown messageType (".concat(t, ") when rendering time left"));
    }
    let o = d((0, r.A)(e.toDate(), c)),
        l = "";
    try {
        l = (0, i.uN)(o, n);
    } catch (e) {
        a.A.captureMessage("Error trying to format string for fractional nitro duration pill");
    }
    return l;
}
