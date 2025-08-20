n.d(t, {
    H: () => o,
    Z: () => a,
});
var r = n(913527),
    i = n.n(r),
    l = n(388032);
function o(e) {
    let t = i()();
    if (e <= t) return;
    let n = e.diff(t, "days");
    if (n > 1) return l.intl.formatToPlainString(l.t.dex68f, { days: n });
    let r = e.diff(t, "hours");
    if (r > 1) return l.intl.formatToPlainString(l.t.BWqf0d, { hours: r });
    let o = e.diff(t, "minutes");
    return l.intl.formatToPlainString(l.t["3SLXAw"], { minutes: o });
}
function a(e) {
    if (null != e) return o(e);
}
