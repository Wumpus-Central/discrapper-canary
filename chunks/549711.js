n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var r = n(873263),
    a = n(110259),
    s = n(334465),
    _ = n(139286);
function l(e) {
    let { impressionName: t, impressionProperties: n, disableTrack: l, ...o } = e,
        E = (0, r.zy)(),
        d = o.location?.pathname ?? E.pathname,
        c = n;
    if ("function" == typeof c) {
        let e = Array.isArray(o.path) ? o.path : null != o.path ? [o.path] : [],
            t = null;
        for (let n of e) if (null != (t = (0, s.B)(d, { path: n, exact: o.exact, strict: o.strict }))) break;
        c = c({ match: t });
    }
    return (
        (0, _.A)({ type: a.ImpressionTypes.PAGE, name: t, properties: c }, { disableTrack: l }, [d]),
        (0, i.jsx)(r.qh, { ...o })
    );
}
