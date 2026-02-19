"use strict";
n.d(t, { $8: () => m, Ay: () => E, yU: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(397927),
    u = n(713517),
    c = n(607123),
    d = n(778712),
    _ = n(985018),
    f = n(72939),
    p = n(476324),
    h = (function (e) {
        return (e[(e.SMALL = 0)] = "SMALL"), (e[(e.LARGE = 1)] = "LARGE"), e;
    })({});
function m(e) {
    let { size: t, cardStyle: n } = e;
    return (0, r.jsx)("div", {
        className: a()(f.Nr, n, { [f.PG]: 0 === t, [f.Pu]: 1 === t }),
        children: (0, r.jsx)("div", {
            className: f.ho,
            children: (0, r.jsx)(l.euF, { src: p, size: d._3.SIZE_80, "aria-label": _.intl.string(_.t.lqaIxI) }),
        }),
    });
}
function E(e) {
    let {
            sku: t,
            user: n,
            size: s,
            children: l,
            cardStyle: d,
            skuPreviewStyle: _,
            disableHoverOrFocus: p,
            onHoverOrFocusChange: h,
            onClick: m,
            options: E,
        } = e,
        g = i.useRef(null),
        { isHoveringOrFocusing: A } = (0, u.A)(g),
        I = i.useRef(h);
    return (
        i.useEffect(() => {
            I.current = h;
        }, [h]),
        i.useEffect(() => {
            I.current?.(A);
        }, [A]),
        (0, r.jsxs)(o.DUT, {
            innerRef: g,
            className: a()(f.Nr, d, { [f.PG]: 0 === s, [f.Pu]: 1 === s }),
            onClick: m,
            children: [
                (0, r.jsx)(o.AC4, { children: (0, r.jsx)(o.H, { children: t.name }) }),
                (0, r.jsx)("div", {
                    className: a()(f.ev, _),
                    children: (0, r.jsx)(c.Ay, { sku: t, isFocused: !p && A, user: n, options: E }),
                }),
                l,
            ],
        })
    );
}
