n.d(t, {
    H: () => a,
    Z: () => s,
});
var r = n(913527),
    i = n.n(r),
    o = n(388032);
function a(e) {
    let t = i()();
    if (e <= t) return;
    let n = e.diff(t, "days");
    if (n > 1) return o.intl.formatToPlainString(o.t.dex68f, { days: n });
    let r = e.diff(t, "hours");
    if (r > 1) return o.intl.formatToPlainString(o.t.BWqf0d, { hours: r });
    let a = e.diff(t, "minutes");
    return o.intl.formatToPlainString(o.t["3SLXAw"], { minutes: a });
}
function s(e) {
    if (null != e) return a(e);
}
