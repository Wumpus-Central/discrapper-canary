"use strict";
n.d(t, { Ay: () => T });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(575593),
    l = n(474012),
    u = n(929283),
    c = n(245068),
    d = n(550111),
    _ = n(331402),
    f = n(366523),
    p = n(403362),
    h = n(652215),
    m = n(778712),
    g = n(223555);
let E = 200;
function A(e) {
    let { sku: t, isFocused: n, user: a, options: s } = e,
        f = i.useMemo(() => (0, l.T)(t), [t]);
    if (null == f) return null;
    if ("bundle" === f.type)
        return (0, r.jsx)("div", {
            className: g.hT,
            children: (0, r.jsx)(c.X, { product: f, isHighlighted: n, user: a }),
        });
    switch (f.item.type) {
        case o.R.AVATAR_DECORATION:
            return (0, r.jsx)(u.i, { user: a, avatarSize: m._3.SIZE_80, item: f.item, isHighlighted: n });
        case o.R.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: g.xC,
                children: (0, r.jsx)(_.A, { skuId: f.item.skuId, isHighlighted: n, removeSetHeight: !0 }),
            });
        case o.R.NAMEPLATE:
            return (0, r.jsxs)("div", {
                className: g.M4,
                children: [
                    (0, r.jsx)("div", {
                        className: g.Qt,
                        children: (0, r.jsx)(d.A, {
                            user: a,
                            nameplate: f.item,
                            isHighlighted: n,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            nameplatePreviewSize: "default",
                            width: s?.collectibles?.nameplate?.width ?? E,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: g.BM,
                        "aria-hidden": !0,
                        children: (0, r.jsx)(d.A, {
                            user: a,
                            nameplate: f.item,
                            isHighlighted: n,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            nameplatePreviewSize: "default",
                            width: s?.collectibles?.nameplate?.width ?? E,
                        }),
                    }),
                ],
            });
        default:
            return null;
    }
}
function I(e) {
    let { sku: t, isFocused: n } = e;
    return (0, r.jsx)(f.e, {
        shape: "custom",
        containerClassName: s()(g.JS, n && g.P3),
        backgroundImageClassName: g.m1,
        foregroundImageClassName: g.aF,
        sku: t,
    });
}
function T(e) {
    let { sku: t, isFocused: n, user: i, options: a } = e;
    switch (t.productLine) {
        case h.EZt.COLLECTIBLES:
            return (0, r.jsx)(A, { sku: t, isFocused: n, user: i, options: a });
        case h.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, r.jsx)(I, { sku: t, isFocused: n });
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
