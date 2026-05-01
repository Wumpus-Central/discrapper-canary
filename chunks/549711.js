n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var a = n(873263),
    r = n(110259),
    s = n(334465),
    l = n(139286);
function o(e) {
    let { impressionName: t, impressionProperties: n, disableTrack: o, ...d } = e,
        c = (0, a.zy)(),
        _ = d.location?.pathname ?? c.pathname,
        E = n;
    if ("function" == typeof E) {
        let e = Array.isArray(d.path) ? d.path : null != d.path ? [d.path] : [],
            t = null;
        for (let n of e) if (null != (t = (0, s.B)(_, { path: n, exact: d.exact, strict: d.strict }))) break;
        E = E({ match: t });
    }
    return (
        (0, l.A)({ type: r.ImpressionTypes.PAGE, name: t, properties: E }, { disableTrack: o }, [_]),
        (0, i.jsx)(a.qh, { ...d })
    );
}
