"use strict";
n.d(t, { Ay: () => v, JY: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(575593),
    l = n(158954),
    u = n(311907),
    c = n(775602),
    d = n(139136),
    _ = n(474012),
    f = n(929283),
    p = n(245068),
    h = n(761365),
    m = n(366523),
    E = n(403362),
    g = n(652215),
    A = n(778712),
    I = n(913110);
function T(e) {
    let { sku: t, isFocused: n, user: s } = e,
        a = i.useMemo(() => (0, _.T)(t), [t]);
    if (null == a) return null;
    if ("bundle" === a.type)
        return (0, r.jsx)("div", {
            className: I.hT,
            children: (0, r.jsx)(p.X, { product: a, isHighlighted: n, user: s }),
        });
    switch (a.item.type) {
        case o.R.AVATAR_DECORATION:
            return (0, r.jsx)(f.i, { user: s, avatarSize: A._3.SIZE_80, item: a.item, isHighlighted: n });
        case o.R.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: I.xC,
                children: (0, r.jsx)(d.A, {
                    skuId: a.item.skuId,
                    isHighlighted: n,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case o.R.NAMEPLATE:
            return (0, r.jsx)("div", {
                className: I.M4,
                children: (0, r.jsx)("div", {
                    className: I.N1,
                    children: (0, r.jsx)(h.A, { user: s, nameplate: a.item, isHighlighted: n, size: "small" }),
                }),
            });
        default:
            return null;
    }
}
function S(e) {
    let { sku: t, isFocused: n } = e;
    return (0, r.jsx)(m.e, {
        shape: "custom",
        containerClassName: a()(I.JS, n && I.P3),
        backgroundImageClassName: I.m1,
        foregroundImageClassName: I.aF,
        sku: t,
    });
}
function y(e) {
    let { eventTargetRef: t, assetClassName: n } = e,
        i = (0, u.bG)([c.A], () => c.A.useReducedMotion);
    return (0, r.jsxs)("div", {
        className: I.yv,
        children: [
            (0, r.jsx)("div", { className: I.GY }),
            (0, r.jsx)(l.L71, {
                className: a()(I.MO, n),
                dataBinding: { reducedMotion: i },
                eventTargetRef: t,
                fit: "contain",
            }),
        ],
    });
}
function v(e) {
    let { sku: t, isFocused: n, user: i, eventTargetRef: s, assetClassName: a } = e;
    switch (t.productLine) {
        case g.EZt.COLLECTIBLES:
            return (0, r.jsx)(T, { sku: t, isFocused: n, user: i });
        case g.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, r.jsx)(S, { sku: t, isFocused: n });
        case g.EZt.APPLICATION:
        case g.EZt.BOOST:
        case g.EZt.GUILD_ROLE:
            return null;
        case g.EZt.PREMIUM:
            return (0, r.jsx)(y, { eventTargetRef: s, assetClassName: a });
        case g.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, E.xb)(t.productLine);
    }
}
