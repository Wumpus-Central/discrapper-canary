n.d(t, {
    H: () => r,
    Z: () => s
});
var i = n(913527),
    l = n.n(i),
    a = n(388032);
function r(e) {
    let t = l()();
    if (e <= t) return;
    let n = e.diff(t, 'days');
    if (n > 1) return a.intl.formatToPlainString(a.t.dex68f, { days: n });
    let i = e.diff(t, 'hours');
    if (i > 1) return a.intl.formatToPlainString(a.t.BWqf0d, { hours: i });
    let r = e.diff(t, 'minutes');
    return a.intl.formatToPlainString(a.t['3SLXAw'], { minutes: r });
}
function s(e) {
    if (null != e) return r(e);
}
