t.d(s, { $: () => z, A: () => U });
var i = t(627968),
    n = t(64700),
    a = t(503698),
    r = t.n(a),
    l = t(890856),
    c = t(140735),
    u = t(707554),
    d = t(17928),
    o = t(97808),
    h = t(587895),
    x = t(713517),
    m = t(575593),
    j = t(38021),
    g = t(844222),
    p = t(583094),
    E = t(661531),
    f = t(775602),
    v = t(139136),
    A = t(474012),
    I = t(929283),
    N = t(245068),
    C = t(761365),
    T = t(366523),
    R = t(403362),
    L = t(652215),
    _ = t(778712),
    b = t(997990);
function k(e) {
    let { sku: s, isFocused: t, user: a } = e,
        r = n.useMemo(() => (0, A.T)(s), [s]);
    if (null == r) return null;
    if ("bundle" === r.type)
        return (0, i.jsx)("div", {
            className: b.hT,
            children: (0, i.jsx)(N.X, { product: r, isHighlighted: t, user: a }),
        });
    switch (r.item.type) {
        case m.R.AVATAR_DECORATION:
            return (0, i.jsx)(I.i, { user: a, avatarSize: _._3.SIZE_80, item: r.item, isHighlighted: t });
        case m.R.PROFILE_EFFECT:
            return (0, i.jsx)("div", {
                className: b.xC,
                children: (0, i.jsx)(v.A, {
                    skuId: r.item.skuId,
                    isHighlighted: t,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case m.R.NAMEPLATE:
            return (0, i.jsx)("div", {
                className: b.M4,
                children: (0, i.jsx)("div", {
                    className: b.N1,
                    children: (0, i.jsx)(C.A, { user: a, nameplate: r.item, isHighlighted: t, size: "small" }),
                }),
            });
        default:
            return null;
    }
}
function S(e) {
    let { sku: s, isFocused: t } = e;
    return (0, i.jsx)(T.e, {
        shape: "custom",
        containerClassName: r()(b.JS, t && b.P3),
        backgroundImageClassName: b.m1,
        foregroundImageClassName: b.aF,
        sku: s,
    });
}
function M(e) {
    let { eventTargetRef: s, assetClassName: t, disableHover: a } = e,
        l = (0, d.bG)([f.A], () => f.A.useReducedMotion),
        { theme: c, saturation: u } = (0, j.wR)(),
        { highContrastModeEnabled: o } = n.useContext(g.C),
        [h, x, m, v] = E.A.colors.TEXT_DEFAULT.resolve({ theme: c, saturation: u, highContrastModeEnabled: o }).rgba();
    return (0, i.jsx)("div", {
        className: b.yv,
        children: (0, i.jsx)(p.u, {
            className: r()(b.MO, t),
            dataBinding: { reducedMotion: a || l, logoColor: { r: h, g: x, b: m, a: v } },
            eventTargetRef: s,
            fit: "contain",
        }),
    });
}
function O(e) {
    let { sku: s, isFocused: t, user: n, eventTargetRef: a, assetClassName: r, disableHover: l } = e;
    switch (s.productLine) {
        case L.EZt.COLLECTIBLES:
            return (0, i.jsx)(k, { sku: s, isFocused: t, user: n });
        case L.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(S, { sku: s, isFocused: t });
        case L.EZt.APPLICATION:
        case L.EZt.BOOST:
        case L.EZt.GUILD_ROLE:
            return null;
        case L.EZt.PREMIUM:
            return (0, i.jsx)(M, { eventTargetRef: a, assetClassName: r, disableHover: l });
        case L.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, R.xb)(s.productLine);
    }
}
var Z = t(661492),
    y = t(627001),
    F = t(375708),
    P = t(213494),
    H = t(476324);
function w(e) {
    return { width: e.size, height: e.size };
}
function z(e) {
    let { spec: s, cardStyle: t } = e;
    return (0, i.jsx)("div", {
        className: r()(P.Nr, t),
        style: w(s),
        children: (0, i.jsx)("div", {
            className: P.ho,
            children: (0, i.jsx)(o.eu, { src: H, size: _._3.SIZE_80, "aria-label": F.intl.string(F.t.lqaIxI) }),
        }),
    });
}
function U(e) {
    let {
            sku: s,
            user: t,
            spec: a,
            children: o,
            cardStyle: m,
            skuPreviewStyle: j,
            skuAssetClassName: g,
            disableHoverOrFocus: p,
            disableRiveHover: E,
            onHoverOrFocusChange: f,
            onClick: v,
            "aria-label": A,
        } = e,
        I = n.useRef(null),
        { isHoveringOrFocusing: N } = (0, x.A)(I),
        C = n.useRef(f),
        T = (0, d.bG)([h.A], () => h.A.getApplication(s.applicationId));
    return (
        n.useEffect(() => {
            C.current = f;
        }, [f]),
        n.useEffect(() => {
            C.current?.(N);
        }, [N]),
        (0, i.jsxs)(l.s, {
            ref: I,
            className: r()(P.Nr, m),
            onClick: v,
            "aria-label": A,
            style: w(a),
            children: [
                (0, i.jsx)(c.A, { children: (0, i.jsx)(u.H, { children: (0, Z.TC)(s) }) }),
                (0, i.jsx)("div", {
                    className: r()(P.ev, j),
                    children: (0, i.jsx)(O, {
                        sku: s,
                        isFocused: !p && N,
                        user: t,
                        eventTargetRef: E ? void 0 : I,
                        assetClassName: g,
                        disableHover: E,
                    }),
                }),
                (0, i.jsx)(y.P, { spec: a, application: T }),
                o,
            ],
        })
    );
}
