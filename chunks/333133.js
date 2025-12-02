n.d(t, { I: () => s });
var r = n(54381),
    i = n(473749),
    a = n(89057),
    o = n(563132);
let s = (e) => {
    let { paymentModalStepProps: t, defaultStep: n } = e,
        s = (0, i.useRef)(!1),
        { blockedPayments: l } = (0, o.JL)(),
        { handleStepChange: c, handleClose: u } = t;
    return ((0, i.useEffect)(() => {
        l || s.current || (c(n), (s.current = !0));
    }, [l, c, n]),
    l)
        ? (0, r.jsx)(a.Vq, { onClose: u })
        : null;
};
