n.d(t, {
    Qo: () => b,
    ZP: () => _
});
var r,
    a = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    s = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(821982),
    m = n(967538),
    x = n(885302),
    h = n(914677),
    p = n(914242),
    b = (((r = {})[(r.NITRO_GEM = 0)] = 'NITRO_GEM'), (r[(r.NITRO_LOGO = 1)] = 'NITRO_LOGO'), (r[(r.AVATAR_DECO = 2)] = 'AVATAR_DECO'), r);
let f = (e) => {
        let { avatarDecoAssetId: t, avatarDecoAssetDescription: n } = e,
            r = l.useMemo(() => (0, u.Z)(t, c.EFr.SIZE_120, !1), [t]);
        return (0, a.jsx)('div', {
            className: p.avatarDecoContainer,
            children: (0, a.jsx)('div', {
                className: p.avatarDeco,
                children: (0, a.jsx)('img', {
                    className: p.avatarDecoImage,
                    alt: n,
                    src: r
                })
            })
        });
    },
    _ = (e) => {
        let { showAnimations: t = !0, iconClassName: n, staticPercentage: r, innerCircleClassName: l, progressCircleStrokeSize: i, backgroundCircleSize: c, percentage: u, initialPercentage: b, progressCircleVariation: _ = 0, avatarDecoAssetId: g, avatarDecoAssetDescription: v, ellipseOpacity: j, customAnimationClassName: y, circleColor: C, circleStroke: O } = e,
            S = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
            N = t && !S;
        return (0, a.jsx)('div', {
            className: o()(p.progressCircle, n),
            children: (0, a.jsx)(h.Z, {
                animationClassName: o()(p.activeProgressCircle, {
                    [p.activeProgressCircleAnimation]: N,
                    [null != y ? y : '']: N
                }),
                progressCircleStroke: O,
                progressCircleStrokeSize: i,
                percentage: null != r ? r : u,
                initialPercentage: null != r ? r : b,
                progressCircleVariation: _,
                children: (() => {
                    switch (_) {
                        case 0:
                            return (0, a.jsx)(m.Z, {
                                className: N ? p.nitroGemAnimation : void 0,
                                backgroundColor: o()(p.gemBackgroundFill, l),
                                backgroundCircleSize: c
                            });
                        case 1:
                            return (0, a.jsx)(x.Z, {
                                circleColor: C,
                                ellipseOpacity: j
                            });
                        case 2:
                            if (null != g)
                                return (0, a.jsx)(f, {
                                    avatarDecoAssetId: g,
                                    avatarDecoAssetDescription: v
                                });
                            return null;
                        default:
                            return null;
                    }
                })()
            })
        });
    };
