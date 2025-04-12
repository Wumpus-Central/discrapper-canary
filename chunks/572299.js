s.d(e, { n: () => o });
var i = s(101284),
    n = s(622916),
    r = s(263449);
function o(t, e) {
    let s = (0, r.s3)(),
        o = (0, r.aF)();
    if (!s) return;
    let { beforeBreadcrumb: a = null, maxBreadcrumbs: c = 100 } = s.getOptions();
    if (c <= 0) return;
    let h = {
            timestamp: (0, i.yW)(),
            ...t
        },
        u = a ? (0, n.Cf)(() => a(h, e)) : h;
    null !== u && (s.emit && s.emit('beforeAddBreadcrumb', u, e), o.addBreadcrumb(u, c));
}
