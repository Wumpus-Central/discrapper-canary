t.d(s, { default: () => u });
var n = t(54381),
    a = t(473749),
    r = t(793030),
    o = t(91159),
    i = t(593130),
    c = t(388032),
    l = t(225079);
function u(e) {
    let { channel: s, onClose: t, transitionState: u } = e;
    return (
        a.useEffect(() => {
            (0, o.U4)();
        }, []),
        (0, n.jsx)(r.IX, {
            transitionState: u,
            "aria-label": c.intl.string(c.t.B2panI),
            size: "lg",
            onClose: t,
            children: (0, n.jsx)(i.Z, {
                className: l.browser,
                channel: s,
                onClose: t,
                context: "modal",
            }),
        })
    );
}
