n.d(t, {
    Ay: () => h,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(575593),
    s = n(474012),
    c = n(929283),
    u = n(245068),
    d = n(550111),
    f = n(331402),
    p = n(366523),
    g = n(403362),
    m = n(652215),
    b = n(778712),
    y = n(223555);

function O(e) {
    let { sku: t, isFocused: n, user: i, options: a } = e,
        p = l.useMemo(() => (0, s.T)(t), [t]);
    if (null == p) return null;
    if ("bundle" === p.type)
        return (0, r.jsx)("div", {
            className: y.hT,
            children: (0, r.jsx)(u.X, {
                product: p,
                isHighlighted: n,
                user: i,
            }),
        });
    switch (p.item.type) {
        case o.R.AVATAR_DECORATION:
            return (0, r.jsx)(c.i, {
                user: i,
                avatarSize: b._3.SIZE_80,
                item: p.item,
                isHighlighted: n,
            });
        case o.R.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: y.xC,
                children: (0, r.jsx)(f.A, {
                    skuId: p.item.skuId,
                    isHighlighted: n,
                    removeSetHeight: !0,
                }),
            });
        case o.R.NAMEPLATE:
            var g, m;
            return (0, r.jsxs)("div", {
                className: y.M4,
                children: [
                    (0, r.jsx)("div", {
                        className: y.Qt,
                        children: (0, r.jsx)(d.A, {
                            user: i,
                            nameplate: p.item,
                            isHighlighted: n,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            nameplatePreviewSize: "default",
                            width: null != (g = null == a ? void 0 : a.nameplateWidth) ? g : 200,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: y.BM,
                        "aria-hidden": !0,
                        children: (0, r.jsx)(d.A, {
                            user: i,
                            nameplate: p.item,
                            isHighlighted: n,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            nameplatePreviewSize: "default",
                            width: null != (m = null == a ? void 0 : a.nameplateWidth) ? m : 200,
                        }),
                    }),
                ],
            });
        default:
            return null;
    }
}

function j(e) {
    let { sku: t, isFocused: n } = e;
    return (0, r.jsx)(p.e, {
        shape: "custom",
        containerClassName: a()(y.JS, n && y.P3),
        backgroundImageClassName: y.m1,
        foregroundImageClassName: y.aF,
        sku: t,
    });
}

function h(e) {
    let { sku: t, isFocused: n, user: l, options: i } = e;
    switch (t.productLine) {
        case m.EZt.COLLECTIBLES:
            return (0, r.jsx)(O, {
                sku: t,
                isFocused: n,
                user: l,
                options: i,
            });
        case m.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, r.jsx)(j, {
                sku: t,
                isFocused: n,
            });
        case m.EZt.APPLICATION:
        case m.EZt.BOOST:
        case m.EZt.GUILD_ROLE:
        case m.EZt.PREMIUM:
        case m.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, g.xb)(t.productLine);
    }
}
