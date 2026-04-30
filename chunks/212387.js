n.d(t, { $: () => H, A: () => x });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(890856),
    o = n(140735),
    d = n(707554),
    u = n(17928),
    c = n(97808),
    h = n(587895),
    E = n(713517),
    A = n(575593),
    _ = n(38021),
    p = n(844222),
    g = n(583094),
    f = n(661531),
    I = n(775602),
    S = n(139136),
    T = n(474012),
    m = n(929283),
    C = n(245068),
    O = n(761365),
    N = n(366523),
    y = n(403362),
    R = n(652215),
    L = n(778712),
    v = n(997990);
function D(e) {
    let { sku: t, isFocused: n, user: a } = e,
        r = l.useMemo(() => (0, T.T)(t), [t]);
    if (null == r) return null;
    if ("bundle" === r.type)
        return (0, i.jsx)("div", {
            className: v.hT,
            children: (0, i.jsx)(C.X, { product: r, isHighlighted: n, user: a }),
        });
    switch (r.item.type) {
        case A.R.AVATAR_DECORATION:
            return (0, i.jsx)(m.i, { user: a, avatarSize: L._3.SIZE_80, item: r.item, isHighlighted: n });
        case A.R.PROFILE_EFFECT:
            return (0, i.jsx)("div", {
                className: v.xC,
                children: (0, i.jsx)(S.A, {
                    skuId: r.item.skuId,
                    isHighlighted: n,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case A.R.NAMEPLATE:
            return (0, i.jsx)("div", {
                className: v.M4,
                children: (0, i.jsx)("div", {
                    className: v.N1,
                    children: (0, i.jsx)(O.A, { user: a, nameplate: r.item, isHighlighted: n, size: "small" }),
                }),
            });
        default:
            return null;
    }
}
function U(e) {
    let { sku: t, isFocused: n } = e;
    return (0, i.jsx)(N.e, {
        shape: "custom",
        containerClassName: r()(v.JS, n && v.P3),
        backgroundImageClassName: v.m1,
        foregroundImageClassName: v.aF,
        sku: t,
    });
}
function P(e) {
    let { eventTargetRef: t, assetClassName: n, disableHover: a } = e,
        s = (0, u.bG)([I.A], () => I.A.useReducedMotion),
        { theme: o, saturation: d } = (0, _.wR)(),
        { highContrastModeEnabled: c } = l.useContext(p.C),
        [h, E, A, S] = f.A.colors.TEXT_DEFAULT.resolve({ theme: o, saturation: d, highContrastModeEnabled: c }).rgba();
    return (0, i.jsx)("div", {
        className: v.yv,
        children: (0, i.jsx)(g.u, {
            className: r()(v.MO, n),
            dataBinding: { reducedMotion: a || s, logoColor: { r: h, g: E, b: A, a: S } },
            eventTargetRef: t,
            fit: "contain",
        }),
    });
}
function b(e) {
    let { sku: t, isFocused: n, user: l, eventTargetRef: a, assetClassName: r, disableHover: s } = e;
    switch (t.productLine) {
        case R.EZt.COLLECTIBLES:
            return (0, i.jsx)(D, { sku: t, isFocused: n, user: l });
        case R.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(U, { sku: t, isFocused: n });
        case R.EZt.APPLICATION:
        case R.EZt.BOOST:
        case R.EZt.GUILD_ROLE:
            return null;
        case R.EZt.PREMIUM:
            return (0, i.jsx)(P, { eventTargetRef: a, assetClassName: r, disableHover: s });
        case R.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, y.xb)(t.productLine);
    }
}
var M = n(661492),
    w = n(627001),
    G = n(985018),
    F = n(213494),
    V = n(476324);
function k(e) {
    return { width: e.size, height: e.size };
}
function H(e) {
    let { spec: t, cardStyle: n } = e;
    return (0, i.jsx)("div", {
        className: r()(F.Nr, n),
        style: k(t),
        children: (0, i.jsx)("div", {
            className: F.ho,
            children: (0, i.jsx)(c.eu, { src: V, size: L._3.SIZE_80, "aria-label": G.intl.string(G.t.lqaIxI) }),
        }),
    });
}
function x(e) {
    let {
            sku: t,
            user: n,
            spec: a,
            children: c,
            cardStyle: A,
            skuPreviewStyle: _,
            skuAssetClassName: p,
            disableHoverOrFocus: g,
            disableRiveHover: f,
            onHoverOrFocusChange: I,
            onClick: S,
            "aria-label": T,
        } = e,
        m = l.useRef(null),
        { isHoveringOrFocusing: C } = (0, E.A)(m),
        O = l.useRef(I),
        N = (0, u.bG)([h.A], () => h.A.getApplication(t.applicationId));
    return (
        l.useEffect(() => {
            O.current = I;
        }, [I]),
        l.useEffect(() => {
            O.current?.(C);
        }, [C]),
        (0, i.jsxs)(s.s, {
            ref: m,
            className: r()(F.Nr, A),
            onClick: S,
            "aria-label": T,
            style: k(a),
            children: [
                (0, i.jsx)(o.A, { children: (0, i.jsx)(d.H, { children: (0, M.TC)(t) }) }),
                (0, i.jsx)("div", {
                    className: r()(F.ev, _),
                    children: (0, i.jsx)(b, {
                        sku: t,
                        isFocused: !g && C,
                        user: n,
                        eventTargetRef: f ? void 0 : m,
                        assetClassName: p,
                        disableHover: f,
                    }),
                }),
                (0, i.jsx)(w.P, { spec: a, application: N }),
                c,
            ],
        })
    );
}
