n.d(i, { A: () => a, J: () => u });
var r = n(989349),
    f = n.n(r),
    e = n(375708);
function u(t) {
    let i = f()();
    if (t <= i) return;
    let n = t.diff(i, "days");
    if (n > 1) return e.intl.formatToPlainString(e.t.dex68a, { days: n });
    let r = t.diff(i, "hours");
    if (r > 1) return e.intl.formatToPlainString(e.t.BWqf0c, { hours: r });
    let u = t.diff(i, "minutes");
    return e.intl.formatToPlainString(e.t["3SLXAz"], { minutes: u });
}
function a(t) {
    if (null != t) return u(t);
}
