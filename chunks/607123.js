n.d(t, {
    Ay: () => O,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(575593),
    l = n(474012),
    c = n(929283),
    u = n(245068),
    d = n(550111),
    f = n(331402),
    p = n(366523),
    _ = n(403362),
    h = n(652215),
    m = n(778712),
    g = n(223555);
let E = 200;

function y(e) {
    let { sku: t, isFocused: n, user: a, options: o } = e,
        p = i.useMemo(() => (0, l.T)(t), [t]);
    if (null == p) return null;
    if ("bundle" === p.type)
        return (0, r.jsx)("div", {
            className: g.hT,
            children: (0, r.jsx)(u.X, {
                product: p,
                isHighlighted: n,
                user: a,
            }),
        });
    switch (p.item.type) {
        case s.R.AVATAR_DECORATION:
            return (0, r.jsx)(c.i, {
                user: a,
                avatarSize: m._3.SIZE_80,
                item: p.item,
                isHighlighted: n,
            });
        case s.R.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: g.xC,
                children: (0, r.jsx)(f.A, {
                    skuId: p.item.skuId,
                    isHighlighted: n,
                    removeSetHeight: !0,
                }),
            });
        case s.R.NAMEPLATE:
            var _, h, y, b, O, v;
            return (0, r.jsxs)("div", {
                className: g.M4,
                children: [
                    (0, r.jsx)("div", {
                        className: g.Qt,
                        children: (0, r.jsx)(d.A, {
                            user: a,
                            nameplate: p.item,
                            isHighlighted: n,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            nameplatePreviewSize: "default",
                            width:
                                null !=
                                (_ =
                                    null == o || null == (b = o.collectibles) || null == (y = b.nameplate)
                                        ? void 0
                                        : y.width)
                                    ? _
                                    : E,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: g.BM,
                        "aria-hidden": !0,
                        children: (0, r.jsx)(d.A, {
                            user: a,
                            nameplate: p.item,
                            isHighlighted: n,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            nameplatePreviewSize: "default",
                            width:
                                null !=
                                (h =
                                    null == o || null == (v = o.collectibles) || null == (O = v.nameplate)
                                        ? void 0
                                        : O.width)
                                    ? h
                                    : E,
                        }),
                    }),
                ],
            });
        default:
            return null;
    }
}

function b(e) {
    let { sku: t, isFocused: n } = e;
    return (0, r.jsx)(p.e, {
        shape: "custom",
        containerClassName: o()(g.JS, n && g.P3),
        backgroundImageClassName: g.m1,
        foregroundImageClassName: g.aF,
        sku: t,
    });
}

function O(e) {
    let { sku: t, isFocused: n, user: i, options: a } = e;
    switch (t.productLine) {
        case h.EZt.COLLECTIBLES:
            return (0, r.jsx)(y, {
                sku: t,
                isFocused: n,
                user: i,
                options: a,
            });
        case h.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, r.jsx)(b, {
                sku: t,
                isFocused: n,
            });
        case h.EZt.APPLICATION:
        case h.EZt.BOOST:
        case h.EZt.GUILD_ROLE:
        case h.EZt.PREMIUM:
        case h.EZt.GUILD_PRODUCT:
            return null;
        default:
            (0, _.xb)(t.productLine);
    }
}
