"use strict";
n.d(t, { P: () => l });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(643501),
    o = n(335560);
function l(e) {
    let { body: t, dismissCallback: n, errorCodeMessage: l } = e,
        u = (0, s.bG)([a.default], () => a.default.getRemoteSessionId());
    return (i.useEffect(() => {
        null != u && n();
    }, [u, n]),
    null == l)
        ? t
        : (0, r.jsxs)(r.Fragment, { children: [t, (0, r.jsx)("div", { className: o.F, children: l })] });
}
