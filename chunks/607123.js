r.d(t, { Ay: () => b, pL: () => R });
var i = r(477900),
    n = r(582128),
    l = r(503698),
    s = r.n(l),
    a = r(575593),
    o = r(38021),
    d = r(844222),
    c = r(583094),
    u = r(17928),
    m = r(661531),
    x = r(775602),
    p = r(139136),
    h = r(665411),
    f = r(474012),
    g = r(929283),
    j = r(245068),
    A = r(761365),
    N = r(366523),
    v = r(403362),
    E = r(652215),
    C = r(778712),
    T = r(880465);
function R(e) {
    let {
        collectiblesItem: t,
        isFocused: r = !1,
        user: n,
        guildId: l,
        nameplatePreviewStyle: o,
        nameplatePreviewRescalerStyle: d,
    } = e;
    if (null == t) return null;
    if ("bundle" === t.type) {
        let e = t.previewAssets?.fgStatic != null;
        return (0, i.jsx)("div", {
            className: e ? T.Nq : T.hT,
            children: (0, i.jsx)(j.X, { product: t, isHighlighted: r, user: n }),
        });
    }
    switch (t.item.type) {
        case a.R.AVATAR_DECORATION:
            return (0, i.jsx)(g.i, { user: n, guildId: l, avatarSize: C._3.SIZE_80, item: t.item, isHighlighted: r });
        case a.R.PROFILE_EFFECT:
            return (0, i.jsx)("div", {
                className: T.xC,
                children: (0, i.jsx)(p.A, {
                    skuId: t.item.skuId,
                    isHighlighted: r,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case a.R.NAMEPLATE:
            return (0, i.jsx)("div", {
                className: s()(T.M4, o),
                children: (0, i.jsx)("div", {
                    className: s()(T.N1, d),
                    children: (0, i.jsx)(A.A, {
                        user: n,
                        guildId: l,
                        nameplate: t.item,
                        isHighlighted: r,
                        size: "small",
                    }),
                }),
            });
        case a.R.PROFILE_FRAME:
            return (0, i.jsx)("div", {
                className: T.pI,
                children: (0, i.jsx)(h.A, { frame: t.item, transparentBackground: !0 }),
            });
        default:
            return null;
    }
}
function P(e) {
    let { sku: t, ...r } = e,
        l = n.useMemo(() => (0, f.T7)(t), [t]);
    return null == l ? null : (0, i.jsx)(R, { collectiblesItem: l, ...r });
}
function y(e) {
    let { sku: t, isFocused: r } = e;
    return (0, i.jsx)(N.e, {
        shape: "custom",
        containerClassName: s()(T.JS, r && T.P3),
        backgroundImageClassName: T.m1,
        foregroundImageClassName: T.aF,
        sku: t,
    });
}
function I(e) {
    let { eventTargetRef: t, assetClassName: r, disableHover: l } = e,
        a = (0, u.bG)([x.Ay], () => x.Ay.useReducedMotion),
        { theme: p, saturation: h } = (0, o.wR)(),
        { highContrastModeEnabled: f } = n.useContext(d.C),
        [g, j, A, N] = m.A.colors.TEXT_DEFAULT.resolve({ theme: p, saturation: h, highContrastModeEnabled: f }).rgba();
    return (0, i.jsx)("div", {
        className: T.yv,
        children: (0, i.jsx)(c.u, {
            className: s()(T.MO, r),
            dataBinding: { reducedMotion: l || a, logoColor: { r: g, g: j, b: A, a: N } },
            eventTargetRef: t,
            fit: "contain",
        }),
    });
}
function b(e) {
    let { sku: t, isFocused: r, user: n, guildId: l, eventTargetRef: s, assetClassName: a, disableHover: o } = e;
    switch (t.productLine) {
        case E.EZt.COLLECTIBLES:
            return (0, i.jsx)(P, { sku: t, isFocused: r, user: n, guildId: l });
        case E.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(y, { sku: t, isFocused: r });
        case E.EZt.APPLICATION:
        case E.EZt.BOOST:
        case E.EZt.GUILD_ROLE:
            return null;
        case E.EZt.PREMIUM:
            return (0, i.jsx)(I, { eventTargetRef: s, assetClassName: a, disableHover: o });
        case E.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, v.xb)(t.productLine);
    }
}
