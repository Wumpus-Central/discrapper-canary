"use strict";
n.d(t, { $: () => I, A: () => T });
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
    f = n(661492),
    p = n(627001),
    h = n(778712),
    m = n(985018),
    E = n(869350),
    g = n(476324);
function A(e) {
    return { width: e.size, height: e.size };
}
function I(e) {
    let { spec: t, cardStyle: n } = e;
    return (0, r.jsx)("div", {
        className: a()(E.Nr, n),
        style: A(t),
        children: (0, r.jsx)("div", {
            className: E.ho,
            children: (0, r.jsx)(u.euF, { src: g, size: h._3.SIZE_80, "aria-label": m.intl.string(m.t.lqaIxI) }),
        }),
    });
}
function T(e) {
    let {
            sku: t,
            user: n,
            spec: s,
            children: u,
            cardStyle: h,
            skuPreviewStyle: m,
            skuAssetClassName: g,
            disableHoverOrFocus: I,
            onHoverOrFocusChange: T,
            onClick: S,
            "aria-label": y,
        } = e,
        v = i.useRef(null),
        { isHoveringOrFocusing: N } = (0, d.A)(v),
        C = i.useRef(T),
        R = (0, l.bG)([c.A], () => c.A.getApplication(t.applicationId));
    return (
        i.useEffect(() => {
            C.current = T;
        }, [T]),
        i.useEffect(() => {
            C.current?.(N);
        }, [N]),
        (0, r.jsxs)(o.sqX, {
            ref: v,
            className: a()(E.Nr, h),
            onClick: S,
            "aria-label": y,
            style: A(s),
            children: [
                (0, r.jsx)(o.AC4, { children: (0, r.jsx)(o.H, { children: (0, f.TC)(t) }) }),
                (0, r.jsx)("div", {
                    className: a()(E.ev, m),
                    children: (0, r.jsx)(_.Ay, {
                        sku: t,
                        isFocused: !I && N,
                        user: n,
                        eventTargetRef: v,
                        assetClassName: g,
                    }),
                }),
                (0, r.jsx)(p.P, { spec: s, application: R }),
                u,
            ],
        })
    );
}
