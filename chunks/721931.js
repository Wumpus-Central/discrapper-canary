n.d(t, {
    E: () => u,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(636920),
    o = n(889599),
    c = n(248789);

function u(e) {
    let { hangStatusActivity: t, channel: n, userId: i, setPopoutRef: u } = e,
        d = l.useRef(null);
    return (
        l.useEffect(() => {
            null == u || u(null == d ? void 0 : d.current);
        }, [d, u]),
        (0, r.jsx)("div", {
            ref: d,
            className: s()(c.popover, o.kL),
            children: (0, r.jsx)(a.Z, {
                hangStatusActivity: t,
                channel: n,
                userId: i,
                analyticsSource: "HangStatusPopout",
                iconClassName: o.Kk,
                textClassName: o.qS,
            }),
        })
    );
}
