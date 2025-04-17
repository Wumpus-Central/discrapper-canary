n.d(t, {
    H: () => l,
    Z: () => o
});
var r = n(913527),
    i = n.n(r),
    a = n(388032);
function l(e) {
    let t = i()();
    if (e <= t) return;
    let n = e.diff(t, 'days');
    if (n > 1) return a.NW.formatToPlainString(a.t.dex68f, { days: n });
    let r = e.diff(t, 'hours');
    if (r > 1) return a.NW.formatToPlainString(a.t.BWqf0d, { hours: r });
    let l = e.diff(t, 'minutes');
    return a.NW.formatToPlainString(a.t['3SLXAw'], { minutes: l });
}
function o(e) {
    if (null != e) return l(e);
}
