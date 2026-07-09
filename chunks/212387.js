"use strict";
n.d(t, { $: () => B, A: () => H });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(890856),
    o = n(140735),
    d = n(707554),
    c = n(17928),
    u = n(97808),
    _ = n(587895),
    E = n(713517),
    A = n(575593),
    h = n(38021),
    I = n(844222),
    f = n(583094),
    p = n(661531),
    T = n(775602),
    m = n(139136),
    g = n(665411),
    S = n(474012),
    N = n(929283),
    C = n(245068),
    R = n(761365),
    O = n(366523),
    L = n(403362),
    D = n(652215),
    y = n(778712),
    v = n(997990);
function b(e) {
    let { sku: t, isFocused: n, user: a } = e,
        s = r.useMemo(() => (0, S.T)(t), [t]);
    if (null == s) return null;
    if ("bundle" === s.type) {
        let e = s.previewAssets?.fgStatic != null;
        return (0, i.jsx)("div", {
            className: e ? v.Nq : v.hT,
            children: (0, i.jsx)(C.X, { product: s, isHighlighted: n, user: a }),
        });
    }
    switch (s.item.type) {
        case A.R.AVATAR_DECORATION:
            return (0, i.jsx)(N.i, { user: a, avatarSize: y._3.SIZE_80, item: s.item, isHighlighted: n });
        case A.R.PROFILE_EFFECT:
            return (0, i.jsx)("div", {
                className: v.xC,
                children: (0, i.jsx)(m.A, {
                    skuId: s.item.skuId,
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
                    children: (0, i.jsx)(R.A, { user: a, nameplate: s.item, isHighlighted: n, size: "small" }),
                }),
            });
        case A.R.PROFILE_FRAME:
            return (0, i.jsx)("div", {
                className: v.pI,
                children: (0, i.jsx)(g.A, { frame: s.item, transparentBackground: !0 }),
            });
        default:
            return null;
    }
}
function M(e) {
    let { sku: t, isFocused: n } = e;
    return (0, i.jsx)(O.e, {
        shape: "custom",
        containerClassName: s()(v.JS, n && v.P3),
        backgroundImageClassName: v.m1,
        foregroundImageClassName: v.aF,
        sku: t,
    });
}
function P(e) {
    let { eventTargetRef: t, assetClassName: n, disableHover: a } = e,
        l = (0, c.bG)([T.Ay], () => T.Ay.useReducedMotion),
        { theme: o, saturation: d } = (0, h.wR)(),
        { highContrastModeEnabled: u } = r.useContext(I.C),
        [_, E, A, m] = p.A.colors.TEXT_DEFAULT.resolve({ theme: o, saturation: d, highContrastModeEnabled: u }).rgba();
    return (0, i.jsx)("div", {
        className: v.yv,
        children: (0, i.jsx)(f.u, {
            className: s()(v.MO, n),
            dataBinding: { reducedMotion: a || l, logoColor: { r: _, g: E, b: A, a: m } },
            eventTargetRef: t,
            fit: "contain",
        }),
    });
}
function U(e) {
    let { sku: t, isFocused: n, user: r, eventTargetRef: a, assetClassName: s, disableHover: l } = e;
    switch (t.productLine) {
        case D.EZt.COLLECTIBLES:
            return (0, i.jsx)(b, { sku: t, isFocused: n, user: r });
        case D.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(M, { sku: t, isFocused: n });
        case D.EZt.APPLICATION:
        case D.EZt.BOOST:
        case D.EZt.GUILD_ROLE:
            return null;
        case D.EZt.PREMIUM:
            return (0, i.jsx)(P, { eventTargetRef: a, assetClassName: s, disableHover: l });
        case D.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, L.xb)(t.productLine);
    }
}
var w = n(661492),
    G = n(627001),
    x = n(375708),
    k = n(213494),
    F = n(476324);
function V(e) {
    return { width: e.size, height: e.size };
}
function B(e) {
    let { spec: t, cardStyle: n } = e;
    return (0, i.jsx)("div", {
        className: s()(k.Nr, n),
        style: V(t),
        children: (0, i.jsx)("div", {
            className: k.ho,
            children: (0, i.jsx)(u.eu, { src: F, size: y._3.SIZE_80, "aria-label": x.intl.string(x.t.lqaIxI) }),
        }),
    });
}
function H(e) {
    let {
            sku: t,
            user: n,
            spec: a,
            children: u,
            cardStyle: A,
            skuPreviewStyle: h,
            skuAssetClassName: I,
            disableHoverOrFocus: f,
            disableRiveHover: p,
            onHoverOrFocusChange: T,
            onClick: m,
            "aria-label": g,
        } = e,
        S = r.useRef(null),
        { isHoveringOrFocusing: N } = (0, E.A)(S),
        C = r.useRef(T),
        R = (0, c.bG)([_.A], () => _.A.getApplication(t.applicationId));
    return (
        r.useEffect(() => {
            C.current = T;
        }, [T]),
        r.useEffect(() => {
            C.current?.(N);
        }, [N]),
        (0, i.jsxs)(l.s, {
            ref: S,
            className: s()(k.Nr, A),
            onClick: m,
            "aria-label": g,
            style: V(a),
            children: [
                (0, i.jsx)(o.A, { children: (0, i.jsx)(d.H, { children: (0, w.TC)(t) }) }),
                (0, i.jsx)("div", {
                    className: s()(k.ev, h),
                    children: (0, i.jsx)(U, {
                        sku: t,
                        isFocused: !f && N,
                        user: n,
                        eventTargetRef: p ? void 0 : S,
                        assetClassName: I,
                        disableHover: p,
                    }),
                }),
                (0, i.jsx)(G.P, { spec: a, application: R }),
                u,
            ],
        })
    );
}
