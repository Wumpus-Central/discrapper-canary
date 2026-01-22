s.d(t, {
    default: () => d,
});
var a = s(627968),
    n = s(64700),
    c = s(158954),
    i = s(707539),
    l = s(617011),
    o = s(985018),
    r = s(515470);

function d(e) {
    let { channel: t, onClose: s, transitionState: d } = e;
    return (
        n.useEffect(() => {
            (0, i.D3)();
        }, []),
        (0, a.jsx)(c.dWK, {
            transitionState: d,
            "aria-label": o.intl.string(o.t.B2panI),
            size: "lg",
            onClose: s,
            children: (0, a.jsx)(l.A, {
                className: r.T,
                channel: t,
                onClose: s,
                context: "modal",
            }),
        })
    );
}
