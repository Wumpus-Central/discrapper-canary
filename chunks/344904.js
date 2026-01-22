n.d(t, {
    Ay: () => g,
    BN: () => h,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(775602),
    u = n(920064),
    d = n(251360),
    f = n(468052),
    p = n(769411),
    _ = n(242142),
    h = (function (e) {
        return (
            (e[(e.NITRO_GEM = 0)] = "NITRO_GEM"),
            (e[(e.NITRO_LOGO = 1)] = "NITRO_LOGO"),
            (e[(e.AVATAR_DECO = 2)] = "AVATAR_DECO"),
            e
        );
    })({});
let m = (e) => {
        let { avatarDecoAssetId: t, avatarDecoAssetDescription: n } = e,
            a = i.useMemo(() => (0, u.A)(t, l._3J.SIZE_120, !1), [t]);
        return (0, r.jsx)("div", {
            className: _.Q7,
            children: (0, r.jsx)("div", {
                className: _.Nk,
                children: (0, r.jsx)("img", {
                    className: _.CH,
                    alt: n,
                    src: a,
                }),
            }),
        });
    },
    g = (e) => {
        let {
                showAnimations: t = !0,
                iconClassName: n,
                staticPercentage: i,
                innerCircleClassName: a,
                progressCircleStrokeSize: l,
                backgroundCircleSize: u,
                percentage: h,
                initialPercentage: g,
                progressCircleVariation: E = 0,
                avatarDecoAssetId: b,
                avatarDecoAssetDescription: y,
                ellipseOpacity: O,
                customAnimationClassName: A,
                circleColor: v,
                circleStroke: S,
            } = e,
            I = (0, o.bG)([c.A], () => c.A.useReducedMotion),
            T = t && !I,
            C = () => {
                switch (E) {
                    case 0:
                        return (0, r.jsx)(d.A, {
                            className: T ? _.Ow : void 0,
                            backgroundColor: s()(_.vH, a),
                            backgroundCircleSize: u,
                        });
                    case 1:
                        return (0, r.jsx)(f.A, {
                            circleColor: v,
                            ellipseOpacity: O,
                        });
                    case 2:
                        if (null != b)
                            return (0, r.jsx)(m, {
                                avatarDecoAssetId: b,
                                avatarDecoAssetDescription: y,
                            });
                        return null;
                    default:
                        return null;
                }
            };
        return (0, r.jsx)("div", {
            className: s()(_.G3, n),
            children: (0, r.jsx)(p.A, {
                animationClassName: s()(_._0, {
                    [_.uJ]: T,
                    [null != A ? A : ""]: T,
                }),
                progressCircleStroke: S,
                progressCircleStrokeSize: l,
                percentage: null != i ? i : h,
                initialPercentage: null != i ? i : g,
                progressCircleVariation: E,
                children: C(),
            }),
        });
    };
