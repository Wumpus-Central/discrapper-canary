n.d(t, {
    A: () => o,
});
var r = n(496431);
let i = 6e4,
    a = 12e5;

function s(e) {
    return e.minutes > 0 || e.seconds > 0
        ? 23 === e.hours
            ? {
                  days: e.days + 1,
                  hours: 0,
                  minutes: 0,
                  seconds: 0,
              }
            : {
                  days: e.days,
                  hours: e.hours + 1,
                  minutes: 0,
                  seconds: 0,
              }
        : e;
}

function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.clone();
    return t && (n = n.subtract(a, "milliseconds")), s((0, r.A)(n.toDate(), i));
}
