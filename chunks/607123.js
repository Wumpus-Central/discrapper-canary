"use strict";
n.d(t, { Ay: () => N, JY: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(575593),
    l = n(158954),
    u = n(311907),
    c = n(827734),
    d = n(775602),
    _ = n(139136),
    f = n(474012),
    p = n(929283),
    h = n(245068),
    m = n(761365),
    E = n(366523),
    g = n(403362),
    A = n(652215),
    I = n(778712),
    T = n(913110);
function S(e) {
    let { sku: t, isFocused: n, user: s } = e,
        a = i.useMemo(() => (0, f.T)(t), [t]);
    if (null == a) return null;
    if ("bundle" === a.type)
        return (0, r.jsx)("div", {
            className: T.hT,
            children: (0, r.jsx)(h.X, { product: a, isHighlighted: n, user: s }),
        });
    switch (a.item.type) {
        case o.R.AVATAR_DECORATION:
            return (0, r.jsx)(p.i, { user: s, avatarSize: I._3.SIZE_80, item: a.item, isHighlighted: n });
        case o.R.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: T.xC,
                children: (0, r.jsx)(_.A, {
                    skuId: a.item.skuId,
                    isHighlighted: n,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case o.R.NAMEPLATE:
            return (0, r.jsx)("div", {
                className: T.M4,
                children: (0, r.jsx)("div", {
                    className: T.N1,
                    children: (0, r.jsx)(m.A, { user: s, nameplate: a.item, isHighlighted: n, size: "small" }),
                }),
            });
        default:
            return null;
    }
}
function y(e) {
    let { sku: t, isFocused: n } = e;
    return (0, r.jsx)(E.e, {
        shape: "custom",
        containerClassName: a()(T.JS, n && T.P3),
        backgroundImageClassName: T.m1,
        foregroundImageClassName: T.aF,
        sku: t,
    });
}
function v(e) {
    let { eventTargetRef: t, assetClassName: n, disableHover: s } = e,
        o = (0, u.bG)([d.A], () => d.A.useReducedMotion),
        { theme: _, saturation: f } = (0, l.wRf)(),
        { highContrastModeEnabled: p } = i.useContext(l.CZY),
        [h, m, E, g] = c.A.colors.TEXT_DEFAULT.resolve({ theme: _, saturation: f, highContrastModeEnabled: p }).rgba();
    return (0, r.jsx)("div", {
        className: T.yv,
        children: (0, r.jsx)(l.u84, {
            className: a()(T.MO, n),
            dataBinding: { reducedMotion: s || o, logoColor: { r: h, g: m, b: E, a: g } },
            eventTargetRef: t,
            fit: "contain",
        }),
    });
}
function N(e) {
    let { sku: t, isFocused: n, user: i, eventTargetRef: s, assetClassName: a, disableHover: o } = e;
    switch (t.productLine) {
        case A.EZt.COLLECTIBLES:
            return (0, r.jsx)(S, { sku: t, isFocused: n, user: i });
        case A.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, r.jsx)(y, { sku: t, isFocused: n });
        case A.EZt.APPLICATION:
        case A.EZt.BOOST:
        case A.EZt.GUILD_ROLE:
            return null;
        case A.EZt.PREMIUM:
            return (0, r.jsx)(v, { eventTargetRef: s, assetClassName: a, disableHover: o });
        case A.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, g.xb)(t.productLine);
    }
}
