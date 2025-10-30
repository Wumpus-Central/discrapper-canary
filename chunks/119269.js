n.d(t, {
    Qo: () => h,
    ZP: () => g,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(821982),
    d = n(967538),
    f = n(885302),
    _ = n(914677),
    p = n(544074),
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
            a = i.useMemo(() => (0, u.Z)(t, l.EFr.SIZE_120, !1), [t]);
        return (0, r.jsx)("div", {
            className: p.avatarDecoContainer,
            children: (0, r.jsx)("div", {
                className: p.avatarDeco,
                children: (0, r.jsx)("img", {
                    className: p.avatarDecoImage,
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
                customAnimationClassName: v,
                circleColor: I,
                circleStroke: T,
            } = e,
            S = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
            A = t && !S,
            C = () => {
                switch (E) {
                    case 0:
                        return (0, r.jsx)(d.Z, {
                            className: A ? p.nitroGemAnimation : void 0,
                            backgroundColor: o()(p.gemBackgroundFill, a),
                            backgroundCircleSize: u,
                        });
                    case 1:
                        return (0, r.jsx)(f.Z, {
                            circleColor: I,
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
            className: o()(p.progressCircle, n),
            children: (0, r.jsx)(_.Z, {
                animationClassName: o()(p.activeProgressCircle, {
                    [p.activeProgressCircleAnimation]: A,
                    [null != v ? v : ""]: A,
                }),
                progressCircleStroke: T,
                progressCircleStrokeSize: l,
                percentage: null != i ? i : h,
                initialPercentage: null != i ? i : g,
                progressCircleVariation: E,
                children: C(),
            }),
        });
    };
