var n = t(477900),
    s = t(582128),
    l = t(503698),
    r = t.n(l),
    a = t(855986),
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
    b = t(792996),
    j = t(491685),
    m = t(476324);
function I(i) {
    return { width: i.size, height: i.size };
}
t.d(
    e,
    {},
    {
        $: function (i) {
            let { spec: e, cardStyle: t } = i;
            return (0, n.jsx)("div", {
                className: r()(j.Nr, t),
                style: I(e),
                children: (0, n.jsx)("div", {
                    className: j.ho,
                    children: (0, n.jsx)(c.eu, { src: m, size: v._3.SIZE_80, "aria-label": b.intl.string(b.t.lqaIxI) }),
                }),
            });
        },
        A: function (i) {
            let {
                    sku: e,
                    user: t,
                    guildId: l,
                    spec: c,
                    children: v,
                    cardStyle: b,
                    skuPreviewStyle: m,
                    skuAssetClassName: y,
                    disableHoverOrFocus: N,
                    disableRiveHover: A,
                    onHoverOrFocusChange: k,
                    onClick: C,
                    "aria-label": P,
                    "aria-describedby": z,
                } = i,
                F = s.useRef(null),
                { isHoveringOrFocusing: S } = (0, p.A)(F),
                w = s.useRef(k),
                G = (0, a.bG)([h.A], () => h.A.getApplication(e.applicationId));
            return (
                s.useEffect(() => {
                    w.current = k;
                }, [k]),
                s.useEffect(() => {
                    w.current?.(S);
                }, [S]),
                (0, n.jsxs)(o.s, {
                    ref: F,
                    className: r()(j.Nr, b),
                    onClick: C,
                    "aria-label": P,
                    "aria-describedby": z,
                    style: I(c),
                    children: [
                        (0, n.jsx)(u.A, { children: (0, n.jsx)(d.H, { children: (0, f.T)(e) }) }),
                        (0, n.jsx)("div", {
                            className: r()(j.ev, m),
                            children: (0, n.jsx)(x.Ay, {
                                sku: e,
                                isFocused: !N && S,
                                user: t,
                                guildId: l,
                                eventTargetRef: A ? void 0 : F,
                                assetClassName: y,
                                disableHover: A,
                            }),
                        }),
                        (0, n.jsx)(g.P, { spec: c, application: G }),
                        v,
                    ],
                })
            );
        },
    },
);
