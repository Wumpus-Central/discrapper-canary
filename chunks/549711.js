"use strict";
n.d(t, { A: () => o });
var i = n(477900);
n(582128);
var r = n(806163),
    a = n(562708),
    s = n(334465),
    l = n(139286);
function o(e) {
    let { impressionName: t, impressionProperties: n, disableTrack: o, ...d } = e,
        c = (0, r.zy)(),
        u = d.location?.pathname ?? c.pathname,
        _ = n;
    if ("function" == typeof _) {
        let e = Array.isArray(d.path) ? d.path : null != d.path ? [d.path] : [],
            t = null;
        for (let n of e) if (null != (t = (0, s.B)(u, { path: n, exact: d.exact, strict: d.strict }))) break;
        _ = _({ match: t });
    }
    return (
        (0, l.A)({ type: a.ImpressionTypes.PAGE, name: t, properties: _ }, { disableTrack: o }, [u]),
        (0, i.jsx)(r.qh, { ...d })
    );
}
