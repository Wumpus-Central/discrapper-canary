n.d(t, { default: () => d });
var a = n(54381),
    r = n(473749),
    c = n(793030),
    o = n(91159),
    s = n(593130),
    _ = n(388032),
    i = n(225079);
function d(e) {
    let { channel: t, onClose: n, transitionState: d } = e;
    return (
        r.useEffect(() => {
            (0, o.U4)();
        }, []),
        (0, a.jsx)(c.IX, {
            transitionState: d,
            "aria-label": _.intl.string(_.t.B2panI),
            size: "lg",
            onClose: n,
            children: (0, a.jsx)(s.Z, {
                className: i.browser,
                channel: t,
                onClose: n,
            }),
        })
    );
}
