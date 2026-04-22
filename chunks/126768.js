_.d(t, { default: () => b });
var a = _(627968),
    n = _(64700),
    c = _(224640),
    s = _(707539),
    r = _(617011),
    o = _(985018),
    i = _(360553);
function b(e) {
    let { channel: t, onClose: _, transitionState: b } = e;
    return (
        n.useEffect(() => {
            (0, s.D3)();
        }, []),
        (0, a.jsx)(c.d, {
            transitionState: b,
            "aria-label": o.intl.string(o.t.B2panI),
            size: "lg",
            onClose: _,
            children: (0, a.jsx)(r.A, { className: i.T, channel: t, onClose: _, context: "modal" }),
        })
    );
}
