"use strict";
n.d(t, { P: () => l });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(643501),
    o = n(780885);
function l(e) {
    let { body: t, dismissCallback: n, errorCodeMessage: l } = e,
        u = (0, a.bG)([s.default], () => s.default.getRemoteSessionId());
    return (i.useEffect(() => {
        null != u && n();
    }, [u, n]),
    null == l)
        ? t
        : (0, r.jsxs)(r.Fragment, { children: [t, (0, r.jsx)("div", { className: o.F, children: l })] });
}
