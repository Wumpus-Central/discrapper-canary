n.d(t, { A: () => s, J: () => r });
var i = n(989349),
    l = n.n(i),
    a = n(985018);
function r(e) {
    let t = l()();
    if (e <= t) return;
    let n = e.diff(t, "days");
    if (n > 1) return a.intl.formatToPlainString(a.t.dex68a, { days: n });
    let i = e.diff(t, "hours");
    if (i > 1) return a.intl.formatToPlainString(a.t.BWqf0c, { hours: i });
    let r = e.diff(t, "minutes");
    return a.intl.formatToPlainString(a.t["3SLXAz"], { minutes: r });
}
function s(e) {
    if (null != e) return r(e);
}
