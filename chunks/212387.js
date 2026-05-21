"use strict";
n.d(t, { $: () => V, A: () => B });
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
    f = n(713517),
    h = n(575593),
    p = n(38021),
    E = n(844222),
    m = n(583094),
    g = n(661531),
    A = n(775602),
    I = n(139136),
    T = n(474012),
    S = n(929283),
    N = n(245068),
    y = n(761365),
    C = n(366523),
    v = n(403362),
    O = n(652215),
    R = n(778712),
    b = n(997990);
function D(e) {
    let { sku: t, isFocused: n, user: s } = e,
        a = r.useMemo(() => (0, T.T)(t), [t]);
    if (null == a) return null;
    if ("bundle" === a.type)
        return (0, i.jsx)("div", {
            className: b.hT,
            children: (0, i.jsx)(N.X, { product: a, isHighlighted: n, user: s }),
        });
    switch (a.item.type) {
        case h.R.AVATAR_DECORATION:
            return (0, i.jsx)(S.i, { user: s, avatarSize: R._3.SIZE_80, item: a.item, isHighlighted: n });
        case h.R.PROFILE_EFFECT:
            return (0, i.jsx)("div", {
                className: b.xC,
                children: (0, i.jsx)(I.A, {
                    skuId: a.item.skuId,
                    isHighlighted: n,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case h.R.NAMEPLATE:
            return (0, i.jsx)("div", {
                className: b.M4,
                children: (0, i.jsx)("div", {
                    className: b.N1,
                    children: (0, i.jsx)(y.A, { user: s, nameplate: a.item, isHighlighted: n, size: "small" }),
                }),
            });
        default:
            return null;
    }
}
function L(e) {
    let { sku: t, isFocused: n } = e;
    return (0, i.jsx)(C.e, {
        shape: "custom",
        containerClassName: a()(b.JS, n && b.P3),
        backgroundImageClassName: b.m1,
        foregroundImageClassName: b.aF,
        sku: t,
    });
}
function w(e) {
    let { eventTargetRef: t, assetClassName: n, disableHover: s } = e,
        o = (0, c.bG)([A.A], () => A.A.useReducedMotion),
        { theme: l, saturation: u } = (0, p.wR)(),
        { highContrastModeEnabled: d } = r.useContext(E.C),
        [_, f, h, I] = g.A.colors.TEXT_DEFAULT.resolve({ theme: l, saturation: u, highContrastModeEnabled: d }).rgba();
    return (0, i.jsx)("div", {
        className: b.yv,
        children: (0, i.jsx)(m.u, {
            className: a()(b.MO, n),
            dataBinding: { reducedMotion: s || o, logoColor: { r: _, g: f, b: h, a: I } },
            eventTargetRef: t,
            fit: "contain",
        }),
    });
}
function M(e) {
    let { sku: t, isFocused: n, user: r, eventTargetRef: s, assetClassName: a, disableHover: o } = e;
    switch (t.productLine) {
        case O.EZt.COLLECTIBLES:
            return (0, i.jsx)(D, { sku: t, isFocused: n, user: r });
        case O.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(L, { sku: t, isFocused: n });
        case O.EZt.APPLICATION:
        case O.EZt.BOOST:
        case O.EZt.GUILD_ROLE:
            return null;
        case O.EZt.PREMIUM:
            return (0, i.jsx)(w, { eventTargetRef: s, assetClassName: a, disableHover: o });
        case O.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, v.xb)(t.productLine);
    }
}
var P = n(661492),
    x = n(627001),
    U = n(375708),
    k = n(213494),
    G = n(476324);
function F(e) {
    return { width: e.size, height: e.size };
}
function V(e) {
    let { spec: t, cardStyle: n } = e;
    return (0, i.jsx)("div", {
        className: a()(k.Nr, n),
        style: F(t),
        children: (0, i.jsx)("div", {
            className: k.ho,
            children: (0, i.jsx)(d.eu, { src: G, size: R._3.SIZE_80, "aria-label": U.intl.string(U.t.lqaIxI) }),
        }),
    });
}
function B(e) {
    let {
            sku: t,
            user: n,
            spec: s,
            children: d,
            cardStyle: h,
            skuPreviewStyle: p,
            skuAssetClassName: E,
            disableHoverOrFocus: m,
            disableRiveHover: g,
            onHoverOrFocusChange: A,
            onClick: I,
            "aria-label": T,
        } = e,
        S = r.useRef(null),
        { isHoveringOrFocusing: N } = (0, f.A)(S),
        y = r.useRef(A),
        C = (0, c.bG)([_.A], () => _.A.getApplication(t.applicationId));
    return (
        r.useEffect(() => {
            y.current = A;
        }, [A]),
        r.useEffect(() => {
            y.current?.(N);
        }, [N]),
        (0, i.jsxs)(o.s, {
            ref: S,
            className: a()(k.Nr, h),
            onClick: I,
            "aria-label": T,
            style: F(s),
            children: [
                (0, i.jsx)(l.A, { children: (0, i.jsx)(u.H, { children: (0, P.TC)(t) }) }),
                (0, i.jsx)("div", {
                    className: a()(k.ev, p),
                    children: (0, i.jsx)(M, {
                        sku: t,
                        isFocused: !m && N,
                        user: n,
                        eventTargetRef: g ? void 0 : S,
                        assetClassName: E,
                        disableHover: g,
                    }),
                }),
                (0, i.jsx)(x.P, { spec: s, application: C }),
                d,
            ],
        })
    );
}
