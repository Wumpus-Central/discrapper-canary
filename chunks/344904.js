n.d(t, { Ay: () => p, BN: () => h });
var i,
    s = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(580314),
    _ = n(251360),
    m = n(468052),
    A = n(769411),
    g = n(794332),
    h =
        (((i = {})[(i.NITRO_GEM = 0)] = "NITRO_GEM"),
        (i[(i.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (i[(i.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        i);
let x = (e) => {
        let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
            l = a.useMemo(() => (0, u.A)({ legacyAssetId: t, skuId: n, size: c._3J.SIZE_120, canAnimate: !1 }), [t, n]);
        return (0, s.jsx)("div", {
            className: g.Q7,
            children: (0, s.jsx)("div", {
                className: g.Nk,
                children: null != l && (0, s.jsx)("img", { className: g.CH, alt: i, src: l }),
            }),
        });
    },
    p = (e) => {
        let {
                showAnimations: t = !0,
                iconClassName: n,
                staticPercentage: i,
                innerCircleClassName: a,
                progressCircleStrokeSize: l,
                backgroundCircleSize: c,
                percentage: u,
                initialPercentage: h,
                progressCircleVariation: p = 0,
                avatarDecorationLegacyAssetId: E,
                avatarDecorationSkuId: C,
                avatarDecoAssetDescription: T,
                ellipseOpacity: S,
                customAnimationClassName: I,
                circleColor: f,
                circleStroke: N,
            } = e,
            b = (0, o.bG)([d.A], () => d.A.useReducedMotion),
            j = t && !b;
        return (0, s.jsx)("div", {
            className: r()(g.G3, n),
            children: (0, s.jsx)(A.A, {
                animationClassName: r()(g._0, { [g.uJ]: j, [I ?? ""]: j }),
                progressCircleStroke: N,
                progressCircleStrokeSize: l,
                percentage: i ?? u,
                initialPercentage: i ?? h,
                progressCircleVariation: p,
                children: (() => {
                    switch (p) {
                        case 0:
                            return (0, s.jsx)(_.A, {
                                className: j ? g.Ow : void 0,
                                backgroundColor: r()(g.vH, a),
                                backgroundCircleSize: c,
                            });
                        case 1:
                            return (0, s.jsx)(m.A, { circleColor: f, ellipseOpacity: S });
                        case 2:
                            if (null != C)
                                return (0, s.jsx)(x, {
                                    avatarDecorationLegacyAssetId: E,
                                    avatarDecorationSkuId: C,
                                    avatarDecoAssetDescription: T,
                                });
                            return null;
                        default:
                            return null;
                    }
                })(),
            }),
        });
    };
