n.d(t, {
    H: () => a,
    Z: () => o
});
var r = n(913527),
    i = n.n(r),
    l = n(388032);
function a(e) {
    let t = i()();
    if (e <= t) return;
    let n = e.diff(t, 'days');
    if (n > 1) return l.NW.formatToPlainString(l.t.dex68f, { days: n });
    let r = e.diff(t, 'hours');
    if (r > 1) return l.NW.formatToPlainString(l.t.BWqf0d, { hours: r });
    let a = e.diff(t, 'minutes');
    return l.NW.formatToPlainString(l.t['3SLXAw'], { minutes: a });
}
function o(e) {
    if (null != e) return a(e);
}
