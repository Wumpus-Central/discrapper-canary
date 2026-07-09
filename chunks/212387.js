t.d(s, { $: () => U, A: () => B });
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
    A = t(665411),
    I = t(474012),
    N = t(929283),
    R = t(245068),
    C = t(761365),
    T = t(366523),
    L = t(403362),
    _ = t(652215),
    k = t(778712),
    b = t(997990);
function S(e) {
    let { sku: s, isFocused: t, user: a } = e,
        r = n.useMemo(() => (0, I.T)(s), [s]);
    if (null == r) return null;
    if ("bundle" === r.type) {
        let e = r.previewAssets?.fgStatic != null;
        return (0, i.jsx)("div", {
            className: e ? b.Nq : b.hT,
            children: (0, i.jsx)(R.X, { product: r, isHighlighted: t, user: a }),
        });
    }
    switch (r.item.type) {
        case m.R.AVATAR_DECORATION:
            return (0, i.jsx)(N.i, { user: a, avatarSize: k._3.SIZE_80, item: r.item, isHighlighted: t });
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
        case m.R.PROFILE_FRAME:
            return (0, i.jsx)("div", {
                className: b.pI,
                children: (0, i.jsx)(A.A, { frame: r.item, transparentBackground: !0 }),
            });
        default:
            return null;
    }
}
function M(e) {
    let { sku: s, isFocused: t } = e;
    return (0, i.jsx)(T.e, {
        shape: "custom",
        containerClassName: r()(b.JS, t && b.P3),
        backgroundImageClassName: b.m1,
        foregroundImageClassName: b.aF,
        sku: s,
    });
}
function O(e) {
    let { eventTargetRef: s, assetClassName: t, disableHover: a } = e,
        l = (0, d.bG)([f.Ay], () => f.Ay.useReducedMotion),
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
function y(e) {
    let { sku: s, isFocused: t, user: n, eventTargetRef: a, assetClassName: r, disableHover: l } = e;
    switch (s.productLine) {
        case _.EZt.COLLECTIBLES:
            return (0, i.jsx)(S, { sku: s, isFocused: t, user: n });
        case _.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(M, { sku: s, isFocused: t });
        case _.EZt.APPLICATION:
        case _.EZt.BOOST:
        case _.EZt.GUILD_ROLE:
            return null;
        case _.EZt.PREMIUM:
            return (0, i.jsx)(O, { eventTargetRef: a, assetClassName: r, disableHover: l });
        case _.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, L.xb)(s.productLine);
    }
}
var F = t(661492),
    P = t(627001),
    Z = t(375708),
    w = t(213494),
    H = t(476324);
function z(e) {
    return { width: e.size, height: e.size };
}
function U(e) {
    let { spec: s, cardStyle: t } = e;
    return (0, i.jsx)("div", {
        className: r()(w.Nr, t),
        style: z(s),
        children: (0, i.jsx)("div", {
            className: w.ho,
            children: (0, i.jsx)(o.eu, { src: H, size: k._3.SIZE_80, "aria-label": Z.intl.string(Z.t.lqaIxI) }),
        }),
    });
}
function B(e) {
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
        R = n.useRef(f),
        C = (0, d.bG)([h.A], () => h.A.getApplication(s.applicationId));
    return (
        n.useEffect(() => {
            R.current = f;
        }, [f]),
        n.useEffect(() => {
            R.current?.(N);
        }, [N]),
        (0, i.jsxs)(l.s, {
            ref: I,
            className: r()(w.Nr, m),
            onClick: v,
            "aria-label": A,
            style: z(a),
            children: [
                (0, i.jsx)(c.A, { children: (0, i.jsx)(u.H, { children: (0, F.TC)(s) }) }),
                (0, i.jsx)("div", {
                    className: r()(w.ev, j),
                    children: (0, i.jsx)(y, {
                        sku: s,
                        isFocused: !p && N,
                        user: t,
                        eventTargetRef: E ? void 0 : I,
                        assetClassName: g,
                        disableHover: E,
                    }),
                }),
                (0, i.jsx)(P.P, { spec: a, application: C }),
                o,
            ],
        })
    );
}
