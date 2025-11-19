n.d(e, { default: () => u });
var t = n(54381),
    r = n(473749),
    a = n(793030),
    i = n(91159),
    o = n(593130),
    c = n(388032),
    l = n(225079);
function u(s) {
    let { channel: e, onClose: n, transitionState: u } = s;
    return (
        r.useEffect(() => {
            (0, i.U4)();
        }, []),
        (0, t.jsx)(a.IX, {
            transitionState: u,
            "aria-label": c.intl.string(c.t.B2panI),
            size: "lg",
            onClose: n,
            children: (0, t.jsx)(o.Z, {
                className: l.browser,
                channel: e,
                onClose: n,
            }),
        })
    );
}
