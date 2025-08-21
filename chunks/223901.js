n.d(t, { default: () => d });
var a = n(951288),
    r = n(647438),
    c = n(257465),
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
        (0, a.jsx)(c.I, {
            transitionState: d,
            "aria-label": _.intl.string(_.t.B2panJ),
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
