s.d(t, { Ay: () => y, pL: () => j });
var l = s(477900),
    a = s(582128),
    n = s(503698),
    r = s.n(n),
    i = s(575593),
    u = s(17928),
    d = s(661531),
    c = s(38021),
    o = s(844222),
    g = s(583094),
    h = s(775602),
    f = s(139136),
    m = s(665411),
    E = s(474012),
    S = s(929283),
    x = s(245068),
    v = s(761365),
    R = s(366523),
    p = s(403362),
    A = s(652215),
    I = s(778712),
    N = s(880465);
function j(e) {
    let {
        collectiblesItem: t,
        isFocused: s = !1,
        user: a,
        guildId: n,
        nameplatePreviewStyle: u,
        nameplatePreviewRescalerStyle: d,
    } = e;
    if (null == t) return null;
    if ("bundle" === t.type) {
        let e = t.previewAssets?.fgStatic != null;
        return (0, l.jsx)("div", {
            className: e ? N.Nq : N.hT,
            children: (0, l.jsx)(x.X, { product: t, isHighlighted: s, user: a }),
        });
    }
    switch (t.item.type) {
        case i.R.AVATAR_DECORATION:
            return (0, l.jsx)(S.i, { user: a, guildId: n, avatarSize: I._3.SIZE_80, item: t.item, isHighlighted: s });
        case i.R.PROFILE_EFFECT:
            return (0, l.jsx)("div", {
                className: N.xC,
                children: (0, l.jsx)(f.A, {
                    skuId: t.item.skuId,
                    isHighlighted: s,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case i.R.NAMEPLATE:
            return (0, l.jsx)("div", {
                className: r()(N.M4, u),
                children: (0, l.jsx)("div", {
                    className: r()(N.N1, d),
                    children: (0, l.jsx)(v.A, {
                        user: a,
                        guildId: n,
                        nameplate: t.item,
                        isHighlighted: s,
                        size: "small",
                    }),
                }),
            });
        case i.R.PROFILE_FRAME:
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
        n = a.useMemo(() => (0, E.T7)(t), [t]);
    return null == n ? null : (0, l.jsx)(j, { collectiblesItem: n, ...s });
}
function G(e) {
    let { sku: t, isFocused: s } = e;
    return (0, l.jsx)(R.e, {
        shape: "custom",
        containerClassName: r()(N.JS, s && N.P3),
        backgroundImageClassName: N.m1,
        foregroundImageClassName: N.aF,
        sku: t,
    });
}
function L(e) {
    let { eventTargetRef: t, assetClassName: s, disableHover: n } = e,
        i = (0, u.bG)([h.Ay], () => h.Ay.useReducedMotion),
        { theme: f, saturation: m } = (0, c.wR)(),
        { highContrastModeEnabled: E } = a.useContext(o.C),
        [S, x, v, R] = d.A.colors.TEXT_DEFAULT.resolve({ theme: f, saturation: m, highContrastModeEnabled: E }).rgba();
    return (0, l.jsx)("div", {
        className: N.yv,
        children: (0, l.jsx)(g.u, {
            className: r()(N.MO, s),
            dataBinding: { reducedMotion: n || i, logoColor: { r: S, g: x, b: v, a: R } },
            eventTargetRef: t,
            fit: "contain",
        }),
    });
}
function y(e) {
    let { sku: t, isFocused: s, user: a, guildId: n, eventTargetRef: r, assetClassName: i, disableHover: u } = e;
    switch (t.productLine) {
        case A.EZt.COLLECTIBLES:
            return (0, l.jsx)(P, { sku: t, isFocused: s, user: a, guildId: n });
        case A.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(G, { sku: t, isFocused: s });
        case A.EZt.APPLICATION:
        case A.EZt.BOOST:
        case A.EZt.GUILD_ROLE:
            return null;
        case A.EZt.PREMIUM:
            return (0, l.jsx)(L, { eventTargetRef: r, assetClassName: i, disableHover: u });
        case A.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, p.xb)(t.productLine);
    }
}
