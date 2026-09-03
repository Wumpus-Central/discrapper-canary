t.d(s, { $: () => z, A: () => U });
var i = t(477900),
    n = t(582128),
    l = t(503698),
    r = t.n(l),
    a = t(890856),
    c = t(140735),
    u = t(707554),
    d = t(17928),
    o = t(97808),
    h = t(587895),
    g = t(713517),
    m = t(575593),
    x = t(38021),
    f = t(844222),
    p = t(583094),
    j = t(661531),
    v = t(775602),
    I = t(139136),
    A = t(665411),
    E = t(474012),
    N = t(929283),
    C = t(245068),
    R = t(761365),
    b = t(366523),
    L = t(403362),
    T = t(652215),
    k = t(778712),
    P = t(880465);
function _(e) {
    let { sku: s, isFocused: t, user: l, guildId: r } = e,
        a = n.useMemo(() => (0, E.T)(s), [s]);
    if (null == a) return null;
    if ("bundle" === a.type) {
        let e = a.previewAssets?.fgStatic != null;
        return (0, i.jsx)("div", {
            className: e ? P.Nq : P.hT,
            children: (0, i.jsx)(C.X, { product: a, isHighlighted: t, user: l }),
        });
    }
    switch (a.item.type) {
        case m.R.AVATAR_DECORATION:
            return (0, i.jsx)(N.i, { user: l, guildId: r, avatarSize: k._3.SIZE_80, item: a.item, isHighlighted: t });
        case m.R.PROFILE_EFFECT:
            return (0, i.jsx)("div", {
                className: P.xC,
                children: (0, i.jsx)(I.A, {
                    skuId: a.item.skuId,
                    isHighlighted: t,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case m.R.NAMEPLATE:
            return (0, i.jsx)("div", {
                className: P.M4,
                children: (0, i.jsx)("div", {
                    className: P.N1,
                    children: (0, i.jsx)(R.A, {
                        user: l,
                        guildId: r,
                        nameplate: a.item,
                        isHighlighted: t,
                        size: "small",
                    }),
                }),
            });
        case m.R.PROFILE_FRAME:
            return (0, i.jsx)("div", {
                className: P.pI,
                children: (0, i.jsx)(A.A, { frame: a.item, transparentBackground: !0 }),
            });
        default:
            return null;
    }
}
function F(e) {
    let { sku: s, isFocused: t } = e;
    return (0, i.jsx)(b.e, {
        shape: "custom",
        containerClassName: r()(P.JS, t && P.P3),
        backgroundImageClassName: P.m1,
        foregroundImageClassName: P.aF,
        sku: s,
    });
}
function S(e) {
    let { eventTargetRef: s, assetClassName: t, disableHover: l } = e,
        a = (0, d.bG)([v.Ay], () => v.Ay.useReducedMotion),
        { theme: c, saturation: u } = (0, x.wR)(),
        { highContrastModeEnabled: o } = n.useContext(f.C),
        [h, g, m, I] = j.A.colors.TEXT_DEFAULT.resolve({ theme: c, saturation: u, highContrastModeEnabled: o }).rgba();
    return (0, i.jsx)("div", {
        className: P.yv,
        children: (0, i.jsx)(p.u, {
            className: r()(P.MO, t),
            dataBinding: { reducedMotion: l || a, logoColor: { r: h, g, b: m, a: I } },
            eventTargetRef: s,
            fit: "contain",
        }),
    });
}
function y(e) {
    let { sku: s, isFocused: t, user: n, guildId: l, eventTargetRef: r, assetClassName: a, disableHover: c } = e;
    switch (s.productLine) {
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(_, { sku: s, isFocused: t, user: n, guildId: l });
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(F, { sku: s, isFocused: t });
        case T.EZt.APPLICATION:
        case T.EZt.BOOST:
        case T.EZt.GUILD_ROLE:
            return null;
        case T.EZt.PREMIUM:
            return (0, i.jsx)(S, { eventTargetRef: r, assetClassName: a, disableHover: c });
        case T.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, L.xb)(s.productLine);
    }
}
var M = t(661492),
    O = t(627001),
    Z = t(375708),
    w = t(491685),
    G = t(476324);
function H(e) {
    return { width: e.size, height: e.size };
}
function z(e) {
    let { spec: s, cardStyle: t } = e;
    return (0, i.jsx)("div", {
        className: r()(w.Nr, t),
        style: H(s),
        children: (0, i.jsx)("div", {
            className: w.ho,
            children: (0, i.jsx)(o.eu, { src: G, size: k._3.SIZE_80, "aria-label": Z.intl.string(Z.t.lqaIxI) }),
        }),
    });
}
function U(e) {
    let {
            sku: s,
            user: t,
            guildId: l,
            spec: o,
            children: m,
            cardStyle: x,
            skuPreviewStyle: f,
            skuAssetClassName: p,
            disableHoverOrFocus: j,
            disableRiveHover: v,
            onHoverOrFocusChange: I,
            onClick: A,
            "aria-label": E,
        } = e,
        N = n.useRef(null),
        { isHoveringOrFocusing: C } = (0, g.A)(N),
        R = n.useRef(I),
        b = (0, d.bG)([h.A], () => h.A.getApplication(s.applicationId));
    return (
        n.useEffect(() => {
            R.current = I;
        }, [I]),
        n.useEffect(() => {
            R.current?.(C);
        }, [C]),
        (0, i.jsxs)(a.s, {
            ref: N,
            className: r()(w.Nr, x),
            onClick: A,
            "aria-label": E,
            style: H(o),
            children: [
                (0, i.jsx)(c.A, { children: (0, i.jsx)(u.H, { children: (0, M.T)(s) }) }),
                (0, i.jsx)("div", {
                    className: r()(w.ev, f),
                    children: (0, i.jsx)(y, {
                        sku: s,
                        isFocused: !j && C,
                        user: t,
                        guildId: l,
                        eventTargetRef: v ? void 0 : N,
                        assetClassName: p,
                        disableHover: v,
                    }),
                }),
                (0, i.jsx)(O.P, { spec: o, application: b }),
                m,
            ],
        })
    );
}
