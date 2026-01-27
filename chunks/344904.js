n.d(t, {
    Ay: () => h,
    BN: () => A,
});
var r,
    i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(920064),
    _ = n(251360),
    p = n(468052),
    m = n(769411),
    g = n(242142),
    A =
        (((r = {})[(r.NITRO_GEM = 0)] = "NITRO_GEM"),
        (r[(r.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (r[(r.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        r);
let f = (e) => {
        let { avatarDecoAssetId: t, avatarDecoAssetDescription: n } = e,
            r = l.useMemo(() => (0, u.A)(t, c._3J.SIZE_120, !1), [t]);
        return (0, i.jsx)("div", {
            className: g.Q7,
            children: (0, i.jsx)("div", {
                className: g.Nk,
                children: (0, i.jsx)("img", {
                    className: g.CH,
                    alt: n,
                    src: r,
                }),
            }),
        });
    },
    h = (e) => {
        let {
                showAnimations: t = !0,
                iconClassName: n,
                staticPercentage: r,
                innerCircleClassName: l,
                progressCircleStrokeSize: s,
                backgroundCircleSize: c,
                percentage: u,
                initialPercentage: A,
                progressCircleVariation: h = 0,
                avatarDecoAssetId: b,
                avatarDecoAssetDescription: E,
                ellipseOpacity: x,
                customAnimationClassName: O,
                circleColor: C,
                circleStroke: I,
            } = e,
            T = (0, o.bG)([d.A], () => d.A.useReducedMotion),
            S = t && !T;
        return (0, i.jsx)("div", {
            className: a()(g.G3, n),
            children: (0, i.jsx)(m.A, {
                animationClassName: a()(g._0, {
                    [g.uJ]: S,
                    [null != O ? O : ""]: S,
                }),
                progressCircleStroke: I,
                progressCircleStrokeSize: s,
                percentage: null != r ? r : u,
                initialPercentage: null != r ? r : A,
                progressCircleVariation: h,
                children: (() => {
                    switch (h) {
                        case 0:
                            return (0, i.jsx)(_.A, {
                                className: S ? g.Ow : void 0,
                                backgroundColor: a()(g.vH, l),
                                backgroundCircleSize: c,
                            });
                        case 1:
                            return (0, i.jsx)(p.A, {
                                circleColor: C,
                                ellipseOpacity: x,
                            });
                        case 2:
                            if (null != b)
                                return (0, i.jsx)(f, {
                                    avatarDecoAssetId: b,
                                    avatarDecoAssetDescription: E,
                                });
                            return null;
                        default:
                            return null;
                    }
                })(),
            }),
        });
    };
