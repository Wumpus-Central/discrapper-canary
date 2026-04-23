s.d(t, { Ay: () => f, BN: () => g });
var r,
    a = s(627968),
    i = s(64700),
    n = s(503698),
    l = s.n(n),
    o = s(311907),
    c = s(778712),
    d = s(775602),
    m = s(912140),
    u = s(251360),
    _ = s(468052),
    x = s(769411),
    p = s(112875),
    g =
        (((r = {})[(r.NITRO_GEM = 0)] = "NITRO_GEM"),
        (r[(r.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (r[(r.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        r);
let h = (e) => {
        let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: s, avatarDecoAssetDescription: r } = e,
            n = i.useMemo(() => (0, m.A)({ legacyAssetId: t, skuId: s, size: c._3.SIZE_120, canAnimate: !1 }), [t, s]);
        return (0, a.jsx)("div", {
            className: p.Q7,
            children: (0, a.jsx)("div", {
                className: p.Nk,
                children: null != n && (0, a.jsx)("img", { className: p.CH, alt: r, src: n }),
            }),
        });
    },
    f = (e) => {
        let {
                showAnimations: t = !0,
                iconClassName: s,
                staticPercentage: r,
                innerCircleClassName: i,
                progressCircleStrokeSize: n,
                backgroundCircleSize: c,
                percentage: m,
                initialPercentage: g,
                progressCircleVariation: f = 0,
                avatarDecorationLegacyAssetId: C,
                avatarDecorationSkuId: b,
                avatarDecoAssetDescription: j,
                ellipseOpacity: A,
                customAnimationClassName: N,
                circleColor: I,
                circleStroke: T,
            } = e,
            v = (0, o.bG)([d.A], () => d.A.useReducedMotion),
            E = t && !v;
        return (0, a.jsx)("div", {
            className: l()(p.G3, s),
            children: (0, a.jsx)(x.A, {
                animationClassName: l()(p._0, { [p.uJ]: E, [N ?? ""]: E }),
                progressCircleStroke: T,
                progressCircleStrokeSize: n,
                percentage: r ?? m,
                initialPercentage: r ?? g,
                progressCircleVariation: f,
                children: (() => {
                    switch (f) {
                        case 0:
                            return (0, a.jsx)(u.A, {
                                className: E ? p.Ow : void 0,
                                backgroundColor: l()(p.vH, i),
                                backgroundCircleSize: c,
                            });
                        case 1:
                            return (0, a.jsx)(_.A, { circleColor: I, ellipseOpacity: A });
                        case 2:
                            if (null != b)
                                return (0, a.jsx)(h, {
                                    avatarDecorationLegacyAssetId: C,
                                    avatarDecorationSkuId: b,
                                    avatarDecoAssetDescription: j,
                                });
                            return null;
                        default:
                            return null;
                    }
                })(),
            }),
        });
    };
