n.d(t, { Z: () => s });
var i = n(200651),
    r = n(192379),
    a = n(626135);
function s(e) {
    var t;
    let n = r.forwardRef((t, n) =>
        (0, i.jsx)(a.AnalyticsContext.Consumer, {
            children: (r) =>
                (0, i.jsx)(e, {
                    ...t,
                    ref: n,
                    analyticsContext: r
                })
        })
    );
    return (n.displayName = 'withAnalyticsContext('.concat(null !== (t = e.displayName) && void 0 !== t ? t : e.name, ')')), n;
}
