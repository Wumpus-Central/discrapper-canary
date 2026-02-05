n.d(t, { Ay: () => p, BN: () => E });
var i,
    s = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(920064),
    _ = n(251360),
    m = n(468052),
    A = n(769411),
    g = n(242142),
    E =
        (((i = {})[(i.NITRO_GEM = 0)] = "NITRO_GEM"),
        (i[(i.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (i[(i.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        i);
let h = (e) => {
        let { avatarDecoAssetId: t, avatarDecoAssetDescription: n } = e,
            i = r.useMemo(() => (0, u.A)(t, c._3J.SIZE_120, !1), [t]);
        return (0, s.jsx)("div", {
            className: g.Q7,
            children: (0, s.jsx)("div", {
                className: g.Nk,
                children: (0, s.jsx)("img", { className: g.CH, alt: n, src: i }),
            }),
        });
    },
    p = (e) => {
        let {
                showAnimations: t = !0,
                iconClassName: n,
                staticPercentage: i,
                innerCircleClassName: r,
                progressCircleStrokeSize: a,
                backgroundCircleSize: c,
                percentage: u,
                initialPercentage: E,
                progressCircleVariation: p = 0,
                avatarDecoAssetId: C,
                avatarDecoAssetDescription: x,
                ellipseOpacity: T,
                customAnimationClassName: I,
                circleColor: S,
                circleStroke: f,
            } = e,
            N = (0, o.bG)([d.A], () => d.A.useReducedMotion),
            b = t && !N;
        return (0, s.jsx)("div", {
            className: l()(g.G3, n),
            children: (0, s.jsx)(A.A, {
                animationClassName: l()(g._0, { [g.uJ]: b, [I ?? ""]: b }),
                progressCircleStroke: f,
                progressCircleStrokeSize: a,
                percentage: i ?? u,
                initialPercentage: i ?? E,
                progressCircleVariation: p,
                children: (() => {
                    switch (p) {
                        case 0:
                            return (0, s.jsx)(_.A, {
                                className: b ? g.Ow : void 0,
                                backgroundColor: l()(g.vH, r),
                                backgroundCircleSize: c,
                            });
                        case 1:
                            return (0, s.jsx)(m.A, { circleColor: S, ellipseOpacity: T });
                        case 2:
                            if (null != C)
                                return (0, s.jsx)(h, { avatarDecoAssetId: C, avatarDecoAssetDescription: x });
                            return null;
                        default:
                            return null;
                    }
                })(),
            }),
        });
    };
