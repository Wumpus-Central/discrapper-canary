r.d(t, { Ay: () => y, pL: () => P });
var i = r(477900),
    n = r(582128),
    s = r(503698),
    l = r.n(s),
    a = r(575593),
    u = r(38021),
    o = r(844222),
    c = r(583094),
    d = r(17928),
    m = r(661531),
    h = r(775602),
    f = r(139136),
    x = r(665411),
    p = r(474012),
    g = r(929283),
    A = r(245068),
    j = r(761365),
    E = r(366523),
    v = r(403362),
    N = r(652215),
    R = r(778712),
    C = r(880465);
function P(e) {
    let {
        collectiblesItem: t,
        isFocused: r = !1,
        user: n,
        guildId: s,
        nameplatePreviewStyle: u,
        nameplatePreviewRescalerStyle: o,
    } = e;
    if (null == t) return null;
    if ("bundle" === t.type) {
        let e = t.previewAssets?.fgStatic != null;
        return (0, i.jsx)("div", {
            className: e ? C.Nq : C.hT,
            children: (0, i.jsx)(A.X, { product: t, isHighlighted: r, user: n }),
        });
    }
    switch (t.item.type) {
        case a.R.AVATAR_DECORATION:
            return (0, i.jsx)(g.i, { user: n, guildId: s, avatarSize: R._3.SIZE_80, item: t.item, isHighlighted: r });
        case a.R.PROFILE_EFFECT:
            return (0, i.jsx)("div", {
                className: C.xC,
                children: (0, i.jsx)(f.A, {
                    skuId: t.item.skuId,
                    isHighlighted: r,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case a.R.NAMEPLATE:
            return (0, i.jsx)("div", {
                className: l()(C.M4, u),
                children: (0, i.jsx)("div", {
                    className: l()(C.N1, o),
                    children: (0, i.jsx)(j.A, {
                        user: n,
                        guildId: s,
                        nameplate: t.item,
                        isHighlighted: r,
                        size: "small",
                    }),
                }),
            });
        case a.R.PROFILE_FRAME:
            return (0, i.jsx)("div", {
                className: C.pI,
                children: (0, i.jsx)(x.A, { frame: t.item, transparentBackground: !0 }),
            });
        default:
            return null;
    }
}
function T(e) {
    let { sku: t, ...r } = e,
        s = n.useMemo(() => (0, p.T7)(t), [t]);
    return null == s ? null : (0, i.jsx)(P, { collectiblesItem: s, ...r });
}
function I(e) {
    let { sku: t, isFocused: r } = e;
    return (0, i.jsx)(E.e, {
        shape: "custom",
        containerClassName: l()(C.JS, r && C.P3),
        backgroundImageClassName: C.m1,
        foregroundImageClassName: C.aF,
        sku: t,
    });
}
function S(e) {
    let { eventTargetRef: t, assetClassName: r, disableHover: s } = e,
        a = (0, d.bG)([h.Ay], () => h.Ay.useReducedMotion),
        { theme: f, saturation: x } = (0, u.wR)(),
        { highContrastModeEnabled: p } = n.useContext(o.C),
        [g, A, j, E] = m.A.colors.TEXT_DEFAULT.resolve({ theme: f, saturation: x, highContrastModeEnabled: p }).rgba();
    return (0, i.jsx)("div", {
        className: C.yv,
        children: (0, i.jsx)(c.u, {
            className: l()(C.MO, r),
            dataBinding: { reducedMotion: s || a, logoColor: { r: g, g: A, b: j, a: E } },
            eventTargetRef: t,
            fit: "contain",
        }),
    });
}
function y(e) {
    let { sku: t, isFocused: r, user: n, guildId: s, eventTargetRef: l, assetClassName: a, disableHover: u } = e;
    switch (t.productLine) {
        case N.EZt.COLLECTIBLES:
            return (0, i.jsx)(T, { sku: t, isFocused: r, user: n, guildId: s });
        case N.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(I, { sku: t, isFocused: r });
        case N.EZt.APPLICATION:
        case N.EZt.BOOST:
        case N.EZt.GUILD_ROLE:
            return null;
        case N.EZt.PREMIUM:
            return (0, i.jsx)(S, { eventTargetRef: l, assetClassName: a, disableHover: u });
        case N.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, v.xb)(t.productLine);
    }
}
