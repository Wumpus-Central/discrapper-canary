n.d(t, { default: () => d });
var a = n(951288),
    r = n(647438),
    c = n(793030),
    o = n(91159),
    s = n(593130),
    _ = n(388032),
    i = n(70934);
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
