var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(575593),
    u = n(855986),
    c = n(646514),
    o = n(38021),
    d = n(844222),
    f = n(580573),
    h = n(775602),
    m = n(139136),
    p = n(665411),
    C = n(474012),
    y = n(929283),
    E = n(842385),
    _ = n(761365),
    g = n(366523),
    I = n(403362),
    S = n(652215),
    A = n(778712),
    P = n(880465);
function x(e) {
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
            children: (0, l.jsx)(E.X, { product: t, isHighlighted: n, user: r }),
        });
    }
    switch (t.item.type) {
        case s.R.AVATAR_DECORATION:
            return (0, l.jsx)(y.i, { user: r, guildId: i, avatarSize: A._3.SIZE_80, item: t.item, isHighlighted: n });
        case s.R.PROFILE_EFFECT:
            return (0, l.jsx)("div", {
                className: P.xC,
                children: (0, l.jsx)(m.A, {
                    skuId: t.item.skuId,
                    isHighlighted: n,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case s.R.NAMEPLATE:
            return (0, l.jsx)("div", {
                className: a()(P.M4, u),
                children: (0, l.jsx)("div", {
                    className: a()(P.N1, c),
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
    return null == i ? null : (0, l.jsx)(x, { collectiblesItem: i, ...n });
}
function R(e) {
    let { sku: t, isFocused: n } = e;
    return (0, l.jsx)(g.e, {
        shape: "custom",
        containerClassName: a()(P.JS, n && P.P3),
        backgroundImageClassName: P.m1,
        foregroundImageClassName: P.aF,
        sku: t,
    });
}
function T(e) {
    let { eventTargetRef: t, assetClassName: n, disableHover: i } = e,
        s = (0, u.bG)([h.Ay], () => h.Ay.useReducedMotion),
        { theme: m, saturation: p } = (0, o.wR)(),
        { highContrastModeEnabled: C } = r.useContext(d.C),
        [y, E, _, g] = c.A.colors.TEXT_DEFAULT.resolve({ theme: m, saturation: p, highContrastModeEnabled: C }).rgba();
    return (0, l.jsx)("div", {
        className: P.yv,
        children: (0, l.jsx)(f.u, {
            className: a()(P.MO, n),
            dataBinding: { reducedMotion: i || s, logoColor: { r: y, g: E, b: _, a: g } },
            eventTargetRef: t,
            fit: "contain",
        }),
    });
}
n.d(
    t,
    {},
    {
        Ay: function (e) {
            let {
                sku: t,
                isFocused: n,
                user: r,
                guildId: i,
                eventTargetRef: a,
                assetClassName: s,
                disableHover: u,
            } = e;
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
                    return (0, l.jsx)(T, { eventTargetRef: a, assetClassName: s, disableHover: u });
                case S.EZt.GUILD_PRODUCT:
                    return null;
                default:
                    (0, I.xb)(t.productLine);
            }
        },
        pL: x,
    },
);
