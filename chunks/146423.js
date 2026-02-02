n.d(t, {
    A: () => d,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(713517),
    c = n(607123),
    u = n(72939);

function d(e) {
    let {
            sku: t,
            user: n,
            children: i,
            cardStyle: d,
            skuPreviewStyle: p,
            disableHoverOrFocus: h,
            onHoverOrFocusChange: g,
            onClick: f,
            options: m,
        } = e,
        b = l.useRef(null),
        { isHoveringOrFocusing: A } = (0, o.A)(b),
        y = l.useRef(g);
    return (
        l.useEffect(() => {
            y.current = g;
        }, [g]),
        l.useEffect(() => {
            var e;
            null == (e = y.current) || e.call(y, A);
        }, [A]),
        (0, r.jsxs)(a.DUT, {
            innerRef: b,
            className: s()(u.N, d),
            onClick: f,
            children: [
                (0, r.jsx)(a.AC4, {
                    children: (0, r.jsx)(a.H, {
                        children: t.name,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: s()(u.e, p),
                    children: (0, r.jsx)(c.Ay, {
                        sku: t,
                        isFocused: !h && A,
                        user: n,
                        options: m,
                    }),
                }),
                i,
            ],
        })
    );
}
