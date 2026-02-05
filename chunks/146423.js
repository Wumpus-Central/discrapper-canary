"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(713517),
    u = n(607123),
    c = n(72939);
function d(e) {
    let {
            sku: t,
            user: n,
            children: a,
            cardStyle: d,
            skuPreviewStyle: _,
            disableHoverOrFocus: f,
            onHoverOrFocusChange: p,
            onClick: h,
            options: m,
        } = e,
        g = i.useRef(null),
        { isHoveringOrFocusing: E } = (0, l.A)(g),
        A = i.useRef(p);
    return (
        i.useEffect(() => {
            A.current = p;
        }, [p]),
        i.useEffect(() => {
            A.current?.(E);
        }, [E]),
        (0, r.jsxs)(o.DUT, {
            innerRef: g,
            className: s()(c.N, d),
            onClick: h,
            children: [
                (0, r.jsx)(o.AC4, { children: (0, r.jsx)(o.H, { children: t.name }) }),
                (0, r.jsx)("div", {
                    className: s()(c.e, _),
                    children: (0, r.jsx)(u.Ay, { sku: t, isFocused: !f && E, user: n, options: m }),
                }),
                a,
            ],
        })
    );
}
