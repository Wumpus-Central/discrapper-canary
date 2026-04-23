"use strict";
n.d(t, { e: () => o });
var r = n(627968),
    i = n(64700),
    s = n(459793),
    a = n(156312);
let o = (e) => {
    let { paymentModalStepProps: t, defaultStep: n } = e,
        o = (0, i.useRef)(!1),
        { blockedPayments: l } = (0, a.P5)(),
        { handleStepChange: u } = t;
    return ((0, i.useEffect)(() => {
        l || o.current || (u(n), (o.current = !0));
    }, [l, u, n]),
    l)
        ? (0, r.jsx)(s.oO, {})
        : null;
};
