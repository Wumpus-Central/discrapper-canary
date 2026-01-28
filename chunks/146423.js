n.d(t, {
    A: () => d,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(158954),
    s = n(713517),
    c = n(607123),
    u = n(72939);

function d(e) {
    let {
            sku: t,
            user: n,
            children: i,
            cardStyle: d,
            skuPreviewStyle: f,
            disableHoverOrFocus: p,
            onHoverOrFocusChange: g,
            onClick: m,
        } = e,
        b = l.useRef(null),
        { isHoveringOrFocusing: y } = (0, s.A)(b),
        O = l.useRef(g);
    return (
        l.useEffect(() => {
            O.current = g;
        }, [g]),
        l.useEffect(() => {
            var e;
            null == (e = O.current) || e.call(O, y);
        }, [y]),
        (0, r.jsxs)(o.DUT, {
            innerRef: b,
            className: a()(u.N, d),
            onClick: m,
            children: [
                (0, r.jsx)(o.AC4, {
                    children: (0, r.jsx)(o.H, {
                        children: t.name,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: a()(u.e, f),
                    children: (0, r.jsx)(c.Ay, {
                        sku: t,
                        isFocused: !p && y,
                        user: n,
                    }),
                }),
                i,
            ],
        })
    );
}
