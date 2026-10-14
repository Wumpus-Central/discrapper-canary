s.d(t, { Ay: () => y, pL: () => j });
var l = s(477900),
    i = s(582128),
    a = s(503698),
    r = s.n(a),
    n = s(575593),
    u = s(17928),
    c = s(661531),
    d = s(38021),
    o = s(844222),
    g = s(583094),
    f = s(775602),
    h = s(139136),
    m = s(665411),
    E = s(474012),
    S = s(929283),
    R = s(245068),
    p = s(761365),
    x = s(366523),
    v = s(403362),
    A = s(652215),
    I = s(778712),
    N = s(880465);
function j(e) {
    let {
        collectiblesItem: t,
        isFocused: s = !1,
        user: i,
        guildId: a,
        nameplatePreviewStyle: u,
        nameplatePreviewRescalerStyle: c,
    } = e;
    if (null == t) return null;
    if ("bundle" === t.type) {
        let e = t.previewAssets?.fgStatic != null;
        return (0, l.jsx)("div", {
            className: e ? N.Nq : N.hT,
            children: (0, l.jsx)(R.X, { product: t, isHighlighted: s, user: i }),
        });
    }
    switch (t.item.type) {
        case n.R.AVATAR_DECORATION:
            return (0, l.jsx)(S.i, { user: i, guildId: a, avatarSize: I._3.SIZE_80, item: t.item, isHighlighted: s });
        case n.R.PROFILE_EFFECT:
            return (0, l.jsx)("div", {
                className: N.xC,
                children: (0, l.jsx)(h.A, {
                    skuId: t.item.skuId,
                    isHighlighted: s,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case n.R.NAMEPLATE:
            return (0, l.jsx)("div", {
                className: r()(N.M4, u),
                children: (0, l.jsx)("div", {
                    className: r()(N.N1, c),
                    children: (0, l.jsx)(p.A, {
                        user: i,
                        guildId: a,
                        nameplate: t.item,
                        isHighlighted: s,
                        size: "small",
                    }),
                }),
            });
        case n.R.PROFILE_FRAME:
            return (0, l.jsx)("div", {
                className: N.pI,
                children: (0, l.jsx)(m.A, { frame: t.item, transparentBackground: !0 }),
            });
        default:
            return null;
    }
}
function P(e) {
    let { sku: t, ...s } = e,
        a = i.useMemo(() => (0, E.T7)(t), [t]);
    return null == a ? null : (0, l.jsx)(j, { collectiblesItem: a, ...s });
}
function G(e) {
    let { sku: t, isFocused: s } = e;
    return (0, l.jsx)(x.e, {
        shape: "custom",
        containerClassName: r()(N.JS, s && N.P3),
        backgroundImageClassName: N.m1,
        foregroundImageClassName: N.aF,
        sku: t,
    });
}
function L(e) {
    let { eventTargetRef: t, assetClassName: s, disableHover: a } = e,
        n = (0, u.bG)([f.Ay], () => f.Ay.useReducedMotion),
        { theme: h, saturation: m } = (0, d.wR)(),
        { highContrastModeEnabled: E } = i.useContext(o.C),
        [S, R, p, x] = c.A.colors.TEXT_DEFAULT.resolve({ theme: h, saturation: m, highContrastModeEnabled: E }).rgba();
    return (0, l.jsx)("div", {
        className: N.yv,
        children: (0, l.jsx)(g.u, {
            className: r()(N.MO, s),
            dataBinding: { reducedMotion: a || n, logoColor: { r: S, g: R, b: p, a: x } },
            eventTargetRef: t,
            fit: "contain",
        }),
    });
}
function y(e) {
    let { sku: t, isFocused: s, user: i, guildId: a, eventTargetRef: r, assetClassName: n, disableHover: u } = e;
    switch (t.productLine) {
        case A.EZt.COLLECTIBLES:
            return (0, l.jsx)(P, { sku: t, isFocused: s, user: i, guildId: a });
        case A.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(G, { sku: t, isFocused: s });
        case A.EZt.APPLICATION:
        case A.EZt.BOOST:
        case A.EZt.GUILD_ROLE:
            return null;
        case A.EZt.PREMIUM:
            return (0, l.jsx)(L, { eventTargetRef: r, assetClassName: n, disableHover: u });
        case A.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, v.xb)(t.productLine);
    }
}
