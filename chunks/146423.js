t.d(e, { $: () => N, A: () => A });
var n = t(477900),
    s = t(582128),
    l = t(503698),
    r = t.n(l),
    a = t(17928),
    c = t(97808),
    o = t(890856),
    u = t(140735),
    d = t(707554),
    h = t(587895),
    p = t(713517),
    x = t(607123),
    f = t(661492),
    g = t(627001),
    v = t(778712),
    j = t(375708),
    m = t(491685),
    b = t(476324);
function I(i) {
    return { width: i.size, height: i.size };
}
function N(i) {
    let { spec: e, cardStyle: t } = i;
    return (0, n.jsx)("div", {
        className: r()(m.Nr, t),
        style: I(e),
        children: (0, n.jsx)("div", {
            className: m.ho,
            children: (0, n.jsx)(c.eu, { src: b, size: v._3.SIZE_80, "aria-label": j.intl.string(j.t.lqaIxI) }),
        }),
    });
}
function A(i) {
    let {
            sku: e,
            user: t,
            guildId: l,
            spec: c,
            children: v,
            cardStyle: j,
            skuPreviewStyle: b,
            skuAssetClassName: N,
            disableHoverOrFocus: A,
            disableRiveHover: k,
            onHoverOrFocusChange: y,
            onClick: C,
            "aria-label": P,
        } = i,
        z = s.useRef(null),
        { isHoveringOrFocusing: F } = (0, p.A)(z),
        S = s.useRef(y),
        w = (0, a.bG)([h.A], () => h.A.getApplication(e.applicationId));
    return (
        s.useEffect(() => {
            S.current = y;
        }, [y]),
        s.useEffect(() => {
            S.current?.(F);
        }, [F]),
        (0, n.jsxs)(o.s, {
            ref: z,
            className: r()(m.Nr, j),
            onClick: C,
            "aria-label": P,
            style: I(c),
            children: [
                (0, n.jsx)(u.A, { children: (0, n.jsx)(d.H, { children: (0, f.T)(e) }) }),
                (0, n.jsx)("div", {
                    className: r()(m.ev, b),
                    children: (0, n.jsx)(x.Ay, {
                        sku: e,
                        isFocused: !A && F,
                        user: t,
                        guildId: l,
                        eventTargetRef: k ? void 0 : z,
                        assetClassName: N,
                        disableHover: k,
                    }),
                }),
                (0, n.jsx)(g.P, { spec: c, application: w }),
                v,
            ],
        })
    );
}
