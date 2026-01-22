c.d(e, { default: () => o });
var f = c(627968),
    b = c(64700),
    d = c(158954),
    _ = c(707539),
    t = c(617011),
    s = c(985018),
    n = c(515470);
function o(a) {
    let { channel: e, onClose: c, transitionState: o } = a;
    return (
        b.useEffect(() => {
            (0, _.D3)();
        }, []),
        (0, f.jsx)(d.dWK, {
            transitionState: o,
            "aria-label": s.intl.string(s.t.B2panI),
            size: "lg",
            onClose: c,
            children: (0, f.jsx)(t.A, {
                className: n.T,
                channel: e,
                onClose: c,
                context: "modal",
            }),
        })
    );
}
