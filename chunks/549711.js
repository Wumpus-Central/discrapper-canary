"use strict";
n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var r = n(873263),
    s = n(562708),
    a = n(334465),
    o = n(139286);
function l(e) {
    let { impressionName: t, impressionProperties: n, disableTrack: l, ...u } = e,
        c = (0, r.zy)(),
        d = u.location?.pathname ?? c.pathname,
        _ = n;
    if ("function" == typeof _) {
        let e = Array.isArray(u.path) ? u.path : null != u.path ? [u.path] : [],
            t = null;
        for (let n of e) if (null != (t = (0, a.B)(d, { path: n, exact: u.exact, strict: u.strict }))) break;
        _ = _({ match: t });
    }
    return (
        (0, o.A)({ type: s.ImpressionTypes.PAGE, name: t, properties: _ }, { disableTrack: l }, [d]),
        (0, i.jsx)(r.qh, { ...u })
    );
}
