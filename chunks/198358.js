n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(324060),
    c = n(883166),
    u = n(25239);
function d(e) {
    let { children: t, noPadding: n = !1, centered: a = !0, verticalFlow: d = !1, className: f } = e,
        p = i.useContext(l.Q),
        _ = (0, s.dQu)(p.primaryColor).hex(),
        m = (0, c.Sg)();
    return (0, r.jsx)(c.Qr.Provider, {
        value: m,
        children: (0, r.jsx)("div", {
            className: o()(
                u.container,
                {
                    [u.containerPadding]: !n,
                    [u.containerCentered]: a,
                    [u.containerVertical]: d,
                },
                f,
            ),
            style: { color: _ },
            children: t,
        }),
    });
}
