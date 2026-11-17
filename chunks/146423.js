var t = s(477900),
    n = s(582128),
    l = s(503698),
    a = s.n(l),
    r = s(855986),
    c = s(97808),
    d = s(890856),
    u = s(140735),
    o = s(707554),
    h = s(587895),
    p = s(713517),
    x = s(607123),
    j = s(661492),
    f = s(627001),
    v = s(778712),
    b = s(792996),
    m = s(491685),
    I = s(476324);
function g(e) {
    return { width: e.size, height: e.size };
}
s.d(
    i,
    {},
    {
        $: function (e) {
            let { spec: i, cardStyle: s } = e;
            return (0, t.jsx)("div", {
                className: a()(m.Nr, s),
                style: g(i),
                children: (0, t.jsx)("div", {
                    className: m.ho,
                    children: (0, t.jsx)(c.eu, { src: I, size: v._3.SIZE_80, "aria-label": b.intl.string(b.t.lqaIxI) }),
                }),
            });
        },
        A: function (e) {
            let {
                    sku: i,
                    user: s,
                    guildId: l,
                    spec: c,
                    topLeftContent: v,
                    children: b,
                    cardStyle: I,
                    skuPreviewStyle: y,
                    skuAssetClassName: N,
                    disableHoverOrFocus: A,
                    disableRiveHover: k,
                    onHoverOrFocusChange: z,
                    onClick: S,
                    "aria-label": _,
                    "aria-describedby": w,
                } = e,
                C = n.useRef(null),
                { isHoveringOrFocusing: R } = (0, p.A)(C),
                E = n.useRef(z),
                L = (0, r.bG)([h.A], () => h.A.getApplication(i.applicationId));
            return (
                n.useEffect(() => {
                    E.current = z;
                }, [z]),
                n.useEffect(() => {
                    E.current?.(R);
                }, [R]),
                (0, t.jsxs)(d.s, {
                    ref: C,
                    className: a()(m.Nr, I),
                    onClick: S,
                    "aria-label": _,
                    "aria-describedby": w,
                    style: g(c),
                    children: [
                        (0, t.jsx)(u.A, { children: (0, t.jsx)(o.H, { children: (0, j.T)(i) }) }),
                        (0, t.jsx)("div", {
                            className: a()(m.ev, y),
                            children: (0, t.jsx)(x.Ay, {
                                sku: i,
                                isFocused: !A && R,
                                user: s,
                                guildId: l,
                                eventTargetRef: k ? void 0 : C,
                                assetClassName: N,
                                disableHover: k,
                            }),
                        }),
                        v ?? (0, t.jsx)(f.P, { spec: c, application: L }),
                        b,
                    ],
                })
            );
        },
    },
);
