t.d(s, { $: () => H, A: () => z });
var i = t(627968),
    l = t(64700),
    n = t(503698),
    a = t.n(n),
    r = t(890856),
    u = t(140735),
    d = t(707554),
    o = t(17928),
    c = t(97808),
    m = t(587895),
    h = t(713517),
    f = t(575593),
    g = t(38021),
    I = t(844222),
    v = t(583094),
    p = t(661531),
    x = t(775602),
    A = t(139136),
    j = t(474012),
    E = t(929283),
    N = t(245068),
    S = t(761365),
    b = t(366523),
    _ = t(403362),
    k = t(652215),
    y = t(778712),
    M = t(997990);
function R(e) {
    let { sku: s, isFocused: t, user: n } = e,
        a = l.useMemo(() => (0, j.T)(s), [s]);
    if (null == a) return null;
    if ("bundle" === a.type)
        return (0, i.jsx)("div", {
            className: M.hT,
            children: (0, i.jsx)(N.X, { product: a, isHighlighted: t, user: n }),
        });
    switch (a.item.type) {
        case f.R.AVATAR_DECORATION:
            return (0, i.jsx)(E.i, { user: n, avatarSize: y._3.SIZE_80, item: a.item, isHighlighted: t });
        case f.R.PROFILE_EFFECT:
            return (0, i.jsx)("div", {
                className: M.xC,
                children: (0, i.jsx)(A.A, {
                    skuId: a.item.skuId,
                    isHighlighted: t,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case f.R.NAMEPLATE:
            return (0, i.jsx)("div", {
                className: M.M4,
                children: (0, i.jsx)("div", {
                    className: M.N1,
                    children: (0, i.jsx)(S.A, { user: n, nameplate: a.item, isHighlighted: t, size: "small" }),
                }),
            });
        default:
            return null;
    }
}
function w(e) {
    let { sku: s, isFocused: t } = e;
    return (0, i.jsx)(b.e, {
        shape: "custom",
        containerClassName: a()(M.JS, t && M.P3),
        backgroundImageClassName: M.m1,
        foregroundImageClassName: M.aF,
        sku: s,
    });
}
function C(e) {
    let { eventTargetRef: s, assetClassName: t, disableHover: n } = e,
        r = (0, o.bG)([x.A], () => x.A.useReducedMotion),
        { theme: u, saturation: d } = (0, g.wR)(),
        { highContrastModeEnabled: c } = l.useContext(I.C),
        [m, h, f, A] = p.A.colors.TEXT_DEFAULT.resolve({ theme: u, saturation: d, highContrastModeEnabled: c }).rgba();
    return (0, i.jsx)("div", {
        className: M.yv,
        children: (0, i.jsx)(v.u, {
            className: a()(M.MO, t),
            dataBinding: { reducedMotion: n || r, logoColor: { r: m, g: h, b: f, a: A } },
            eventTargetRef: s,
            fit: "contain",
        }),
    });
}
function T(e) {
    let { sku: s, isFocused: t, user: l, eventTargetRef: n, assetClassName: a, disableHover: r } = e;
    switch (s.productLine) {
        case k.EZt.COLLECTIBLES:
            return (0, i.jsx)(R, { sku: s, isFocused: t, user: l });
        case k.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(w, { sku: s, isFocused: t });
        case k.EZt.APPLICATION:
        case k.EZt.BOOST:
        case k.EZt.GUILD_ROLE:
            return null;
        case k.EZt.PREMIUM:
            return (0, i.jsx)(C, { eventTargetRef: n, assetClassName: a, disableHover: r });
        case k.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, _.xb)(s.productLine);
    }
}
var L = t(661492),
    O = t(627001),
    U = t(985018),
    P = t(213494),
    W = t(476324);
function F(e) {
    return { width: e.size, height: e.size };
}
function H(e) {
    let { spec: s, cardStyle: t } = e;
    return (0, i.jsx)("div", {
        className: a()(P.Nr, t),
        style: F(s),
        children: (0, i.jsx)("div", {
            className: P.ho,
            children: (0, i.jsx)(c.eu, { src: W, size: y._3.SIZE_80, "aria-label": U.intl.string(U.t.lqaIxI) }),
        }),
    });
}
function z(e) {
    let {
            sku: s,
            user: t,
            spec: n,
            children: c,
            cardStyle: f,
            skuPreviewStyle: g,
            skuAssetClassName: I,
            disableHoverOrFocus: v,
            disableRiveHover: p,
            onHoverOrFocusChange: x,
            onClick: A,
            "aria-label": j,
        } = e,
        E = l.useRef(null),
        { isHoveringOrFocusing: N } = (0, h.A)(E),
        S = l.useRef(x),
        b = (0, o.bG)([m.A], () => m.A.getApplication(s.applicationId));
    return (
        l.useEffect(() => {
            S.current = x;
        }, [x]),
        l.useEffect(() => {
            S.current?.(N);
        }, [N]),
        (0, i.jsxs)(r.s, {
            ref: E,
            className: a()(P.Nr, f),
            onClick: A,
            "aria-label": j,
            style: F(n),
            children: [
                (0, i.jsx)(u.A, { children: (0, i.jsx)(d.H, { children: (0, L.TC)(s) }) }),
                (0, i.jsx)("div", {
                    className: a()(P.ev, g),
                    children: (0, i.jsx)(T, {
                        sku: s,
                        isFocused: !v && N,
                        user: t,
                        eventTargetRef: p ? void 0 : E,
                        assetClassName: I,
                        disableHover: p,
                    }),
                }),
                (0, i.jsx)(O.P, { spec: n, application: b }),
                c,
            ],
        })
    );
}
