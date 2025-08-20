n.d(t, {
    H: () => o,
    Z: () => s,
});
var r = n(913527),
    i = n.n(r),
    a = n(388032);
function o(e) {
    let t = i()();
    if (e <= t) return;
    let n = e.diff(t, "days");
    if (n > 1) return a.intl.formatToPlainString(a.t.dex68f, { days: n });
    let r = e.diff(t, "hours");
    if (r > 1) return a.intl.formatToPlainString(a.t.BWqf0d, { hours: r });
    let o = e.diff(t, "minutes");
    return a.intl.formatToPlainString(a.t["3SLXAw"], { minutes: o });
}
function s(e) {
    if (null != e) return o(e);
}
