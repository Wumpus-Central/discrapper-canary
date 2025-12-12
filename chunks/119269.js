n.d(t, {
    Qo: () => m,
    ZP: () => g,
});
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(821982),
    d = n(967538),
    f = n(885302),
    p = n(914677),
    _ = n(86852),
    m = (function (e) {
        return (
            (e[(e.NITRO_GEM = 0)] = "NITRO_GEM"),
            (e[(e.NITRO_LOGO = 1)] = "NITRO_LOGO"),
            (e[(e.AVATAR_DECO = 2)] = "AVATAR_DECO"),
            e
        );
    })({});
let h = (e) => {
        let { avatarDecoAssetId: t, avatarDecoAssetDescription: n } = e,
            o = i.useMemo(() => (0, u.Z)(t, l.EFr.SIZE_120, !1), [t]);
        return (0, r.jsx)("div", {
            className: _.avatarDecoContainer,
            children: (0, r.jsx)("div", {
                className: _.avatarDeco,
                children: (0, r.jsx)("img", {
                    className: _.avatarDecoImage,
                    alt: n,
                    src: o,
                }),
            }),
        });
    },
    g = (e) => {
        let {
                showAnimations: t = !0,
                iconClassName: n,
                staticPercentage: i,
                innerCircleClassName: o,
                progressCircleStrokeSize: l,
                backgroundCircleSize: u,
                percentage: m,
                initialPercentage: g,
                progressCircleVariation: E = 0,
                avatarDecoAssetId: b,
                avatarDecoAssetDescription: y,
                ellipseOpacity: O,
                customAnimationClassName: v,
                circleColor: S,
                circleStroke: I,
            } = e,
            T = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
            C = t && !T,
            A = () => {
                switch (E) {
                    case 0:
                        return (0, r.jsx)(d.Z, {
                            className: C ? _.nitroGemAnimation : void 0,
                            backgroundColor: a()(_.gemBackgroundFill, o),
                            backgroundCircleSize: u,
                        });
                    case 1:
                        return (0, r.jsx)(f.Z, {
                            circleColor: S,
                            ellipseOpacity: O,
                        });
                    case 2:
                        if (null != b)
                            return (0, r.jsx)(h, {
                                avatarDecoAssetId: b,
                                avatarDecoAssetDescription: y,
                            });
                        return null;
                    default:
                        return null;
                }
            };
        return (0, r.jsx)("div", {
            className: a()(_.progressCircle, n),
            children: (0, r.jsx)(p.Z, {
                animationClassName: a()(_.activeProgressCircle, {
                    [_.activeProgressCircleAnimation]: C,
                    [null != v ? v : ""]: C,
                }),
                progressCircleStroke: I,
                progressCircleStrokeSize: l,
                percentage: null != i ? i : m,
                initialPercentage: null != i ? i : g,
                progressCircleVariation: E,
                children: A(),
            }),
        });
    };
