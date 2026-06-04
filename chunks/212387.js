"use strict";
n.d(t, { $: () => B, A: () => H });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(890856),
    l = n(140735),
    u = n(707554),
    c = n(17928),
    d = n(97808),
    _ = n(587895),
    h = n(713517),
    f = n(575593),
    p = n(38021),
    E = n(844222),
    m = n(583094),
    g = n(661531),
    A = n(775602),
    I = n(139136),
    T = n(665411),
    S = n(474012),
    y = n(929283),
    N = n(245068),
    v = n(761365),
    C = n(366523),
    R = n(403362),
    O = n(652215),
    b = n(778712),
    D = n(997990);
function L(e) {
    let { sku: t, isFocused: n, user: s } = e,
        a = r.useMemo(() => (0, S.T)(t), [t]);
    if (null == a) return null;
    if ("bundle" === a.type) {
        let e = a.previewAssets?.fgStatic != null;
        return (0, i.jsx)("div", {
            className: e ? D.Nq : D.hT,
            children: (0, i.jsx)(N.X, { product: a, isHighlighted: n, user: s }),
        });
    }
    switch (a.item.type) {
        case f.R.AVATAR_DECORATION:
            return (0, i.jsx)(y.i, { user: s, avatarSize: b._3.SIZE_80, item: a.item, isHighlighted: n });
        case f.R.PROFILE_EFFECT:
            return (0, i.jsx)("div", {
                className: D.xC,
                children: (0, i.jsx)(I.A, {
                    skuId: a.item.skuId,
                    isHighlighted: n,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case f.R.NAMEPLATE:
            return (0, i.jsx)("div", {
                className: D.M4,
                children: (0, i.jsx)("div", {
                    className: D.N1,
                    children: (0, i.jsx)(v.A, { user: s, nameplate: a.item, isHighlighted: n, size: "small" }),
                }),
            });
        case f.R.PROFILE_FRAME:
            return (0, i.jsx)("div", {
                className: D.pI,
                children: (0, i.jsx)(T.A, { frame: a.item, transparentBackground: !0 }),
            });
        default:
            return null;
    }
}
function w(e) {
    let { sku: t, isFocused: n } = e;
    return (0, i.jsx)(C.e, {
        shape: "custom",
        containerClassName: a()(D.JS, n && D.P3),
        backgroundImageClassName: D.m1,
        foregroundImageClassName: D.aF,
        sku: t,
    });
}
function M(e) {
    let { eventTargetRef: t, assetClassName: n, disableHover: s } = e,
        o = (0, c.bG)([A.A], () => A.A.useReducedMotion),
        { theme: l, saturation: u } = (0, p.wR)(),
        { highContrastModeEnabled: d } = r.useContext(E.C),
        [_, h, f, I] = g.A.colors.TEXT_DEFAULT.resolve({ theme: l, saturation: u, highContrastModeEnabled: d }).rgba();
    return (0, i.jsx)("div", {
        className: D.yv,
        children: (0, i.jsx)(m.u, {
            className: a()(D.MO, n),
            dataBinding: { reducedMotion: s || o, logoColor: { r: _, g: h, b: f, a: I } },
            eventTargetRef: t,
            fit: "contain",
        }),
    });
}
function P(e) {
    let { sku: t, isFocused: n, user: r, eventTargetRef: s, assetClassName: a, disableHover: o } = e;
    switch (t.productLine) {
        case O.EZt.COLLECTIBLES:
            return (0, i.jsx)(L, { sku: t, isFocused: n, user: r });
        case O.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(w, { sku: t, isFocused: n });
        case O.EZt.APPLICATION:
        case O.EZt.BOOST:
        case O.EZt.GUILD_ROLE:
            return null;
        case O.EZt.PREMIUM:
            return (0, i.jsx)(M, { eventTargetRef: s, assetClassName: a, disableHover: o });
        case O.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, R.xb)(t.productLine);
    }
}
var x = n(661492),
    k = n(627001),
    U = n(375708),
    G = n(213494),
    F = n(476324);
function V(e) {
    return { width: e.size, height: e.size };
}
function B(e) {
    let { spec: t, cardStyle: n } = e;
    return (0, i.jsx)("div", {
        className: a()(G.Nr, n),
        style: V(t),
        children: (0, i.jsx)("div", {
            className: G.ho,
            children: (0, i.jsx)(d.eu, { src: F, size: b._3.SIZE_80, "aria-label": U.intl.string(U.t.lqaIxI) }),
        }),
    });
}
function H(e) {
    let {
            sku: t,
            user: n,
            spec: s,
            children: d,
            cardStyle: f,
            skuPreviewStyle: p,
            skuAssetClassName: E,
            disableHoverOrFocus: m,
            disableRiveHover: g,
            onHoverOrFocusChange: A,
            onClick: I,
            "aria-label": T,
        } = e,
        S = r.useRef(null),
        { isHoveringOrFocusing: y } = (0, h.A)(S),
        N = r.useRef(A),
        v = (0, c.bG)([_.A], () => _.A.getApplication(t.applicationId));
    return (
        r.useEffect(() => {
            N.current = A;
        }, [A]),
        r.useEffect(() => {
            N.current?.(y);
        }, [y]),
        (0, i.jsxs)(o.s, {
            ref: S,
            className: a()(G.Nr, f),
            onClick: I,
            "aria-label": T,
            style: V(s),
            children: [
                (0, i.jsx)(l.A, { children: (0, i.jsx)(u.H, { children: (0, x.TC)(t) }) }),
                (0, i.jsx)("div", {
                    className: a()(G.ev, p),
                    children: (0, i.jsx)(P, {
                        sku: t,
                        isFocused: !m && y,
                        user: n,
                        eventTargetRef: g ? void 0 : S,
                        assetClassName: E,
                        disableHover: g,
                    }),
                }),
                (0, i.jsx)(k.P, { spec: s, application: v }),
                d,
            ],
        })
    );
}
