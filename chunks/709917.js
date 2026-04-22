n.d(t, { A: () => r });
var a = n(496431);
function r(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = e.clone();
    return (
        n && (r = r.subtract(12e5, "milliseconds")),
        (t = (0, a.A)(r.toDate(), 6e4)).minutes > 0 || t.seconds > 0
            ? 23 === t.hours
                ? { days: t.days + 1, hours: 0, minutes: 0, seconds: 0 }
                : { days: t.days, hours: t.hours + 1, minutes: 0, seconds: 0 }
            : t
    );
}
