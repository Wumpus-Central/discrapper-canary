n.d(t, { e: () => a });
var l = n(627968),
    r = n(64700),
    i = n(459793),
    s = n(156312);
let a = (e) => {
    let { paymentModalStepProps: t, defaultStep: n } = e,
        a = (0, r.useRef)(!1),
        { blockedPayments: o } = (0, s.P5)(),
        { handleStepChange: u } = t;
    return ((0, r.useEffect)(() => {
        o || a.current || (u(n), (a.current = !0));
    }, [o, u, n]),
    o)
        ? (0, l.jsx)(i.oO, {})
        : null;
};
