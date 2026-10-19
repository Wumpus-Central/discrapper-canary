n.d(t, { Ay: () => T, pL: () => A });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    s = n.n(i),
    a = n(575593),
    u = n(17928),
    c = n(661531),
    o = n(38021),
    d = n(844222),
    f = n(583094),
    h = n(775602),
    m = n(139136),
    p = n(665411),
    C = n(474012),
    E = n(929283),
    y = n(245068),
    I = n(761365),
    g = n(366523),
    S = n(403362),
    _ = n(652215),
    x = n(778712),
    P = n(880465);
function A(e) {
    let {
        collectiblesItem: t,
        isFocused: n = !1,
        user: r,
        guildId: i,
        nameplatePreviewStyle: u,
        nameplatePreviewRescalerStyle: c,
    } = e;
    if (null == t) return null;
    if ("bundle" === t.type) {
        let e = t.previewAssets?.fgStatic != null;
        return (0, l.jsx)("div", {
            className: e ? P.Nq : P.hT,
            children: (0, l.jsx)(y.X, { product: t, isHighlighted: n, user: r }),
        });
    }
    switch (t.item.type) {
        case a.R.AVATAR_DECORATION:
            return (0, l.jsx)(E.i, { user: r, guildId: i, avatarSize: x._3.SIZE_80, item: t.item, isHighlighted: n });
        case a.R.PROFILE_EFFECT:
            return (0, l.jsx)("div", {
                className: P.xC,
                children: (0, l.jsx)(m.A, {
                    skuId: t.item.skuId,
                    isHighlighted: n,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case a.R.NAMEPLATE:
            return (0, l.jsx)("div", {
                className: s()(P.M4, u),
                children: (0, l.jsx)("div", {
                    className: s()(P.N1, c),
                    children: (0, l.jsx)(I.A, {
                        user: r,
                        guildId: i,
                        nameplate: t.item,
                        isHighlighted: n,
                        size: "small",
                    }),
                }),
            });
        case a.R.PROFILE_FRAME:
            return (0, l.jsx)("div", {
                className: P.pI,
                children: (0, l.jsx)(p.A, { frame: t.item, transparentBackground: !0 }),
            });
        default:
            return null;
    }
}
function v(e) {
    let { sku: t, ...n } = e,
        i = r.useMemo(() => (0, C.T7)(t), [t]);
    return null == i ? null : (0, l.jsx)(A, { collectiblesItem: i, ...n });
}
function R(e) {
    let { sku: t, isFocused: n } = e;
    return (0, l.jsx)(g.e, {
        shape: "custom",
        containerClassName: s()(P.JS, n && P.P3),
        backgroundImageClassName: P.m1,
        foregroundImageClassName: P.aF,
        sku: t,
    });
}
function M(e) {
    let { eventTargetRef: t, assetClassName: n, disableHover: i } = e,
        a = (0, u.bG)([h.Ay], () => h.Ay.useReducedMotion),
        { theme: m, saturation: p } = (0, o.wR)(),
        { highContrastModeEnabled: C } = r.useContext(d.C),
        [E, y, I, g] = c.A.colors.TEXT_DEFAULT.resolve({ theme: m, saturation: p, highContrastModeEnabled: C }).rgba();
    return (0, l.jsx)("div", {
        className: P.yv,
        children: (0, l.jsx)(f.u, {
            className: s()(P.MO, n),
            dataBinding: { reducedMotion: i || a, logoColor: { r: E, g: y, b: I, a: g } },
            eventTargetRef: t,
            fit: "contain",
        }),
    });
}
function T(e) {
    let { sku: t, isFocused: n, user: r, guildId: i, eventTargetRef: s, assetClassName: a, disableHover: u } = e;
    switch (t.productLine) {
        case _.EZt.COLLECTIBLES:
            return (0, l.jsx)(v, { sku: t, isFocused: n, user: r, guildId: i });
        case _.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(R, { sku: t, isFocused: n });
        case _.EZt.APPLICATION:
        case _.EZt.BOOST:
        case _.EZt.GUILD_ROLE:
            return null;
        case _.EZt.PREMIUM:
            return (0, l.jsx)(M, { eventTargetRef: s, assetClassName: a, disableHover: u });
        case _.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, S.xb)(t.productLine);
    }
}
