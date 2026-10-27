n.d(t, { Ay: () => T, pL: () => P });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(575593),
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
    _ = n(761365),
    g = n(366523),
    I = n(403362),
    S = n(652215),
    A = n(778712),
    x = n(880465);
function P(e) {
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
            className: e ? x.Nq : x.hT,
            children: (0, l.jsx)(y.X, { product: t, isHighlighted: n, user: r }),
        });
    }
    switch (t.item.type) {
        case s.R.AVATAR_DECORATION:
            return (0, l.jsx)(E.i, { user: r, guildId: i, avatarSize: A._3.SIZE_80, item: t.item, isHighlighted: n });
        case s.R.PROFILE_EFFECT:
            return (0, l.jsx)("div", {
                className: x.xC,
                children: (0, l.jsx)(m.A, {
                    skuId: t.item.skuId,
                    isHighlighted: n,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case s.R.NAMEPLATE:
            return (0, l.jsx)("div", {
                className: a()(x.M4, u),
                children: (0, l.jsx)("div", {
                    className: a()(x.N1, c),
                    children: (0, l.jsx)(_.A, {
                        user: r,
                        guildId: i,
                        nameplate: t.item,
                        isHighlighted: n,
                        size: "small",
                    }),
                }),
            });
        case s.R.PROFILE_FRAME:
            return (0, l.jsx)("div", {
                className: x.pI,
                children: (0, l.jsx)(p.A, { frame: t.item, transparentBackground: !0 }),
            });
        default:
            return null;
    }
}
function v(e) {
    let { sku: t, ...n } = e,
        i = r.useMemo(() => (0, C.T7)(t), [t]);
    return null == i ? null : (0, l.jsx)(P, { collectiblesItem: i, ...n });
}
function R(e) {
    let { sku: t, isFocused: n } = e;
    return (0, l.jsx)(g.e, {
        shape: "custom",
        containerClassName: a()(x.JS, n && x.P3),
        backgroundImageClassName: x.m1,
        foregroundImageClassName: x.aF,
        sku: t,
    });
}
function M(e) {
    let { eventTargetRef: t, assetClassName: n, disableHover: i } = e,
        s = (0, u.bG)([h.Ay], () => h.Ay.useReducedMotion),
        { theme: m, saturation: p } = (0, o.wR)(),
        { highContrastModeEnabled: C } = r.useContext(d.C),
        [E, y, _, g] = c.A.colors.TEXT_DEFAULT.resolve({ theme: m, saturation: p, highContrastModeEnabled: C }).rgba();
    return (0, l.jsx)("div", {
        className: x.yv,
        children: (0, l.jsx)(f.u, {
            className: a()(x.MO, n),
            dataBinding: { reducedMotion: i || s, logoColor: { r: E, g: y, b: _, a: g } },
            eventTargetRef: t,
            fit: "contain",
        }),
    });
}
function T(e) {
    let { sku: t, isFocused: n, user: r, guildId: i, eventTargetRef: a, assetClassName: s, disableHover: u } = e;
    switch (t.productLine) {
        case S.EZt.COLLECTIBLES:
            return (0, l.jsx)(v, { sku: t, isFocused: n, user: r, guildId: i });
        case S.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(R, { sku: t, isFocused: n });
        case S.EZt.APPLICATION:
        case S.EZt.BOOST:
        case S.EZt.GUILD_ROLE:
            return null;
        case S.EZt.PREMIUM:
            return (0, l.jsx)(M, { eventTargetRef: a, assetClassName: s, disableHover: u });
        case S.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, I.xb)(t.productLine);
    }
}
