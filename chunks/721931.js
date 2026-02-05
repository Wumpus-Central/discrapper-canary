n.d(t, { E: () => c });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(636920),
    o = n(889599),
    d = n(248789);
function c(e) {
    let { hangStatusActivity: t, channel: n, userId: s, setPopoutRef: c } = e,
        u = l.useRef(null);
    return (
        l.useEffect(() => {
            c?.(u?.current);
        }, [u, c]),
        (0, i.jsx)("div", {
            ref: u,
            className: a()(d.popover, o.kL),
            children: (0, i.jsx)(r.Z, {
                hangStatusActivity: t,
                channel: n,
                userId: s,
                analyticsSource: "HangStatusPopout",
                iconClassName: o.Kk,
                textClassName: o.qS,
            }),
        })
    );
}
