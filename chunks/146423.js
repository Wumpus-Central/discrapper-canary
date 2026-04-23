n.d(t, { $: () => C, A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(890856),
    o = n(140735),
    d = n(707554),
    c = n(311907),
    u = n(97808),
    h = n(587895),
    A = n(713517),
    _ = n(607123),
    m = n(661492),
    g = n(627001),
    p = n(778712),
    f = n(985018),
    E = n(213494),
    x = n(476324);
function I(e) {
    return { width: e.size, height: e.size };
}
function C(e) {
    let { spec: t, cardStyle: n } = e;
    return (0, i.jsx)("div", {
        className: a()(E.Nr, n),
        style: I(t),
        children: (0, i.jsx)("div", {
            className: E.ho,
            children: (0, i.jsx)(u.eu, { src: x, size: p._3.SIZE_80, "aria-label": f.intl.string(f.t.lqaIxI) }),
        }),
    });
}
function b(e) {
    let {
            sku: t,
            user: n,
            spec: s,
            children: u,
            cardStyle: p,
            skuPreviewStyle: f,
            skuAssetClassName: x,
            disableHoverOrFocus: C,
            disableRiveHover: b,
            onHoverOrFocusChange: N,
            onClick: S,
            "aria-label": v,
        } = e,
        T = l.useRef(null),
        { isHoveringOrFocusing: y } = (0, A.A)(T),
        j = l.useRef(N),
        R = (0, c.bG)([h.A], () => h.A.getApplication(t.applicationId));
    return (
        l.useEffect(() => {
            j.current = N;
        }, [N]),
        l.useEffect(() => {
            j.current?.(y);
        }, [y]),
        (0, i.jsxs)(r.s, {
            ref: T,
            className: a()(E.Nr, p),
            onClick: S,
            "aria-label": v,
            style: I(s),
            children: [
                (0, i.jsx)(o.A, { children: (0, i.jsx)(d.H, { children: (0, m.TC)(t) }) }),
                (0, i.jsx)("div", {
                    className: a()(E.ev, f),
                    children: (0, i.jsx)(_.Ay, {
                        sku: t,
                        isFocused: !C && y,
                        user: n,
                        eventTargetRef: b ? void 0 : T,
                        assetClassName: x,
                        disableHover: b,
                    }),
                }),
                (0, i.jsx)(g.P, { spec: s, application: R }),
                u,
            ],
        })
    );
}
