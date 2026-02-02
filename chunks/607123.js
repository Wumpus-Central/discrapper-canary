n.d(t, {
    Ay: () => O,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(575593),
    o = n(474012),
    c = n(929283),
    u = n(245068),
    d = n(550111),
    p = n(331402),
    h = n(366523),
    g = n(403362),
    f = n(652215),
    m = n(778712),
    b = n(223555);

function A(e) {
    let { sku: t, isFocused: n, user: i, options: s } = e,
        h = l.useMemo(() => (0, o.T)(t), [t]);
    if (null == h) return null;
    if ("bundle" === h.type)
        return (0, r.jsx)("div", {
            className: b.hT,
            children: (0, r.jsx)(u.X, {
                product: h,
                isHighlighted: n,
                user: i,
            }),
        });
    switch (h.item.type) {
        case a.R.AVATAR_DECORATION:
            return (0, r.jsx)(c.i, {
                user: i,
                avatarSize: m._3.SIZE_80,
                item: h.item,
                isHighlighted: n,
            });
        case a.R.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: b.xC,
                children: (0, r.jsx)(p.A, {
                    skuId: h.item.skuId,
                    isHighlighted: n,
                    removeSetHeight: !0,
                }),
            });
        case a.R.NAMEPLATE:
            var g, f, A, y, O, j;
            return (0, r.jsxs)("div", {
                className: b.M4,
                children: [
                    (0, r.jsx)("div", {
                        className: b.Qt,
                        children: (0, r.jsx)(d.A, {
                            user: i,
                            nameplate: h.item,
                            isHighlighted: n,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            nameplatePreviewSize: "default",
                            width:
                                null !=
                                (g =
                                    null == s || null == (y = s.collectibles) || null == (A = y.nameplate)
                                        ? void 0
                                        : A.width)
                                    ? g
                                    : 200,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: b.BM,
                        "aria-hidden": !0,
                        children: (0, r.jsx)(d.A, {
                            user: i,
                            nameplate: h.item,
                            isHighlighted: n,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            nameplatePreviewSize: "default",
                            width:
                                null !=
                                (f =
                                    null == s || null == (j = s.collectibles) || null == (O = j.nameplate)
                                        ? void 0
                                        : O.width)
                                    ? f
                                    : 200,
                        }),
                    }),
                ],
            });
        default:
            return null;
    }
}

function y(e) {
    let { sku: t, isFocused: n } = e;
    return (0, r.jsx)(h.e, {
        shape: "custom",
        containerClassName: s()(b.JS, n && b.P3),
        backgroundImageClassName: b.m1,
        foregroundImageClassName: b.aF,
        sku: t,
    });
}

function O(e) {
    let { sku: t, isFocused: n, user: l, options: i } = e;
    switch (t.productLine) {
        case f.EZt.COLLECTIBLES:
            return (0, r.jsx)(A, {
                sku: t,
                isFocused: n,
                user: l,
                options: i,
            });
        case f.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, r.jsx)(y, {
                sku: t,
                isFocused: n,
            });
        case f.EZt.APPLICATION:
        case f.EZt.BOOST:
        case f.EZt.GUILD_ROLE:
        case f.EZt.PREMIUM:
        case f.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, g.xb)(t.productLine);
    }
}
