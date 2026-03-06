"use strict";
n.d(t, { Ay: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(575593),
    l = n(474012),
    u = n(929283),
    c = n(245068),
    d = n(761365),
    _ = n(331402),
    f = n(366523),
    p = n(403362),
    h = n(652215),
    m = n(778712),
    E = n(902365);
function g(e) {
    let { sku: t, isFocused: n, user: s } = e,
        a = i.useMemo(() => (0, l.T)(t), [t]);
    if (null == a) return null;
    if ("bundle" === a.type)
        return (0, r.jsx)("div", {
            className: E.hT,
            children: (0, r.jsx)(c.X, { product: a, isHighlighted: n, user: s }),
        });
    switch (a.item.type) {
        case o.R.AVATAR_DECORATION:
            return (0, r.jsx)(u.i, { user: s, avatarSize: m._3.SIZE_80, item: a.item, isHighlighted: n });
        case o.R.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: E.xC,
                children: (0, r.jsx)(_.A, {
                    skuId: a.item.skuId,
                    isHighlighted: n,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case o.R.NAMEPLATE:
            return (0, r.jsx)("div", {
                className: E.M4,
                children: (0, r.jsx)("div", {
                    className: E.N1,
                    children: (0, r.jsx)(d.A, { user: s, nameplate: a.item, isHighlighted: n, size: "small" }),
                }),
            });
        default:
            return null;
    }
}
function A(e) {
    let { sku: t, isFocused: n } = e;
    return (0, r.jsx)(f.e, {
        shape: "custom",
        containerClassName: a()(E.JS, n && E.P3),
        backgroundImageClassName: E.m1,
        foregroundImageClassName: E.aF,
        sku: t,
    });
}
function I(e) {
    let { sku: t, isFocused: n, user: i } = e;
    switch (t.productLine) {
        case h.EZt.COLLECTIBLES:
            return (0, r.jsx)(g, { sku: t, isFocused: n, user: i });
        case h.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, r.jsx)(A, { sku: t, isFocused: n });
        case h.EZt.APPLICATION:
        case h.EZt.BOOST:
        case h.EZt.GUILD_ROLE:
        case h.EZt.PREMIUM:
        case h.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, p.xb)(t.productLine);
    }
}
