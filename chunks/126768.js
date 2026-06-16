s.d(e, { default: () => d });
var a = s(627968),
    n = s(64700),
    i = s(224640),
    l = s(707539),
    c = s(702513),
    o = s(375708),
    r = s(360553);
function d(t) {
    let { channel: e, onClose: s, transitionState: d } = t;
    return (
        n.useEffect(() => {
            (0, l.D3)();
        }, []),
        (0, a.jsx)(i.d, {
            transitionState: d,
            "aria-label": o.intl.string(o.t.B2panI),
            size: "lg",
            onClose: s,
            children: (0, a.jsx)(c.A, { className: r.T, channel: e, onClose: s, context: "modal" }),
        })
    );
}
