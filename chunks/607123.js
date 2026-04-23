n.d(t, { Ay: () => T });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(575593),
    o = n(38021),
    d = n(844222),
    c = n(640180),
    u = n(311907),
    h = n(827734),
    A = n(775602),
    _ = n(139136),
    m = n(474012),
    g = n(929283),
    p = n(245068),
    f = n(761365),
    E = n(366523),
    x = n(403362),
    I = n(652215),
    C = n(778712),
    b = n(997990);
function N(e) {
    let { sku: t, isFocused: n, user: s } = e,
        a = l.useMemo(() => (0, m.T)(t), [t]);
    if (null == a) return null;
    if ("bundle" === a.type)
        return (0, i.jsx)("div", {
            className: b.hT,
            children: (0, i.jsx)(p.X, { product: a, isHighlighted: n, user: s }),
        });
    switch (a.item.type) {
        case r.R.AVATAR_DECORATION:
            return (0, i.jsx)(g.i, { user: s, avatarSize: C._3.SIZE_80, item: a.item, isHighlighted: n });
        case r.R.PROFILE_EFFECT:
            return (0, i.jsx)("div", {
                className: b.xC,
                children: (0, i.jsx)(_.A, {
                    skuId: a.item.skuId,
                    isHighlighted: n,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case r.R.NAMEPLATE:
            return (0, i.jsx)("div", {
                className: b.M4,
                children: (0, i.jsx)("div", {
                    className: b.N1,
                    children: (0, i.jsx)(f.A, { user: s, nameplate: a.item, isHighlighted: n, size: "small" }),
                }),
            });
        default:
            return null;
    }
}
function S(e) {
    let { sku: t, isFocused: n } = e;
    return (0, i.jsx)(E.e, {
        shape: "custom",
        containerClassName: a()(b.JS, n && b.P3),
        backgroundImageClassName: b.m1,
        foregroundImageClassName: b.aF,
        sku: t,
    });
}
function v(e) {
    let { eventTargetRef: t, assetClassName: n, disableHover: s } = e,
        r = (0, u.bG)([A.A], () => A.A.useReducedMotion),
        { theme: _, saturation: m } = (0, o.wR)(),
        { highContrastModeEnabled: g } = l.useContext(d.C),
        [p, f, E, x] = h.A.colors.TEXT_DEFAULT.resolve({ theme: _, saturation: m, highContrastModeEnabled: g }).rgba();
    return (0, i.jsx)("div", {
        className: b.yv,
        children: (0, i.jsx)(c.u, {
            className: a()(b.MO, n),
            dataBinding: { reducedMotion: s || r, logoColor: { r: p, g: f, b: E, a: x } },
            eventTargetRef: t,
            fit: "contain",
        }),
    });
}
function T(e) {
    let { sku: t, isFocused: n, user: l, eventTargetRef: s, assetClassName: a, disableHover: r } = e;
    switch (t.productLine) {
        case I.EZt.COLLECTIBLES:
            return (0, i.jsx)(N, { sku: t, isFocused: n, user: l });
        case I.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(S, { sku: t, isFocused: n });
        case I.EZt.APPLICATION:
        case I.EZt.BOOST:
        case I.EZt.GUILD_ROLE:
            return null;
        case I.EZt.PREMIUM:
            return (0, i.jsx)(v, { eventTargetRef: s, assetClassName: a, disableHover: r });
        case I.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, x.xb)(t.productLine);
    }
}
