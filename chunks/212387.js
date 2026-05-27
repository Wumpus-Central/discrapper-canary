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
    h = n(713517),
    f = n(575593),
    p = n(38021),
    E = n(844222),
    m = n(583094),
    g = n(661531),
    A = n(775602),
    I = n(139136),
    T = n(474012),
    S = n(929283),
    y = n(245068),
    N = n(761365),
    v = n(366523),
    C = n(403362),
    R = n(652215),
    O = n(778712),
    b = n(997990);
function D(e) {
    let { sku: t, isFocused: n, user: s } = e,
        a = r.useMemo(() => (0, T.T)(t), [t]);
    if (null == a) return null;
    if ("bundle" === a.type)
        return (0, i.jsx)("div", {
            className: b.hT,
            children: (0, i.jsx)(y.X, { product: a, isHighlighted: n, user: s }),
        });
    switch (a.item.type) {
        case f.R.AVATAR_DECORATION:
            return (0, i.jsx)(S.i, { user: s, avatarSize: O._3.SIZE_80, item: a.item, isHighlighted: n });
        case f.R.PROFILE_EFFECT:
            return (0, i.jsx)("div", {
                className: b.xC,
                children: (0, i.jsx)(I.A, {
                    skuId: a.item.skuId,
                    isHighlighted: n,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case f.R.NAMEPLATE:
            return (0, i.jsx)("div", {
                className: b.M4,
                children: (0, i.jsx)("div", {
                    className: b.N1,
                    children: (0, i.jsx)(N.A, { user: s, nameplate: a.item, isHighlighted: n, size: "small" }),
                }),
            });
        default:
            return null;
    }
}
function L(e) {
    let { sku: t, isFocused: n } = e;
    return (0, i.jsx)(v.e, {
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
        [_, h, f, I] = g.A.colors.TEXT_DEFAULT.resolve({ theme: l, saturation: u, highContrastModeEnabled: d }).rgba();
    return (0, i.jsx)("div", {
        className: b.yv,
        children: (0, i.jsx)(m.u, {
            className: a()(b.MO, n),
            dataBinding: { reducedMotion: s || o, logoColor: { r: _, g: h, b: f, a: I } },
            eventTargetRef: t,
            fit: "contain",
        }),
    });
}
function M(e) {
    let { sku: t, isFocused: n, user: r, eventTargetRef: s, assetClassName: a, disableHover: o } = e;
    switch (t.productLine) {
        case R.EZt.COLLECTIBLES:
            return (0, i.jsx)(D, { sku: t, isFocused: n, user: r });
        case R.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(L, { sku: t, isFocused: n });
        case R.EZt.APPLICATION:
        case R.EZt.BOOST:
        case R.EZt.GUILD_ROLE:
            return null;
        case R.EZt.PREMIUM:
            return (0, i.jsx)(w, { eventTargetRef: s, assetClassName: a, disableHover: o });
        case R.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, C.xb)(t.productLine);
    }
}
var P = n(661492),
    x = n(627001),
    k = n(375708),
    U = n(213494),
    G = n(476324);
function F(e) {
    return { width: e.size, height: e.size };
}
function V(e) {
    let { spec: t, cardStyle: n } = e;
    return (0, i.jsx)("div", {
        className: a()(U.Nr, n),
        style: F(t),
        children: (0, i.jsx)("div", {
            className: U.ho,
            children: (0, i.jsx)(d.eu, { src: G, size: O._3.SIZE_80, "aria-label": k.intl.string(k.t.lqaIxI) }),
        }),
    });
}
function B(e) {
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
            className: a()(U.Nr, f),
            onClick: I,
            "aria-label": T,
            style: F(s),
            children: [
                (0, i.jsx)(l.A, { children: (0, i.jsx)(u.H, { children: (0, P.TC)(t) }) }),
                (0, i.jsx)("div", {
                    className: a()(U.ev, p),
                    children: (0, i.jsx)(M, {
                        sku: t,
                        isFocused: !m && y,
                        user: n,
                        eventTargetRef: g ? void 0 : S,
                        assetClassName: E,
                        disableHover: g,
                    }),
                }),
                (0, i.jsx)(x.P, { spec: s, application: v }),
                d,
            ],
        })
    );
}
