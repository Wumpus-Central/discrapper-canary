r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(626135);
function s(e) {
    var n;
    let r = a.forwardRef((n, r) =>
        (0, i.jsx)(o.AnalyticsContext.Consumer, {
            children: (a) =>
                (0, i.jsx)(e, {
                    ...n,
                    ref: r,
                    analyticsContext: a
                })
        })
    );
    return (r.displayName = 'withAnalyticsContext('.concat(null !== (n = e.displayName) && void 0 !== n ? n : e.name, ')')), r;
}
