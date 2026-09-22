r.d(t, { Ay: () => y, pL: () => N });
var n = r(477900),
    i = r(582128),
    l = r(503698),
    s = r.n(l),
    a = r(575593),
    o = r(38021),
    u = r(844222),
    c = r(583094),
    d = r(17928),
    m = r(661531),
    x = r(775602),
    p = r(139136),
    h = r(665411),
    f = r(474012),
    g = r(929283),
    A = r(245068),
    j = r(761365),
    E = r(366523),
    T = r(403362),
    I = r(652215),
    v = r(778712),
    R = r(880465);
function N(e) {
    let {
        collectiblesItem: t,
        isFocused: r = !1,
        user: i,
        guildId: l,
        nameplatePreviewStyle: o,
        nameplatePreviewRescalerStyle: u,
    } = e;
    if (null == t) return null;
    if ("bundle" === t.type) {
        let e = t.previewAssets?.fgStatic != null;
        return (0, n.jsx)("div", {
            className: e ? R.Nq : R.hT,
            children: (0, n.jsx)(A.X, { product: t, isHighlighted: r, user: i }),
        });
    }
    switch (t.item.type) {
        case a.R.AVATAR_DECORATION:
            return (0, n.jsx)(g.i, { user: i, guildId: l, avatarSize: v._3.SIZE_80, item: t.item, isHighlighted: r });
        case a.R.PROFILE_EFFECT:
            return (0, n.jsx)("div", {
                className: R.xC,
                children: (0, n.jsx)(p.A, {
                    skuId: t.item.skuId,
                    isHighlighted: r,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case a.R.NAMEPLATE:
            return (0, n.jsx)("div", {
                className: s()(R.M4, o),
                children: (0, n.jsx)("div", {
                    className: s()(R.N1, u),
                    children: (0, n.jsx)(j.A, {
                        user: i,
                        guildId: l,
                        nameplate: t.item,
                        isHighlighted: r,
                        size: "small",
                    }),
                }),
            });
        case a.R.PROFILE_FRAME:
            return (0, n.jsx)("div", {
                className: R.pI,
                children: (0, n.jsx)(h.A, { frame: t.item, transparentBackground: !0 }),
            });
        default:
            return null;
    }
}
function P(e) {
    let { sku: t, ...r } = e,
        l = i.useMemo(() => (0, f.T7)(t), [t]);
    return null == l ? null : (0, n.jsx)(N, { collectiblesItem: l, ...r });
}
function _(e) {
    let { sku: t, isFocused: r } = e;
    return (0, n.jsx)(E.e, {
        shape: "custom",
        containerClassName: s()(R.JS, r && R.P3),
        backgroundImageClassName: R.m1,
        foregroundImageClassName: R.aF,
        sku: t,
    });
}
function M(e) {
    let { eventTargetRef: t, assetClassName: r, disableHover: l } = e,
        a = (0, d.bG)([x.Ay], () => x.Ay.useReducedMotion),
        { theme: p, saturation: h } = (0, o.wR)(),
        { highContrastModeEnabled: f } = i.useContext(u.C),
        [g, A, j, E] = m.A.colors.TEXT_DEFAULT.resolve({ theme: p, saturation: h, highContrastModeEnabled: f }).rgba();
    return (0, n.jsx)("div", {
        className: R.yv,
        children: (0, n.jsx)(c.u, {
            className: s()(R.MO, r),
            dataBinding: { reducedMotion: l || a, logoColor: { r: g, g: A, b: j, a: E } },
            eventTargetRef: t,
            fit: "contain",
        }),
    });
}
function y(e) {
    let { sku: t, isFocused: r, user: i, guildId: l, eventTargetRef: s, assetClassName: a, disableHover: o } = e;
    switch (t.productLine) {
        case I.EZt.COLLECTIBLES:
            return (0, n.jsx)(P, { sku: t, isFocused: r, user: i, guildId: l });
        case I.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(_, { sku: t, isFocused: r });
        case I.EZt.APPLICATION:
        case I.EZt.BOOST:
        case I.EZt.GUILD_ROLE:
            return null;
        case I.EZt.PREMIUM:
            return (0, n.jsx)(M, { eventTargetRef: s, assetClassName: a, disableHover: o });
        case I.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, T.xb)(t.productLine);
    }
}
