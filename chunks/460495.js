"use strict";
n.d(t, { P: () => f });
var i = n(627968),
    r = n(64700),
    s = n(835245),
    a = n(444927),
    o = n(38405),
    l = n(166532),
    u = n(615310),
    c = n(94420),
    d = n(679374);
function _() {
    return (
        !(function () {
            let e = (0, u.bB)(),
                { purchaseState: t, setPurchaseState: n } = (0, c.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, l.zT)(e, t, n);
        })(),
        null
    );
}
function f(e) {
    let { loadId: t, discoverySessionId: n, children: l } = e,
        u = (0, d._5)(),
        f = (0, a.A)(() => {
            let e = u?.id ?? t ?? (0, s.A)();
            return (
                o.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: n, startTime: Date.now() }
            );
        }),
        h = r.useRef(null != u),
        [p] = r.useState(() => (0, c.y$)({ contextMetadata: f, order: u }));
    return (
        r.useEffect(() => {
            h.current || null == u || (p.setState({ order: u }), (h.current = !0));
        }, [u, p]),
        (0, i.jsxs)(c.Ni, { value: p, children: [(0, i.jsx)(_, {}), l] })
    );
}
