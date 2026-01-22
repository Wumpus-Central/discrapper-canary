n.d(t, {
    A: () => o,
    J: () => s,
});
var r = n(989349),
    i = n.n(r),
    a = n(985018);
function s(e) {
    let t = i()();
    if (e <= t) return;
    let n = e.diff(t, "days");
    if (n > 1) return a.intl.formatToPlainString(a.t.dex68a, { days: n });
    let r = e.diff(t, "hours");
    if (r > 1) return a.intl.formatToPlainString(a.t.BWqf0c, { hours: r });
    let s = e.diff(t, "minutes");
    return a.intl.formatToPlainString(a.t["3SLXAz"], { minutes: s });
}
function o(e) {
    if (null != e) return s(e);
}
