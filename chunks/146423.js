"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(713517),
    u = n(607123),
    c = n(880313);
function d(e) {
    let {
            sku: t,
            user: n,
            children: a,
            cardStyle: d,
            skuPreviewStyle: _,
            disableHoverOrFocus: f,
            onHoverOrFocusChange: h,
            onClick: p,
            options: g,
        } = e,
        E = i.useRef(null),
        { isHoveringOrFocusing: A } = (0, l.A)(E),
        I = i.useRef(h);
    return (
        i.useEffect(() => {
            I.current = h;
        }, [h]),
        i.useEffect(() => {
            I.current?.(A);
        }, [A]),
        (0, r.jsxs)(o.DUT, {
            innerRef: E,
            className: s()(c.N, d),
            onClick: p,
            children: [
                (0, r.jsx)(o.AC4, { children: (0, r.jsx)(o.H, { children: t.name }) }),
                (0, r.jsx)("div", {
                    className: s()(c.e, _),
                    children: (0, r.jsx)(u.Ay, { sku: t, isFocused: !f && A, user: n, options: g }),
                }),
                a,
            ],
        })
    );
}
