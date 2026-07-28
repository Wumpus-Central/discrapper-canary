n.d(t, { e: () => s });
var l = n(477900),
    i = n(582128),
    r = n(86379),
    a = n(545075);
function s(e) {
    let { paymentModalStepProps: t, defaultStep: n } = e,
        s = (0, i.useRef)(!1),
        o = (0, r.Hp)(),
        { handleStepChange: u } = t;
    return ((0, i.useEffect)(() => {
        o || s.current || (u(n), (s.current = !0));
    }, [o, u, n]),
    o)
        ? (0, l.jsx)(a.oO, {})
        : null;
}
