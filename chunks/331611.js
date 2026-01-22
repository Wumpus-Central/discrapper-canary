n.d(t, { e: () => o });
var r = n(627968),
    i = n(64700),
    a = n(459793),
    s = n(156312);
let o = (e) => {
    let { paymentModalStepProps: t, defaultStep: n } = e,
        o = (0, i.useRef)(!1),
        { blockedPayments: l } = (0, s.P5)(),
        { handleStepChange: c, handleClose: u } = t;
    return ((0, i.useEffect)(() => {
        l || o.current || (c(n), (o.current = !0));
    }, [l, c, n]),
    l)
        ? (0, r.jsx)(a.oO, { onClose: u })
        : null;
};
