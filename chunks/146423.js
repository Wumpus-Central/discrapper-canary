"use strict";
n.d(t, { $: () => m, A: () => E });
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
    p = n(476324);
function h(e) {
    return { width: e.size, height: e.size };
}
function m(e) {
    let { spec: t, cardStyle: n } = e;
    return (0, r.jsx)("div", {
        className: a()(f.Nr, n),
        style: h(t),
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
            spec: s,
            children: l,
            cardStyle: d,
            skuPreviewStyle: _,
            disableHoverOrFocus: p,
            onHoverOrFocusChange: m,
            onClick: E,
            options: g,
        } = e,
        A = i.useRef(null),
        { isHoveringOrFocusing: I } = (0, u.A)(A),
        T = i.useRef(m);
    return (
        i.useEffect(() => {
            T.current = m;
        }, [m]),
        i.useEffect(() => {
            T.current?.(I);
        }, [I]),
        (0, r.jsxs)(o.DUT, {
            innerRef: A,
            className: a()(f.Nr, d),
            onClick: E,
            style: h(s),
            children: [
                (0, r.jsx)(o.AC4, { children: (0, r.jsx)(o.H, { children: t.name }) }),
                (0, r.jsx)("div", {
                    className: a()(f.ev, _),
                    children: (0, r.jsx)(c.Ay, { sku: t, isFocused: !p && I, user: n, options: g }),
                }),
                l,
            ],
        })
    );
}
