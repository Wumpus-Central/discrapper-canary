n.d(t, {
    Qo: () => x,
    ZP: () => E
});
var i,
    s = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(821982),
    m = n(967538),
    h = n(885302),
    g = n(914677),
    _ = n(830164),
    x = (((i = {})[(i.NITRO_GEM = 0)] = 'NITRO_GEM'), (i[(i.NITRO_LOGO = 1)] = 'NITRO_LOGO'), (i[(i.AVATAR_DECO = 2)] = 'AVATAR_DECO'), i);
let p = (e) => {
        let { avatarDecoAssetId: t, avatarDecoAssetDescription: n } = e,
            i = r.useMemo(() => (0, u.Z)(t, c.EFr.SIZE_120, !1), [t]);
        return (0, s.jsx)('div', {
            className: _.avatarDecoContainer,
            children: (0, s.jsx)('div', {
                className: _.avatarDeco,
                children: (0, s.jsx)('img', {
                    className: _.avatarDecoImage,
                    alt: n,
                    src: i
                })
            })
        });
    },
    E = (e) => {
        let { showAnimations: t = !0, iconClassName: n, staticPercentage: i, innerCircleClassName: r, progressCircleStrokeSize: l, backgroundCircleSize: c, percentage: u, initialPercentage: x, progressCircleVariation: E = 0, avatarDecoAssetId: C, avatarDecoAssetDescription: f, ellipseOpacity: T, customAnimationClassName: N, circleColor: I, circleStroke: S } = e,
            b = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
            v = t && !b;
        return (0, s.jsx)('div', {
            className: a()(_.progressCircle, n),
            children: (0, s.jsx)(g.Z, {
                animationClassName: a()(_.activeProgressCircle, {
                    [_.activeProgressCircleAnimation]: v,
                    [null != N ? N : '']: v
                }),
                progressCircleStroke: S,
                progressCircleStrokeSize: l,
                percentage: null != i ? i : u,
                initialPercentage: null != i ? i : x,
                progressCircleVariation: E,
                children: (() => {
                    switch (E) {
                        case 0:
                            return (0, s.jsx)(m.Z, {
                                className: v ? _.nitroGemAnimation : void 0,
                                backgroundColor: a()(_.gemBackgroundFill, r),
                                backgroundCircleSize: c
                            });
                        case 1:
                            return (0, s.jsx)(h.Z, {
                                circleColor: I,
                                ellipseOpacity: T
                            });
                        case 2:
                            if (null != C)
                                return (0, s.jsx)(p, {
                                    avatarDecoAssetId: C,
                                    avatarDecoAssetDescription: f
                                });
                            return null;
                        default:
                            return null;
                    }
                })()
            })
        });
    };
