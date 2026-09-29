r.d(t, { Ay: () => M, pL: () => T });
var s = r(477900),
    i = r(582128),
    l = r(503698),
    n = r.n(l),
    a = r(575593),
    c = r(17928),
    u = r(661531),
    d = r(38021),
    o = r(844222),
    m = r(583094),
    h = r(775602),
    x = r(139136),
    p = r(665411),
    f = r(474012),
    g = r(929283),
    j = r(245068),
    v = r(761365),
    N = r(366523),
    E = r(403362),
    R = r(652215),
    A = r(778712),
    C = r(880465);
function T(e) {
    let {
        collectiblesItem: t,
        isFocused: r = !1,
        user: i,
        guildId: l,
        nameplatePreviewStyle: c,
        nameplatePreviewRescalerStyle: u,
    } = e;
    if (null == t) return null;
    if ("bundle" === t.type) {
        let e = t.previewAssets?.fgStatic != null;
        return (0, s.jsx)("div", {
            className: e ? C.Nq : C.hT,
            children: (0, s.jsx)(j.X, { product: t, isHighlighted: r, user: i }),
        });
    }
    switch (t.item.type) {
        case a.R.AVATAR_DECORATION:
            return (0, s.jsx)(g.i, { user: i, guildId: l, avatarSize: A._3.SIZE_80, item: t.item, isHighlighted: r });
        case a.R.PROFILE_EFFECT:
            return (0, s.jsx)("div", {
                className: C.xC,
                children: (0, s.jsx)(x.A, {
                    skuId: t.item.skuId,
                    isHighlighted: r,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case a.R.NAMEPLATE:
            return (0, s.jsx)("div", {
                className: n()(C.M4, c),
                children: (0, s.jsx)("div", {
                    className: n()(C.N1, u),
                    children: (0, s.jsx)(v.A, {
                        user: i,
                        guildId: l,
                        nameplate: t.item,
                        isHighlighted: r,
                        size: "small",
                    }),
                }),
            });
        case a.R.PROFILE_FRAME:
            return (0, s.jsx)("div", {
                className: C.pI,
                children: (0, s.jsx)(p.A, { frame: t.item, transparentBackground: !0 }),
            });
        default:
            return null;
    }
}
function I(e) {
    let { sku: t, ...r } = e,
        l = i.useMemo(() => (0, f.T7)(t), [t]);
    return null == l ? null : (0, s.jsx)(T, { collectiblesItem: l, ...r });
}
function S(e) {
    let { sku: t, isFocused: r } = e;
    return (0, s.jsx)(N.e, {
        shape: "custom",
        containerClassName: n()(C.JS, r && C.P3),
        backgroundImageClassName: C.m1,
        foregroundImageClassName: C.aF,
        sku: t,
    });
}
function P(e) {
    let { eventTargetRef: t, assetClassName: r, disableHover: l } = e,
        a = (0, c.bG)([h.Ay], () => h.Ay.useReducedMotion),
        { theme: x, saturation: p } = (0, d.wR)(),
        { highContrastModeEnabled: f } = i.useContext(o.C),
        [g, j, v, N] = u.A.colors.TEXT_DEFAULT.resolve({ theme: x, saturation: p, highContrastModeEnabled: f }).rgba();
    return (0, s.jsx)("div", {
        className: C.yv,
        children: (0, s.jsx)(m.u, {
            className: n()(C.MO, r),
            dataBinding: { reducedMotion: l || a, logoColor: { r: g, g: j, b: v, a: N } },
            eventTargetRef: t,
            fit: "contain",
        }),
    });
}
function M(e) {
    let { sku: t, isFocused: r, user: i, guildId: l, eventTargetRef: n, assetClassName: a, disableHover: c } = e;
    switch (t.productLine) {
        case R.EZt.COLLECTIBLES:
            return (0, s.jsx)(I, { sku: t, isFocused: r, user: i, guildId: l });
        case R.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, s.jsx)(S, { sku: t, isFocused: r });
        case R.EZt.APPLICATION:
        case R.EZt.BOOST:
        case R.EZt.GUILD_ROLE:
            return null;
        case R.EZt.PREMIUM:
            return (0, s.jsx)(P, { eventTargetRef: n, assetClassName: a, disableHover: c });
        case R.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, E.xb)(t.productLine);
    }
}
