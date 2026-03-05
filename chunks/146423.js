"use strict";
n.d(t, { $: () => A, A: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(311907),
    u = n(397927),
    c = n(587895),
    d = n(713517),
    _ = n(607123),
    f = n(627001),
    p = n(778712),
    h = n(985018),
    m = n(880313),
    E = n(476324);
function g(e) {
    return { width: e.size, height: e.size };
}
function A(e) {
    let { spec: t, cardStyle: n } = e;
    return (0, r.jsx)("div", {
        className: a()(m.Nr, n),
        style: g(t),
        children: (0, r.jsx)("div", {
            className: m.ho,
            children: (0, r.jsx)(u.euF, { src: E, size: p._3.SIZE_80, "aria-label": h.intl.string(h.t.lqaIxI) }),
        }),
    });
}
function I(e) {
    let {
            sku: t,
            user: n,
            spec: s,
            children: u,
            cardStyle: p,
            skuPreviewStyle: h,
            disableHoverOrFocus: E,
            onHoverOrFocusChange: A,
            onClick: I,
            options: T,
        } = e,
        S = i.useRef(null),
        { isHoveringOrFocusing: y } = (0, d.A)(S),
        v = i.useRef(A),
        N = (0, l.bG)([c.A], () => c.A.getApplication(t.applicationId));
    return (
        i.useEffect(() => {
            v.current = A;
        }, [A]),
        i.useEffect(() => {
            v.current?.(y);
        }, [y]),
        (0, r.jsxs)(o.DUT, {
            innerRef: S,
            className: a()(m.Nr, p),
            onClick: I,
            style: g(s),
            children: [
                (0, r.jsx)(o.AC4, { children: (0, r.jsx)(o.H, { children: t.name }) }),
                (0, r.jsx)("div", {
                    className: a()(m.ev, h),
                    children: (0, r.jsx)(_.Ay, { sku: t, isFocused: !E && y, user: n, options: T }),
                }),
                (0, r.jsx)(f.P, { spec: s, application: N }),
                u,
            ],
        })
    );
}
